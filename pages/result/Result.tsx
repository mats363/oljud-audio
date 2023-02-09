import { useRouter } from "next/router";
import { useEffect } from "react";
import useSwr from "swr";
import { useShoppingCart } from "../../components/shopping-cart/useShoppingCart";
import styles from "./Result.module.scss";

const Result: React.FC = () => {
  const router = useRouter();
  const { clearCart, cartItems } = useShoppingCart();

  const { data, error } = useSwr(
    router.query.session_id ? `/api/checkout/${router.query.session_id}` : null,
    (url) => fetch(url).then((res) => res.json())
  );

  useEffect(() => {
    if (data?.session.status === "complete") {
      clearCart();
    }
  }, [data, clearCart]);

  return (
    <div className={styles.container}>
      <h1>Thank you for your purchase!</h1>
      <p>You will receive a download link in your email.</p>
      {/* <pre>{data ? JSON.stringify(data.status) : "...loading"}</pre> */}
    </div>
  );
};

export default Result;
