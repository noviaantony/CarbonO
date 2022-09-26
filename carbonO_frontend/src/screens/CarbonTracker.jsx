import React from 'react'
import Navbar from "./Navbar";
import Footer from "../components/footer/Footer";
import Searchbar from "../components/carbontracker/Searchbar";
import Card2 from "../components/carbontracker/Card2";


const CarbonTracker = () => {
  return (
    <div className="items-center">
      {/* <Navbar /> */}
      <Searchbar />

      {/* <div class=" container my-12 mx-auto px-4 md:px-12 items-center">
        <div class="flex flex-wrap lg:-mx-4 items-center mx-60 grid-rows-3"> */}
      <div class="container my-12 mx-auto px-4 md:px-12">
        <div class="flex flex-wrap -mx-1 lg:-mx-4">
          <Card2 />
          <Card2 />
          <Card2 />
          <Card2 />
          <Card2 />
          <Card2 />
        </div>
      </div>
    </div>
  );
}

export default CarbonTracker
