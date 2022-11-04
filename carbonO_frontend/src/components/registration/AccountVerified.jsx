import React from "react";

const AccountVerified = () => {

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
                <div className="py-10">
                 
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
                      <Link
                        to="/ForgetPassword"
                        className="text-xs font-bold text-gray-700 hover:text-[#5E9387] transition duration-300"
                      >
                        Forgot Password
                      </Link>
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
              <div className="w-2/5 bg-[#5E9387]  text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
                <SignInSvg width="16rem" />
              </div>
            </div>
          </main>
        </div>
      )}
    </>
  )
}

export default AccountVerified;

