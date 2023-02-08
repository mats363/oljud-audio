import Footer from "../footer";
import styles from "./Layout.module.scss";
import Header from "../header";
import { useEffect, useState } from "react";
import { Supabase } from "../../utils/supabase";
import { IProduct } from "../../models/IProduct";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  useEffect(() => {
    console.log("useEffect in layout");
  }, []);
  return (
    <div className={styles.container}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
