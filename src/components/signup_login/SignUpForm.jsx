import React from 'react'
import { HiMail, HiLockClosed } from "react-icons/hi";
import { ReactComponent as SignUpSvg } from "./SignUpSvg.svg";

const SignUpForm = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl mb-60">
          <div className="w-3/5 p-5">
            <div>
              <a
                class="toggleColour text-[#5E9387] my-4 leading-tight no-underline hover:no-underline font-bold text-xl lg:text-4xl"
                href="#"
              >
                CarbonO
              </a>
            </div>
            <div className="py-10">
              <h2 className="text-2xl font-bold text-gray-700 mb-2">
                Sign in to your account
              </h2>
              <div className="border-2 w-10 border-gray-700 bg-gray-700 inline-block mb-2"></div>
            </div>

            <div className="flex flex-col items-center">
              {/* name section */}
              <div className="bg-gray-100 w-64 p-2 flex items-center rounded mb-3  h-10">
                <div className="bg-gray-100 w-64 p-2">
                  <HiMail className="text-grey-100" />
                </div>
                <input
                  type="text"
                  name="name"
                  placeholder="enter your full name"
                  className="bg-gray-100 outline-none text-s flex-1"
                />
              </div>
              {/* name section */}

              {/* email section */}
              <div className="bg-gray-100 w-64 p-2 flex items-center rounded mb-3  h-10">
                <div className="bg-gray-100 w-64 p-2">
                  <HiMail className="text-grey-100" />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="enter your email"
                  className="bg-gray-100 outline-none text-s flex-1"
                />
              </div>
              {/* email section */}

              {/* password section */}
              <div className="bg-gray-100 w-64 p-2 flex items-center rounded mb-3  h-10">
                <div className="bg-gray-100 w-64 p-2">
                  <HiLockClosed className="text-grey-100" />
                </div>
                <input
                  type="password"
                  name="password"
                  placeholder="enter your password"
                  className="bg-gray-100 outline-none text-s flex-1"
                />
              </div>
              {/* password section */}

              {/* confirm password section */}
              <div className="bg-gray-100 w-64 p-2 flex items-center rounded mb-3 h-10">
                <div className="bg-gray-100 w-64 p-2">
                  <HiLockClosed className="text-grey-100" />
                </div>
                <input
                  type="password"
                  name="password"
                  placeholder="re-enter your password"
                  className="bg-gray-100 outline-none text-s flex-1"
                />
              </div>
              {/* confirm password section */}

      
              <a
                href=""
                className="px-7 py-3 w-64 justify-center rounded-md border border-transparent text-sm focus:outline-none transition duration-300 bg-[#5E9387] hover:bg-gray-700  text-center marker:sm:w-auto font-bold text-white"
              >
                Sign Up
              </a>
              <a
                href="#"
                className="text-xs font-bold text-gray-700 hover:text-[#5E9387] transition duration-300 mt-6 hover:underline-offset-4"
              >
                Already have an account? Sign in here
              </a>
            </div>
          </div>
          {/* Right Section */}
          <div className="w-2/5 bg-[#5E9387]  text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
            {/* <h2 className="text-3xl font-bold mb-2">Start your </h2>
            <div className="border-2 w-10 border-white inline-block mb-2"></div>
            <p className="mb-10">Start your journey with us today</p>
            <SignInSvg width="15rem" />
            <a
              href=""
              className="roup relative flex w-full justify-center rounded-md border border-transparent text-sm text-gray-700 focus:outline-none transition duration-300 px-7 py-3  bg-white text-center marker:sm:w-auto font-bold hover:shadow-md hover:bg-gray-700 hover:text-white"
            >
              Sign Up
            </a>{" "} */}
            <SignUpSvg width="16rem" />
          </div>

          {/* Right Section */}
        </div>
      </main>
    </div>
  );
}

export default SignUpForm
