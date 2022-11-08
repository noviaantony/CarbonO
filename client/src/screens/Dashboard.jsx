import React, { useState, useEffect, useContext, useCallback } from "react";
import CarbonTrackerTable from "../components/dashboard/CarbonTrackerTable";
import RewardsTable from "../components/dashboard/RewardsTable";
import DonationTable from "../components/dashboard/DonationTable";
import UserStatistics from "../components/dashboard/UserStatistics";
import AuthContext from "../hooks/AuthContext";
import CarbonTrackerService from "../services/CarbonTrackerService";
import Header from "../components/misc/Header";
import initialDatesArr from "../components/dashboard/getInitialDates";
import pointsArr from "../components/dashboard/getPoints";
import pieChartArr from "../components/dashboard/getPieChart";
import UserRewardService from "../services/UserRewardService";
import { ThreeDots } from "react-loader-spinner";
import { motion } from "framer-motion";

function pushToArr(arr, obj) {
  const index = arr.findIndex((e) => e.date === obj.date);

  if (index === -1) {
    arr.push(obj);
  } else {
    let temp_date = obj.date;
    let temp_points = arr[index].totalPoints + obj.totalPoints;
    var overWrite = {
      date: temp_date,
      totalPoints: temp_points,
    };
    arr[index] = overWrite;
  }
}

const Dashboard = () => {
  const [consumptionData, setConsumptionData] = useState([]);
  const [rewardData, setRewardData] = useState([]);
  const [totalCarbon, setTotalCarbon] = useState(0);
  const [userCredits, setUserCredits] = useState(0);
  const [loading, setLoading] = useState(false);
  const { auth, setAuth } = useContext(AuthContext);
  const dates = [];
  const points = [];
  //persist state of user
  // useEffect(() => {
  //     const token = localStorage.getItem("token");
  //     setAuth({"authenticated": localStorage.getItem("authenticated"),"accessToken": localStorage.getItem("token")
  //             , "userId": localStorage.getItem("userId"), "firstName": localStorage.getItem("firstName")});
  //     console.log("auth", auth.authenticated);
  //
  // },[]);
  const [lineChartData, setLineChartData] = useState([]);
  const [chartsData, setChartsData] = useState([{ date: "", totalPoints: 0 }]);
  const [pieChartData, setPieChartData] = useState([{ date: "", rating: 0 }]);

  // get all dish consumed by user
  useEffect(() => {
    setLoading(true);
    CarbonTrackerService.getDishConsumed(auth.userId, auth.accessToken).then(
      (response) => {
        console.log("Dish response");
        // console.log(response);
        setConsumptionData(response);
        setLineChartData(response);
        // setLoading(false);
      }
    );
  }, []);

  let i = 0;
 
    

  for (i; i < lineChartData.length; i++) {
    var obj = {
      date: lineChartData[i].dateConsumed.substring(0, 10),
      totalPoints: lineChartData[i].pointsEarned,
    };
    pushToArr(chartsData, obj);
  }

console.log(chartsData);
for (let i = 1; i < chartsData.length; i++) {
  dates.push(chartsData[i].date);
  points.push(chartsData[i].totalPoints);
}

//for pie chart
for (let i = 0; i < lineChartData.length; i++) {
  console.log("count")
  var obj = {
    date: lineChartData[i].dateConsumed.substring(0, 10),
    rating: lineChartData[i].dish.carbonRating,
  };
  pieChartData.push(obj);
}
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

  let title = auth.firstName + "'s Dashboard";

  
  return (
    <>
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
          <pieChartArr.Provider value = {pieChartData}>
          <pointsArr.Provider value={points}>
            <initialDatesArr.Provider value={dates}>
              <UserStatistics
                TotalCarbon={totalCarbon.toFixed(0)}
                Ecredits={userCredits}
                TotalReceiptsScanned={consumptionData.length}
              />
            </initialDatesArr.Provider>
          </pointsArr.Provider>
          </pieChartArr.Provider>
          

          <div className="flex flex-row justify-center mx-26">
            <CarbonTrackerTable historicalData={consumptionData} />
          </div>
          <div className="flex flex-row justify-center mx-26">
            <RewardsTable historicalData={rewardData} />
          </div>
          <div className="flex flex-row justify-center mx-26">
            <DonationTable historicalData={rewardData} />
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Dashboard;
