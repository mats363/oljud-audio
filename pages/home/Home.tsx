import { GetServerSideProps } from "next";
import Hero from "../../components/hero";
import ProductCard from "../../components/product-card";
import { Product } from "../../models/Product";
import { Supabase } from "../../utils/supabase";
import styles from "./Home.module.scss";

interface HomeProps {
  products: Product[];
}

const Home: React.FC<HomeProps> = ({ products }) => {
  console.log(products);
  if (products) {
    return (
      <>
        <Hero />
        <div className={styles.productContainer}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </>
    );
  } else {
    return <h1>Loading...</h1>;
  }
};

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const { data: products, error } = await Supabase.from("products").select("*");
  if (error) {
    console.log(error);
    throw new Error(error.message);
  } else {
    console.log("success");
    return { props: { products } };
  }
};

export default Home;
