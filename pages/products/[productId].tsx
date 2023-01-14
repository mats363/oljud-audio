import { useRouter } from "next/router";

// Use serversideprops or staticprops to fetch data for a single product

const ProductDetail: React.FC = () => {
  const router = useRouter();
  const productId = router.query.productId;

  return (
    <div>
      <h1>Product Detail for {productId}</h1>
    </div>
  );
};

export default ProductDetail;
