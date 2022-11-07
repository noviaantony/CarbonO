import React, { useContext} from "react";
import { Line } from "react-chartjs-2";

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

  const { auth, setAuth } = useContext(AuthContext);
   // x-axis and y-axis
   const data = useContext(actualDates);
   const datapoints = useContext(actualPoints);

  //  const xData = [];
  //  const yData = [];
  //  let i = 0;
  //  for (i; i < datapoints.length; i++) {
  //   xData[i] = data.pop();
  //   yData[i] = datapoints.pop();
  //  }

  return (
    <>

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
                label: " total points earned / day",
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
