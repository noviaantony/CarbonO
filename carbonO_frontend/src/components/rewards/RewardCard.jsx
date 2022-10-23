import React, {useState} from 'react';

const RewardCard = ({
  // RewardBrandName,
  // RewardBrandWebsite,
  // RewardItemName,
  // RewardImage, 
  // RewardCredits,
  // RewardDescription,
  // progressPercentage
}) => {


  let claimable = true;

  let progressPercentage = 90;

  if (progressPercentage < 100) {
    claimable = false;
  }

  //  <div className="h-1 w-full bg-gray-300 mt-5">
     
  //  </div>;

  

  return (
    <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 font-default">
      <article class="overflow-hidden rounded-lg bg-white">
        <img
          alt="meow"
          class="block h-72 w-full"
          src="https://cdn.eatigo.com/eatigo_VeganBurg_20170502120655_0518.jpg "
        />
        <header class="flex items-left leading-tight p-2 md:p-4 ">
          <h1 class="text-2xl font-bold">Vegan Burg</h1>
        </header>
        <div>
          <span class="text-m font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200 ml-4">
            50 E-Credits
          </span>
        </div>
        <div className="flex items-center justify-items-start leading-tight p-2 md:p-4">
          meow
        </div>
        <div className="flex items-center justify-items-start leading-tight p-2 md:p-4">
          <h2 className="font-semibold">Progress:</h2>
          <div className="h-1 w-9/12 ml-5 mb-4  bg-gray-300 mt-5">
            <div
              style={{ width: `${progressPercentage}%` }}
              className={`h-full w-9/12 ${
                progressPercentage < 70 ? "bg-red-600" : "bg-green-600"
              }`}
            ></div>
          </div>
        </div>

        <footer class="flex items-center justify-between leading-none p-2 md:p-4 bg-white">
          <div class="flex items-center no-underline  text-black" href="#">
            <button
              to="/ClaimReward"
              className="inline-flex items-center py-2 px-3 text-xs font-xs text-center text-white bg-[#5E9387] rounded-lg  focus:outline-none transition duration-300 mr-3 font-semibold hover:bg-gray-700 hover:text-white
          "
              type="button"
            >
              Claim Reward
            </button>
            <button
              href="https://cats.com/"
              className="inline-flex items-center py-1.5 px-3 text-xs font-xs text-center bg-white text-[#5E9387] rounded-md focus:outline-none transition duration-300 mr-3 font-semibold border-[#5E9387] border-2 border-solid hover:bg-gray-100
          "
              type="button"
            >
              Visit Brand Website
            </button>
          </div>
        </footer>
      </article>
    </div>
  );
};

export default RewardCard;
