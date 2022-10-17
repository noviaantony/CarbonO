import React from "react";
import { Line } from "react-chartjs-2";
import { useContext } from "react";
//import initialDatesArr from "./getInitialDates";
import actualDates from "./getDates";

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

Chart.defaults.font.size = 20;

const LineChart = () => {
  const data = useContext(actualDates);

  //y-axis data
  const datapoints = [12, 19, 3, 18, 12, 3, 9, 7];

  return (
    <>
      <div
        style={{ width: "28%", height: "80%" }}
        className="bg-white rounded-lg h-auto p-6 flex items-stretch m-6 font-default"
      >
        <Line
          data={{
            //labels on x-axis
            labels: data,
            datasets: [
              {
                label: "c02 consumed",
                data: datapoints,
                backgroundColor: "rgba(255, 99, 132, 0.2)",
                borderColor: "rgba(255, 99, 132, 1)",
                borderWidth: 1,
              },
            ],
          }}
          height={400}
          width={600}
          options={{
            maintainAspectRatio: false,
            plugins: {
              title: {
                display: true,
                text: "C02 Consumed",
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
                  size: 14,
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



