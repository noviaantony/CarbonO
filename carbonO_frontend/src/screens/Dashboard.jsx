import React, { useState, useEffect, useContext }  from "react";
import CarbonTrackerTable from "../components/dashboard/CarbonTrackerTable";
import RewardsTable from "../components/dashboard/RewardsTable";
import UserStatistics from "../components/dashboard/UserStatistics";
import AuthContext from "../context/AuthProvider";
import CarbonTrackerService from "../services/CarbonTrackerService";
import Header from "../components/misc/Header";
import initialDatesArr from "../components/dashboard/getInitialDates";
const Dashboard = () => {

  const [historicalData, setHistoricalData] = useState([]);
  const [totalCarbon, setTotalCarbon] = useState(0);
  const {auth} = useContext(AuthContext);
  
  useEffect(() => {
    CarbonTrackerService
      .getDishConsumed(auth.userId, auth.accessToken)
      .then((response) => {
        console.log("Table response");
        console.log(response);
        setHistoricalData(response);
        console.log(historicalData);
      });
  }, []);

  useEffect(() => {
    CarbonTrackerService
      .getUserTotalCarbonConsumption(auth.userId, auth.accessToken)
      .then((response) => {
        console.log("Carbon response");
        console.log(response);
        setTotalCarbon(response);
        console.log(totalCarbon);
      });
  }, []);

  let dates = [
    "2022-10-16",
    "2022-10-17",
    "2022-10-18",
    "2022-10-19",
    "2022-10-20",
    "2022-10-21",
    "2022-10-22",
  ];
  return (
    <>
      <Header
        Title="John Doe's Dashboard"
        Description="keep track of you receipt uploads, carbon foodprint, reward claims and donation here"
      />
      <div className="h-screen">
        <initialDatesArr.Provider value={dates}>
          <UserStatistics TotalCarbon={totalCarbon.toFixed(0)} />
        </initialDatesArr.Provider>
        <CarbonTrackerTable historicalData={historicalData} />
        <RewardsTable historicalData={historicalData} />
      </div>
    </>
  );
};

export default Dashboard;
