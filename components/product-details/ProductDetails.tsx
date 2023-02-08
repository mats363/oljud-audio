import { IProduct } from "../../models/IProduct";

type ProductDetailsProps = { product: IProduct };

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  return (
    <div>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductDetails;
