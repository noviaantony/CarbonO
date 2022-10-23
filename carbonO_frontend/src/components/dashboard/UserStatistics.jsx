import React from "react";
import { FaWallet, FaReceipt, FaLeaf } from "react-icons/fa";
import { useState, useRef, useContext } from "react";
import DonutChart from "../dashboard/DonutChart";
import LineChart from "../dashboard/LineChart";
import PieChart from "./PieChart";
import initialDatesArr from "./getInitialDates";
import actualDates from "./getDates";

const UserStatistics = ({ Ecredits, TotalCarbon, NoOfReceipts }) => {
  const [isClickedCredit, setIsClickedCredit] = React.useState(false);
  const [isClickedCarbon, setIsClickedCarbon] = React.useState(false);
  const [isClickedReceipt, setIsClickedReceipt] = React.useState(false);

  const initialDates = useContext(initialDatesArr);

  const [startDate, setstartDate] = useState(initialDates[0]);
  const [endDate, setendDate] = useState(initialDates[initialDates.length - 1]);

  let newDates = useRef([]);
  const handleChangeFirst = (event) => {
    setstartDate(event.target.value);
  };

  const handleChangeEnd = (event) => {
    setendDate(event.target.value);
  };

  const indexStart = initialDates.indexOf(startDate);
  const indexEnd = initialDates.indexOf(endDate);
  newDates.current = initialDates.slice(indexStart, indexEnd + 1);

  //filter function appears if there is a chart
  const hasChart = () => {
    if (isClickedCarbon || isClickedCredit || isClickedReceipt) {
      return (
        <>
          <div className="p-4 w-15 rounded-lg bg-white flex border border-gray-800 mx-10  border-none">
            <div className="flex items-center">
              <div className="relative">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <input
                  type="text"
                  id="startDate"
                  onChange={handleChangeFirst}
                  value={startDate}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                  
                  placeholder="Select date start"
                />
              </div>
              <span className="mx-4 text-gray-500">to</span>
              <div className="relative">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <input
                  id="endDate"
                  onChange={handleChangeEnd}
                  value={endDate}
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Select date end"
                />
              </div>
            </div>
          </div>
        </>
      );
    }
  };

  //display charts based on click
  const returnCharts = () => {
    if (isClickedCarbon && isClickedCredit && isClickedReceipt) {
      return (
        <div class="flex flex-wrap mx-10">
          <DonutChart />
          <LineChart />
          <PieChart />
        </div>
      );
    } else if (isClickedCarbon && isClickedCredit) {
      return (
        <div class="flex flex-wrap mx-10" style={{ width: "162%" }}>
          <DonutChart />
          <LineChart />
        </div>
      );
    } else if (isClickedCredit && isClickedReceipt) {
      return (
        <div className="flex flex-wrap mx-10" style={{ width: "162%" }}>
          <DonutChart />
          <PieChart />
        </div>
      );
    } else if (isClickedCarbon && isClickedReceipt) {
      return (
        <div className="flex flex-wrap mx-10" style={{ width: "162%" }}>
          <LineChart />
          <PieChart />
        </div>
      );
    } else if (isClickedCredit) {
      return (
        <div className="flex flex-wrap mx-10" style={{ width: "345%" }}>
          <DonutChart />
        </div>
      );
    } else if (isClickedCarbon) {
      return (
        <div className="flex flex-wrap mx-10" style={{ width: "345%" }}>
          <LineChart />
        </div>
      );
    } else if (isClickedReceipt) {
      return (
        <div className="flex flex-wrap mx-10" style={{ width: "345%" }}>
          <PieChart />
        </div>
      );
    }
  };

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

      <actualDates.Provider value={newDates.current}>
        <div>{hasChart()}</div>

        <div>{returnCharts()}</div>
      </actualDates.Provider>
    </>
  );
};

export default UserStatistics;
