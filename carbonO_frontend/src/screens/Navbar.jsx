import React from 'react'
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import Logo from "./LogoPng.png";

const Navbar = () => {

  // function CustomLink({to, children, ...props}) {
  //   const resolvedPath = useResolvedPath(to);
  //   const isActive = useMatch({path: resolvedPath.pathname});
  //   return (
  //     <li className = { isActive ? "active" : ""}>
  //       <Link to = {to} {...props}>
  //         {children}
  //       </Link>
  //     </li>
  //   )
  // }



  return (
    <nav className="bg-[#5E9387] px-2 sm:px-4 py-2.5 w-full z-20 sticky top-0 left-0">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link
          class="toggleColour text-white my-4 leading-tight no-underline hover:no-underline font-bold text-xl lg:text-3xl"
          to="/Home"
        >
          <img src={Logo} width="90rem" alt="" />
        </Link>
        <div className="flex md:order-2">
          <button
            className="bg-primary-500 text-[#5E9387]  focus:bg-primary-700 focus:text-gray-200 focus:shadow-outline focus:outline-none transition duration-300
            px-7 py-2 w-full bg-white text-center rounded-md block sm:w-auto font-bold hover:bg-gray-700 hover:text-white"
            as="a"
          >
            Log Out
          </button>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 mt-4  rounded-lg border md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
            <li>
              <Link
                to="/CarbonTracker"
                className="block py-2 pr-4 pl-3  text-white rounded md:bg-transparent md:text-white md:p-0 md:hover:font-bold "
                aria-current="page"
              >
                CarbonTracker
              </Link>
            </li>
            <li>
              <Link
                to="/Dashboard"
                className="block py-2 pr-4 pl-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:font-bold  md:p-0"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/Rewards"
                className="block py-2 pr-4 pl-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:font-bold  md:p-0"
              >
                Rewards
              </Link>
            </li>
            <li>
              <Link
                to="/Donate"
                className="block py-2 pr-4 pl-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:font-bold  md:p-0"
              >
                Donate
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
