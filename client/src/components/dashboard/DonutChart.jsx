import React, { useContext, useState, useEffect, useRef } from "react";
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
import CarbonTrackerService from "../../services/CarbonTrackerService";
import AuthContext from "../../hooks/AuthContext";

Chart.register(
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale
);

function arrRating(arr, obj) {
  const index = arr.findIndex((e) => e.rating === obj.rating);

  if (index === -1) {
    arr.push(obj);
  } else {
    let tempRating = obj.rating;
    let tempFreq = arr[index].ratingFreq + obj.ratingFreq;
    var overWrite = {
      rating: tempRating,
      ratingFreq: tempFreq,
    };
    arr[index] = overWrite;
  }
}

function getRatingData(ratingChart, ratings, ratingFreq) {
  let index = 1;
  let actualIndex = 0;
  for (index; index < ratingChart.length; index++) {
    let temp1 = ratingChart[index].rating;
    ratings[actualIndex] = temp1;
    let temp2 = ratingChart[index].ratingFreq;
    ratingFreq[actualIndex] = temp2;
    ++actualIndex;
  }
}

const DonutChart = () => {
  const [donutChartData, setDonutChartData] = useState([]);
  const ratingChart = [{ rating: 0, ratingFreq: 0 }];
  const ratings = [];
  const ratingFreq = [];
  const { auth, setAuth } = useContext(AuthContext);
  useEffect(() => {
    CarbonTrackerService.getDishConsumed(auth.userId, auth.accessToken).then(
      (response) => {
        setDonutChartData(response);
      }
    );
  }, []);

  let index1 = 0;
  for (index1; index1 < donutChartData.length; index1++) {
   
    var obj = {
      rating: donutChartData[index1].dish.carbonRating,
      ratingFreq: 1,
    };
    arrRating(ratingChart, obj);
  }

  getRatingData(ratingChart, ratings, ratingFreq);

  return (
    <div
      style={{ width: "28%", height: "80%" }}
      className="bg-white rounded-lg h-10 p-6 flex items-stretch m-6 font-default"
    >
      <Doughnut
        data={{
          //labels on x-axis
          labels : ratings,
          datasets: [
            {
              label: "E-Credits",
              data: ratingFreq,
              backgroundColor: [
                "rgba(35, 112, 50, 0.8)",
                "rgba(5, 71, 18, 0.8)",
                "rgba(220,236,228,0.8)",
                "rgba(22,163,74,255)"
              ],
              borderColor: [
                "rgba(35, 112, 50, 1)",
                "rgba(5, 71, 18, 1)",
                "rgba(220,236,228,1)",
                "rgba(22,163,74,255)"
              ],
              borderWidth: 1,
            },
          ],
        }}
        height={350}
        width={500}
        options={{
          maintainAspectRatio: false,
          plugins: {
            title: {
              display: true,
              text: "Receipts by Ratings",
              font : {
                size : 25
              }
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
