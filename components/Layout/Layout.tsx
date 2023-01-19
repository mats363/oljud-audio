import Footer from "../footer";
import styles from "./Layout.module.scss";
import Header from "../header";
import { useEffect, useState } from "react";
import { Supabase } from "../../utils/supabase";
import { Product } from "../../models/Product";

interface LayoutProps {
  children: React.ReactNode;
}

// const fetchData = async () => {
//   const { data: products, error } = await Supabase.from("products").select("*");
//   if (products) console.log("i Layout");
//   return { products };
// };

const Layout: React.FC<LayoutProps> = ({ children }) => {
  useEffect(() => {
    console.log("useEffect in layout");
    // fetchData();
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
