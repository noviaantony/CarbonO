import React, {useEffect, useRef, useState} from 'react'
import {HiMail, HiLockClosed, HiUser} from "react-icons/hi";
import { ReactComponent as SignUpSvg } from "./SignUpSvg.svg";
import { Link } from "react-router-dom";
import axios from "axios";

const REGISTER_URL = 'http://localhost:8080/api/v1/carbonO/user/registration'

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

  useEffect(() => {
    userRef.current.focus();
  }, [])

  useEffect(() => {
    setErrMsg();
  }, [firstName,lastName, email, password])

  const handleSubmit = async (e) => {
    e.preventDefault();

    const jsonRegistrationInfo = JSON.stringify({
            "firstName": firstName,
            "lastName": lastName,
            "email": email,
            "password": password}
    );

    if (password !== confirmPassword){
        setErrMsg('Passwords do not match');
        console.log(errMsg)
        errRef.current.focus();
    }

    try{
        const response = await axios.post(REGISTER_URL,
            jsonRegistrationInfo,
            {headers: {'Content-Type': 'application/json'}});
        console.log(response)
        setSuccess(true);
    }catch (err){
        if (!err?.response){
            setErrMsg('Unable to connect to server');
        }  else if (err.response.status === 403){
            setErrMsg('email already taken');
        } else {
            setErrMsg('Unable to login');
        }
        console.log(errMsg)
        errRef.current.focus();
    }
  }
  return (
      <>
        {success ? (
            <section>
              <h1>Successfully Signed up</h1>
              <br />
              <p>
                <a href="#">Go to Login page</a>
              </p>
            </section>
        ) : (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 font-default">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
          <div className="w-3/5 p-5">
            <div>
              <a
                className="toggleColour text-[#5E9387] my-4 leading-tight no-underline hover:no-underline font-bold text-xl lg:text-2xl"
                href="#"
              >
                CarbonO
              </a>
            </div>
            <div className="py-10">
                <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                {/*change this accordingly this is the error message*/}
              <h2 className="text-2xl font-bold text-gray-700 mb-2">
                Sign up for an account
              </h2>
              <div className="border-2 w-10 border-gray-700 bg-gray-700 inline-block mb-2"></div>
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
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  required
                />
              </div>
              <div className="bg-gray-100 w-64 p-2 flex items-center rounded mb-3">
                <div className="bg-gray-100 w-64 p-2">
                  <HiLockClosed className="text-grey-100 m-2" />
                </div>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="re-enter your password"
                  className="bg-gray-100 outline-none text-m flex-1"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  value={confirmPassword}
                  required
                />
              </div>
              {/* password section */}
              <button
                // href=""
                className="px-7 py-3 w-64 justify-center rounded-md border border-transparent text-sm focus:outline-none transition duration-300 bg-[#5E9387] hover:bg-gray-700  text-center marker:sm:w-auto font-bold text-white"
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
          {/* Right Section */}
          <div className="w-2/5 bg-[#5E9387]  text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
            {/* <h2 className="text-3xl font-bold mb-2">Start your </h2>
            <div className="border-2 w-10 border-white inline-block mb-2"></div>
            <p className="mb-10">Start your journey with us today</p>
            <SignInSvg width="15rem" />
            <a
              href=""
              className="roup relative flex w-full justify-center rounded-md border border-transparent text-sm text-gray-700 focus:outline-none transition duration-300 px-7 py-3  bg-white text-center marker:sm:w-auto font-bold hover:shadow-md hover:bg-gray-700 hover:text-white"
            >
              Sign Up
            </a>{" "} */}
            <SignUpSvg width="16rem" />
          </div>

          {/* Right Section */}
        </div>
      </main>
    </div>
        )}
      </>
  );
}

export default SignUpForm
