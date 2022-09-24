import React from 'react'
import ChickenRice from "./ChickenRice.jpg";
import Dropzone from "./Dropzone";

const Card = () => {

  const [showModal, setShowModal] = React.useState(false);
  const[showReceiptModal, setReceiptModal] = React.useState(false);

  return (
    <div className="max-w-sm bg-white border border-gray-200 m-2 rounded-xl items-center">
      <img
        className="rounded-t-lg"
        src={ChickenRice}
        alt="chickenrice"
        width="300rem"
        className="rounded-t-xl"
      />
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-black">
            Hainanese Chicken Rice
          </h5>
        </a>

        <div>{/* put carbon rating here */}</div>

        <button
          href="#"
          className="inline-flex items-center py-1.5 px-3 text-xs font-xs text-center text-white bg-[#5E9387] rounded-lg  focus:outline-none transition duration-300 mr-3
          "
          type="button"
          onClick={() => setReceiptModal(true)}
        >
          Claim Reward
        </button>

        <button
          href="#"
          className="inline-flex items-center py-1.5 px-3 text-xs font-xs text-center bg--white text-[#5E9387] rounded-lg hover:bg-gray-100 border-[#5E9387] border-solid focus:outline-none transition duration-300
          "
          type="button"
          onClick={() => setShowModal(true)}
        >
          More Info
        </button>

        {/* more info modal */}
        {showModal ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                    <h3 className="text-3xl font-semibold">
                      Hainanese Chicken Rice
                    </h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
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
                      onClick={() => setShowModal(false)}
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

        {/* upload receipt modal */}

        {showReceiptModal ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                    <h3 className="text-3xl font-semibold">
                      Hainanese Chicken Rice
                    </h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setReceiptModal(false)}
                    >
                      <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>
                  {/*body*/}
                  <div className="relative p-6 flex-auto">
                    <p className="my-4 text-slate-500 text-lg leading-relaxed">
                      <Dropzone/>
                    </p>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setReceiptModal(false)}
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
  );
}

export default Card;




// import React from "react";

// export default function Modal() {
//   const [showModal, setShowModal] = React.useState(false);
//   return (
//     <>
//       <button
//         className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
//         type="button"
//         onClick={() => setShowModal(true)}
//       >
//         Open regular modal
//       </button>
      
//     </>
//   );
// }


