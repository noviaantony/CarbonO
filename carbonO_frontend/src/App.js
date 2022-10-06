import React from "react";
// import './App.css';
import Landing from './screens/Landing';
import SignUpForm from "./components/signup_login/SignUpForm";
import LogInForm from "./components/signup_login/LogInForm";
import CarbonTracker from "./screens/CarbonTracker";
import Dashboard from "./screens/Dashboard";
import Donate from "./screens/Donate";
import Rewards from "./screens/Rewards";
// import ClaimReward2 from "./screens/ClaimReward2";
import Footer from "./components/footer/Footer";

import Navbar from "./screens/Navbar";
import {Routes, Route} from "react-router-dom"



function App() {
  return (
    // <div className="App">
    //     <UserComponent/>
    // </div>
    <>
      <Navbar/>
      <Routes>
        <Route path="*" element={<Landing />} />
        <Route path="/CarbonTracker" element={<CarbonTracker />} />
        <Route path="/Login" element={<LogInForm />} />
        <Route path="/Signup" element={<SignUpForm />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Donate" element={<Donate />} />
        <Route path="/Rewards" element={<Rewards />} />
        {/* <Route path="/ClaimReward" element={<ClaimReward2 />} /> */}
      </Routes>
      {/* <Footer /> */}

      {/* <Footer /> */}
    </>
  );
}

export default App;
