import React from "react";
import { useState } from "react";
import { IoCalendarNumber } from "react-icons/io5";
import Modal from "react-modal";
import {
  Elements,
  CardElement,
  useElements,
  useStripe, 
} from "@stripe/react-stripe-js";
import { motion } from "framer-motion";

//stripe template card details styling
const CARD_OPTIONS = {
  iconStyle: "solid",
  hidePostalCode: true,
  style: {
    base: {
      iconColor: "#5E9387",
      color: "#1F2937",
      fontWeight: 20,
      fontFamily: "Open Sans, sans-serif",
      // fontSize: "0.875rem",
      // fontSmoothing: "antialiased",
      ":-webkit-autofill": { color: "#9CA3AF" },
      "::placeholder": { color: "#9CA3AF" },
    },
    invalid: {
      //   iconColor: "#ffc7ee",
      color: "#000",
    },
  },
};

const hasError = true;
function ModalIcon() {
  if (hasError) {
    return (
      <svg
        class="mx-auto mb-4 w-14 h-14 text-red-600 dark:text-gray-200"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 10.5v3.75m-9.303 3.376C1.83 19.126 2.914 21 4.645 21h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 4.88c-.866-1.501-3.032-1.501-3.898 0L2.697 17.626zM12 17.25h.007v.008H12v-.008z"
        />
      </svg>
    );
  } else {
    return (
      <svg
        aria-hidden="true"
        class="mx-auto mb-4 w-14 h-14 text-gray-400 dark:text-gray-200"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        ></path>
      </svg>
    );

  }
}

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    e.preventDefault();

    //create payment intent on server
    const { error: backendError, clientSecret } = await fetch(
      "/create-payment-intent",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          paymentMethodType: "card",
          currency: "usd",
        }),
      }
    ).then((r) => r.json());

    //confirm payment on the client
    const { paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });
  };

  const [isOpen, setIsOpen] = useState(false);
  function toggleConfirmationModal() {

    setIsOpen(!isOpen);
    console.log(isOpen);
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
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleConfirmationModal}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div class="relative p-4 w-full max-w-md h-full md:h-auto">
          <button
            type="button"
            class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
            data-modal-toggle="popup-modal"
            onClick={toggleConfirmationModal}
          >
            <svg
              aria-hidden="true"
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
          <div class="p-6 text-center">
            <ModalIcon />
            <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to donate $ {donationAmount} ?
            </h3>
            <button
              data-modal-toggle="popup-modal"
              type="button"
              class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
            >
              Yes, I'm sure
            </button>

            <button
              data-modal-toggle="popup-modal"
              type="button"
              class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
              onClick={toggleConfirmationModal}
            >
              No, cancel
            </button>
          </div>
        </div>
      </Modal>

      <motion.div
        className="actions antialiased  text-gray-600 min-h-screen p-4"
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
      >
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
                      class="block text-sm font-medium mb-1 mt-4"
                      for="card-email"
                    >
                      Card Details <span class="text-red-500">*</span>
                    </label>
                  </div>

                  <form className="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full">
                    <CardElement options={CARD_OPTIONS} />
                  </form>
                  <div class="mt-6">
                    <div class="mb-4">
                      <button
                        class="font-medium text-sm inline-flex items-center justify-center px-3 py-2 border border-transparent rounded leading-5 shadow-sm transition duration-150 ease-in-out w-full bg-[#5E9387] hover:bg-gray-700 text-white focus:outline-none focus-visible:ring-2"
                        onClick={toggleConfirmationModal}
                      >
                        Donate
                      </button>
                    </div>
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
      </motion.div>
    </>
  );
};

export default PaymentForm;