import React, { useState, useEffect, useContext } from "react";
import { Pie } from "react-chartjs-2";
import "chart.js/auto";
import actualPie from "./actualPie";
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

Chart.defaults.font.size = 16;

function pushToArr(arr, obj) {
  const index = arr.findIndex((e) => e.rating === obj.rating);

  if (index === -1) {
    arr.push(obj);
  } else {
    let temp_rating = obj.rating;
    let temp_freq = arr[index].freq + 1;
    var overWrite = {
      rating: temp_rating,
      ratingFreq: temp_freq,
    };
    arr[index] = overWrite;
  }
}


const PieChart = () => {
  const [pieChartData, setPieChartData] = useState([]);
  const [chartsData, setChartsData] = useState([
    { rating: 1, ratingFreq: 0 },
  ]);

  const { auth, setAuth } = useContext(AuthContext);
  const data = useContext(actualPie);
  const dates = useContext(actualDates);
  const rate = [];
  const freq = [];

  let i = 0;

for (i; i < data.length; i++) {
  const temp = dates.findIndex((e) => e === data[i].rating);
  if (temp > -1) { //there is such a date 
    var obj = {
      rating: data[i].rating,
      ratingFreq : 1
    };
    pushToArr(pieChartData, obj);
  }
}

console.log(pieChartData);
for (let i = 1; i < pieChartData.length; i++) {
rate.push(pieChartData[i].rating);
freq.push(pieChartData[i].ratingFreq);
}
console.log(rate);
console.log(freq);

  useEffect(() => {
    CarbonTrackerService.getDishConsumed(auth.userId, auth.accessToken).then(
      (response) => {
        console.log("Dish response");
        console.log(response);
        setPieChartData(response);
        // console.log(pieChartData);
        //  setLoading(false);
      }
    );
  }, []);

  

  return (
    <div
      style={{ width: "28%", height: "30%" }}
      className="bg-white rounded-lg h-auto p-6 flex items-stretch m-6 font-default"
    >
      <Pie
        data={{
          //labels on x-axis
          labels: ["1", "2", "3", "4", "5"], 
          datasets: [
            {
              label: "Receipts",
              data: [12, 19, 3, 6, 8],
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(95, 177, 225, 0.2)",
                "rgba(250, 200, 152, 0.2)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(95, 177, 225, 1)",
                "rgba(250, 200, 152, 1)",
              ],
              borderWidth: 1,
            },
          ],
        }}
        height={350}
        width={900}
        options={{
          maintainAspectRatio: false,
          plugins: {
            title: {
              display: true,
              text: "Carbon Rating Summary",
            },
          },
        }}
      />
    </div>
  );
};

export default PieChart;
