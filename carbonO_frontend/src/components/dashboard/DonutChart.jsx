import React, {useEffect, useState} from 'react'
import axios from "axios"
import { Chart as ChartJs, Tooltip, Title, ArcElement, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
ChartJs.register(Tooltip, Title, ArcElement, Legend);

 const data = {
    labels: ["A", "B", "C"],
    datasets: [
      {
        label: "My First Dataset",
        data: [10, 20, 30],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  };


const DonutChart = () => {


  const [data, setData] = useState({
    labels: ["A", "B", "C"],
    datasets: [
      {
        label: "My First Dataset",
        data: [10, 20, 30],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  });

  useEffect(() => {
    const userData = () => {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
          console.log(res.data);
          const label = [];
          const data = [];
          for(var i of res.data) {
            label.push(i.name);
            data.push(i.id);
          }
          setData({
            labels: label,
            datasets: [
              {
                label: "My First Dataset",
                data: data,
                backgroundColor: [
                  "rgb(255, 99, 132)",
                  "rgb(54, 162, 235)",
                  "rgb(255, 205, 86)",
                ],
                hoverOffset: 4,
              },
            ],
          });
        })
        .catch((error) => {
          console.log(error);
        });
    };
    userData();
  }, []);


  return (
    <div
      style={{ width: "28%", height: "30%" }}
      className="bg-white rounded-lg h-auto p-6 flex items-stretch m-6 shadow-md font-default"
    >
      <Pie data={data} />
    </div>
  );
}

export default DonutChart
