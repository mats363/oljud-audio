import React from "react";
import styles from "./ProductCard.module.scss";
import { useShoppingCart } from "../shopping-cart/useShoppingCart";
import { ProductCardProps } from "./types";
import AudioPlayer from "../audio-player";
import ProductDetails from "../product-details";

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart, removeFromCart, cartItems } = useShoppingCart();

  return (
    <section className={styles.card}>
      <img
        className={styles.img}
        src={product?.product_image!}
        alt={product?.product!}
      />
      <div className={styles.audioPlayer}>
        <AudioPlayer audio={product.audio_preview!} />
      </div>
      <div className={styles.info}>
        <h2>{product?.product}</h2>
        <p>SEK: {product?.price}:-</p>
      </div>
      <div>{product.description}</div>
      <div className={styles.buttons}>
        {cartItems.find((item) => item.id === product.id) ? (
          <div onClick={() => removeFromCart(product.id)}>-</div>
        ) : (
          <div onClick={() => addToCart(product)}>+</div>
        )}
      </div>
    </section>
  );
};

export default ProductCard;
