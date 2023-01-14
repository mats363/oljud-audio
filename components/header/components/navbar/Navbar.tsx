import Link from "next/link";
import styles from "./Navbar.module.scss";

const Navbar: React.FC = () => {
  return (
    <ul className={styles.container}>
      <li>
        <Link href="/products">Products</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
      <li>
        <Link href="/checkout">Checkout</Link>
      </li>
    </ul>
  );
};

export default Navbar;
