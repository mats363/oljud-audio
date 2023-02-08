import Layout from "../components/Layout";
import "bootstrap-icons/font/bootstrap-icons.css";

interface MyAppProps {
  Component: React.ComponentType<any>;
  pageProps: any;
}

const MyApp: React.FC<MyAppProps> = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
