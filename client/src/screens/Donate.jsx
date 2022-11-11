import React, {useContext, useEffect, useState} from "react";
import Header from "../components/misc/Header";
import DonationCard from "../components/donate/DonationCard";
import DonationService from "../services/DonationService";
import {ThreeDots} from "react-loader-spinner";
import AuthContext from "../hooks/AuthContext";
import UserRewardService from "../services/UserRewardService";
import {motion} from "framer-motion";

const Donate = () => {
    const [organisationList, setOrganisationList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [userCredits, setUserCredits] = useState(0);
    const {auth} = useContext(AuthContext);

    useEffect(() => {
        setLoading(true);
        DonationService.getAllOrganisations(auth.accessToken)
            .then((response) => {
                setOrganisationList(response);
            })
            .then(() => {
                setLoading(false);
            });
    }, []);

    //get rewards claimed by user
    useEffect(() => {
        UserRewardService.getUserReward(auth.userId, auth.accessToken).then(
            (response) => {
                setUserCredits(response.rewardPoints);
            }
        );
    }, []);

    return (
        <>
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
                    className="h-max actions"
                    animate={{opacity: 1}}
                    initial={{opacity: 0}}
                >
                    <Header
                        Title="Translate Your Efforts Into More Effort!"
                        Description="use the e-credits you earned to donate to climate change campaigns, we make donating easy for you."
                    />
                    <div className="actions container my-12 mx-auto px-4 md:px-1">
                        <div class="flex flex-wrap -mx-1 lg:-mx-4">
                            {organisationList.map((organisation) => {
                                return (
                                    <DonationCard
                                        organisationId={organisation.id}
                                        Title={organisation.organisationName}
                                        Description={organisation.organisationDescription}
                                        Image={organisation.organisationImage}
                                        UserCredits={userCredits}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </motion.div>
            )}
        </>
    );
};

export default Donate;
