import React from 'react'
import Header from "../components/misc/Header";
import PaymentForm from "../components/donate/PaymentForm";

const Payment = () => {
  return (
    <>
      <Header
        Title="Donate to Climate Change With Carbono"
        Description="don't know which organizations to donate to? we got you covered, donate to climate change causes using Visa or MasterCard with us today"
      />
      <PaymentForm />
    </>
  );
}

export default Payment
