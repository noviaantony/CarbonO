import React from 'react'
import Header from "../components/misc/Header";
import PaymentForm from "../components/donate/PaymentForm";
import { loadStripe } from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";
const stripePromise = loadStripe("pk_test_51LyGNfESx2q9Enw0f01dV4FYlD51rxtLDY9TKOQp0Fz38NpMuOBsXXGV1RuEqrajQuDfJJxuCbOV8c0HVDOnKh9n00genNJs7Q");

export default function Payment() {

  return (
    <>
      <Header
        Title="Donate to Climate Change With Carbono"
        Description="don't know which organizations to donate to? we got you covered, donate to climate change causes using Visa or MasterCard with us today"
      />     
      <Elements stripe={stripePromise}>
      <PaymentForm />  
      </Elements >
            
    </>
  );
}
