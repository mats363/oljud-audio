import { GetServerSideProps } from "next";
import Link from "next/link";
import Hero from "../../components/hero";
import ProductCard from "../../components/product-card";
import { Product } from "../../models/Product";
import styles from "./Products.module.scss";

interface HomeProps {
  products: Product[];
}

const Products: React.FC<HomeProps> = ({ products }) => {
  console.log(products);
  return <>Products works!</>;
};

export default Products;
