import Hero from "../../components/hero";
import ProductCard from "../../components/product-card";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <ProductCard product="Product" />
    </>
  );
};

export default Home;
