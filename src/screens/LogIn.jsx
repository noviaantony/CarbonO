import React from 'react'
import LogInForm from "../components/signup_login/LogInForm";
import SignUpForm from "../components/signup_login/SignUpForm";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";

const LogIn = () => {
  return (
    <div>
      <Navbar />
      <SignUpForm />
      {/* <LogInForm /> */}
      <Footer />
    </div>
  );
}

export default LogIn;
