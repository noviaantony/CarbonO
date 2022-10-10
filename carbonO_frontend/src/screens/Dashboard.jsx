import React from "react";
//import Wallet from "../components/dashboard/Wallet";
import Table from "../components/dashboard/Table";
//import DonutChart from "../components/dashboard/DonutChart";
import Statistics from "../components/dashboard/Statistics";

const Dashboard = () => {
  return (
    <>
      <div>
        <h1 class="text-2xl ml-6 mt-4 font-bold">Welcome Back User</h1>
        {/* <Wallet /> */}
        <Statistics />
        <Table />
        {/* <div class="flex flex-wrap -mx-1 lg:-mx-4">
          <DonutChart />
          <DonutChart />
          <DonutChart />
        </div> */}
      </div>
    </>
  );
};

export default Dashboard;
