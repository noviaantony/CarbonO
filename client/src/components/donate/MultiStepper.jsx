import React, { useContext, useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ReactComponent as TickSvg } from "./Tick.svg";
import { ReactComponent as WarningSvg } from "./Warning.svg";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import DonationService from "../../services/DonationService";
import AuthContext from "../../hooks/AuthContext";

const theme = createTheme({
  palette: {
    primary: {
      main: "#5E9387",
    },
  },
  typography: {
    fontFamily: ["Open Sans", "sans-serif"].join(","),
  },
});
const steps = ["Amount to Donate", "Confirmation", "Success"];

const MultiStepper = ({ organisation, organisationId }) => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [donationAmount, setDonationAmount] = React.useState(0);
  const { auth, setAuth } = useContext(AuthContext);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleButtonText = () => {
    if (activeStep === steps.length - 1) {
      DonationService.donatePoints(
        auth.userId,
        donationAmount,
        organisationId,
        auth.token
      ).then((response) => {
        console.log(response);
      });
      return <div class="font-bold">Finish</div>;
    } else if (activeStep + 1 == 2) {
      return <div class="font-bold">Yes, confirm</div>;
    } else {
      return <div class="font-bold">Next</div>;
    }
  };

  const displayContent = () => {
    if (activeStep + 1 == 1) {
      return (
        <div class="p-6 text-center">
          <h2 className="mb-5 text-2xl font-bold text-text-black  dark:text-gray-400">
            To: {organisation}
          </h2>
          {/* number input  */}
          <div className="flex justify-center">
            <div className="mb-3 xl:w-96">
              <input
                type="number"
                min="0"
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
          <p>Please input the amount you would like to donate.</p>
        </div>
      );
    } else if (activeStep + 1 == 2) {
      return (
        <div>
          <div class="grid place-items-center py-1">
            <WarningSvg width="4rem" />
          </div>
          <p className="mb-5 text-2xl text-center font-bold text-text-black  dark:text-gray-400">
            You are about to make a donation of {donationAmount} E-Credits
          </p>
        </div>
      );
    } else {
      return (
        <div>
          <div class="grid place-items-center py-3">
            <TickSvg width="4rem" />
          </div>
          <h2 className="mb-5 text-2xl text-center font-bold text-text-black  dark:text-gray-400">
            Donation Success!
          </h2>
          <p className="text-center">
            You have made a successful donation of {donationAmount} E-Credits to{" "}
            {organisation}!
          </p>
        </div>
      );
    }
  };
  return (
    <ThemeProvider theme={theme}>
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
            <div className="text-center">
              <Typography sx={{ mt: 2, mb: 1 }}>
                Thank you for your generous donation!
              </Typography>
            </div>
            <Box className="grid place-items-center">
              <Button onClick={handleReset}>Make another donation</Button>
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
                style={{ fontWeight: "bold" }}
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
    </ThemeProvider>
  );
};

export default MultiStepper;
