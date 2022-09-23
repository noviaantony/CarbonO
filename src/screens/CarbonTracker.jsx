import React from 'react'
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Searchbar from "../components/carbontracker/Searchbar";
import Card from "../components/carbontracker/Card";


const CarbonTracker = () => {
  return (
    <div>
      <Navbar />
      <Searchbar />

      <div class=" container my-12 mx-auto px-4 md:px-12">
        <div class="flex flex-wrap -mx-1 lg:-mx-4">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>

      {/* <Footer /> */}
    </div>
  );
}

export default CarbonTracker
