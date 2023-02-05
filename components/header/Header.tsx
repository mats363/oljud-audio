import Logo from "./components/logo";
import Navbar from "./components/navbar";
import styles from "./Header.module.scss";

const Header: React.FC = () => {
  return (
    <header className={styles.container}>
      <Logo />
      <Navbar />
    </header>
  );
};
export default Header;
