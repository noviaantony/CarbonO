import React from "react";
import RewardCard from "../components/rewards/RewardCard";
import Header from "../components/misc/Header";

const Rewards = () => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="h-max">
        <Header
          Title="Claim Rewards, Save the Earth"
          Description="claim discount codes, free items from sustainable companies using your e-credits!"
        />
        <div className="flex flex-wrap">
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
                  {/*  */}
                  <div
                    className={openTab === 1 ? "block" : "hidden"}
                    id="link1"
                  >
                    <div class="container my-12 mx-auto px-4 md:px-12">
                      <div class="flex flex-wrap -mx-1 lg:-mx-4">
                        <RewardCard />
                        <RewardCard />
                        <RewardCard />
                        <RewardCard />
                      </div>
                    </div>
                  </div>

                  <div
                    className={openTab === 2 ? "block" : "hidden"}
                    id="link2"
                  >
                    <div class="container my-12 mx-auto px-4 md:px-12">
                      <div class="flex flex-wrap -mx-1 lg:-mx-4">
                        <RewardCard />
                        <RewardCard />
                        
                      </div>
                    </div>
                  </div>

                  <div
                    className={openTab === 3 ? "block" : "hidden"}
                    id="link3"
                  >
                    <div class="container my-12 mx-auto px-4 md:px-12">
                      <div class="flex flex-wrap -mx-1 lg:-mx-4">
                        <RewardCard />
                        <RewardCard />
                        <RewardCard />
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rewards;
