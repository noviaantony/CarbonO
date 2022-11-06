import React, { useContext, useState, useEffect, Fragment } from "react";
import axios from "axios";
import { IoLeafOutline, IoLeafSharp } from "react-icons/io5";
import CarbonTrackerService from "../../services/CarbonTrackerService";
import AuthContext from "../../hooks/AuthProvider";
// import QRScanner from "./QRScanner";
import { Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";

const Card = ({
  dishId,
  dishTitle,
  dishImage,
  dishRating,
  dishKeywords,
  dishIngredients,
  dishCarbonFootprint,
  dishCredit,
}) => {

   const [open, setOpen] = useState(1);

   const handleOpen = (value) => {
     setOpen(open === value ? 0 : value);
   };

  //  array with object 
  // id, ingredientName, carbonFootprint, dishRecipe.quantity (g)


  const { auth } = useContext(AuthContext);

  const [showDishInfo, setshowDishInfo] = React.useState(false);
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    CarbonTrackerService.getAllIngredientsFromDish(dishId)
    .then((response) => {

      console.log(response);
      let ingredientArr = [];
      for (let i = 0; i < response.length-1; i++) {
        ingredientArr.push(response[i].ingredientName + ", ");
      }
      ingredientArr.push(response[response.length - 1].ingredientName + " ");

      setIngredients(ingredientArr);
      console.log(ingredients);
    })
  } , []);



  const rendereddishRating = [];
  for (let i = 0; i < dishRating; i++) {
    rendereddishRating.push(<IoLeafSharp size={30} color="gray-700" />);
  }
  for (let i = 0; i < 5 - dishRating; i++) {
    rendereddishRating.push(<IoLeafOutline size={30} color="gray-700" />);
  }

  return (
    <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 font-default">
      <article class="overflow-hidden rounded-lg bg-white">
        <img alt={dishTitle} class="block h-72 w-full" src={dishImage} />
        <header class="flex items-left leading-tight p-2 md:p-4 ">
          <h1 class="text-2xl font-bold">{dishTitle}</h1>
        </header>
        <div>
          <span class="text-m font-semibold inline-block py-1 px-2 uppercase rounded-full text-[#5E9387] bg-[#5e938733] ml-4">
            {dishCarbonFootprint}g CO2
          </span>
          <span class="text-m font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200 ml-4">
            {dishCredit} E-Credits
          </span>
        </div>
        <div className="flex items-center justify-items-start leading-tight p-2 md:p-4">
          {rendereddishRating}
        </div>

        <footer class="flex items-center justify-between leading-none p-2 md:p-4 bg-white">
          <div class="flex items-center no-underline  text-black" href="#">
            <button
              href="#"
              className="inline-flex items-center py-1.5 px-3 text-xs font-xs text-center bg-white text-[#5E9387] rounded-md focus:outline-none transition duration-300 mr-3 font-semibold border-[#5E9387] border-2 border-solid hover:bg-gray-100
          "
              type="button"
              onClick={() => setshowDishInfo(true)}
            >
              More Info
            </button>
          </div>

          {/* more info modal */}
          {showDishInfo ? (
            <>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="text-center items-start justify-between p-3 border-b border-solid border-slate-200 rounded-t mt-5">
                      <h3 className="text-3xl font-semibold">{dishTitle}</h3>
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setshowDishInfo(false)}
                      >
                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                          ×
                        </span>
                      </button>
                    </div>
                    {/*body*/}
                    <div className="relative p-6 flex-auto">
                      <p className="my-4 text-slate-500 text-lg leading-relaxed">
                        <Fragment>
                          <Accordion open={open === 1}>
                            <AccordionHeader onClick={() => handleOpen(1)}>
                              What are the ingredients in this dish?
                            </AccordionHeader>
                            <AccordionBody>{ingredients}</AccordionBody>
                          </Accordion>
                          {/* <Accordion open={open === 2}>
                            <AccordionHeader onClick={() => handleOpen(2)}>
                              Ingredient Quanities
                            </AccordionHeader>
                            <AccordionBody>
                              * we will add this in later *
                            </AccordionBody>
                          </Accordion> */}
                          {/* <Accordion open={open === 3}>
                            <AccordionHeader onClick={() => handleOpen(2)}>
                              What is the carbon emission breakdown per
                              ingredient?
                            </AccordionHeader>
                            <AccordionBody>
                              * we will add this in later *
                            </AccordionBody>
                          </Accordion> */}
                        </Fragment>
                      </p>
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                      <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setshowDishInfo(false)}
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
        </footer>
      </article>
    </div>
  );
};

export default Card;
