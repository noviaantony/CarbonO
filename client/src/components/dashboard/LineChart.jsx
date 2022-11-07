import React, { useState, useContext, useEffect, useRef } from "react";
import { Line } from "react-chartjs-2";
import CarbonTrackerService from "../../services/CarbonTrackerService";
import AuthContext from "../../hooks/AuthContext";
import {
  Chart,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
} from "chart.js";
import actualDates from "./getDates";
import actualPoints from "./actualPoints";

Chart.register(
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale
);

// Chart.defaults.font.size = 12;

const LineChart = () => {
  // const [lineChartData, setlineChartData] = useState([]);
  // const [chartsData, setChartsData] = useState([
  //   { date: "", totalCarbonRating: 0 },
  // ]);

  const { auth, setAuth } = useContext(AuthContext);
   // x-axis and y-axis
   const data = useContext(actualDates);
   const datapoints = useContext(actualPoints);
//   const [startDate, setStartDate] = useState(data[0]);
//   const [endDate, setEndDate] = useState(data[data.length-1]);
//   let newDates = useRef([]);
//   let newPoints = useRef([]);

//   const handleChangeFirst = (event) => {
//     setStartDate(event.target.value);
//   };

//   const handleChangeEnd = (event) => {
//     setEndDate(event.target.value);
//   };

//   useEffect(() => {
//     CarbonTrackerService.getDishConsumed(auth.userId, auth.accessToken).then(
//       (response) => {
//         console.log("Dish response");
//         console.log(response);
//         setlineChartData(response);
//         console.log(lineChartData);
//         //  setLoading(false);
//       }
//     );
//   }, []);

// function pushToArr (arr , obj) {
//   const index = arr.findIndex((e) => e.date === obj.date);

//   if (index === -1) {
//     arr.push(obj);
//   } else {
//     let temp_date = obj.date;
//     let temp_points = arr[index].totalCarbonRating + obj.totalCarbonRating;
//     var overWrite = {
//       date : temp_date,
//       totalCarbonRating : temp_points
//     };
//     arr[index] = overWrite;
//   }
// }
//   let i = 0;
//   for (i; i < lineChartData.length; i++) {
 
//    var objTest = {
//      date : lineChartData[i].dateConsumed.substring(0, 10),
//      totalCarbonRating : lineChartData[i].pointsEarned
//    };
 
//    pushToArr(chartsData, objTest);
//  }

//  for (let i = 1; i < chartsData.length; i++) {
//   data.push(chartsData[i].date);
//   datapoints.push(chartsData[i].totalCarbonRating);
// }
 


//   const indexStart = data.indexOf(startDate);
//   const indexEnd = data.indexOf(endDate);
//   newDates.current = data.slice(indexStart, indexEnd + 1);
 
//   newPoints.current = datapoints.slice(indexStart, indexEnd + 1);
  return (
    <>

{/* <div className="p-4 w-15 rounded-lg bg-white flex border border-gray-800 mx-10  border-none">
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
                  value={data[0]}
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
                  value={data[data.length-1]}
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Select date end"
                />
              </div>
            </div>
          </div> */}
      <div
        style={{ width: "70%", height: "80%" }}
        className="bg-white rounded-lg h-auto p-6 flex items-stretch m-6 font-default text-xs"
      >
       
        <Line
          data={{
            //labels on x-axis
            labels: data,
            datasets: [
              {
                label: " total carbon emission / day",
                data: datapoints,
                backgroundColor: "rgba(255, 99, 132, 0.2)",
                borderColor: "rgba(255, 99, 132, 1)",
                borderWidth: 1,
                font: {
                  size: 35,
                },
              },
            ],
          }}
          height={350}
          width={300}
          options={{
            maintainAspectRatio: false,
            plugins: {
              title: {
                display: true,
                text: "Total Carbon Emission",
              },
            },
            scales: {
              y: {
                beginAtZero: true,
              },
            },

            legend: {
              labels: {
                // specific font property overrides the global property
                font: {
                  size: 8,
                },
              },
            },
          }}
        />
      </div>
    </>
  );
};

export default LineChart;
