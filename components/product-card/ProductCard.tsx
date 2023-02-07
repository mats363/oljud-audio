import { IProduct } from "../../models/IProduct";
import styles from "./ProductCard.module.scss";
import { addToCart, removeFromCart } from "../../redux/cart.slice";
import { useAppDispatch } from "../../hooks/ReduxHooks";
import { useRef, useState } from "react";
import PlayIcon from "../../assets/play.svg";
import AudioPlayer from "../audio-player";

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const dispatch = useAppDispatch();

  return (
    <div className={styles.container}>
      <img src={product.product_image} alt={product.product} />
      <h2>{product.product}</h2>
      <p>{product.price}</p>
      <AudioPlayer audio={product.audio_preview} />

      <button onClick={() => dispatch(addToCart(product))}>Add to cart</button>
      <button onClick={() => dispatch(removeFromCart(product))}>
        Remove from cart
      </button>
    </div>
  );
};

export default ProductCard;
