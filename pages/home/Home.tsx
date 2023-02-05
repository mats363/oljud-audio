import { GetServerSideProps } from "next";
import Hero from "../../components/hero";
import Products from "../../components/products";
import { IProduct } from "../../models/Product";
import { Supabase } from "../../utils/supabase";

interface HomeProps {
  products: IProduct[];
}

const Home: React.FC<HomeProps> = ({ products }) => {
  console.log(products);
  if (products) {
    return (
      <>
        <Hero />
        <Products />
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
