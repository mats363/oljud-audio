import { IProduct } from "../../models/IProduct";
import styles from "./ProductCard.module.scss";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cart.slice";
import Cart from "../shopping-cart/ShoppingCart";

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    addToCart(product);
  };

  return (
    <div className={styles.container}>
      <img src={product.product_image} alt={product.product} />
      <h2>{product.product}</h2>
      <p>{product.price}</p>
      <audio controls>
        <source src={product.audio_preview!} type="audio/mpeg" />
      </audio>
      <button onClick={() => dispatch(addToCart(product))}>Add to cart</button>
    </div>
  );
};

export default ProductCard;
