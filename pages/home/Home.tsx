import { GetServerSideProps } from "next";
import Hero from "../../components/hero";
import Products from "../../components/products";
import { IProduct } from "../../models/IProduct";
import { Supabase } from "../../utils/supabase";

interface HomeProps {
  products: any[];
}

const Home: React.FC<HomeProps> = ({ products }) => {
  console.log(products + " i Home");
  if (products) {
    return (
      <>
        <Hero />
        <Products products={products} />
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
