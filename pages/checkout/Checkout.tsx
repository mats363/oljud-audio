import { loadStripe } from "@stripe/stripe-js";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "../../redux/cart.slice";
import styles from "./Checkout.module.scss";

import getStripe from "../../utils/get-stripe";
import { IProduct } from "../../models/IProduct";
import { useAppDispatch, useAppSelector } from "../../hooks/ReduxHooks";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

const Checkout: React.FC = () => {
  // Extracting cart state from redux store
  const cart = useAppSelector((state) => state.cart as IProduct[]); // q: how do I type this?  //a:
  console.log(cart);
  // Reference to the dispatch function from redux store
  const dispatch = useAppDispatch();

  const getTotalPrice = () => {
    return cart.reduce(
      (accumulator, item) => accumulator + item.quantity! * item.price!,
      0
    );
  };

  const handleClick = async () => {
    try {
      console.log(cart);
      const { sessionId } = await fetch("/api/checkout/session", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(cart),
      }).then((res) => res.json());
      console.log((sessionId as string) + " i checkout.tsx");
      const stripe = await stripePromise;
      const { error } = await stripe!.redirectToCheckout({
        sessionId,
      });
      console.log("success i checkout.tsx");
    } catch (error) {
      console.log(error + "error i checkout.tsx");
    }
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
            {cart.map((item: IProduct) => (
              <div key={item.id} className={styles.body}>
                <p>{item.product}</p>
                <p>$ {item.price}</p>
                <p>{item.quantity}</p>
                <div className={styles.buttons}>
                  <button onClick={() => dispatch(removeFromCart(item))}>
                    Remove from cart
                  </button>
                </div>
                <p>$ {item.quantity! * item.price!}</p>
              </div>
            ))}
            <h2>Total: SEK {getTotalPrice()}</h2>
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
