import React from 'react'
import { ReactComponent as ResetPasswordSvg } from "./ResetPassword.svg";
import { HiMail, HiCheckCircle } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
const EnterEmail = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen py-2 font-default">
        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
          <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
            <div className="w-3/5 p-5 mt-10">
              <div className="flex flex-row">
                <button className="mr-32 ml-10" onClick={() => navigate(-1)}>
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
              </div>

              <div className="py-10">
                <h2 className="text-2xl font-bold text-gray-700 mb-2">
                  Reset Your Password
                </h2>
                <div className="border-2 w-10 border-gray-700 bg-gray-700 inline-block mb-2"></div>
              </div>
              <form>
                <div className="flex flex-col items-center">
                  <div className="bg-gray-100 w-64 p-2 flex items-center rounded mb-3">
                    <div className="bg-gray-100 w-64 p-2">
                      <HiMail className="text-grey-100 m-2" />
                    </div>
                    <input
                      type="email"
                      name="email"
                      placeholder="new password"
                      className="bg-gray-100 outline-none text-m flex-1"
                      required
                    />
                  </div>
                  <div className="bg-gray-100 w-64 p-2 flex items-center rounded mb-3">
                    <div className="bg-gray-100 w-64 p-2">
                      <HiMail className="text-grey-100 m-2" />
                    </div>
                    <input
                      type="email"
                      name="email"
                      placeholder="confirm new password"
                      className="bg-gray-100 outline-none text-m flex-1"
                      required
                    />
                  </div>
                  <Link
                    to="/EnterToken"
                    className="signIn px-7 py-3 w-64 justify-center rounded-md border border-transparent text-sm focus:outline-none transition duration-300 bg-[#5E9387] hover:bg-gray-700  text-center marker:sm:w-auto font-bold text-white"
                  >
                    Reset Password
                  </Link>
                </div>
              </form>
            </div>
            <div className="w-2/5 bg-[#5E9387]  text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
              <ResetPasswordSvg width="16rem" />
            </div>
          </div>
        </main>
      </div>
    </>
  );

}

export default EnterEmail
