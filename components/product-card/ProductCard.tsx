import { IProduct } from "../../models/IProduct";
import styles from "./ProductCard.module.scss";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/cart.slice";
import { useAppDispatch } from "../../hooks/ReduxHooks";
import { useShoppingCart } from "../shopping-cart/useShoppingCart";
import { ProductCardProps } from "./types";

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  // const dispatch = useAppDispatch();
  const { addToCart, removeFromCart } = useShoppingCart();

  return (
    <div className={styles.container}>
      <img src={product.product_image} alt={product.product} />
      <h2>{product.product}</h2>
      <p>{product.price}</p>
      <audio controls>
        <source src={product.audio_preview!} type="audio/mpeg" />
      </audio>
      <button onClick={() => addToCart(product)}>Add to cart</button>
      <button onClick={() => removeFromCart(product.id)}>
        Remove from cart
      </button>
    </div>
  );
};

export default ProductCard;
