import React, { useState } from "react";
import axios from "axios";
import FileUploaded from "./FileUploader";



const Card2 = ({DishTitle, DishImage}) => {

  const [showDishInfo, setshowDishInfo] = React.useState(false);
  const [showReceiptUpload, setshowReceiptUpload] = React.useState(false);

  const [selectedFile, setSelectedFile] = useState(null);
  const [showSuccessModal, setShowSuccessModal] = React.useState(false);
  const [showErrorModal, setShowErrorModal] = React.useState(false);

  const submitReceipt = () => {
    const encodeImageURI = require("encode-image-uri");
    encodeImageURI(selectedFile)
      .then((base64) => {
        // console.log(base64);
        // console.log(base64.substring(23, base64.length));

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
            // console.log(response)
            // console.log(response.data.responses[0].textAnnotations)
            // console.log(response.data.responses[0].textAnnotations[21].description)
            // words.concat(response.data.responses[0].textAnnotations)

            let wordCheck = 0;

            for (
              let i = 0;
              i < response.data.responses[0].textAnnotations.length;
              i++
            ) {
              if (
                response.data.responses[0].textAnnotations[i].description ===
                "Chicken"
              ) {
                wordCheck++;
              } else if (
                response.data.responses[0].textAnnotations[i].description ===
                "Rice"
              ) {
                wordCheck++;
              }

              if (wordCheck === 2) {
                setShowSuccessModal(true);
                return;
              }
            }

            setShowErrorModal(true);
          });
      })
      .catch((error) => {
        // console.error(error);
        setShowErrorModal(true);
      });
  };


  return (
    <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3  ">
      <article class="overflow-hidden rounded-lg bg-white">
        <img alt="Placeholder" class="block h-72 w-full" src={DishImage} />
        <header class="flex items-center justify-between leading-tight p-2 md:p-4">
          <h1 class="text-lg font-bold">{DishTitle}</h1>
        </header>

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
              className="inline-flex items-center py-1.5 px-3 text-xs font-xs text-center bg-white text-[#5E9387] rounded-md focus:outline-none transition duration-300 mr-3 font-semibold border-blue-300 border-solid hover:text-gray-700
          "
              type="button"
              onClick={() => setshowDishInfo(true)}
            >
              View Emission
            </button>
          </div>

          {/* more info modal */}
          {showDishInfo ? (
            <>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-2/3 bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                      <h3 className="text-3xl font-semibold">
                        Singapore Chicken Rice
                      </h3>
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setshowDishInfo(false)}
                      ></button>
                    </div>
                    {/*body*/}
                    <div className="relative p-6 flex-auto">
                      <p className="my-4 text-slate-500 text-lg leading-relaxed">
                        we will put in information like carbon footprint per
                        ingredient, total carbon footprint, points, rating here!
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
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-2/3 bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                      <h3 className="text-3xl font-semibold">
                        Singapore Chicken Rice
                      </h3>
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setshowReceiptUpload(false)}
                      ></button>
                    </div>
                    {/*body*/}
                    <div className="relative p-6 flex-auto">
                      <p className="my-4 text-slate-500 text-lg leading-relaxed">
                        <form>
                          <FileUploaded
                            onFileSelectSuccess={(file) =>
                              setSelectedFile(file)
                            }
                            onFileSelectError={({ error }) => alert(error)}
                          />
                        </form>
                      </p>
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                      <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setshowReceiptUpload(false)}
                      >
                        Close
                      </button>
                      <button
                        className="text-green-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        onClick={submitReceipt}
                      >
                        Submit
                      </button>

                      {showSuccessModal ? (
                        <>
                          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                            <div className="relative w-auto my-6 mx-auto max-w-3xl">
                              {/*content*/}
                              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-2/3 bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                  <h3 className="text-3xl font-semibold">
                                    Singapore Chicken Rice
                                  </h3>
                                  <button
                                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                    onClick={() => setShowSuccessModal(false)}
                                  ></button>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto">
                                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                                    you have successfully claimed 300 e-credits!
                                  </p>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                  <button
                                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={() => setShowSuccessModal(false)}
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

                      {showErrorModal ? (
                        <>
                          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                            <div className="relative w-auto my-6 mx-auto max-w-3xl">
                              {/*content*/}
                              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-2/3 bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                  <h3 className="text-3xl font-semibold">
                                    Singapore Chicken Rice
                                  </h3>
                                  <button
                                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                    onClick={() => setShowErrorModal(false)}
                                  ></button>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto">
                                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                                    there has been an error in claiming
                                    e-credits. please check if your receipt is
                                    valid, or upload a clearer image of your
                                    receipt
                                  </p>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                  <button
                                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={() => setShowErrorModal(false)}
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
}

export default Card2;
