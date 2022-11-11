import React, {useContext, useEffect, useState} from "react";
import {ThreeDots} from "react-loader-spinner";
import {MdQrCodeScanner} from "react-icons/md";
import Card from "../components/carbontracker/Card";
import CarbonTrackerService from "../services/CarbonTrackerService";
import Header from "../components/misc/Header";
import AuthContext from "../hooks/AuthContext";
import QRScanner from "../components/carbontracker/QRScanner";
import {motion} from "framer-motion";

const CarbonTracker = () => {
    const {auth} = useContext(AuthContext);
    const [searchTerm, setSearchTerm] = useState("");
    const [foodList, setFoodList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showReceiptUpload, setshowReceiptUpload] = useState(false);

    useEffect(() => {
        setLoading(true);

        CarbonTrackerService.getAllDishes(auth.accessToken)
            .then((response) => {
                setFoodList(response);
            })
            .then((data) => {
                setLoading(false);
            });
    }, []);

    return (
        <>
            <Header
                Title="Reduce Your Carbon Foodprint Today!"
                Description="scan the QR Code for a dish and claim e-credits to redeem rewards or donate!"
            />

            {loading ? (
                <>
                    <div className="flex justify-center h-screen mt-20">
                        <ThreeDots
                            height="300"
                            width="300"
                            radius="9"
                            color="#000"
                            ariaLabel="three-dots-loading"
                            wrapperStyle={{}}
                            wrapperClassName=""
                            visible={true}
                        />
                    </div>
                </>
            ) : (
                <div className="items-center">
                    <form className="m-10 mx-50">
                        <label
                            htmlFor="default-search"
                            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
                        >
                            Search
                        </label>
                        <div className="relative ">
                            <div className="flex items-center absolute inset-y-0 left-0 pl-3 pointer-events-none">
                                <svg
                                    aria-hidden="true"
                                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    ></path>
                                </svg>
                            </div>
                            <div className="flex flex-row">
                                <input
                                    type="search"
                                    id="default-search"
                                    className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border"
                                    placeholder="Search for foods,snacks,etc"
                                    required=""
                                    onChange={(event) => {
                                        setSearchTerm(event.target.value);
                                    }}
                                />
                                <button
                                    className="ml-4 inline-flex items-center py-2 px-3 text-xs font-xs text-center text-white bg-[#5E9387] rounded-lg  focus:outline-none transition duration-300 mr-3 font-semibold hover:bg-gray-700 hover:text-white"
                                    type="button"
                                    onClick={() => setshowReceiptUpload(true)}
                                >
                                    <MdQrCodeScanner size={50} className="rounded-lg"/>
                                </button>
                            </div>
                        </div>
                    </form>
                    <div class="container my-12 mx-auto px-4 md:px-12">
                        <motion.div
                            className="text-center lg:text-left actions flex flex-wrap -mx-1 lg:-mx-4"
                            animate={{opacity: 1}}
                            initial={{opacity: 0}}
                        >
                            {foodList
                                .filter((dish) => {
                                    if (searchTerm == "") {
                                        return dish;
                                    } else if (
                                        dish.dishName
                                            .toLowerCase()
                                            .includes(searchTerm.toLowerCase())
                                    ) {
                                        return dish;
                                    }
                                })
                                .map((dish) => {
                                    return (
                                        <Card
                                            dishId={dish.id}
                                            dishTitle={dish.dishName}
                                            dishImage={dish.photo}
                                            dishRating={dish.carbonRating}
                                            dishKeywords={dish.dishKeywords}
                                            dishIngredients={dish.recipeIngredients}
                                            dishCarbonFootprint={dish.totalCarbonFootprint.toFixed(0)}
                                            dishCredit={dish.dishRewardPoints}
                                        />
                                    );
                                })}
                        </motion.div>
                    </div>
                    {showReceiptUpload ? (
                        <>
                            <div
                                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                                <div className="relative w-auto my-6 mx-auto max-w-sm">
                                    <div
                                        className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                        <div
                                            className="text-center items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                            <h3 className="text-3xl font-semibold">
                                                Scan your QR Code
                                            </h3>

                                            <button
                                                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                                onClick={() => setshowReceiptUpload(false)}
                                            ></button>
                                        </div>
                                        <div className="relative p-6 flex-auto">
                                            <p className="my-4 text-slate-500 text-lg leading-relaxed">
                                                <form>
                                                    <QRScanner/>
                                                </form>
                                            </p>
                                        </div>
                                        <div
                                            className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                            <button
                                                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                type="button"
                                                onClick={() => {
                                                    setshowReceiptUpload(false);
                                                }}
                                            >
                                                Close
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                        </>
                    ) : null}
                </div>
            )}
        </>
    );
};

export default CarbonTracker;
