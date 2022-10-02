import React from 'react'
import Wallet from '../components/dashboard/Wallet'
import Table from "../components/dashboard/Table";
import DonutChart from "../components/dashboard/DonutChart";

const Dashboard = () => {
  return (
    <div>
      <Wallet/>
      <Table/>
      <DonutChart/>
    </div>
  )
}

export default Dashboard
