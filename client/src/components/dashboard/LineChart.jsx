import React, { useState, useContext, useEffect } from "react";
import { Line } from "react-chartjs-2";
//import initialDatesArr from "./getInitialDates";
import actualDates from "./getDates";
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

// Chart.defaults.font.size = 12;

const LineChart = () => {
  const [lineChartData, setlineChartData] = useState([]);
  const [chartsData, setChartsData] = useState([
    { date: "", totalCarbonRating: 0 },
  ]);

  const { auth, setAuth } = useContext(AuthContext);

  useEffect(() => {
    CarbonTrackerService.getDishConsumed(auth.userId, auth.accessToken).then(
      (response) => {
        console.log("Dish response");
        console.log(response);
        setlineChartData(response);
        console.log(lineChartData);
        //  setLoading(false);
      }
    );
  }, []);

  const test = () => {
    let i = 0;
    useEffect(() => {
      for (i; i < lineChartData.length; i++) {
        setChartsData(
          chartsData.map((data) => {
            if (data.date === lineChartData[i].dateConsumed.substring(0, 10)) {
              console.log("here1");
              return {
                ...data,
                date: lineChartData[i].dateConsumed.substring(0, 10),
                totalCarbonRating:
                  data.totalCarbonRating + lineChartData[i].pointsEarned,
              };
            } else {
              console.log("here2");
              return {
                ...data,
                date: lineChartData[i].dateConsumed.substring(0, 10),
                totalCarbonRating: lineChartData[i].pointsEarned,
              };
            }
          })
        );
      }
    }, [lineChartData[i]]);
    console.log(chartsData);
  };

  // x-axis
  // const data = useContext(actualDates);
  // console.log("x-axis", data);
  const data = [];

  //y-axis data
  const datapoints = [];
  // const datapoints = [12, 19, 3, 18, 12, 3, 9, 7];

  for (let i = 0; i < chartsData.length; i++) {
    data.push(chartsData[i].date);
    datapoints.push(chartsData[i].totalCarbonRating);
  }

  return (
    <>
      <div
        style={{ width: "70%", height: "80%" }}
        className="bg-white rounded-lg h-auto p-6 flex items-stretch m-6 font-default text-xs"
      >
        {test()}
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
