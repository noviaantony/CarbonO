import React, { useState, useEffect, useContext } from "react";
import CarbonTrackerTable from "../components/dashboard/CarbonTrackerTable";
import RewardsTable from "../components/dashboard/RewardsTable";
import UserStatistics from "../components/dashboard/UserStatistics";
import AuthContext from "../hooks/AuthProvider";
import CarbonTrackerService from "../services/CarbonTrackerService";
import Header from "../components/misc/Header";
import initialDatesArr from "../components/dashboard/getInitialDates";
import UserRewardService from "../services/UserRewardService";

const Dashboard = () => {
  const [consumptionData, setConsumptionData] = useState([]);
  const [rewardData, setRewardData] = useState([]);
  const [totalCarbon, setTotalCarbon] = useState(0);
  const [userCredits, setUserCredits] = useState(0);
  const { auth, setAuth } = useContext(AuthContext);

  //persist state of user
  // useEffect(() => {
  //     const token = localStorage.getItem("token");
  //     setAuth({"authenticated": localStorage.getItem("authenticated"),"accessToken": localStorage.getItem("token")
  //             , "userId": localStorage.getItem("userId"), "firstName": localStorage.getItem("firstName")});
  //     console.log("auth", auth.authenticated);
  //
  // },[]);

  // get all dish consumed by user
  useEffect(() => {
    CarbonTrackerService.getDishConsumed(auth.userId, auth.accessToken).then(
      (response) => {
        console.log("Table response");
        console.log(response);
        setConsumptionData(response);
        console.log(consumptionData);
      }
    );
  }, []);

  //get user total carbon consumed
  useEffect(() => {
    CarbonTrackerService.getUserTotalCarbonConsumption(
      auth.userId,
      auth.accessToken
    ).then((response) => {
      console.log("Carbon response");
      console.log(response);
      setTotalCarbon(response);
      console.log(totalCarbon);
    });
  }, []);

  //get rewards claimed by user
  useEffect(() => {
    UserRewardService.getUserReward(auth.userId, auth.accessToken).then(
      (response) => {
        console.log("User Reward response");
        console.log(response);
        setRewardData(response.rewardTransactions);
        setUserCredits(response.rewardPoints);
      }
    );
  }, []);

  //initial dates of the chart
  let dates = [
    "2022-10-16",
    "2022-10-17",
    "2022-10-18",
    "2022-10-19",
    "2022-10-20",
    "2022-10-21",
    "2022-10-22",
  ];

  let title = auth.firstName + "'s Dashboard";

  return (
    <>
      <Header
        Title={title}
        Description="keep track of you receipt uploads, carbon foodprint, reward claims and donation here"
      />
      <div className="h-screen">
        <initialDatesArr.Provider value={dates}>
          <UserStatistics
            TotalCarbon={totalCarbon.toFixed(0)}
            Ecredits={userCredits}
          />
        </initialDatesArr.Provider>
        <div className="flex flex-row justify-center mx-10">
          <CarbonTrackerTable historicalData={consumptionData} />
          <RewardsTable historicalData={rewardData} />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
