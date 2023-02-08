import React from "react";
import styles from "./ProductCard.module.scss";
import { useShoppingCart } from "../shopping-cart/useShoppingCart";
import { ProductCardProps } from "./types";
import AudioPlayer from "../audio-player";

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart, removeFromCart } = useShoppingCart();

  return (
    <section className={styles.card}>
      <img
        className={styles.img}
        src={product.product_image!}
        alt={product.product!}
      />
      <div className={styles.audioPlayer}>
        {" "}
        <AudioPlayer audio={product.audio_preview!} />
      </div>
      <div className={styles.info}>
        <h2>{product.product}</h2>
        <p>{product.price}</p>
      </div>
      <div className={styles.buttons}>
        <button onClick={() => addToCart(product)}>Add to cart</button>
        <button onClick={() => removeFromCart(product.id)}>
          Remove from cart
        </button>
      </div>
    </section>
  );
};

export default ProductCard;
