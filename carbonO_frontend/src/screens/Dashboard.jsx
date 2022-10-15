import React, { useState, useEffect, useContext }  from "react";
import Table from "../components/dashboard/Table";
import UserStatistics from "../components/dashboard/UserStatistics";
import AuthContext from "../context/AuthProvider";
import CarbonTrackerService from "../services/CarbonTrackerService";
import Header from "../components/misc/Header";


const Dashboard = () => {
  const [historicalData, setHistoricalData] = useState([]);
  const [totalCarbon, setTotalCarbon] = useState(0);
  const {auth} = useContext(AuthContext);

  useEffect(() => {
    CarbonTrackerService.getDishConsumed(auth.userId, auth.accessToken).then((response) => {
        console.log("Table response")
        console.log(response)
        setHistoricalData(response);
        console.log(historicalData);
      });
  }, [])

  useEffect(() => {
    CarbonTrackerService.getUserTotalCarbonConsumption(auth.userId, auth.accessToken).then((response) => {
      console.log("Carbon response")
      console.log(response)
      setTotalCarbon(response);
      console.log(totalCarbon);
    });

  }, [])
  
  return (
    <>
      <div className="h-screen">
        <Header
          Title="John Doe's Dashboard"
          Description="keep track of you receipt uploads, carbon foodprint, reward claims and donation here"
        />
        <div>
          <UserStatistics TotalCarbon={totalCarbon.toFixed(0)} />
          <Table historicalData={historicalData} />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
