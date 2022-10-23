import React from "react";
import { ReactComponent as EnterTokenSvg } from "./EnterToken.svg";
import { HiMail, HiCheckCircle } from "react-icons/hi";
import { Navigate, Link, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
const EnterToken = () => {
    const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen py-2 font-default">
        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
          <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
           
            <div className="w-3/5 p-5 mt-10">
            <button className="mx-15" onClick={() => navigate(-1)}>
              <FaArrowLeft size={18} />
            </button>
              <div>
                <a
                  className="toggleColour text-[#5E9387] my-4 leading-tight no-underline hover:no-underline font-bold text-xl lg:text-2xl"
                  href="#"
                >
                  CarbonO
                </a>
              </div>

              <div className="py-10">
                <h2 className="text-2xl font-bold text-gray-700 mb-2">
                  Enter Your Verification Code
                </h2>
                <div className="border-2 w-10 border-gray-700 bg-gray-700 inline-block mb-2"></div>
              </div>
              <form>
                <div className="flex flex-col items-center">
                  <div className="bg-gray-100 w-64 p-2 flex items-center rounded mb-3">
                    <div className="bg-gray-100 w-64 p-2">
                      <HiCheckCircle className="text-grey-100 m-2" />
                    </div>
                    <input
                      type="text"
                      name="code"
                      placeholder="enter your code"
                      className="bg-gray-100 outline-none text-m flex-1"
                      required
                    />
                  </div>
                  <button className="signIn px-7 py-3 w-64 justify-center rounded-md border border-transparent text-sm focus:outline-none transition duration-300 bg-[#5E9387] hover:bg-gray-700  text-center marker:sm:w-auto font-bold text-white">
                    Enter
                  </button>
                  <button className="text-xs mt-3 underline underline-offset-1">
                    Resend Code
                  </button>
                </div>
              </form>
            </div>
            <div className="w-2/5 bg-[#5E9387]  text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
              <EnterTokenSvg width="16rem" />
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default EnterToken;
