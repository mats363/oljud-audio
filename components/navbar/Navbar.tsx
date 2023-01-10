import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <header>
      <nav>
        <Link href="/">
          <h1>Logo</h1>
        </Link>
        <ul>
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
      </nav>
    </header>
  );
};

export default Navbar;
