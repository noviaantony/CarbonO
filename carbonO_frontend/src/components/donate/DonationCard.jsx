import React from 'react'

const DonationCard = ({Title, Image, Description, Website}) => {
  return (
    <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 font-default">
      <article class="overflow-hidden rounded-lg bg-white">
        <img alt="" class="block h-72 w-full object-fit" src={Image} />
        <header class="flex items-left leading-tight p-2 md:p-4 ">
          <h1 class="text-2xl font-bold">{Title}</h1>
        </header>
        <p className="flex items-left leading-tight p-2 md:p-4 text-sm">
          {Description}
        </p>

        <footer class="flex items-center justify-between leading-none p-2 md:p-4 bg-white">
          <div class="flex items-center no-underline  text-black" href="#">
            <button
              to="/ClaimReward"
              className="inline-flex items-center py-2 px-3 text-xs font-xs text-center text-white bg-[#5E9387] rounded-lg  focus:outline-none transition duration-300 mr-3 font-semibold hover:bg-gray-700 hover:text-white
          "
              type="button"
            >
              Donate E-Credits
            </button>
            <button
              to="/ClaimReward"
              className="inline-flex items-center py-2 px-3 text-xs font-xs text-center text-white bg-[#5E9387] rounded-lg  focus:outline-none transition duration-300 mr-3 font-semibold hover:bg-gray-700 hover:text-white
          "
              type="button"
            >
              Donate Cash
            </button>
            <a
              href={Website}
              className="inline-flex items-center py-1.5 px-3 text-xs font-xs text-center bg-white text-[#5E9387] rounded-md focus:outline-none transition duration-300 mr-3 font-semibold border-[#5E9387] border-2 border-solid hover:bg-gray-100
          "
              type="button"
            >
              Visit Website
            </a>
          </div>
        </footer>
      </article>
    </div>
  );
}

export default DonationCard;
