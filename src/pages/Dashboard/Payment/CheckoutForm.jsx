import { useElements } from "@stripe/react-stripe-js";
import { useStripe } from "@stripe/react-stripe-js";
import { CardElement } from "@stripe/react-stripe-js";
import { useState } from "react";

const CheckoutForm = () => {
  const [cardError, setCardError] = useState("");
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setCardError(error.message);
    } else {
      setCardError("");
      console.log("[PaymentMethod]", paymentMethod);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="border border-gray-300 p-4 rounded shadow-md">
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#32325d",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#fa755a",
                iconColor: "#fa755a",
              },
            },
          }}
        />
      </div>
      {cardError && (
        <div className="text-red-500 text-sm mt-2">{cardError}</div>
      )}
      <button
        type="submit"
        disabled={!stripe}
        className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded disabled:opacity-50"
      >
        Pay
      </button>
    </form>
  );
};

export default CheckoutForm;
