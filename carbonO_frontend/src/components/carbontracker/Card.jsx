import React, {useContext, useState} from "react";
import axios from "axios";
import { IoLeafOutline, IoLeafSharp } from "react-icons/io5";
import FileUploader from "./FileUploader";
import ViewInformationAccordion from "./ViewInformationAccordion";
import CarbonTrackerService from "../../services/CarbonTrackerService";
import AuthContext from "../../context/AuthProvider";


const Card = ({dishId, dishTitle, dishImage, dishRating, dishKeywords, dishIngredients, dishCarbonFootprint, dishCredit}) => {

  const {auth} = useContext(AuthContext);

  const [showDishInfo, setshowDishInfo] = React.useState(false);
  const [showReceiptUpload, setshowReceiptUpload] = React.useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [successMessage, setSuccessMessage] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState(false);


  const submitReceipt = () => {
    const encodeImageURI = require("encode-image-uri");
    encodeImageURI(selectedFile)
      .then((base64) => {
        let body = {
          requests: [
            {
              image: {
                content: base64.substring(23, base64.length),
              },
              features: [
                {
                  type: "TEXT_DETECTION",
                },
              ],
            },
          ],
        };

        let resp = null;

        axios
          .post(
            "https://vision.googleapis.com/v1/images:annotate?key=AIzaSyC3rJnOOPzFe0snLWmBrgukHmSqFxlimU8",
            body
          )
          .then(function (response) {
            console.log(response)
            for (
              let i = 0;
              i < response.data.responses[0].textAnnotations.length - 1;
              i++
            ) {
              if (
                response.data.responses[0].textAnnotations[
                  i
                ].description.toLowerCase() === dishKeywords[0].keyword.toLowerCase() &&
                response.data.responses[0].textAnnotations[
                  i + 1
                ].description.toLowerCase() === dishKeywords[1].keyword.toLowerCase()
              ) {
                console.log(dishId);
                CarbonTrackerService.postDishConsumed(dishId, auth.accessToken, auth.userId).then((response) => {
                  console.log(response);
                  setSuccessMessage(true);
                });
                return;
              }
            }

            setErrorMessage(true);
          })
          .catch((error) => {
            setErrorMessage(true);
          });
      })
      .catch((error) => {
        setErrorMessage(true);
      });
  };

  

  const rendereddishRating = [];
  for (let i = 0; i < dishRating ; i++) {
    rendereddishRating.push(<IoLeafSharp size={30} color="gray-700" />);
  }
  for (let i = 0; i < (5 - dishRating) ; i++) {
    rendereddishRating.push(<IoLeafOutline size={30} color="gray-700" />);
  }

  return (
    <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 font-default">
      <article class="overflow-hidden rounded-lg bg-white">
        <img alt={dishTitle} class="block h-72 w-full" src={dishImage} />
        <header class="flex items-left leading-tight p-2 md:p-4 ">
          <h1 class="text-2xl font-bold">{dishTitle}</h1>
        </header>
        <div>
          <span class="text-m font-semibold inline-block py-1 px-2 uppercase rounded-full text-[#5E9387] bg-[#5e938733] ml-4">
            {dishCarbonFootprint}g CO2
          </span>
          <span class="text-m font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200 ml-4">
            {dishCredit} E-Credits
          </span>
        </div>
        <div className="flex items-center justify-items-start leading-tight p-2 md:p-4">
          {rendereddishRating}
        </div>

        <footer class="flex items-center justify-between leading-none p-2 md:p-4 bg-white">
          <div class="flex items-center no-underline  text-black" href="#">
            <button
              to="/ClaimReward"
              className="inline-flex items-center py-2 px-3 text-xs font-xs text-center text-white bg-[#5E9387] rounded-lg  focus:outline-none transition duration-300 mr-3 font-semibold hover:bg-gray-700 hover:text-white
          "
              type="button"
              onClick={() => setshowReceiptUpload(true)}
            >
              Claim Reward
            </button>
            <button
              href="#"
              className="inline-flex items-center py-1.5 px-3 text-xs font-xs text-center bg-white text-[#5E9387] rounded-md focus:outline-none transition duration-300 mr-3 font-semibold border-[#5E9387] border-2 border-solid hover:bg-gray-100
          "
              type="button"
              onClick={() => setshowDishInfo(true)}
            >
              More Info
            </button>
          </div>

          {/* more info modal */}
          {showDishInfo ? (
            <>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="text-center items-start justify-between p-3 border-b border-solid border-slate-200 rounded-t">
                      <h3 className="text-3xl font-semibold">{dishTitle}</h3>
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setshowDishInfo(false)}
                      >
                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                          ×
                        </span>
                      </button>
                    </div>
                    {/*body*/}
                    <div className="relative p-6 flex-auto">
                      <p className="my-4 text-slate-500 text-lg leading-relaxed">
                        <ViewInformationAccordion
                          dishIngredients={dishIngredients}
                        />
                      </p>
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                      <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setshowDishInfo(false)}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}

          {/* receipt upload modal */}
          {showReceiptUpload ? (
            <>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-sm">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="text-center items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                      <h3 className="text-3xl font-semibold">{dishTitle}</h3>
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setshowReceiptUpload(false)}
                      ></button>
                    </div>
                    {/*body*/}
                    <div className="relative p-6 flex-auto">
                      <p className="my-4 text-slate-500 text-lg leading-relaxed">
                        <form>
                          <FileUploader
                            onFileSelectSuccess={(file) =>
                              setSelectedFile(file)
                            }
                            onFileSelectError={({ error }) => alert(error)}
                          />
                        </form>
                      </p>
                    </div>
                    {/* uploaded status */}
                    {successMessage ? (
                      <span class="text-m font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200 m-4">
                        You have claimed your reward!
                      </span>
                    ) : null}

                    {errorMessage ? (
                      <span class="text-m font-semibold inline-block py-1 px-2 uppercase rounded-full text-red-600 bg-red-200 m-4">
                        Something went wrong :(
                      </span>
                    ) : null}

                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                      <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => {setshowReceiptUpload(false); setSuccessMessage(false); setErrorMessage(false);}}
                      >
                        Close
                      </button>
                      <button
                        className="text-green-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        onClick={submitReceipt}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
          
        </footer>
      </article>
    </div>
  );
};

export default Card;
