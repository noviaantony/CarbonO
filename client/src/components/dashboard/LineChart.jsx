import React, { useContext, useState, useEffect, useRef } from "react";
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

Chart.register(
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale
);

function arrCredit(arr, obj) {
  const index = arr.findIndex((e) => e.date === obj.date);

  if (index === -1) {
    arr.push(obj);
  } else {
    let tempDate = obj.date;
    let tempPoints = arr[index].totalPoints + obj.totalPoints;
    var overWrite = {
      date: tempDate,
      totalPoints: tempPoints,
    };
    arr[index] = overWrite;
  }
}

function arrCarbon(arr, obj) {
  const index = arr.findIndex((e) => e.date === obj.date);

  if (index === -1) {
    arr.push(obj);
  } else {
    let tempDate = obj.date;
    let tempCarbon = arr[index].totalCarbon + obj.totalCarbon;
    var overWrite = {
      date: tempDate,
      totalCarbon: tempCarbon,
    };
    arr[index] = overWrite;
  }
}

function getCreditData(creditChart, dataCredit, dataPoints) {
  let index = 1;
  let actualIndex = 0;
  for (index; index < creditChart.length; index++) {
    let temp1 = creditChart[index].date;
    dataCredit[actualIndex] = temp1;
    let temp2 = creditChart[index].totalPoints;
    dataPoints[actualIndex] = temp2;
    ++actualIndex;
  }
}

function getCarbonData(carbonChart, dataCarbon) {
  let index = 1;
  let actualIndex = 0;
  for (index; index < carbonChart.length; index++) {
    let temp = carbonChart[index].totalCarbon;
    dataCarbon[actualIndex] = temp;
    ++actualIndex;
  }
}

//reverse array
function getActualData(data) {
  let i = 0;
  for (i; i < data.size / 2; i++) {
    let temp = data[i];
    data[i] = data[data.size - i - 1];
    data[data.size - i - 1] = temp;
  }
}

const LineChart = () => {
  const [lineChartData, setLineChartData] = useState([]);
  const creditChart = [{ date: "", totalPoints: 0 }];
  const carbonChart = [{ date: "", totalCarbon: 0 }];
  // x-axis and y-axis of credit chart
  const dates = [];
  const dataCredit = [];
  const dataCarbon = [];

  const { auth, setAuth } = useContext(AuthContext);
  useEffect(() => {
    CarbonTrackerService.getDishConsumed(auth.userId, auth.accessToken).then(
      (response) => {
        console.log("Dish response");
        console.log(response);
        setLineChartData(response);
      }
    );
  }, []);

  //get date and points of credits
  let index1 = 0;
  for (index1; index1 < lineChartData.length; index1++) {
    // console.log("count");
    var obj = {
      date: lineChartData[index1].dateConsumed.substring(0, 10),
      totalPoints: lineChartData[index1].pointsEarned,
    };
    arrCredit(creditChart, obj);
  }

  //get date and points of carbon
  let index2 = 0;
  for (index2; index2 < lineChartData.length; index2++) {
    // console.log("count");
    var obj = {
      date: lineChartData[index2].dateConsumed.substring(0, 10),
      totalCarbon: lineChartData[index2].dish.totalCarbonFootprint,
    };
    arrCarbon(carbonChart, obj);
  }

  //remove first value from credit data
  getCreditData(creditChart, dates, dataCredit);

  //get the credit data in order
  getActualData(dates);
  getActualData(dataCredit);

  getCarbonData(carbonChart, dataCarbon);
  getActualData(dataCarbon);

  return (
    <>
      <div
        style={{ width: "100%", height: "80%" }}
        className="bg-white rounded-lg h-auto p-6 flex items-stretch m-6 font-default text-xs"
      >
        <Line
          data={{
            //labels on x-axis
            labels: dates,
            datasets: [
              {
                label: " total points earned / day",
                data: dataCredit,
                backgroundColor: "rgba(35, 112, 50, 0.8)",
                borderColor: "rgba(35, 112, 50, 1)",
                borderWidth: 1,
                font: {
                  size: 5,
                },
                tension: 0.4,
                yAxisID: "credit",
              },
              {
                label: " total carbon consumed / day",
                data: dataCarbon,
                backgroundColor: "rgba(45, 178,72, 0.8)",
                borderColor:  "rgba(45, 178,72, 1)",
                borderWidth: 1,
                font: {
                  size: 5,
                },
                tension: 0.4,
                yAxisID: "carbon",
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
                text: "Statistics This Month",
                font: {
                  size: 25,
                },
              },
              legend: {
                display: true,
                labels: {
                  boxWidth : 10,
                  boxHeight : 5,
                  borderWidth : 1,
                  font : {
                    size : 12
                  }
                  
                },
              },
            },
            scales: {
              x: {
                ticks: {
                  font: {
                    size: 10,
                  },
                },
              },
              credit: {
                beginAtZero: true,
                type: "linear",
                position: "left",
                ticks: {
                  font: {
                    size: 10,
                  },
                },
              },
              carbon: {
                beginAtZero: true,
                type: "linear",
                position: "right",
                grid: {
                  drawOnChartArea: false,
                },
                ticks: {
                  callback: function (value, index, values) {
                    return `${value} g`;
                  },
                  font: {
                    size: 10,
                  },
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
