import React, { useEffect, useRef, useState } from "react";
import { HiMail, HiLockClosed, HiUser } from "react-icons/hi";
import { ReactComponent as SignUpSvg } from "./SignUpSvg.svg";
import PasswordChecklist from "react-password-checklist";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import Modal from "react-modal";
import { ReactComponent as TickSvg } from "./Tick.svg";

const REGISTER_URL =
  "http://18.136.163.9:8080/api/v1/carbonO/user/registration";

const SignUpForm = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const [pw, setPw] = useState("");
  const [confirmPw, setConfirmPw] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  function toggleConfirmationModal() {
    setIsOpen(!isOpen);
    console.log(isOpen);
  }

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg();
  }, [firstName, lastName, email, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFirstName("");
    setLastName("");
    setConfirmPassword("");
    setPassword("");
    setEmail("");

    const jsonRegistrationInfo = JSON.stringify({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    });

    if (password !== confirmPassword) {
      setErrMsg("Passwords do not match");
      console.log(errMsg);
      errRef.current.focus();
    }

    try {
      const response = await axios.post(REGISTER_URL, jsonRegistrationInfo, {
        headers: { "Content-Type": "application/json" },
      });
      console.log(response);
      setSuccess(true);
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
   
  };
  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleConfirmationModal}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div class="relative p-4 w-full max-w-md h-full md:h-auto">
          <button
            type="button"
            class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
            data-modal-toggle="popup-modal"
            onClick={toggleConfirmationModal}
          >
            <svg
              aria-hidden="true"
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
          <div class="p-6 text-center">
          <div class="grid place-items-center py-3">
            <TickSvg  width="4rem" />   
              </div> 
            <h2 class="text-2xl text-center font-bold text-gray-700 py-5">
              Thank You for Signing Up with Carbono!
            </h2>
            <p className="py-5">
              A verification email will be sent to you within 1 working day
            </p>
          </div>
        </div>
      </Modal>

      {success ? (
        <section>
          <div
            class="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800"
            role="alert"
          >
            <span class="font-medium">Successfully signed up!</span> Log in to
            your account to access CarbonO
          </div>
          <br />
       
        </section>
      ) : (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 font-default">
          <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
            <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
              <div className="w-3/5 p-5">
                <div className="py-10">
                  <p
                    ref={errRef}
                    className={errMsg ? "errmsg" : "offscreen"}
                    aria-live="assertive"
                  ></p>
                  {/*change this accordingly this is the error message*/}
                  <h2 className="text-2xl font-bold text-gray-700 mb-2">
                    Sign up for an account
                  </h2>
                  <span class=" text-red-800 text-sm mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900 font-bold">
                    {errMsg}
                  </span>
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
                      minLength={5}
                      value={pw}
                      valueAgain={confirmPw}
                      onChange={(isValid) => {}}
                    />
                    {/* password section */}
                    <button
                      className="px-7 py-3 w-64 justify-center rounded-md border border-transparent text-sm focus:outline-none transition duration-300 bg-[#5E9387] hover:bg-gray-700  text-center marker:sm:w-auto font-bold text-white mt-8"
                      onClick={toggleConfirmationModal}
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
        </div>
      )}
    </>
  );
};

export default SignUpForm;
