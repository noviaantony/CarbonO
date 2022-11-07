import React, { useContext, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./screens/Landing";
import SignUpForm from "./components/registration/SignUpForm";
import LogInForm from "./components/registration/LogInForm";
import CarbonTracker from "./screens/CarbonTracker";
import Dashboard from "./screens/Dashboard";
import Donate from "./screens/Donate";
import Rewards from "./screens/Rewards";
import Payment from "./screens/Payment";
import Footer from "./components/footer/Footer";
import AuthContext from "./hooks/AuthContext";
import AuthNavbar from "./components/navigation/AuthNavbar";
import NotAuthNavbar from "./components/navigation/NotAuthNavbar";
import PageNotFound from "./screens/PageNotFound";
import ResetPassword from "./components/registration/ResetPassword";
import ForgotPassword from "./components/registration/ForgotPassword";
import ThankYou from "./components/registration/ThankYou";

function App() {
  const { auth, setAuth } = useContext(AuthContext);
  // useEffect(() => {
  //
  //     setAuth({"authenticated": localStorage.getItem("authenticated"),"accessToken": localStorage.getItem("token")
  //       , "userId": localStorage.getItem("userId"), "firstName": localStorage.getItem("firstName")});
  //     console.log("nav bar auth: ", auth.accessToken);
  // },[])

  return (
    <>
      {auth.authenticated ? <AuthNavbar /> : <NotAuthNavbar />}
      <Routes>
        {auth.authenticated ? (
          <>
            <Route path="/" element={<Landing />} />
            <Route path="/CarbonTracker" element={<CarbonTracker />} />
            <Route path="/ResetPassword" element={<ResetPassword />} />
            <Route path="/ForgetPassword" element={<ForgotPassword />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Donate" element={<Donate />} />
            <Route path="/Rewards" element={<Rewards />} />
            <Route path="/Payment" element={<Payment />} />
            <Route path="/Login" element={<LogInForm />} />
            <Route path="/Signup" element={<SignUpForm />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Landing />} />
            <Route path="/Login" element={<LogInForm />} />
            <Route path="/Signup" element={<SignUpForm />} />
          </>
        )}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
