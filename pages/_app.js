import "@/styles/globals.scss";
import { useState, createContext } from "react";
import Layout from "@/components/Layout";
import { Analytics } from "@vercel/analytics/react";
export const AppContext = createContext("");

export default function App({ Component, pageProps }) {
  const [cart, setCart] = useState({
    items: [],
    total: 0,
    shipping: 0,
    showSidebar: false,
  });
  return (
    <AppContext.Provider value={[cart, setCart]}>
      <Layout>
        <Component {...pageProps} />
        <Analytics />
      </Layout>
    </AppContext.Provider>
  );
}
