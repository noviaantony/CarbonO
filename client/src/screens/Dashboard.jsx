import React, { useState, useEffect, useContext } from "react";
import CarbonTrackerTable from "../components/dashboard/CarbonTrackerTable";
import RewardsTable from "../components/dashboard/RewardsTable";
import UserStatistics from "../components/dashboard/UserStatistics";
import AuthContext from "../hooks/AuthProvider";
import CarbonTrackerService from "../services/CarbonTrackerService";
import Header from "../components/misc/Header";
import initialDatesArr from "../components/dashboard/getInitialDates";
import UserRewardService from "../services/UserRewardService";
import {ThreeDots} from "react-loader-spinner";

const Dashboard = () => {
  const [consumptionData, setConsumptionData] = useState([]);
  const [rewardData, setRewardData] = useState([]);
  const [totalCarbon, setTotalCarbon] = useState(0);
  const [userCredits, setUserCredits] = useState(0);
  const [loading, setLoading] = useState(false);
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
      setLoading(true);

    CarbonTrackerService.getDishConsumed(auth.userId, auth.accessToken).then(
      (response) => {
        console.log("Dish response");
        console.log(response);
        setConsumptionData(response);
        console.log(consumptionData);
        setLoading(false);
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

  console.log(consumptionData);

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
        <div className="">
        <initialDatesArr.Provider value={dates}>
          <UserStatistics
            TotalCarbon={totalCarbon.toFixed(0)}
            Ecredits={userCredits}
          />
        </initialDatesArr.Provider>
        <div className="flex flex-row justify-center mx-20">
          <CarbonTrackerTable historicalData={consumptionData} />
          <RewardsTable historicalData={rewardData} />
        </div>
      </div>
        )}
    </>
  );
};

export default Dashboard;
