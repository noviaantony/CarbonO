import React, {useRef, useState, useEffect, useContext} from 'react'
import { HiMail, HiLockClosed } from "react-icons/hi";
import { ReactComponent as SignInSvg } from "./SignInSvg.svg";
import {Navigate ,Link, useNavigate} from "react-router-dom";
import AuthContext, {AuthProvider} from "../../context/AuthProvider";
import axios from "axios";
import CarbonTrackerService from "../../services/CarbonTrackerService";


const LOGIN_URL = 'http://localhost:8080/api/v1/carbonO/user/login'
const USER_ID_URL = 'http://localhost:8080/api/v1/carbonO/user/getUserId'

const LogInForm = () => {
  const {auth , setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();

  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');
  const[errMsg, setErrMsg] = useState('');
  const[success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, [])

  useEffect(() => {
    setErrMsg();
  }, [email, password])

const handleSubmit = async (e) => {
    e.preventDefault();

    // const url = require('http://localhost:8080/api/v1/carbonO/user/login');
    // const params = new url.URLSearchParams({ username: email, password: password });

    const params = new URLSearchParams();
    params.append('username', email);
    params.append('password', password);

    try {
        const loginResponse = await axios.post(LOGIN_URL,
            params);
        // console.log(JSON.stringify(response?.data))
        localStorage.setItem('token', loginResponse?.data?.access_token);

        const userIdResponse = await axios.get(USER_ID_URL, {params: {email: email},
            headers :{Authorization: `Bearer ${localStorage.getItem('token')}`}
        });

        localStorage.setItem('userId', userIdResponse.data);
        setAuth({"authenticated": true, "accessToken": loginResponse?.data?.access_token, "userId": userIdResponse.data});
        console.log("from login");
        console.log(auth);
        // console.log(localStorage.getItem('token')); //for testing
        // console.log(localStorage.getItem('userId'));
        // const carbonTrackerConsumption = CarbonTrackerService.getUserTotalCarbonConsumption();
        console.log( await CarbonTrackerService.getUserTotalCarbonConsumption());

        setSuccess(true);
    } catch (err){
        if (!err?.response){
            setErrMsg('Unable to connect to server');
        } else if (err.response.status === 400){
            setErrMsg('Missing Username or password');
        } else if (err.response.status === 401){
            setErrMsg('Unauthorized');
        } else {
            setErrMsg('Unable to login');
        }
        errRef.current.focus();
    }
}

  return (
      <>
        {success ? (
          <section>
            <br />
            <p>
              <Navigate to="/CarbonTracker" />
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
              <h2 className="text-2xl font-bold text-gray-700 mb-2">
                Sign in to your account
              </h2>
              <div className="border-2 w-10 border-gray-700 bg-gray-700 inline-block mb-2"></div>
            </div>
            <form onSubmit={handleSubmit}>
            <div className="flex flex-col items-center">
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
                  ref={userRef}
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
              {/* password section */}

              <div className="flex justify-between w-64 mb-5">
                <a
                  href="#"
                  className="text-xs font-bold text-gray-700 hover:text-[#5E9387] transition duration-300"
                >
                  Forgot Password
                </a>
              </div>

              <button
                // href=""
                className="signIn px-7 py-3 w-64 justify-center rounded-md border border-transparent text-sm focus:outline-none transition duration-300 bg-[#5E9387] hover:bg-gray-700  text-center marker:sm:w-auto font-bold text-white"
              >
                Sign In
              </button>
              <Link
                to="/Signup"
                className="text-xs font-bold text-gray-700 hover:text-[#5E9387] transition duration-300 mt-6 hover:underline-offset-4"
              >
                Don't have an account? Sign up here
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
            <SignInSvg width="16rem" />
          </div>

          {/* Right Section */}
        </div>
      </main>
    </div>
        )}
        </>
  );
}

export default LogInForm;
