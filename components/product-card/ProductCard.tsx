import { ProductProps } from "../../pages/home/Home";

interface ProductCardProps {
  product: ProductProps;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  // ...
  return (
    <div>
      <img src={product.product_image} alt={product.product} />
      <h2>{product.product}</h2>
      <p>{product.price}</p>
    </div>
  );
};
