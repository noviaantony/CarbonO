import React from "react";
import { useState } from "react";
import { IoCalendarNumber } from "react-icons/io5";
import {
  Elements,
  CardElement,
  useElements,
  useStripe, 
} from "@stripe/react-stripe-js";

//stripe template card details styling
const CARD_OPTIONS = {
  iconStyle: "solid",
  hidePostalCode: true,
  style: {
    base: {
      iconColor: "#c4f0ff",
      color: "#000",
      fontWeight: 500,
      fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
      fontSize: "16px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": { color: "#000" },
      "::placeholder": { color: "#000" },

    },
    invalid: {
      iconColor: "#ffc7ee",
      color: "#ffc7ee",
    },
  },
};

const PaymentForm = () => {
  const [success, setSuccess] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      try {
        const { id } = paymentMethod;
        const response = await axios.post("http://localhost:3000/Payment", {
          amount: 1000,
          id,
        });

        if (response.data.success) {
          console.log("Successful payment");
          setSuccess(true);
        }
      } catch (error) {
        console.log("Error", error);
      }
    } else {
      console.log(error.message);
    }
  };

  //when donate button is clicked
  const handleDonate = () => {

  }
  const [name, setName] = useState("");
  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const [donationAmount, setDonationAmount] = useState(0);
  const handleChangeDonationAmount = (event) => {
    setDonationAmount(event.target.value);
  };
  
  // const [cardNumber, setCardNumber] = useState(0);
  // const handleChangeCardNumber = (event) => {
  //   setCardNumber(event.target.value);
  // };

  // const [expiryDate, setExpiryDate] = useState(0);
  // const handleChangeExpiryDate = (event) => {
  //   setExpiryDate(event.target.value);
  // };

  // const [Cvc, setCvc] = useState(0);
  // const handleChangeCvc = (event) => {
  //   setCvc(event.target.value);
  // };

  // const handlePayment = () => {
  //   var payeeName = elements.create({ cardNumber });
  //   payeeName.mount("#card-number");
  //   var cardExpiry = elements.create({ expiryDate });
  //   cardExpiry.mount("#card-expiry");
  //   var cardCvc = elements.create({ Cvc });
  //   cardCvc.mount("cardCvc");
  //   return <div></div>;
  // };
  return (
    <>
      <section class="antialiased  text-gray-600 min-h-screen p-4 ">
        <div class="h-full">
          {/* <!-- Pay component --> */}
          <div>
            {/* <!-- Card body --> */}
            <div
              class="relative px-4 sm:px-6 lg:px-8 pb-8  mx-auto flex justify-center "
              x-data="{ card: true }"
            >
              <div class="bg-white px-8 pb-6 rounded-xl pt-10 shadow-lg w-10/12  ">
                <div x-show="card ">
                  <div class="space-y-4">
                    {/* <!-- Donation Amount --> */}
                    <div className="">
                      <label
                        class="block text-sm font-medium mb-1"
                        for="card-nr"
                      >
                        Amount to Donate <span class="text-red-500">*</span>
                      </label>
                      <input
                        id="card-nr"
                        class="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full"
                        type="number"
                        onChange={handleChangeDonationAmount}
                        value={donationAmount}
                        placeholder="$50.00"
                      />
                    </div>
                    {/* <!-- Card Number -->
                      <div className="">
                        <label
                          class="block text-sm font-medium mb-1"
                          for="card-nr"
                        >
                          Card Number <span class="text-red-500">*</span>
                        </label>
                        <input
                          id="card-nr"
                          class="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full"
                          type="text"
                          onChange={handleChangeCardNumber}
                          value={cardNumber}
                          placeholder="1234 1234 1234 1234"
                        />
                      </div> */}
                    {/* <!-- Expiry and CVC --> */}
                    {/* <div class="flex space-x-4">
                        <div class="flex-1">
                          <label
                            class="block text-sm font-medium mb-1"
                            for="card-expiry"
                          >
                            Expiry Date <span class="text-red-500">*</span>
                          </label>
                          <input
                            id="card-expiry"
                            class="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full"
                            type="text"
                            onChange={handleChangeExpiryDate}
                            value={expiryDate}
                            placeholder="MM/YY"
                          />
                        </div>
                        <div class="flex-1">
                          <label
                            class="block text-sm font-medium mb-1"
                            for="card-cvc"
                          >
                            CVC <span class="text-red-500">*</span>
                          </label>
                          <input
                            id="card-cvc"
                            class="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full"
                            type="text"
                            onChange={handleChangeCvc}
                            value={Cvc}
                            placeholder="CVC"
                          />
                        </div>
                      </div> */}
                    {/* <!-- Name on Card --> */}
                    <div>
                      <label
                        class="block text-sm font-medium mb-1"
                        for="card-name"
                      >
                        Name on Card <span class="text-red-500">*</span>
                      </label>
                      <input
                        id="card-name"
                        class="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full"
                        type="text"
                        onChange={handleChangeName}
                        value={name}
                        placeholder="John Doe"
                      />
                    </div>

                    {/* <!-- Email --> */}
                    <div>
                      <label
                        class="block text-sm font-medium mb-1"
                        for="card-email"
                      >
                        Email <span class="text-red-500">*</span>
                      </label>
                      <input
                        id="card-email"
                        class="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full"
                        type="email"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  {/* <!-- Card Details --> */}
                  <div>
                    <label
                      class="block text-sm font-medium mb-1"
                      for="card-email"
                    >
                      Card Details <span class="text-red-500">*</span>
                    </label>
                    
                    {!success ? (
                      <form onSubmit={handleSubmit}>
                        <CardElement options={CARD_OPTIONS}
                        
                        />
                        <div class="mt-6">
                          <div class="mb-4">
                            {/* on click, modal should show success payment */}
                            <button class="font-medium text-sm inline-flex items-center justify-center px-3 py-2 border border-transparent rounded leading-5 shadow-sm transition duration-150 ease-in-out w-full bg-[#5E9387] hover:bg-gray-700 text-white focus:outline-none focus-visible:ring-2">
                              Donate
                            </button>
                          </div>
                        </div>
                      </form>
                    ) : (
                      <div>
                        <h2>Success</h2>
                      </div>
                    )}
                  </div>

                  {/* <div class="mt-6">
                      <div class="mb-4">
                        
                        <button
                          class="font-medium text-sm inline-flex items-center justify-center px-3 py-2 border border-transparent rounded leading-5 shadow-sm transition duration-150 ease-in-out w-full bg-[#5E9387] hover:bg-gray-700 text-white focus:outline-none focus-visible:ring-2"
                       
                        >
                          Donate
                        </button>
                      </div>
                    </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PaymentForm;