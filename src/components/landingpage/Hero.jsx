import React from 'react'

const Hero = () => {

  return (
    <div className="bg-indigo-300">
      <section className="mt-24 mx-auto max-w-screen-xl pb-12 px-4 items-center lg:flex md:px-8">
        <div className="space-y-4 flex-1 sm:text-center lg:text-left">
          <h1 className="text-[#5E9387] font-bold text-4xl xl:text-5xl">
            Reduce your carbon footprint for
            <span className="text-gray-700"> a better tomorrow</span>
          </h1>
          <p className="text-black-300 max-w-xl leading-relaxed sm:mx-auto lg:ml-0">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut
            voluptate dolorum quibusdam voluptas officiis deleniti quod quos
            eaque ipsam nemo.
          </p>
          <div className="pt-10 items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start">
            <button className="px-7 py-3 w-full bg-[#5E9387] text-white text-center rounded-md block sm:w-auto font-bold hover:shadow-md hover:bg-gray-700">
              Get started
            </button>
          </div>
        </div>
        {/* <div className="flex-1 text-center mt-7 lg:mt-0 lg:ml-3">
          <div className="flex justify-center md:justify-end items-center relative max-w-3xl lg:max-w-none">
            <img
              src="https://img.freepik.com/free-vector/save-planet-concept-with-people-taking-care-earth_23-2148522570.jpg?w=1380&t=st=1662376041~exp=1662376641~hmac=438ef076cd1b60d4cd00e9966dc48ca9e9cb980d3f26c5c0f1dc00931a91e58e"
              // src = "{Earth}"
              alt="Earth.png"
              className="w-full mx-auto sm:w-10/12 lg:w-full "
              data-aos="fade-left"
            />
          </div>
        </div> */}
      </section>

      <section>
        <div class="relative -mt-12 lg:-mt-24 bg-gray">
          <svg
            viewBox="0 0 1428 174"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g
                transform="translate(-2.000000, 44.000000)"
                fill="#FFFFFF"
                fill-rule="nonzero"
              >
                <path
                  d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496"
                  opacity="0.100000001"
                ></path>
                <path
                  d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
                  opacity="0.100000001"
                ></path>
                <path
                  d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z"
                  id="Path-4"
                  opacity="0.200000003"
                ></path>
              </g>
              <g
                transform="translate(-4.000000, 76.000000)"
                fill="#FFFFFF"
                fill-rule="nonzero"
              >
                <path d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"></path>
              </g>
            </g>
          </svg>
        </div>
      </section>
    </div>
  );
}



export default Hero