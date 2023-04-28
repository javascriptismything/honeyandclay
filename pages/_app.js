import "@/styles/globals.scss";
import { useState, createContext } from "react";
import Layout from "@/components/Layout";
export const AppContext = createContext("");

export default function App({ Component, pageProps }) {
  const [cart, setCart] = useState({ items: [], total: 0, shipping: 0 });
  return (
    <AppContext.Provider value={[cart, setCart]}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppContext.Provider>
  );
}
