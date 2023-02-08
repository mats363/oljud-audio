import styles from "./ProductCard.module.scss";
import { useShoppingCart } from "../shopping-cart/useShoppingCart";
import { ProductCardProps } from "./types";
import AudioPlayer from "../audio-player";

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart, removeFromCart } = useShoppingCart();

  return (
    <div className={styles.container}>
      <img
        className={styles.img}
        src={product.product_image!}
        alt={product.product!}
      />
      <h2>{product.product}</h2>
      <p>{product.price}</p>
      <AudioPlayer audio={product.audio_preview!} />
      {/* <audio controls>
        <source src={product.audio_preview!} type="audio/mpeg" />
      </audio> */}
      <button onClick={() => addToCart(product)}>Add to cart</button>
      <button onClick={() => removeFromCart(product.id)}>
        Remove from cart
      </button>
    </div>
  );
};

export default ProductCard;
