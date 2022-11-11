import React, {useContext, useEffect, useState} from "react";
import CarbonTrackerTable from "../components/dashboard/CarbonTrackerTable";
import RewardsTable from "../components/dashboard/RewardsTable";
import DonationTable from "../components/dashboard/DonationTable";
import UserStatistics from "../components/dashboard/UserStatistics";
import AuthContext from "../hooks/AuthContext";
import CarbonTrackerService from "../services/CarbonTrackerService";
import Header from "../components/misc/Header";
import {ThreeDots} from "react-loader-spinner";
import {motion} from "framer-motion";
import UserRewardService from "../services/UserRewardService";


const Dashboard = () => {
    const [consumptionData, setConsumptionData] = useState([]);
    const [rewardData, setRewardData] = useState([]);
    const [totalCarbon, setTotalCarbon] = useState(0);
    const [userCredits, setUserCredits] = useState(0);
    const [loading, setLoading] = useState(false);
    const {auth} = useContext(AuthContext);

    // get all dish consumed by user
    useEffect(() => {
        setLoading(true);
        console.log(auth.accessToken);
        CarbonTrackerService.getDishConsumed(auth.userId, auth.accessToken).then(
            (response) => {
                console.log("Dish response");
                console.log(response);
                setConsumptionData(response);
            }
        );
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

    //get user total carbon consumed
    // useEffect(() => {
    //     setLoading(true);
    //     CarbonTrackerService.getUserTotalCarbonConsumption(
    //         auth.userId,
    //         auth.accessToken
    //     ).then((response) => {
    //         console.log("Carbon response");
    //         console.log(response);
    //         setTotalCarbon(response);
    //         console.log(totalCarbon);
    //         setLoading(false);
    //     });
    // }, []);

    //get rewards claimed by user
    // useEffect(() => {
    //     setLoading(true);
    //     UserRewardService.getUserReward(auth.userId, auth.accessToken).then(
    //         (response) => {
    //             console.log("User Reward response");
    //             console.log(response);
    //             setRewardData(response.rewardTransactions);
    //             console.log(rewardData);
    //             setUserCredits(response.rewardPoints);
    //             setLoading(false);
    //         }
    //     );
    // }, []);

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
                    animate={{opacity: 1}}
                    initial={{opacity: 0}}
                >
                    <UserStatistics
                        TotalCarbon={totalCarbon.toFixed(0)}
                        Ecredits={userCredits}
                        TotalReceiptsScanned={consumptionData.length}
                    />

                    <div className="flex flex-row justify-center mx-26">
                        <CarbonTrackerTable historicalData={consumptionData}/>
                    </div>
                    <div className="flex flex-row justify-center mx-26">
                        <RewardsTable historicalData={rewardData}/>
                    </div>
                    <div className="flex flex-row justify-center mx-26">
                        <DonationTable historicalData={rewardData}/>
                    </div>
                </motion.div>
            )}
        </>
    );
};

export default Dashboard;
