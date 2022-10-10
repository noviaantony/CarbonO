import React from "react";
import { FaWallet, FaReceipt, FaLeaf } from "react-icons/fa";
import { useState } from "react";
import DonutChart from "../dashboard/DonutChart";

const UserStatistics = ({ Ecredits, TotalCarbon, NoOfReceipts }) => {
  const [isClickedCredit, setIsClickedCredit] = React.useState(false);
  const [isClickedCarbon, setIsClickedCarbon] = React.useState(false);
  const [isClickedReceipt, setIsClickedReceipt] = React.useState(false);
  return (
    <>
      <div class="flex flex-wrap -mx-1 lg:-mx-4">
        {/* first */}
        <div
          class="px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 font-default"
          onClick={() => {
            if (isClickedCredit === false) {
              setIsClickedCredit(true);
            } else {
              setIsClickedCredit(false);
            }
          }}
        >
          <div className="p-4 text-sm text-[#5e938780] bg-white rounded-lg dark:bg-gray-700 dark:text-gray-300 flex items-stretch m-6 shadow-md font-default">
            <FaWallet size={60} />
            <div className="ml-20 mt-2 text-xl text-center font-semibold text-gray-700">
              <h1 class="text-4xl font-bold"> - </h1>
              <h5 class="text-xs"> E-Credits Currently </h5>
            </div>
          </div>
        </div>

        {/* second */}
        <div
          class="px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 font-default"
          onClick={() => {
            if (isClickedCarbon === false) {
              setIsClickedCarbon(true);
            } else {
              setIsClickedCarbon(false);
            }
          }}
        >
          <div className="p-4 text-sm text-[#5e938780] bg-white rounded-lg dark:bg-gray-700 dark:text-gray-300 flex items-stretch m-6 shadow-md font-default">
            <FaLeaf size={60} />
            <div className="ml-12 mt-2 text-xl font-semibold text-gray-700">
              <h1 class="text-4xl text-center font-bold"> {TotalCarbon} </h1>
              <h5 class="text-xs">C02 Consumed this Month</h5>
            </div>
          </div>
        </div>

        {/* third */}
        <div
          class="container flex-row px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 font-default"
          onClick={() => {
            if (isClickedReceipt === false) {
              setIsClickedReceipt(true);
            } else {
              setIsClickedReceipt(false);
            }
          }}
        >
          <div className="p-4 text-sm text-[#5e938780] bg-white rounded-lg dark:bg-gray-700 dark:text-gray-300 flex items-stretch m-6 shadow-md font-default">
            <FaReceipt size={60} />
            <div className="ml-10 mt-2 text-xl font-semibold text-gray-700">
              <h1 class="text-4xl text-center font-bold">-</h1>
              <h5 class="text-xs">Receipts Uploaded this month</h5>
            </div>
          </div>
        </div>
      </div>

      <div class= "flex flex-wrap space-x-10">
      {isClickedCredit && <DonutChart />}
      {isClickedCarbon && <DonutChart />}    
      {isClickedReceipt && <DonutChart />}
      </div>
    </>
  );
};

export default UserStatistics;
