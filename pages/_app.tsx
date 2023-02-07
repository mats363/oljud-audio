import Layout from "../components/layout";
import { Provider } from "react-redux";
import store from "../redux/store";

interface MyAppProps {
  Component: React.ComponentType<any>;
  pageProps: any;
}

const MyApp: React.FC<MyAppProps> = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
};

export default MyApp;
