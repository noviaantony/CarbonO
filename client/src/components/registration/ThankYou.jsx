import React from "react";
import { ReactComponent as TickSvg } from "./Tick.svg";

const ThankYou = () => {
  return (     
    <div className="flex items-center min-h-full justify-center font-default text-center">       
            <div className="bg-white rounded-2xl shadow-2xl w-1/2 py-2">    
            <div class="grid place-items-center py-3">
            <TickSvg  width="4rem" />   
              </div>   
                    
                  <h2 className="text-2xl text-center font-bold text-gray-700 py-5">
                    Thank You for Signing Up with Carbono!
                  </h2> 
                  <p className = "py-7">
                    A verification email will be sent to you within 1 working day
                    </p>   
                    {/* <button
                      className="text-xl px-7 py-5 w-64 justify-center rounded-md border border-transparent text-sm focus:outline-none transition duration-300 bg-[#5E9387] hover:bg-gray-700  text-center marker:sm:w-auto font-bold text-white"
                    >
                      Verify Now
                    </button>                                  */}
            </div>
  
    </div>
       
      
    
  );
};

export default ThankYou;