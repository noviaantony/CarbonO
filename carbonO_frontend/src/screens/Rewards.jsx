import React, {useContext, useState, useRef, useEffect} from "react";
import { ThreeDots } from "react-loader-spinner";
import RewardCard from "../components/rewards/RewardCard";
import Header from "../components/misc/Header";
import UserRewardService from "../services/UserRewardService";
import Modal from "react-modal";
import "../styles/styles.css";



import AuthContext from "../context/AuthProvider";

const Rewards = () => {
  const [openTab, setOpenTab] = React.useState(1);
  const [rewardList, setRewardList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [userRewardPoints, setUserRewardPoints] = useState(0);
  const {auth} = useContext(AuthContext);
    // let userRewardPoints = 0;

  React.useEffect(()=> {
    setLoading(true);
    UserRewardService.getAllRewards()
        .then((response) => {
          setRewardList(response);
        }).then((data) => {
      setLoading(false);
    })
  },[])

  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

    // get userReward account information
    useEffect(() => {
      UserRewardService
          .getUserReward(auth.userId, auth.accessToken)
          .then((response) => {
            setUserRewardPoints(response.rewardPoints);
            console.log(userRewardPoints);
          });
    }, []);
  // const rewardList = [
  //   {
  //     brandName: "Tokyo Bags",
  //     rewardName: "some fashion",
  //     redemptionPointsRequired: 6000,
  //     rewardDescription: "meow",
  //     rewardQuantity: 3000,
  //     website: "cats.com",
  //     imageAddress:
  //       "https://cdn.eatigo.com/eatigo_VeganBurg_20170502120655_0518.jpg",
  //     rewardType: "Fashion",
  //   },
  //   {
  //     brandName: "Vegan Burg",
  //     rewardName: "mou",
  //     redemptionPointsRequired: 6000,
  //     rewardDescription: "meow",
  //     rewardQuantity: 3000,
  //     website: "cats.com",
  //     imageAddress:
  //       "https://cdn.eatigo.com/eatigo_VeganBurg_20170502120655_0518.jpg",
  //     rewardType: "Food",
  //   },
  //   {
  //     brandName: "Grab",
  //     rewardName: "mmeowww",
  //     redemptionPointsRequired: 6000,
  //     rewardDescription: "meow",
  //     rewardQuantity: 3000,
  //     website: "cats.com",
  //     imageAddress:
  //       "https://cdn.eatigo.com/eatigo_VeganBurg_20170502120655_0518.jpg",
  //     rewardType: "Transport",
  //   },
  // ];

  return (
    <>
      <div className="h-max">
        <Header
          Title="Claim Rewards, Save the Earth"
          Description="claim discount codes, free items from sustainable companies using your e-credits!"
        />

        {/*<button onClick={toggleModal}>Open modal</button>*/}
        {/*<Modal*/}
        {/*  isOpen={isOpen}*/}
        {/*  onRequestClose={toggleModal}*/}
        {/*  contentLabel="My dialog"*/}
        {/*  className="mymodal"*/}
        {/*  overlayClassName="myoverlay"*/}
        {/*  closeTimeoutMS={500}*/}
        {/*>*/}
        {/*  <div class="relative p-4 w-full max-w-md h-full md:h-auto">*/}
        {/*    <button*/}
        {/*      type="button"*/}
        {/*      class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"*/}
        {/*      data-modal-toggle="popup-modal"*/}
        {/*      onClick={toggleModal}*/}
        {/*    >*/}
        {/*      <svg*/}
        {/*        aria-hidden="true"*/}
        {/*        class="w-5 h-5"*/}
        {/*        fill="currentColor"*/}
        {/*        viewBox="0 0 20 20"*/}
        {/*        xmlns="http://www.w3.org/2000/svg"*/}
        {/*      >*/}
        {/*        <path*/}
        {/*          fill-rule="evenodd"*/}
        {/*          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"*/}
        {/*          clip-rule="evenodd"*/}
        {/*        ></path>*/}
        {/*      </svg>*/}
        {/*      <span class="sr-only">Close modal</span>*/}
        {/*    </button>*/}
        {/*    <div class="p-6 text-center">*/}
        {/*      <svg*/}
        {/*        aria-hidden="true"*/}
        {/*        class="mx-auto mb-4 w-14 h-14 text-gray-400 dark:text-gray-200"*/}
        {/*        fill="none"*/}
        {/*        stroke="currentColor"*/}
        {/*        viewBox="0 0 24 24"*/}
        {/*        xmlns="http://www.w3.org/2000/svg"*/}
        {/*      >*/}
        {/*        <path*/}
        {/*          stroke-linecap="round"*/}
        {/*          stroke-linejoin="round"*/}
        {/*          stroke-width="2"*/}
        {/*          d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"*/}
        {/*        ></path>*/}
        {/*      </svg>*/}
        {/*      <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">*/}
        {/*        Are you sure you want to delete this product?*/}
        {/*      </h3>*/}
        {/*      <button*/}
        {/*        data-modal-toggle="popup-modal"*/}
        {/*        type="button"*/}
        {/*        class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"*/}
        {/*      >*/}
        {/*        Yes, I'm sure*/}
        {/*      </button>*/}
        {/*      <button*/}
        {/*        data-modal-toggle="popup-modal"*/}
        {/*        type="button"*/}
        {/*        class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"*/}
        {/*        onClick={toggleModal}*/}
        {/*      >*/}
        {/*        No, cancel*/}
        {/*      </button>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</Modal>*/}

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
          <div className="flex flex-wrap ">
            <div className="w-full">
              <ul
                className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row mx-36 mt-12"
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
                      <div class="container my-12 mx-auto px-4 md:px-12">
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
                                  RewardBrandName={reward.brandName}
                                  RewardName={reward.rewardName}
                                  RewardPointsRequired={
                                    reward.redemptionPointsRequired
                                  }
                                  RewardImage={reward.imageAddress}
                                  RewardDescription={reward.rewardDescription}
                                  RewardWebsite={reward.website}
                                  UserPoints={userRewardPoints}
                                />
                              );
                            })}
                        </div>
                      </div>
                    </div>

                    <div
                      className={openTab === 2 ? "block" : "hidden"}
                      id="link2"
                    >
                      {/* Food Rewards */}
                      <div class="container my-12 mx-auto px-4 md:px-12">
                        <div class="flex flex-wrap -mx-1 lg:-mx-4">
                          {rewardList
                            .filter((reward) => {
                              if (reward.rewardType == "Food") {
                                return reward;
                              }
                            })
                            .map((reward) => {
                              return (
                                <RewardCard
                                  RewardBrandName={reward.brandName}
                                  RewardName={reward.rewardName}
                                  RewardPointsRequired={
                                    reward.redemptionPointsRequired
                                  }
                                  RewardImage={reward.imageAddress}
                                  RewardDescription={reward.rewardDescription}
                                  RewardWebsite={reward.website}
                                  UserPoints={userRewardPoints}
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
                        <div class="flex flex-wrap -mx-1 lg:-mx-4">
                          {rewardList
                            .filter((reward) => {
                              if (reward.rewardType == "Transport") {
                                return reward;
                              }
                            })
                            .map((reward) => {
                              return (
                                <RewardCard
                                  RewardBrandName={reward.brandName}
                                  RewardName={reward.rewardName}
                                  RewardPointsRequired={
                                    reward.redemptionPointsRequired
                                  }
                                  RewardImage={reward.imageAddress}
                                  RewardDescription={reward.rewardDescription}
                                  RewardWebsite={reward.website}
                                  UserPoints={userRewardPoints}
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
          </div>
        )}
      </div>
      )}
    </>
  );
};

export default Rewards;
