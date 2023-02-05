import { useRouter } from "next/router";
import useSwr from "swr";

const Result: React.FC = () => {
  const router = useRouter();

  const { data, error } = useSwr(
    router.query.session_id ? `/api/checkout/${router.query.session_id}` : null,
    (url) => fetch(url).then((res) => res.json())
  );
  return (
    <>
      <h1>Result works!</h1>
      <pre>{data ? JSON.stringify(data.status) : "...loading"}</pre>
    </>
  );
};

export default Result;
