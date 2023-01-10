import Navbar from "../navbar";
import Footer from "../footer";
import styles from "./Layout.module.scss";

// Hämta alla produkter från APIet

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
