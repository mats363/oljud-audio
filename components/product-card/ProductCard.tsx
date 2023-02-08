import styles from "./ProductCard.module.scss";
import { useShoppingCart } from "../shopping-cart/useShoppingCart";
import { ProductCardProps } from "./types";
import AudioPlayer from "../audio-player";
import Image from "next/image";

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart, removeFromCart } = useShoppingCart();

  return (
    <section className={styles.card}>
      <img
        className={styles.img}
        src={product.product_image!}
        width={200}
        height={200}
        alt={product.image!}
      />
      <h2>{product.product}</h2>
      <p>{product.price}</p>
      <AudioPlayer audio={product.audio_preview!} />
      <button onClick={() => addToCart(product)}>Add to cart</button>
      <button onClick={() => removeFromCart(product.id)}>
        Remove from cart
      </button>
    </section>
  );
};

export default ProductCard;
