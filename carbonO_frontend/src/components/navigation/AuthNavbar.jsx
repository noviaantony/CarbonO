import React, {useContext, useState} from "react";
import { Link, Navigate} from "react-router-dom"
import AuthContext from "../../context/AuthProvider";


const AuthNavbar = () => {
    const {auth} = useContext(AuthContext);
    const [navbar, setNavbar] = useState(false);


    const logout = (e) => {
      e.preventDefault();
      auth.authenticated = false;
      setNavbar(false);
        window.location.href = "*";
    }

    return (

      <nav className="shadow bg-[#5E9387] px-2 sm:px-4 py-2.5 w-full z-20 sticky top-0 left-0 font-default">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <Link
                class="toggleColour text-white my-4 leading-tight no-underline hover:no-underline font-bold text-xl lg:text-3xl"
                to="*"
              >
                <img src={process.env.PUBLIC_URL + '/images/logo.png'} width="90rem" alt="" />
              </Link>
              <div className="md:hidden">
                <button
                  className="p-2 text-white font-bold rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                <div>
                  <Link
                    className="text-white font-bold hover:font-bolder"
                    to="/CarbonTracker"
                  >
                    <a href="javascript:void(0)">Carbon Tracker</a>
                  </Link>
                </div>

                <div>
                  <Link
                    className="text-white font-bold hover:font-bolder"
                    to="/Dashboard"
                  >
                    <a href="javascript:void(0)">Dashboard</a>
                  </Link>
                </div>

                <div>
                  <Link
                    className="text-white font-bold hover:font-bolder"
                    to="/Rewards"
                  >
                    <a href="javascript:void(0)">Rewards</a>
                  </Link>
                </div>

                <div>
                  <Link
                    className="text-white font-bold hover:font-bolder"
                    to="/Donate"
                  >
                    <a href="javascript:void(0)">Donate</a>
                  </Link>
                </div>
                <button
                  className="bg-primary-500 text-[#5E9387]  focus:bg-primary-700 focus:text-gray-200 focus:shadow-outline focus:outline-none transition duration-300
                px-7 py-2 w-full bg-white text-center rounded-md block sm:w-auto font-bold hover:bg-gray-700 hover:text-white"
                  onClick={logout}
                  type="button"
                >
                  Log Out
                </button>
              </ul>
            </div>
          </div>
        </div>
      </nav>
        )
}

export default AuthNavbar;
