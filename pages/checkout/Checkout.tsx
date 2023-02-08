import { loadStripe } from "@stripe/stripe-js";
import styles from "./Checkout.module.scss";
import getStripe from "../../utils/get-stripe";
import { IProduct } from "../../models/IProduct";
import { useShoppingCart } from "../../components/shopping-cart/useShoppingCart";
import { useEffect, useState } from "react";
import Image from "next/image";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

const Checkout: React.FC = () => {
  const [show, setShow] = useState(false);

  const cart = useShoppingCart((state) => state.cartItems);
  const removeFromCart = useShoppingCart((state) => state.removeFromCart);

  const getTotalPrice = () => {
    return cart.reduce((accumulator, item) => accumulator + item.price!, 0);
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

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <section className={styles.container}>
      {show && cart.length === 0 ? (
        <h1>Your Cart is Empty!</h1>
      ) : (
        <div>
          <h1>Checkout</h1>
          {show &&
            cart.map((item: IProduct) => (
              <div key={item.id} className={styles.cartItem}>
                <Image
                  src={item.product_image!}
                  height={100}
                  width={100}
                  alt={item.product!}
                />
                <h3>{item.product}</h3>
                <p>SEK: {item.price}</p>
                <div className={styles.buttons}>
                  <button onClick={() => removeFromCart(item.id)}>
                    Remove from cart
                  </button>
                </div>
              </div>
            ))}
          <h2 suppressHydrationWarning>Total: SEK {getTotalPrice()}</h2>
          <button role="link" onClick={handleClick}>
            Checkout
          </button>
        </div>
      )}
    </section>
  );
};

export default Checkout;
