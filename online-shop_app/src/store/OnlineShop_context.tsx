import { createContext, useRef, useEffect, useReducer } from "react";

import useFetch from "../hooks/useFetch";

import { fetchProducts } from "../API/http";

import {
  ContextsObj,
  children,
  Product,
  CartState,
  CartAction,
  CartItem,
} from "../models/types";

const OnlineShopContexts = createContext<ContextsObj<Product[]>>({
  loading: false,
  error: null,
  data: [],
  setData: () => undefined as unknown as Product[],
  initialFetchedProducts: [],
  items: [],
  addItem: () => undefined as unknown as CartItem[],
});

function cartReducer(state: CartState, action: CartAction): CartState {
  if (action.type === "ADD_ITEM") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const updatedItems = [...state.items];

    if (existingCartItemIndex > -1) {
      const existingItem = state.items[existingCartItemIndex];
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity! + 1,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems.push({ ...action.item, quantity: 1 });
    }

    return { ...state, items: updatedItems };
  }

  return state;
}

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

  const [cart, dispatchCartAction] = useReducer(cartReducer, { items: [] });

  function addItem(item: CartItem) {
    dispatchCartAction({ type: "ADD_ITEM", item });
  }

  const onlineShopCtxValues: ContextsObj<Product[]> = {
    loading,
    error,
    data: products,
    setData: setProducts,
    initialFetchedProducts: initialFetchedProducts.current,
    items: cart.items,
    addItem,
  };

  return (
    <OnlineShopContexts.Provider value={onlineShopCtxValues}>
      {children}
    </OnlineShopContexts.Provider>
  );
};

export { OnlineShopContextProvider, OnlineShopContexts };
