import Link from "next/link";
import { useEffect, useState } from "react";
import { useShoppingCart } from "../../../shopping-cart/useShoppingCart";
import styles from "./Navbar.module.scss";
import CartIcon from "../../../../assets/svgs/cart2.svg";

const Navbar: React.FC = () => {
  const [show, setShow] = useState(false);
  // Selecting cart from global state
  const cartItems = useShoppingCart((state) => state.cartItems);
  useEffect(() => {
    setShow(true);
  }, []);
  return (
    <ul className={styles.container}>
      <div className={styles.cartContainer}>
        <Link suppressHydrationWarning href="/checkout">
          <CartIcon />
        </Link>
        {show && cartItems.length > 0 && (
          <div suppressHydrationWarning className={styles.cartCounter}>
            {cartItems.length}
          </div>
        )}
      </div>
    </ul>
  );
};

export default Navbar;
