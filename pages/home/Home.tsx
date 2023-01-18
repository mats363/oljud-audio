import { GetServerSideProps } from "next";
import Hero from "../../components/hero";
import ProductCard from "../../components/product-card";
import { Product } from "../../models/Product";
import { Supabase } from "../../utils/supabase";

interface HomeProps {
  products: Product[];
}

const Home: React.FC<HomeProps> = ({ products }) => {
  if (products) {
    return (
      <>
        <Hero />
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </>
    );
  } else {
    return <h1>Loading...</h1>;
  }
};

export const getServerSideProps: GetServerSideProps = async () => {
  const { data: products, error } = await Supabase.from("products").select("*");
  if (error) {
    console.log(error);
    return { props: {} };
  } else {
    return { props: { products } };
  }
};

export default Home;
