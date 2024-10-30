import { createContext, useRef, useEffect } from "react";

import useFetch from "../hooks/useFetch";

import { fetchProducts } from "../API/http";

import { ContextsObj, children, Product } from "../models/types";

const OnlineShopContexts = createContext<ContextsObj<Product[]>>({
  loading: false,
  error: null,
  data: [],
  setData: () =>
    undefined as unknown as React.Dispatch<React.SetStateAction<Product[]>>,
  initialFetchedProducts: [],
});

const OnlineShopContextProvider: React.FC<children> = ({ children }) => {
  const {
    loading,
    error,
    data: products,
    setData: setProducts,
  } = useFetch(fetchProducts, []);

  const initialFetchedProducts = useRef<Product[]>([]);

  useEffect(() => {
    if (products.length > 0 && initialFetchedProducts.current.length === 0) {
      initialFetchedProducts.current = [...products];
    }
  }, [products]);

  const onlineShopCtxValues: ContextsObj<Product[]> = {
    loading,
    error,
    data: products,
    setData: setProducts,
    initialFetchedProducts: initialFetchedProducts.current,
  };

  return (
    <OnlineShopContexts.Provider value={onlineShopCtxValues}>
      {children}
    </OnlineShopContexts.Provider>
  );
};

export { OnlineShopContextProvider, OnlineShopContexts };
