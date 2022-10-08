import React from 'react'
import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";


const ViewInformationAccordion = (DishIngredients) => {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <Fragment>
      <Accordion open={open === 1}>
        <AccordionHeader onClick={() => handleOpen(1)}>
          What are the ingredients in this dish?
        </AccordionHeader>
        <AccordionBody>
          meow
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2}>
        <AccordionHeader onClick={() => handleOpen(2)}>
          What is the carbon emission breakdown per ingredient?
        </AccordionHeader>
        <AccordionBody>
          * we will add this in later *
        </AccordionBody>
      </Accordion>
      
    </Fragment>
  )
}

export default ViewInformationAccordion;
