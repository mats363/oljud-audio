import { useShoppingCart } from "use-shopping-cart";
import { IProduct } from "../../models/IProduct";
import ProductCard from "../product-card";
import styles from "./Products.module.scss";

type ProductProps = { props: any[] };

export const Products: React.FC<ProductProps> = ({ props }) => {
  // const { addItem, removeItem } = useShoppingCart();
  console.log(props);
  return (
    <section className={styles.productContainer}>
      {products!.map((product) => (
        <ProductCard key={product.id} props={product} />
      ))}
    </section>
  );
};

export default Products;
