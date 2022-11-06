import React, {useEffect} from 'react'
import userRewardService from "../../services/UserRewardService";

const RewardsTable = ({ historicalData }) => {
    const [rewards, setRewards] = React.useState([]);


    useEffect(() => {
      console.log("rewards data:", historicalData)
      let rewardTransaction = [];
      historicalData.forEach((data) => {
        if (data.donation === false) {
          rewardTransaction.push(data);
        }
      });
      setRewards(rewardTransaction)
      console.log("rewards:",rewards);
    }, []);

  return (
    <div className="overflow-x-auto relative sm:rounded-lg  m-6 font-default w-4/12">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="py-3 px-6">
              Reward/Donation
            </th>
            <th scope="col" className="py-3 px-6">
              Brand/Organisation
            </th>
            <th scope="col" className="py-3 px-6">
              Date
            </th>
            <th scope="col" className="py-3 px-6">
              E-Credits Used
            </th>
          </tr>
        </thead>
        <tbody>
          {rewards.map((data) => {

              return (
                    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                      <th
                        scope="row"
                        className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {data.reward.brandName.substring(0, data.reward.brandName.length - 2)}
                      </th>
                      <td className="py-4 px-6">
                        {data.dateOfTransaction.substring(0, 10)}
                      </td>
                      <td className="py-4 px-6">{data.reward.redemptionPointsRequired}</td>
                    </tr>
              )
          })}
        </tbody>
      </table>
    </div>
  );
};

export default RewardsTable
