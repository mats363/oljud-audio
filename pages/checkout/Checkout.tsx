import { loadStripe } from "@stripe/stripe-js";
// import React from "react";

import { useState } from "react";
import { useShoppingCart } from "@/hooks/use-shopping-cart";

import axios from "axios";
import getStripe from "../../utils/get-stripe";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

// export const Checkout = () => {
//   const handleClick = async (event: any) => {
//     const { sessionId } = await fetch("/api/checkout/session", {
//       method: "POST",
//       headers: { "content-type": "application/json" },
//       body: JSON.stringify({
//         quantity: 1,
//       }),
//     }).then((res) => res.json());
//     const stripe = await stripePromise;
//     const { error } = await stripe!.redirectToCheckout({ sessionId });
//   };
//   return (
//     <div>
//       <button role="link " onClick={handleClick}>
//         Checkout
//       </button>
//     </div>
//   );
// };
// export default Checkout;
export const Checkout = () => {
  const { cartDetails, totalPrice, cartCount, addItem, removeItem, clearCart } =
    useShoppingCart();
  const [redirecting, setRedirecting] = useState(false);

  const redirectToCheckout = async () => {
    // Create Stripe checkout
    const {
      data: { id },
    } = await axios.post("/api/checkout/sessions", {
      items: Object.entries(cartDetails!).map(([_, { id, quantity }]) => ({
        price: id,
        quantity,
      })),
    });

    // Redirect to checkout
    const stripe = await getStripe();
    await stripe!.redirectToCheckout({ sessionId: id });
  };
};

export default Checkout;
