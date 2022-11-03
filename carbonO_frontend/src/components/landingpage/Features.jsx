import React, {useState, useEffect} from 'react'
import {motion, Variants} from "framer-motion";


const Features = () => {
  
  // const [shouldShowActions, setShouldShowActions] = React.useState(false);
  // const [lastYPos, setLastYPos] = React.useState(0);

  // React.useEffect(() => {

  //   function handleScroll() {
  //     const yPos = window.scrollY;
  //     const isScrollingDown= yPos > lastYPos;
  //     setShouldShowActions(isScrollingDown);
  //     setLastYPos(yPos);
  //   }

  //   window.addEventListener('scroll', handleScroll, false);

  //   return () => {
  //     window.addEventListener("scroll", handleScroll, false);
  //   }

  // }, [lastYPos]);

  return (
    <div>
      <section class="bg-white border-b py-8 font-default">
        <motion.div
          className="actions container max-w-5xl mx-auto m-8"
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
        >
          <h2 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-700 mb-20">
            What is CarbonO?
          </h2>
          <div class="w-full mb-4">
            <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>
          <div class="flex flex-wrap ">
            <div class="w-5/6 sm:w-1/2 p-6 my-20">
              <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">
                Ease into a Low-Carbon Diet
              </h3>
              <p class="text-gray-600 mb-8">
                Browse from our catalogue of international dishes and learn more
                about the carbon footprint of the food that you eat.
              </p>
            </div>
            <div class="w-full sm:w-1/2 p-6">
              <div className="flex flex-row justify-center">
                <img
                  src={process.env.PUBLIC_URL + "/svg/Food.svg"}
                  className="w-9/12"
                />
              </div>
            </div>
          </div>
          <div class="flex flex-wrap flex-col-reverse sm:flex-row">
            <div class="w-full sm:w-1/2 p-6 mt-6">
              <div className="flex flex-row justify-center">
                <img
                  src={process.env.PUBLIC_URL + "/svg/Mobile.svg"}
                  className="w-9/12"
                />
              </div>
            </div>
            <div class="w-full sm:w-1/2 p-6 mt-6 ">
              <div class="align-middle my-20">
                <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">
                  Track and Get Rewarded
                </h3>
                <p class="text-gray-600 mb-8">
                  Ate a low-carbon food? Pick a dish from our menu and Download
                  your receipt to claim CarbonO's e-credits! Accumulate your
                  e-credits to claim attractive <i>and sustainable</i> rewards!
                </p>
              </div>
            </div>
          </div>
          <div class="flex flex-wrap">
            <div class="w-5/6 sm:w-1/2 p-6">
              <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3 my-20">
                Translate your efforts
              </h3>
              <p class="text-gray-600 mb-8">
                Donate your e-credits to campaigns and organisations fighting
                climate change. You can donate to the causes using your credits
                cards as well.
              </p>
            </div>
            <div class="w-full sm:w-1/2 p-6">
              <div className="flex flex-row justify-center">
                <img
                  src={process.env.PUBLIC_URL + "/svg/PolarBear.svg"}
                  className="w-9/12"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

export default Features
