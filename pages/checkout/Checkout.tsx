import { loadStripe } from "@stripe/stripe-js";
import React from "react";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

export const Checkout = () => {
  const handleClick = async (event: any) => {
    const { sessionId } = await fetch("/api/checkout/session", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ quantity: "1" }),
    }).then((res) => res.json());
    const stripe = await stripePromise;
    const { error } = await stripe!.redirectToCheckout({ sessionId });
  };
  return (
    <div>
      <button onClick={handleClick}>Checkout</button>
    </div>
  );
};
export default Checkout;
