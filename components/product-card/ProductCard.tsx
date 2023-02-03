import { useShoppingCart } from "use-shopping-cart";
import { IProduct } from "../../models/Product";
import styles from "./ProductCard.module.scss";

interface ProductCardProps {
  product: IProduct;
}

const addToCart = () => {
  console.log("addToCart");
};

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addItem, removeItem } = useShoppingCart();

  // ...
  return (
    <div className={styles.container}>
      {/* <img src={product.product_image} alt={product.product} />
      <h2>{product.product}</h2>
      <p>{product.price}</p>
      onClick=
      {() => {
        console.log(product);
        // addItem(product);
      }}{" "}
      <audio controls>
        <source src={product.audio_preview!} type="audio/mpeg" />
      </audio> */}
    </div>
  );
};

export default ProductCard;
