import React from 'react';
import { ReactComponent as PageNotFoundSvg } from '../components/pagenotfound/PageNotFound.svg';
import {Link} from "react-router-dom"
import Header from "../components/misc/Header";

const PageNotFound = () => {
  return (
    <>
      <div className=" justify-center h-screen">
        <div>
          <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-12 lg:px-12">
            <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              Oh No! Page Not Found
            </h1>
            <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400 flex flex-row justify-center">
              <PageNotFoundSvg classname="" width="35rem" />
            </p>
            <div className="flex flex-row justify-center mt-0">
              <Link
                to = "/"
                className='text-white bg-[#5E9387] focus:bg-primary-700 focus:text-gray-200 focus:shadow-outline focus:outline-none transition duration-300
                 w-full  text-center text-3xl p-6 px-8 shadow-xs rounded-md block sm:w-auto font-bold hover:bg-gray-700 hover:text-[#5E9387]'
              >
                Go Back To Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PageNotFound;
