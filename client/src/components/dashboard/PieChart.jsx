import React, {useState, useEffect, useContext} from "react";
import { Pie } from "react-chartjs-2";
import 'chart.js/auto';
import { Chart, LineController, LineElement, PointElement, LinearScale, Title,CategoryScale } from 'chart.js';
import CarbonTrackerService from "../../services/CarbonTrackerService";
import AuthContext from "../../hooks/AuthProvider";

Chart.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale);

Chart.defaults.font.size = 8;

// carbon rating summary

const PieChart = () => {

  const [consumptionData, setConsumptionData] = useState([]);

  const { auth, setAuth } = useContext(AuthContext);

  useEffect(() => {
    CarbonTrackerService.getDishConsumed(auth.userId, auth.accessToken).then(
      (response) => {
        console.log("Dish response");
        console.log(response);
        setConsumptionData(response);
        console.log(consumptionData);
      //  setLoading(false);
      }
    );
  }, []);

  console.log("--", consumptionData);

  const chartsData = new Map();

  for (let i = 0; consumptionData.length; i++) {

    if (chartsData.has(consumptionData[i].dateConsumed.substring(0, 10))) {
      let oldrating = chartsData.get(
        consumptionData[i].dateConsumed.substring(0, 10)
      );
      chartsData.set(
        consumptionData[i].dateConsumed.substring(0, 10),
        consumptionData[i].totalCarbonRating + oldrating
      );

    } else {
      chartsData.set(
        consumptionData[i].dateConsumed.substring(0, 10),
        consumptionData[i].totalCarbonRating
      );

    }      
      
  }

  console.log(chartsData);

  return (
    <div
      style={{ width: "28%", height: "30%" }}
      className="bg-white rounded-lg h-auto p-6 flex items-stretch m-6 font-default"
    >
      <Pie
        data={{
          //labels on x-axis
          labels: ["1", "2", "3", "4", "5"], // add 4,5
          datasets: [
            {
              label: "Receipts",
              data: [12, 19, 3, 6,8],
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