import React, {useContext} from "react";
// import './App.css';
import Landing from './screens/Landing';
import SignUpForm from "./components/registration/SignUpForm";
import LogInForm from "./components/registration/LogInForm";
import CarbonTracker from "./screens/CarbonTracker";
import Dashboard from "./screens/Dashboard";
import Donate from "./screens/Donate";
import Rewards from "./screens/Rewards";
// import ClaimReward2 from "./screens/ClaimReward2";
import Footer from "./components/footer/Footer";

import {Routes, Route, Router} from "react-router-dom"
import AuthContext from "./context/AuthProvider";
import AuthNavbar from "./components/navigation/AuthNavbar";
import NotAuthNavbar from "./components/navigation/NotAuthNavbar";



function App() {
    const {auth} = useContext(AuthContext);
    console.log(auth.authenticated);
  return (
    // <div className="App">
    //     <UserComponent/>
    // </div>
    <>
        {/*<Router>*/}
        {auth.authenticated ? <AuthNavbar /> : <NotAuthNavbar />}
      <Routes>
        <Route path="*" element={<Landing />} />
        <Route path="/CarbonTracker" element={<CarbonTracker />} />
        <Route path="/Login" element={<LogInForm />} />
        <Route path="/Signup" element={<SignUpForm />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Donate" element={<Donate />} />
        <Route path="/Rewards" element={<Rewards />} />
      </Routes>
        {/*</Router>*/}
      <Footer />


    </>
  );
}

export default App;
