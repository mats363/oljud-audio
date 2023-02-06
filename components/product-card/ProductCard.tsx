import { IProduct } from "../../models/IProduct";
import styles from "./ProductCard.module.scss";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/Cart.slice";

interface ProductCardProps {
  product: any;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    addToCart(product);
    console.log(product);
  };

  return (
    <div className={styles.container}>
      <img src={product.product_image} alt={product.product} />
      <h2>{product.product}</h2>
      <p>{product.price}</p>
      <audio controls>
        <source src={product.audio_preview!} type="audio/mpeg" />
      </audio>
      <button onClick={handleClick}></button>
    </div>
  );
};

export default ProductCard;
