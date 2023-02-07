import Link from "next/link";
import { useAppSelector } from "../../../../hooks/ReduxHooks";
import styles from "./Navbar.module.scss";

const Navbar: React.FC = () => {
  // Selecting cart from global state
  const cart = useAppSelector((state) => state.cart);

  // Getting the count of items
  const getItemsCount = () => {
    return cart.reduce((accumulator, item) => accumulator + item.quantity, 0);
  };
  return (
    <ul className={styles.container}>
      <li>
        <Link href="/products">Products</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
      <li>
        <Link href="/checkout">Checkout({getItemsCount()})</Link>
      </li>
      <li>
        <Link href="/login">Log in</Link>
      </li>
    </ul>
  );
};

export default Navbar;
