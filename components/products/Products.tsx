import { useShoppingCart } from "use-shopping-cart";
import { IProduct } from "../../models/IProduct";
import ProductCard from "../product-card";
import styles from "./Products.module.scss";

type ProductProps = { products: IProduct[] };

export const Products: React.FC<ProductProps> = ({ products }) => {
  // const { addItem, removeItem } = useShoppingCart();
  console.log(products[1].product + " i Products");
  return (
    <section className={styles.productContainer}>
      {products!.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
};

export default Products;
