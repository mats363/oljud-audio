import { Product } from "../../models/Product";
import styles from "./ProductCard.module.scss";

interface ProductCardProps {
  product: Product;
}

const addToCart = () => {
  console.log("addToCart");
};

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  // ...
  return (
    <div className={styles.container}>
      <img src={product.product_image} alt={product.product} />
      <h2>{product.product}</h2>
      <p>{product.price}</p>
      <button onClick={addToCart}>Add to cart</button>
      <audio controls>
        <source src={product.audio_preview!} type="audio/mpeg" />
      </audio>
    </div>
  );
};

export default ProductCard;
