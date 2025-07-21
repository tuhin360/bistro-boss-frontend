import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

 
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);


const Payment = () => {
    return (
        <div className="px-4 py-8 max-w-2xl mx-auto">
            <SectionTitle
                heading={"Payment"}
                subHeading={"Please pay your bill"}
            ></SectionTitle>
            <div className="bg-white shadow-md rounded p-6 mt-6  ">
                <Elements stripe={stripePromise}>
                    <CheckoutForm />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;