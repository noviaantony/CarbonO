import React, { useContext, useState, useRef, useEffect } from "react";
import { ThreeDots } from "react-loader-spinner";
import RewardCard from "../components/rewards/RewardCard";
import Header from "../components/misc/Header";
import UserRewardService from "../services/UserRewardService";
import { motion } from "framer-motion";
import Modal from "react-modal";
import "../styles/styles.css";

import AuthContext from "../hooks/AuthProvider";

const Rewards = () => {
  const [openTab, setOpenTab] = React.useState(1);
  const [rewardList, setRewardList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [userRewardPoints, setUserRewardPoints] = useState(0);
  const [userTransactions, setUserTransactions] = useState([]);
  const { auth } = useContext(AuthContext);
  // let userRewardPoints = 0;

  React.useEffect(() => {
    setLoading(true);
    UserRewardService.getAllRewards()
      .then((response) => {
        setRewardList(response);
      })
      .then((data) => {
        setLoading(false);
      });
  }, []);

  // get userReward account information
  useEffect(() => {
      setLoading(true);
    UserRewardService.getUserReward(auth.userId, auth.accessToken).then(
      (response) => {
        setUserTransactions(response.rewardTransactions);
        setUserRewardPoints(response.rewardPoints);
        console.log(userRewardPoints);
      }
    ).then((data) => {
        setLoading(false);
    });
  }, []);

  return (
    <>
      <div className="h-max">
        <Header
          Title="Claim Rewards, Save the Earth"
          Description="claim discount codes, free items from sustainable companies using your e-credits!"
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
            className="actions flex flex-wrap mx-36"
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
          >
            <div className="w-full">
              <ul
                className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row mx-16 mt-12"
                role="tablist"
              >
                <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                  <a
                    className={
                      "text-xs font-bold uppercase px-5 py-3 rounded block leading-normal " +
                      (openTab === 1
                        ? "text-white bg-[#5E9387]"
                        : "text-grey-700 bg-white")
                    }
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTab(1);
                    }}
                    data-toggle="tab"
                    href="#link1"
                    role="tablist"
                  >
                    Fashion
                  </a>
                </li>
                <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                  <a
                    className={
                      "text-xs font-bold uppercase px-5 py-3 rounded block leading-normal " +
                      (openTab === 2
                        ? "text-white bg-[#5E9387]"
                        : "text-grey-700 bg-white")
                    }
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTab(2);
                    }}
                    data-toggle="tab"
                    href="#link2"
                    role="tablist"
                  >
                    Food
                  </a>
                </li>
                <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                  <a
                    className={
                      "text-xs font-bold uppercase px-5 py-3 rounded block leading-normal " +
                      (openTab === 3
                        ? "text-white bg-[#5E9387]"
                        : "text-grey-700 bg-white")
                    }
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTab(3);
                    }}
                    data-toggle="tab"
                    href="#link3"
                    role="tablist"
                  >
                    Transport
                  </a>
                </li>
              </ul>

              <div className="relative flex flex-col min-w-0 break-words  w-full mb-6  rounded">
                <div className="px-4 py-5 flex-auto">
                  <div className="tab-content tab-space">
                    <div
                      className={openTab === 1 ? "block" : "hidden"}
                      id="link1"
                    >
                      {/* Fashion Rewards */}
                      <motion.div class="container my-12 mx-auto px-4 md:px-12">
                        <div class="flex flex-wrap -mx-1 lg:-mx-4">
                          {rewardList
                            .filter((reward) => {
                              if (reward.rewardType == "Fashion") {
                                return reward;
                              }
                            })
                            .map((reward) => {
                              return (
                                <RewardCard
                                  RewardId={reward.rewardId}
                                  RewardBrandName={reward.brandName}
                                  RewardName={reward.rewardName}
                                  RewardPointsRequired={
                                    reward.redemptionPointsRequired
                                  }
                                  RewardImage={reward.imageAddress}
                                  RewardDescription={reward.rewardDescription}
                                  RewardWebsite={reward.website}
                                  UserPoints={userRewardPoints}
                                  UserTransactions={userTransactions}
                                />
                              );
                            })}
                        </div>
                      </motion.div>
                    </div>

                    <div
                      className={openTab === 2 ? "block" : "hidden"}
                      id="link2"
                    >
                      {/* Food Rewards */}
                      <div class="container my-12 mx-auto px-4 md:px-12">
                        <div className="flex flex-wrap -mx-1 lg:-mx-4">
                          {rewardList
                            .filter((reward) => {
                              if (reward.rewardType == "Food") {
                                return reward;
                              }
                            })
                            .map((reward) => {
                              return (
                                <RewardCard
                                  RewardId={reward.rewardId}
                                  RewardBrandName={reward.brandName}
                                  RewardName={reward.rewardName}
                                  RewardPointsRequired={
                                    reward.redemptionPointsRequired
                                  }
                                  RewardImage={reward.imageAddress}
                                  RewardDescription={reward.rewardDescription}
                                  RewardWebsite={reward.website}
                                  UserPoints={userRewardPoints}
                                  UserTransactions={userTransactions}
                                />
                              );
                            })}
                        </div>
                      </div>
                    </div>
                    <div
                      className={openTab === 3 ? "block" : "hidden"}
                      id="link3"
                    >
                      {/* Transport Rewards */}
                      <div class="container my-12 mx-auto px-4 md:px-12">
                        <div className="flex flex-wrap -mx-1 lg:-mx-4">
                          {rewardList
                            .filter((reward) => {
                              if (reward.rewardType == "Transport") {
                                return reward;
                              }
                            })
                            .map((reward) => {
                              return (
                                <RewardCard
                                  RewardId={reward.rewardId}
                                  RewardBrandName={reward.brandName}
                                  RewardName={reward.rewardName}
                                  RewardPointsRequired={
                                    reward.redemptionPointsRequired
                                  }
                                  RewardImage={reward.imageAddress}
                                  RewardDescription={reward.rewardDescription}
                                  RewardWebsite={reward.website}
                                  UserPoints={userRewardPoints}
                                  UserTransactions={userTransactions}
                                />
                              );
                            })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
      )}
    </>
  );
};

export default Rewards;
