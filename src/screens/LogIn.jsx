import React from 'react'
import LogInForm from "../components/signup_login/LogInForm";
import SignUpForm from "../components/signup_login/SignUpForm";
import Footer from "../components/footer/Footer";


const LogIn = () => {
  return (
    <div>
      {/* <LogInForm /> */}
      <SignUpForm/>
      <Footer />
    </div>
  );
}

export default LogIn;
