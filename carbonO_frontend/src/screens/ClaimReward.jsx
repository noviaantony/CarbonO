import React, {useState} from 'react'
import Stepper from "../components/carbontracker/Stepper";
import StepperControl from "../components/carbontracker/StepperControl";
import ReceiptUpload from '../components/carbontracker/uploadSteps/ReceiptUpload';
import ConfirmReceiptDetails from '../components/carbontracker/uploadSteps/ConfirmReceiptDetails';
import ClaimedCredits from '../components/carbontracker/uploadSteps/ClaimedCredits';

const ClaimReward = () => {

  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    "Upload Receipt",
    "Confirm Details",
    "Claim E-credits"
  ];

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <ReceiptUpload />;
      case 2:
        return <ConfirmReceiptDetails />;
      case 3:
        return <ClaimedCredits />;
    }
  }

  const handleClick = (direction) => {
    let newStep = currentStep;
    direction == "next" ? newStep++ : newStep--;
    // Check if steps are within the boundary
    if (newStep > 0 && newStep <= steps.length) {
      setCurrentStep(newStep);
    }
  };

  return (
    <div>
      <div className="md: w-1/2 mx-auto shadow-l rounded-2xl pb-2 bg-white">
        <div className=" container horizontal mt-5">
          <Stepper steps = {steps} currentStep = {currentStep}/>
        </div>

        <StepperControl 
        handleClick= {handleClick}
        currentStep={currentStep}
        steps = {steps}
        
        />
      </div>
    </div>
  );
}

export default ClaimReward
