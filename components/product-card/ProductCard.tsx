import React, { useEffect, useState } from "react";
import styles from "./ProductCard.module.scss";
import { useShoppingCart } from "../shopping-cart/useShoppingCart";
import { ProductCardProps } from "./types";
import AudioPlayer from "../audio-player";
import Image from "next/image";

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [show, setShow] = useState(false);
  const { addToCart, removeFromCart, cartItems } = useShoppingCart();

  useEffect(() => {
    setShow(true);
  }, []);

  if (!show) {
    return null;
  } else {
    return (
      <section className={styles.card}>
        {/* <img
          className={styles.img}
          src={product.product_image!}
          alt={product.product!}
        /> */}
        <Image
          width={300}
          height={300}
          className={styles.img}
          src={product.product_image!}
          alt={product.product!}
        />
        <div className={styles.audioPlayer}>
          <AudioPlayer audio={product.audio_preview!} />
        </div>
        <div className={styles.title}>
          <h2>{product.product}</h2>
        </div>
        <div className={styles.description}>{product.description}</div>
        <div className={styles.info}>
          <p>SEK: {product.price}:-</p>
          {show && cartItems.find((item) => item.id === product.id) ? (
            <div
              className={styles.btn}
              onClick={() => removeFromCart(product.id)}
            >
              -
            </div>
          ) : (
            <div className={styles.btn} onClick={() => addToCart(product)}>
              +
            </div>
          )}
        </div>
        <div className={styles.price}></div>
      </section>
    );
  }
};

export default ProductCard;
