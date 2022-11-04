import React from "react";
import { Doughnut } from "react-chartjs-2";
import 'chart.js/auto';
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

const DonutChart = () => {
  return (
    <div
      style={{ width: "28%", height: "30%" }}
      className="bg-white rounded-lg h-auto p-6 flex items-stretch m-6 font-default"
    >
      <Doughnut
        data={{
          //labels on x-axis
          labels: ["Category 1", "Category 2", "Category 3"],
          datasets: [
            {
              label: "E-Credits",
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
        height={300}
        width={600}
        options={{
          maintainAspectRatio: false,
          plugins: {
            title: {
              display: true,
              text: "Total Current E-Credits",
            },

            legend: {
              labels: {
                font: {
                  size: 12,
                },
              },
            },
          },
        }}
      />
    </div>
  );
};

export default DonutChart;
