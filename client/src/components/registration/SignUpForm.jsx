import React, {useEffect, useRef, useState} from 'react'
import {HiMail, HiLockClosed, HiUser} from "react-icons/hi";
import { ReactComponent as SignUpSvg } from "./SignUpSvg.svg";
import PasswordChecklist from "react-password-checklist"
import {Link, Navigate} from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
import validator from "validator";

const REGISTER_URL = 'https://carbonoapp.net/api/v1/carbonO/user/registration'

const SignUpForm = () => {
  const userRef = useRef();
  const errRef = useRef();

  const[firstName, setFirstName] = useState('');
  const[lastName, setLastName] = useState('');
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');
  const[confirmPassword, setConfirmPassword] = useState('');
  const[errMsg, setErrMsg] = useState('');
  const[success, setSuccess] = useState(false);

  const [pw, setPw] = useState("");
	const [confirmPw, setConfirmPw] = useState("");

  const [isOpen, setIsOpen] = useState(false);

  function toggleConfirmationModal() {
    setIsOpen(!isOpen);
  }

  const validatePassword = (password) => {
    if (validator.isStrongPassword(password, {minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1,})) {
      return true;
    } else {
      return false
    }
  };


  useEffect(() => {
    userRef.current.focus();
  }, [])

  useEffect(() => {
    setErrMsg();
  }, [firstName,lastName, email, password])

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password != confirmPassword){
      setErrMsg('Passwords do not match!');
      console.log(errMsg)
      errRef.current.focus();
      
    } else if (!validatePassword(password)) {
      setErrMsg("Passwords is not strong enough!");
      console.log(errMsg);
      errRef.current.focus();


    } else {

      const jsonRegistrationInfo = JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      });

      try {
        const response = await axios.post(REGISTER_URL, jsonRegistrationInfo, {
          headers: { "Content-Type": "application/json" },
        });
        console.log(response);
        setSuccess(true);
        setErrMsg("You have succesfully signed up! Check your email to verify your account.")
      } catch (err) {
        if (!err?.response) {
          setErrMsg("Oops! Unable to connect to server.");
        } else if (err.response.status === 403) {
          setErrMsg("Oops! This email is taken.");
        } else {
          setErrMsg("Unable to signup, please check if your email exists.");
        }
        console.log(errMsg);
        errRef.current.focus();
      }

    }

  }


  return (
    <>
      <motion.div
        className="actions flex flex-col items-center justify-center min-h-screen py-2 font-default mt-20 mb-20"
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
      >
        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
          <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
            <div className="w-3/5 p-5">
              <div className="py-10">
                <p
                  ref={errRef}
                  className={errMsg ? "errmsg" : "offscreen"}
                  aria-live="assertive"
                ></p>
                <h2 className="text-2xl font-bold text-gray-700 mb-2">
                  Sign up for an account
                </h2>
                <div className="border-2 w-10 border-gray-700 bg-gray-700 inline-block mb-2"></div>
              </div>
              <div className='mb-8'>
                <span className=" text-red-800 text-sm mr-2 px-2.5 py-0.5 rounded font-bold mb-8">
                  {errMsg}
                </span>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="flex flex-col items-center">
                  {/* First and Last name section */}
                  <div className="bg-gray-100 w-64 p-2 flex items-center rounded mb-3">
                    <div className="bg-gray-100 w-64 p-2">
                      <HiUser className="text-grey-100 m-2" />
                    </div>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="enter your first name"
                      className="bg-gray-100 outline-none text-m flex-1"
                      ref={userRef}
                      onChange={(e) => setFirstName(e.target.value)}
                      value={firstName}
                      required
                    />
                  </div>
                  <div className="bg-gray-100 w-64 p-2 flex items-center rounded mb-3">
                    <div className="bg-gray-100 w-64 p-2">
                      <HiUser className="text-grey-100 m-2" />
                    </div>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="enter your last name"
                      className="bg-gray-100 outline-none text-m flex-1"
                      onChange={(e) => setLastName(e.target.value)}
                      value={lastName}
                      required
                    />
                  </div>
                  {/* First and Last name section */}

                  {/* email section */}
                  <div className="bg-gray-100 w-64 p-2 flex items-center rounded mb-3">
                    <div className="bg-gray-100 w-64 p-2">
                      <HiMail className="text-grey-100 m-2" />
                    </div>
                    <input
                      type="email"
                      name="email"
                      placeholder="enter your email"
                      className="bg-gray-100 outline-none text-m flex-1"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      required
                    />
                  </div>
                  {/* email section */}

                  {/* password section */}
                  <div className="bg-gray-100 w-64 p-2 flex items-center rounded mb-3">
                    <div className="bg-gray-100 w-64 p-2">
                      <HiLockClosed className="text-grey-100 m-2" />
                    </div>
                    <input
                      type="password"
                      name="password"
                      placeholder="enter your password"
                      className="bg-gray-100 outline-none text-m flex-1"
                      onChange={(e) => {
                        setPassword(e.target.value);
                        setPw(e.target.value);
                      }}
                      value={password}
                      required
                    />
                  </div>
                  <div className="bg-gray-100 w-64 p-2 flex items-center rounded mb-8">
                    <div className="bg-gray-100 w-64 p-2">
                      <HiLockClosed className="text-grey-100 m-2" />
                    </div>
                    <input
                      type="password"
                      name="confirmPassword"
                      placeholder="re-enter your password"
                      className="bg-gray-100 outline-none text-m flex-1"
                      onChange={(e) => {
                        setConfirmPassword(e.target.value);
                        setConfirmPw(e.target.value);
                      }}
                      value={confirmPassword}
                      required
                    />
                  </div>
                  <PasswordChecklist
                    rules={[
                      "minLength",
                      "specialChar",
                      "number",
                      "capital",
                      "match",
                    ]}
                    minLength={8}
                    value={pw}
                    valueAgain={confirmPw}
                    onChange={(isValid) => {}}
                  />
                  {/* password section */}
                  <button
                    className="px-7 py-3 w-64 justify-center rounded-md border border-transparent text-sm focus:outline-none transition duration-300 bg-[#5E9387] hover:bg-gray-700  text-center marker:sm:w-auto font-bold text-white mt-8"
                    onClick={success && toggleConfirmationModal}
                  >
                    Sign Up
                  </button>
                  <Link
                    to="/Login"
                    className="text-xs font-bold text-gray-700 hover:text-[#5E9387] transition duration-300 mt-6 hover:underline-offset-4"
                  >
                    Already have an account? Sign in here
                  </Link>
                </div>
              </form>
            </div>
            <div className="w-2/5 bg-[#5E9387]  text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
              <SignUpSvg width="16rem" />
            </div>
          </div>
        </main>
      </motion.div>
    </>
  );
}

export default SignUpForm;
