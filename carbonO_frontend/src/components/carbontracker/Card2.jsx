import React from 'react'
import ChickenRice from "./ChickenRice.jpg";
import { Link } from "react-router-dom";



const Card2 = () => {

  const [showModal, setShowModal] = React.useState(false);

  return (
    <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3  ">
      <article class="overflow-hidden rounded-lg bg-white">
        <img alt="Placeholder" class="block h-auto w-full" src={ChickenRice} />
        <header class="flex items-center justify-between leading-tight p-2 md:p-4">
          <h1 class="text-lg font-bold">Singapore Chinese Rice</h1>
        </header>

        <footer class="flex items-center justify-between leading-none p-2 md:p-4 bg-white">
          <div class="flex items-center no-underline  text-black" href="#">
            <Link
              to="/ClaimReward"
              className="inline-flex items-center py-2 px-3 text-xs font-xs text-center text-white bg-[#5E9387] rounded-lg  focus:outline-none transition duration-300 mr-3 font-semibold hover:bg-gray-700 hover:text-white
          "
              type="button"
            >
              Claim Reward
            </Link>
            <button
              href="#"
              className="inline-flex items-center py-1.5 px-3 text-xs font-xs text-center bg-white text-[#5E9387] rounded-md focus:outline-none transition duration-300 mr-3 font-semibold border-blue-300 border-solid hover:text-gray-700
          "
              type="button"
              onClick={() => setShowModal(true)}
            >
              View Emission
            </button>
          </div>

          {/* more info modal */}
          {showModal ? (
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
                        onClick={() => setShowModal(false)}
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
        </footer>
      </article>
    </div>
  );
}

export default Card2;
