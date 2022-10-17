import React from "react";
import { FaWallet, FaReceipt, FaLeaf } from "react-icons/fa";
import { useState, useRef, useContext } from "react";
import DonutChart from "../dashboard/DonutChart";
import LineChart from "../dashboard/LineChart";
import PieChart from "./PieChart";
import initialDatesArr from "./getInitialDates";
import actualDates from "./getDates";
import { FaFilter } from "react-icons/fa";

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
          <div className="p-4 w-15 rounded-lg bg-white flex border border-gray-800">
            <div>
              <FaFilter size={13} className = "ml-2 mt-2 -mr-3" />
            </div>

            <input
              type="date"
              id="startDate"
              onChange={handleChangeFirst}
              value={startDate}
              class={"ml-3 text-center"}
            />
            <label htmlFor="endDate" className="ml-3 font-bold">
              To
            </label>
            <input
              type="date"
              id="endDate"
              onChange={handleChangeEnd}
              value={endDate}
              class={"text-center"}
            />
          </div>
        </>
      );
    }
  };

  //display charts based on click
  const returnCharts = () => {
    if (isClickedCarbon && isClickedCredit && isClickedReceipt) {
      return (
        <div class="flex flex-wrap space-x-12">
          <DonutChart />
          <LineChart />
          <PieChart />
        </div>
      );
    } else if (isClickedCarbon && isClickedCredit) {
      return (
        <div class="flex flex-wrap space-x-12" style={{ width: "162%" }}>
          <DonutChart />
          <LineChart />
        </div>
      );
    } else if (isClickedCredit && isClickedReceipt) {
      return (
        <div class="flex flex-wrap space-x-12" style={{ width: "162%" }}>
          <DonutChart />
          <PieChart />
        </div>
      );
    } else if (isClickedCarbon && isClickedReceipt) {
      return (
        <div class="flex flex-wrap space-x-12" style={{ width: "162%" }}>
          <LineChart />
          <PieChart />
        </div>
      );
    } else if (isClickedCredit) {
      return (
        <div class="flex flex-wrap space-x-12" style={{ width: "345%" }}>
          <DonutChart />
        </div>
      );
    } else if (isClickedCarbon) {
      return (
        <div class="flex flex-wrap space-x-12" style={{ width: "345%" }}>
          <LineChart />
        </div>
      );
    } else if (isClickedReceipt) {
      return (
        <div class="flex flex-wrap space-x-12" style={{ width: "345%" }}>
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
