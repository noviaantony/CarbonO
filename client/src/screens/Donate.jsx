import React, {useContext, useEffect, useState} from "react";
import Header from "../components/misc/Header";
import DonationCard from "../components/donate/DonationCard";
import CarbonTrackerService from "../services/CarbonTrackerService";
import DonationService from "../services/DonationService";
import {ThreeDots} from "react-loader-spinner";
import Card from "../components/carbontracker/Card";
import AuthContext from "../hooks/AuthProvider";
import UserRewardService from "../services/UserRewardService";
const Donate = () => {
  const [organisationList, setOrganisationList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [userCredits, setUserCredits] = useState(0);
  const {auth} = useContext(AuthContext);

  useEffect(() => {
    setLoading(true);
    DonationService.getAllOrganisations()
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
      <div className="h-max">
        <Header
          Title="Translate Your Efforts Into More Effort!"
          Description="use the e-credits you earned to donate to climate change campaigns, we make donating easy for you."
        />

        <div class="container my-12 mx-auto px-4 md:px-1">
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
      </div>
      )}
    </>
  );
};

export default Donate;
