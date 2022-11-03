import React, {useContext, useEffect, useState} from 'react';
import AuthContext from "../../context/AuthProvider";
import CarbonTrackerService from "../../services/CarbonTrackerService";
import UserRewardService from "../../services/UserRewardService";
import Modal from "react-modal";
import {Navigate, useNavigate} from "react-router-dom";

const RewardCard = ({
  RewardBrandName,
  RewardName,
  RewardPointsRequired,
  RewardDescription,
  RewardQuantity,
  RewardWebsite,
  RewardImage,
    UserPoints,
    RewardId,
    UserTransactions,
}) => {

  
  const {auth} = useContext(AuthContext);

  const [isOpen, setIsOpen] = useState(false);
  const [isClaimed, setIsClaimed] = useState(false);


  function checkError() {
      for (let i = 0; i < UserTransactions.length; i++) {
        if (UserTransactions[i].reward.rewardId === RewardId) {
          console.log("error");
          setIsClaimed(true)
          return;
        }
      }
  }

  function ErrorMessage(){
    if (isClaimed) {
        return (
          <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
            Oops there's an error! This reward has already been claim by you.
          </h3>
        );
    } else {
      return (
        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
          Are you sure you would like to claim this reward?
        </h3>
      );
    }
  }

  function Buttons(){
    if (isClaimed) {
        return (
            <button
                data-modal-toggle="popup-modal"
                type="button"
                className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                onClick={toggleConfirmationModal}
            >
              Okay
            </button>
        );
    } else {
      return (
          <>
          <button
              data-modal-toggle="popup-modal"
              type="button"
              className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
              onClick={claimReward}
          >
            Yes, I'm sure
          </button>
          <button
              data-modal-toggle="popup-modal"
              type="button"
              className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
              onClick={toggleConfirmationModal}
          >
            No, cancel
          </button>
        </>
      )
    }
  }

  function ModalIcon() {
    if (isClaimed) {
      return (
        <svg
          class="mx-auto mb-4 w-14 h-14 text-red-600 dark:text-gray-200"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 10.5v3.75m-9.303 3.376C1.83 19.126 2.914 21 4.645 21h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 4.88c-.866-1.501-3.032-1.501-3.898 0L2.697 17.626zM12 17.25h.007v.008H12v-.008z"
          />
        </svg>
      );
    } else {
      return (
        <svg
          aria-hidden="true"
          class="mx-auto mb-4 w-14 h-14 text-gray-400 dark:text-gray-200"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
      );
    }
  }

  function toggleConfirmationModal() {
    setIsOpen(!isOpen);
  }
  const navigate = useNavigate();
  function claimReward() {
    UserRewardService.redeemReward(auth.userId, RewardId, auth.accessToken ).then((response) => {
      console.log(response);
      navigate("/dashboard");
    });
  }

  let claimable = true;

  let progressPercentage = (UserPoints / RewardPointsRequired) * 100;

  if (progressPercentage < 100) {
    claimable = false;
  } else {
    progressPercentage = 100;
  }

  return (
    <>
      {/* Confirmation Modal */}
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleConfirmationModal}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div class="relative p-4 w-full max-w-md h-full md:h-auto">
          <button
            type="button"
            class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
            data-modal-toggle="popup-modal"
            onClick={toggleConfirmationModal}
          >
            <svg
              aria-hidden="true"
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>

            <span class="sr-only">Close modal</span>
          </button>
          <div class="p-6 text-center">
            <ModalIcon/>
            <ErrorMessage/>
            <Buttons/>
          </div>
        </div>
      </Modal>

      <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 font-default">
        <article class="overflow-hidden rounded-lg bg-white">
          <img alt="meow" class="block h-72 w-full" src={RewardImage} />
          <header class="flex items-left leading-tight p-2 md:p-4 ">
            <h1 class="text-2xl font-bold">
              {RewardBrandName} {RewardName}
            </h1>
          </header>
          <div>
            <span class="text-m font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200 ml-4">
              {RewardPointsRequired} E-Credits
            </span>
          </div>
          <div className="flex items-center justify-items-start leading-tight p-2 md:p-4">
            {RewardDescription}
          </div>
          <div className="flex items-center justify-items-start leading-tight p-2 md:p-4">
            <h2 className="font-semibold">Progress:</h2>
            <div className="h-3 w-11/12 ml-5 mb-4 bg-gray-300 mt-5 rounded-xl">
              <div
                style={{ width: `${progressPercentage}%` }}
                className={`h-3 w-9/12  ${
                  claimable
                    ? "bg-green-600 rounded-xl"
                    : "bg-red-600 rounded-l-xl"
                }`}
              ></div>
            </div>
          </div>

          <footer class="flex items-center justify-between leading-none p-2 md:p-4 bg-white">
            <div class="flex items-center no-underline  text-black" href="#">
              <button
                to="/ClaimReward"
                className="inline-flex items-center py-2 px-3 text-xs font-xs text-center text-white bg-[#5E9387] rounded-lg  focus:outline-none transition duration-300 mr-3 font-semibold hover:bg-gray-700 hover:text-white
          "
                type="button"
                onClick={() => {
                  checkError();
                  toggleConfirmationModal();
                }}
              >
                Claim Reward
              </button>
              <button
                href={RewardWebsite}
                className="inline-flex items-center py-1.5 px-3 text-xs font-xs text-center bg-white text-[#5E9387] rounded-md focus:outline-none transition duration-300 mr-3 font-semibold border-[#5E9387] border-2 border-solid hover:bg-gray-100
          "
                type="button"
              >
                Visit Brand Website
              </button>
            </div>
          </footer>
        </article>
      </div>
    </>
  );
};

export default RewardCard;
