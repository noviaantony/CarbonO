import React, {useContext, useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import Modal from "react-modal";
import DonationService from "../../services/DonationService";
import AuthContext from "../../hooks/AuthProvider";
// // import Slider, { Range } from "rc-slider";
// import Slider from "@mui/material/Slider";
// // import Slider from "./Slider"
import Stepper from "./MultiStepper";

const DonationCard = ({organisationId, Title, Image, Description, Website, UserCredits}) => {

  const [isOpen, setIsOpen] = useState(false);
  const [donationAmount, setDonationAmount] = useState(0);
  const { auth, setAuth } = useContext(AuthContext);
  const [message, setMessage] = useState("");

  const donatePoints = () => {
    DonationService.donatePoints(auth.userId, donationAmount, organisationId, auth.accessToken)
    .then((response) => {
        console.log(response);
        setMessage("You have successfully donated " + donationAmount + " points to " + Title);
        // setIsOpen(false);
      // <span
      //     className=" text-red-800 text-sm mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900 font-bold mb-3">
      //             {errMsg}
      //           </span>
    });
  };

  function toggleConfirmationModal() {
    setIsOpen(!isOpen);
  }

  return (
    <>
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
            </button>
            </div>
        <div class="relative p-4 w-full max-w-md h-full md:h-auto">
          <Stepper organisation = {Title} />
        </div>
       
      </Modal>
      {/* <Modal
        isOpen={isOpen}
        onRequestClose={toggleConfirmationModal}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      > */}
      {/*

            <span class="sr-only">Close modal</span>
          </button>
          <div class="p-6 text-center">
            <h2 className="mb-5 text-3xl font-bold text-text-black  dark:text-gray-400">
              How many e-credits would you like to donate?
            </h2>
            {/* number input */}
      {/* <div className="flex justify-center">
              <div className="mb-3 xl:w-96">
                <input
                  type="number"
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

                    // value={donationAmount}
                    onChange={(e) => setDonationAmount(e.target.value)}
                />
              </div>
            </div> */}
      {/* <h2 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              You have chosen to donate {donationAmount}
            </h2> */}

      {/* <button
              data-modal-toggle="popup-modal"
              type="button"
              className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
              onClick={donatePoints}
            >
              Confirm Donation
            </button>
            <button
              data-modal-toggle="popup-modal"
              type="button"
              className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
              onClick={toggleConfirmationModal}
            >
              Cancel
            </button>
          </div> */}
      {/* </div>
      </Modal>} */}

      <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 font-default">
        <article class="overflow-hidden rounded-lg bg-white">
          <img alt="" class="block h-72 w-full object-fit" src={Image} />
          <header class="flex items-left leading-tight p-2 md:p-4 ">
            <h1 class="text-2xl font-bold">{Title}</h1>
          </header>
          <p className="flex items-left leading-tight p-2 md:p-4 text-sm">
            {Description}
          </p>
          <a href={Website} className="flex justify-end text-sm">
            <div className="pr-5 underline underline-offset-1">
              Visit Website
            </div>
          </a>

          <footer class="flex items-center justify-between leading-none p-2 md:p-4 bg-white">
            <div class="flex items-center no-underline  text-black" href="#">
              <button
                to="/ClaimReward"
                className="inline-flex items-center py-2 px-10 text-xs font-xs text-center text-white bg-[#5E9387] rounded-lg  focus:outline-none transition duration-300 mr-3 font-semibold hover:bg-gray-700 hover:text-white
          "
                type="button"
                onClick={toggleConfirmationModal}
              >
                Donate E-Credits
              </button>
              <Link
                to="/Payment"
                className="inline-flex items-center py-2 px-10 text-xs font-xs text-center text-[#5E9387] bg-white rounded-lg  focus:outline-none transition duration-300 mr-3 font-semibold border-[#5E9387] border-2 border-solid hover:bg-gray-700 hover:text-white"
              >
                Donate Cash
              </Link>
            </div>
          </footer>
        </article>
      </div>
    </>
  );
};

export default DonationCard;
