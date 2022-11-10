import React from "react";
import { FaWallet, FaLeaf } from "react-icons/fa";
import { MdQrCodeScanner } from "react-icons/md";
import LineChart from "../dashboard/LineChart";
import DonutChart from "./DonutChart";

const UserStatistics = ({ Ecredits, TotalCarbon, TotalReceiptsScanned }) => {
  const [, set] = React.useState(true);
  const [isClickedCarbon, setIsClickedCarbon] = React.useState(true);
  const [isClickedReceipt, setIsClickedReceipt] = React.useState(true);

  const returnCharts = () => {
      return (
        <div class="flex flex-row justify-evenly">
          <LineChart />
          <DonutChart/>
        </div>
      );
  };

  return (
    <>   
      <div class="flex flex-wrap -mx-1 lg:mx-36">
        {/* first */}
        <div class="px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 font-default">
          <div className="p-4 text-sm text-[#5e938780] bg-white rounded-lg flex items-stretch m-6 drop-shadow-sm font-default cursor-pointer h-30">
            <FaWallet size={80} />
            <div className="ml-12 mt-2 text-xl text-center font-semibold text-gray-700">
              <h1 class="text-2xl text-center font-bold"> {Ecredits} </h1>
              <h5 class="text-xs text-center"> E-Credits Currently </h5>
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
          <div className="p-4 text-sm text-[#5e938780] bg-white rounded-lg flex items-stretch m-6 drop-shadow-sm font-default cursor-pointer h-30">
            <FaLeaf size={80} />
            <div className="ml-12 mt-2 text-xl font-semibold text-gray-700">
              <h1 class="text-2xl text-center font-bold"> {TotalCarbon} </h1>
              <h5 class="text-xs text-center">C02 Consumed this Month</h5>
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
          <div className="p-4 text-sm text-[#5e938780] bg-white rounded-lg flex items-stretch m-6 drop-shadow-sm font-default cursor-pointer h-30">
            <MdQrCodeScanner size={80} />
            <div className="ml-10 mt-2 text-xl font-semibold text-gray-700">
              <h1 class="text-2xl text-center font-bold">
                {TotalReceiptsScanned}
              </h1>
              <h5 class="text-xs text-center">Total Receipts Scanned</h5>
            </div>
          </div>
        </div>
      </div>

          <div className="mx-36">{returnCharts()}</div>
      
    </>
  );
};

export default UserStatistics;
