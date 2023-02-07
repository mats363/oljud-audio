import Link from "next/link";
import { useEffect, useState } from "react";
import { useAppSelector } from "../../../../hooks/ReduxHooks";
import { useShoppingCart } from "../../../shopping-cart/useShoppingCart";
import styles from "./Navbar.module.scss";

const Navbar: React.FC = () => {
  // Selecting cart from global state
  const cart = useAppSelector((state) => state.cart);
  const cartItems = useShoppingCart((state) => state.cartItems);

  return (
    <ul className={styles.container}>
      <li>
        <Link href="/products">Products</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
      <li>
        <Link suppressHydrationWarning href="/checkout">
          Checkout({cartItems.length})
        </Link>
      </li>
      <li>
        <Link href="/login">Log in</Link>
      </li>
    </ul>
  );
};

export default Navbar;
