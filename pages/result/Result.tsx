import { useRouter } from "next/router";

const Result: React.FC = () => {
  const router = useRouter();
  const { session_id } = router.query;
  return (
    <>
      <h1>Result works!</h1>
      <pre>{session_id}</pre>
    </>
  );
};

export default Result;
