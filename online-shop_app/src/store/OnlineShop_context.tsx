import { createContext, useRef, useEffect, useReducer } from "react";

import useFetch from "../hooks/useFetch";

import { fetchProducts } from "../API/http";

import {
  ContextsObj,
  children,
  Product,
  CartState,
  CartAction,
  CartItemType,
} from "../models/types";

const OnlineShopContexts = createContext<ContextsObj<Product[]>>({
  loading: false,
  error: null,
  data: [],
  setData: () => undefined as unknown as Product[],
  initialFetchedProducts: [],
  items: [],
  addItem: () => undefined as unknown as CartItemType[],
  totalCartItems: undefined as unknown as number,
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

  function addItem(item: CartItemType) {
    dispatchCartAction({ type: "ADD_ITEM", item });
  }

  const totalCartItems = cart.items.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity!;
  }, 0);

  const onlineShopCtxValues: ContextsObj<Product[]> = {
    loading,
    error,
    data: products,
    setData: setProducts,
    initialFetchedProducts: initialFetchedProducts.current,
    items: cart.items,
    addItem,
    totalCartItems,
  };

  return (
    <OnlineShopContexts.Provider value={onlineShopCtxValues}>
      {children}
    </OnlineShopContexts.Provider>
  );
};

export { OnlineShopContextProvider, OnlineShopContexts };
