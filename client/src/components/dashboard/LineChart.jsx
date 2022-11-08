import React, { useContext, useState, useEffect } from "react";
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
function pushToArr(arr, obj) {
  const index = arr.findIndex((e) => e.date === obj.date);

  if (index === -1) {
    arr.push(obj);
  } else {
    let temp_date = obj.date;
    let temp_points = arr[index].totalPoints + obj.totalPoints;
    var overWrite = {
      date: temp_date,
      totalPoints: temp_points,
    };
    arr[index] = overWrite;
  }
}


function test(chartsData, data, datapoints) {
  let i = 1;
  for (i; i < chartsData.length; i++) {
    let temp1 = chartsData[i].date;
    data[i] = temp1;
    let temp2 = chartsData[i].totalPoints;
    datapoints[i] = temp2;
    // data.push(chartsData[i].date);
    // datapoints.push(chartsData[i].totalPoints);
  }
}

function test2(data, datapoints, xData, yData) {
  let i = 0;
  let n = datapoints.length-1;
  for (i; i < datapoints.length-1; i++) {
    let temp1 = data[n];
    console.log(temp1);
    xData[i] = temp1;
    let temp2 = datapoints[n];
    yData[i] = temp2;
    --n;
  }
}
const LineChart = () => {
  const [lineChartData, setLineChartData] = useState([]);
  const chartsData = [{ date: "", totalPoints: 0 }];
  const { auth, setAuth } = useContext(AuthContext);
  // x-axis and y-axis
  const data = [];
  const datapoints = [];
  const xData = [];
  const yData = [];
  useEffect(() => {
    CarbonTrackerService.getDishConsumed(auth.userId, auth.accessToken).then(
      (response) => {
        console.log("Dish response");
        console.log(response);
        setLineChartData(response);
        // setLoading(false);
      }
    );
  }, []);

  let i = 0;
  for (i; i < lineChartData.length; i++) {
    console.log("count");
    var obj = {
      date: lineChartData[i].dateConsumed.substring(0, 10),
      totalPoints: lineChartData[i].pointsEarned,
    };
    pushToArr(chartsData, obj);
  }
  console.log(chartsData);
  test(chartsData, data, datapoints);
  console.log(data);
  console.log(datapoints);
  test2(data, datapoints, xData, yData);
  console.log(xData);
  console.log(yData);

  return (
    <>
      <div
        style={{ width: "100%", height: "80%" }}
        className="bg-white rounded-lg h-auto p-6 flex items-stretch m-6 font-default text-xs"
      >
        <Line
          data={{
            //labels on x-axis
            labels:xData,
            datasets: [
              {
                label: " total points earned / day",
                data: yData,
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
                text: "Total E-Credits Earned This Month",
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
