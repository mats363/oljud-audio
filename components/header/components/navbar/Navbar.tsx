import Link from "next/link";
import { useEffect, useState } from "react";
import { useShoppingCart } from "../../../shopping-cart/useShoppingCart";
import styles from "./Navbar.module.scss";
import CartIcon from "../../../../assets/svgs/cart2.svg";

const Navbar: React.FC = () => {
  // Selecting cart from global state
  const cartItems = useShoppingCart((state) => state.cartItems);

  return (
    <ul className={styles.container}>
      <li className={styles.linkContainer}>
        <Link href="/about">About</Link>
      </li>
      <li className={styles.cartContainer}>
        <Link suppressHydrationWarning href="/checkout">
          <CartIcon />({cartItems.length})
        </Link>
      </li>
    </ul>
  );
};

export default Navbar;
