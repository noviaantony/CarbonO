import React, { useState, useEffect, useContext } from "react";
import CarbonTrackerTable from "../components/dashboard/CarbonTrackerTable";
import RewardsTable from "../components/dashboard/RewardsTable";
import UserStatistics from "../components/dashboard/UserStatistics";
import AuthContext from "../hooks/AuthContext";
import CarbonTrackerService from "../services/CarbonTrackerService";
import Header from "../components/misc/Header";
import initialDatesArr from "../components/dashboard/getInitialDates";
import pointsArr from "../components/dashboard/getPoints";
import UserRewardService from "../services/UserRewardService";
import { ThreeDots } from "react-loader-spinner";
import { motion } from "framer-motion";


const Dashboard = () => {
  const [consumptionData, setConsumptionData] = useState([]);
  const [rewardData, setRewardData] = useState([]);
  const [totalCarbon, setTotalCarbon] = useState(0);
  const [userCredits, setUserCredits] = useState(0);
  const [loading, setLoading] = useState(false);
  const { auth, setAuth } = useContext(AuthContext);
  const dates = [];
  const ratings = [];
  //persist state of user
  // useEffect(() => {
  //     const token = localStorage.getItem("token");
  //     setAuth({"authenticated": localStorage.getItem("authenticated"),"accessToken": localStorage.getItem("token")
  //             , "userId": localStorage.getItem("userId"), "firstName": localStorage.getItem("firstName")});
  //     console.log("auth", auth.authenticated);
  //
  // },[]);
  const [lineChartData, setlineChartData] = useState([]);
  const [pieChartData, setPieChartData] = useState([]);
  const [chartsData, setChartsData] = useState([
    { date: "", totalCarbonRating: 0 },
  ]);

   // get all dish consumed by user
   useEffect(() => {
    setLoading(true);
    CarbonTrackerService.getDishConsumed(auth.userId, auth.accessToken).then(
      (response) => {
        console.log("Dish response");
        console.log(response);
        setConsumptionData(response);
        setlineChartData(response);
        console.log(lineChartData);
        // setLoading(false);
      }
    );
  }, []);
  //get user total carbon consumed
  useEffect(() => {
      setLoading(true);
    CarbonTrackerService.getUserTotalCarbonConsumption(
      auth.userId,
      auth.accessToken
    ).then((response) => {
      console.log("Carbon response");
      console.log(response);
      setTotalCarbon(response);
      console.log(totalCarbon);
      setLoading(false);
    });
  }, []);
  //get rewards claimed by user
  
  useEffect(() => {
      setLoading(true);
    UserRewardService.getUserReward(auth.userId, auth.accessToken).then(
      (response) => {
        console.log("User Reward response");
        console.log(response);
        setRewardData(response.rewardTransactions);
        console.log(rewardData);
        setUserCredits(response.rewardPoints);
        setLoading(false);
      }
    );
  }, []);

    //initial dates and points of the chart
  const test = () => {
    let i = 0;
      useEffect(() => {
        for (i; i < lineChartData.length; i++) {
        setChartsData(
          chartsData.map((data) => {
            if (data.date === lineChartData[i].dateConsumed.substring(0, 10)) {
              console.log("here1")
              return {
                ...data,
                date: lineChartData[i].dateConsumed.substring(0, 10),
                totalCarbonRating: data.totalCarbonRating + lineChartData[i].pointsEarned,
              };
            } else {
              console.log("here2")
              return {
                ...data,
                date: lineChartData[i].dateConsumed.substring(0, 10),
                totalCarbonRating: lineChartData[i].pointsEarned,
              };
            }
          })
        );
      }},[lineChartData[i]]); 
      console.log(chartsData);
      for (let i = 0; i < chartsData.length; i++) {
        dates.push(chartsData[i].date);
        ratings.push(chartsData[i].totalCarbonRating);
      }
      console.log(dates);
      console.log(ratings);
}

 
  let title = auth.firstName + "'s Dashboard";

  return (
    <>
    {test()}
      <Header
        Title={title}
        Description="keep track of you receipt uploads, carbon foodprint, reward claims and donation here"
      />
      {loading ? (
        <>
          <div className="flex justify-center h-screen mt-20">
            <ThreeDots
              height="300"
              width="300"
              radius="9"
              color="#000"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClassName=""
              visible={true}
            />
          </div>
        </>
      ) : (
        <motion.div
          className="actions"
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
        >
      <pointsArr.Provider value = {ratings}>
      <initialDatesArr.Provider value={dates}>
            <UserStatistics
              TotalCarbon={totalCarbon.toFixed(0)}
              Ecredits={userCredits}
              TotalReceiptsScanned={consumptionData.length}
            />
          </initialDatesArr.Provider>
      </pointsArr.Provider>
      
      
         
          <div className="flex flex-row justify-center mx-26">
            <CarbonTrackerTable historicalData={consumptionData} />
          </div>
          <div className="flex flex-row justify-center mx-26">
            <RewardsTable historicalData={rewardData} />
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Dashboard;
