import { useElements, useStripe, CardElement } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";
import useAuth from "../../../hooks/useAuth";

const CheckoutForm = () => {
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false); // disable button during processing
  const [transactionId, setTransactionId] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const [cart] = useCart();
  const { user } = useAuth();

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  // fetch clientSecret whenever cart total changes
  useEffect(() => {
    if (totalPrice > 0) {
      axiosSecure
        .post("/create-payment-intent", { price: totalPrice })
        .then((res) => {
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [axiosSecure, totalPrice]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) return;

    const card = elements.getElement(CardElement);
    if (!card) return;

    setProcessing(true);
    setCardError(""); // reset previous errors

    // ✅ create payment method
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setCardError(error.message);
      setProcessing(false);
      return;
    }

    console.log("[PaymentMethod]", paymentMethod);

    // ✅ confirm the payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card,
          billing_details: {
            name: user?.displayName || "anonymous",
            email: user?.email || "anonymous",
          },
        },
      });

    if (confirmError) {
      setCardError(confirmError.message);
      console.log("confirmError", confirmError);
    } else {
      console.log("PaymentIntent", paymentIntent);

      if (paymentIntent.status === "succeeded") {
        console.log('Transaction id:', paymentIntent.id);
        setTransactionId(paymentIntent.id);

         // save payment to database
        const paymentDetails = {
          email: user?.email,
          transactionId: paymentIntent.id,
          price: totalPrice,
          date: new Date(), // utc date convert. use moment js to convert to local time if needed
          cartIds: cart.map((item) => item._id),
          menuIds: cart.map((item) => item.menuId),
          status: "pending",
        };

        axiosSecure
          .post("/payments", paymentDetails)
          .then((res) => {
            if (res.data.insertedId) {
              console.log("Payment saved in DB");
              // optionally show a success toast

            }
          })
          .catch((err) => {
            console.error("Error saving payment:", err);
          });
      }
    }

    setProcessing(false);
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
                "::placeholder": { color: "#aab7c4" },
              },
              invalid: {
                color: "#fa755a",
                iconColor: "#fa755a",
              },
            },
          }}
        />
      </div>

     
      {cardError && <div className="text-red-500 text-sm mt-2">{cardError}</div>}

      <button
        type="submit"
        disabled={!stripe || !clientSecret || processing}
        className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded disabled:opacity-50"
      >
        {processing ? "Processing..." : "Pay"}
      </button>
      <p className="text-green-500 text-sm mt-2">
        {transactionId && `Transaction completed with ID: ${transactionId}`}
      </p>
    </form>
  );
};

export default CheckoutForm;
