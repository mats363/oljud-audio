import { useShoppingCart } from "use-shopping-cart";
import { IProduct } from "../../models/Product";
import ProductCard from "../product-card";
import styles from "./Products.module.scss";
import products from "../../data/products";

// type ProductProps = { products: IProduct[] };

export const Products: React.FC = ({}) => {
  // const { addItem, removeItem } = useShoppingCart();

  return (
    <section className={styles.productContainer}>
      {/* {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))} */}
    </section>
  );
};

export default Products;
