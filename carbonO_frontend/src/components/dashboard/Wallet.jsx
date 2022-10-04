import React from 'react'
import {FaWallet} from "react-icons/fa";

const Wallet = () => {
  return (
    <div className="p-4 text-sm text-[#5e938780] bg-white rounded-lg dark:bg-gray-700 dark:text-gray-300 flex items-stretch m-6 shadow-md font-default">
      <FaWallet size={40} />
      {/* <span className="font-medium">Dark alert!</span>  */}

      <div className="ml-6 mt-2 text-xl font-semibold text-gray-700">
        <span className="font-extrabold mr-4">335</span>E-Credits
      </div>
    </div>
  );
}

export default Wallet
