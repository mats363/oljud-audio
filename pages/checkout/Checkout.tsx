import { loadStripe } from "@stripe/stripe-js";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "../../redux/Cart.slice";
import styles from "./Checkout.module.scss";

import getStripe from "../../utils/get-stripe";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

const Checkout: React.FC = () => {
  // Extracting cart state from redux store
  const cart = useSelector((state) => state.cart);

  // Reference to the dispatch function from redux store
  const dispatch = useDispatch();

  const handleClick = async (event: any) => {
    const { sessionId } = await fetch("/api/checkout/session", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        quantity: 1,
      }),
    }).then((res) => res.json());
    const stripe = await stripePromise;
    const { error } = await stripe!.redirectToCheckout({ sessionId });
  };

  return (
    <>
      <div className={styles.container}>
        {cart.length === 0 ? (
          <h1>Your Cart is Empty!</h1>
        ) : (
          <>
            <div className={styles.header}>
              <div>Image</div>
              <div>Product</div>
              <div>Price</div>
              <div>Quantity</div>
              <div>Actions</div>
              <div>Total Price</div>
            </div>
            {cart.map((item: any) => (
              <div key={item.id} className={styles.body}>
                <p>{item.product}</p>
                <p>$ {item.price}</p>
                <p>{item.quantity}</p>
                <div className={styles.buttons}></div>
                <p>$ {item.quantity * item.price}</p>
              </div>
            ))}
            <h2>Grand Total: $ {getTotalPrice()}</h2>
            <button role="link " onClick={handleClick}>
              Checkout
            </button>
            ;
          </>
        )}
      </div>
      ;
    </>
  );
};

export default Checkout;
