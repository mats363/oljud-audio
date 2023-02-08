import { useRouter } from "next/router";
import useSwr from "swr";
import { useShoppingCart } from "../../components/shopping-cart/useShoppingCart";

const Result: React.FC = () => {
  const router = useRouter();
  const { clearCart } = useShoppingCart();
  clearCart();

  const { data, error } = useSwr(
    router.query.session_id ? `/api/checkout/${router.query.session_id}` : null,
    (url) => fetch(url).then((res) => res.json())
  );
  return (
    <>
      <h1>Thank you for your purchase!</h1>
      <p>You will receive a download link in your email</p>
      <pre>{data ? JSON.stringify(data.status) : "...loading"}</pre>
    </>
  );
};

export default Result;
