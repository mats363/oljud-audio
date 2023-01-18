import Layout from "../components/layout";

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

// import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
// import { SessionContextProvider, Session } from "@supabase/auth-helpers-react";
// import { useState } from "react";
// import { AppProps } from "next/app";

// const MyApp({
//   Component,
//   pageProps,
// }: AppProps<{
//   initialSession: Session;
// }>) {
//   // Create a new supabase browser client on every first render.
//   const [supabaseClient] = useState(() => createBrowserSupabaseClient());

//   return (
//     <SessionContextProvider
//       supabaseClient={supabaseClient}
//       initialSession={pageProps.initialSession}
//     >
//       <Component {...pageProps} />
//     </SessionContextProvider>
//   );
// }
