import React from "react";
import { Line } from "react-chartjs-2";
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
  return (
    <div
      style={{ width: "28%", height: "80%" }}
      className="bg-white rounded-lg h-auto p-6 flex items-stretch m-6 shadow-md font-default"
    >
      <Line
        data={{
          //labels on x-axis
          labels: ["Jan", "Feb", "Mar"],
          datasets: [
            {
              label: "c02 consumed",
              data: [12, 19, 3],
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
              ],
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
              text: "C02 Consumed"
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
                    size: 14
                }
            }
        }
    
        }}
      />
    </div>
  );
};

export default LineChart;
