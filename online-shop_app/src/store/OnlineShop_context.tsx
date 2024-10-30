import { createContext } from "react";

import useFetch from "../hooks/useFetch";

import { fetchProducts } from "../API/http";

import { ContextsObj, children, Product } from "../models/types";

const OnlineShopContexts = createContext<ContextsObj<Product[]>>({
  loading: false,
  error: null,
  data: [],
  setData: () =>
    undefined as unknown as React.Dispatch<React.SetStateAction<Product[]>>,
});

const OnlineShopContextProvider: React.FC<children> = ({ children }) => {
  const {
    loading,
    error,
    data: productsInfo,
    setData: setProducts,
  } = useFetch(fetchProducts, []);

  const onlineShopCtxValues: ContextsObj<Product[]> = {
    loading: loading,
    error: error,
    data: productsInfo,
    setData: setProducts,
  };

  return (
    <OnlineShopContexts.Provider value={onlineShopCtxValues}>
      {children}
    </OnlineShopContexts.Provider>
  );
};

export { OnlineShopContextProvider, OnlineShopContexts };
