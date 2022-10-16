import React, {useState} from 'react'
import { ConfirmDialog } from 'primereact/confirmdialog'; // To use <ConfirmDialog> tag
import { confirmDialog } from 'primereact/confirmdialog'; // To use confirmDialog method

const RewardCard = ({
  RewardImage,
  RewardTitle,
  RewardDescription,
  CompanyName,
  CompanyWebsite,
  progressPercentage
}) => {

  let claimable = true;

  if (progressPercentage < 100) {
    claimable = false;
  }

  const acceptReward = () => {
    console.log("claimed reward!");
  }

  const rejectReward = () => {
    console.log("not claiming reward!");
  };

  const claimRewardConfirmation = () => {

    confirmDialog({
      message: "Are you sure you want to proceed?",
      header: "Confirmation",
      icon: "pi pi-exclamation-triangle",
      accept: () => acceptReward(),
      reject: () => rejectReward(),
    });


  }

  return (
    <div className="mb-5 w-full grid place-items-center">
      <div className="flex justify-center">
        <div className="bg-[#8000000]"></div>
        {/* <div className={`flex flex-col md:flex-row md:max-w-xl rounded-lg shadow-lg ${claimable  ? "bg-white " : "bg-[#404040]"}`}> */}
        <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg shadow-lg bg-white">
          <img
            className=" w-full h-98 md:h-52  md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg object-fill"
            src={RewardImage}
            alt=""
          />

          <div className="p-6 flex flex-col justify-start">
            <h5 className="text-gray-900 text-xl font-bold mb-2">
              {RewardTitle}
            </h5>
            <p className="text-gray-700 text-base mb-2">{RewardDescription}</p>
            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-lg text-blue-600 bg-blue-200 w-fit mb-2">
              50 E-Credits
            </span>

            {claimable ? (
              <>
                <button
                  className="items-center py-2 px-3 text-xs font-xs text-center text-white bg-[#5E9387] rounded-lg  focus:outline-none transition duration-300 mr-3 font-semibold hover:bg-gray-700 hover:text-white mb-3"
                  onClick={() => claimRewardConfirmation()}
                >
                  {" "}
                  Claim Reward
                </button>
                <ConfirmDialog breakpoints={{'960px': '75vw', '640px': '100vw'}} style={{width: '50vw'}} />
              </>
            ) : (
              <button
                className="items-center py-2 px-3 text-xs font-xs text-center text-black bg-[#EBEBE4] rounded-lg focus:outline-none transition mr-3 font-semibold mb-3"
                disabled={!claimable}
              >
                Claim Reward
              </button>
            )}

            <a
              href={CompanyWebsite}
              className="text-xs font-semibold hover:underline-offset-2"
            >
              Visit {CompanyName}
            </a>

            <div className="h-1 w-full bg-gray-300 mt-5">
              <div
                style={{ width: `${progressPercentage}%` }}
                className={`h-full ${
                  progressPercentage < 70 ? "bg-red-600" : "bg-green-600"
                }`}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RewardCard
