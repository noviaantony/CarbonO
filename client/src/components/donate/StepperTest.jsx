import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const steps = ["Amount to Donate", "Confirmation", "Success"];

const StepperTest = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const [donationAmount, setDonationAmount] = React.useState(0);

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleButtonText = () => {
    if (activeStep === steps.length - 1) {
      return <div>Finish</div>;
    } else if (activeStep + 1 == 2) {
      return <div>Yes, confirm</div>;
    } else {
      return <div>Next</div>;
    }
  };

  const displayContent = () => {
    if (activeStep + 1 == 1) {
      return (
        <div class="p-6 text-center">
          <h2 className="mb-5 text-2xl font-bold text-text-black  dark:text-gray-400">
            How many e-credits would you like to donate?
          </h2>
          {/* number input  */}
          <div className="flex justify-center">
            <div className="mb-3 xl:w-96">
              <input
                type="number"
                min = "0"
                className="
                form-control
                block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
              "
                id="exampleNumber0"
                placeholder="Number input"
                onChange={(e) => setDonationAmount(e.target.value)}

              />
            </div>
          </div>
        </div>
      );
    } else if (activeStep + 1 == 2) {
      return (
        <div>
          <p className="mb-5 text-2xl text-center font-bold text-text-black  dark:text-gray-400">
            You are about to make a donation of {donationAmount} amount.
          </p>
          <p className="text-center">Changes cannot be made after this point.</p>
          <p className="text-center">Would you like to confirm your donation?</p>
        </div>
      );
    } else {
      return (
        <div>
<h2 className="mb-5 text-2xl text-center font-bold text-text-black  dark:text-gray-400">
            Donation Success!
          </h2>
          <p className="text-center">You have made a successful donation of {donationAmount}!</p>
        </div>
        
      )
    }
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            {/* Step {activeStep + 1} */}
            {displayContent()}
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />

            <Button onClick={handleNext}>{handleButtonText()}</Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
};

export default StepperTest;
