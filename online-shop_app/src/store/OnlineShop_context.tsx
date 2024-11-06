import {
  createContext,
  useRef,
  useEffect,
  useReducer,
  useMemo,
  useCallback,
  useState,
} from "react";

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
  removeItem: () => undefined as unknown as CartItemType[],
  totalCartItems: undefined as unknown as number,
  selectedCategory: undefined as unknown as string,
  setSelectedCategory: () => undefined as unknown as string,
  searchedValue: undefined as unknown as string,
  setSearchedValue: () => undefined as unknown as string,
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

  if (action.type === "REMOVE_ITEM") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.payload.id
    );

    const existingCartItem = state.items[existingCartItemIndex];

    const updatedItems = [...state.items];

    if (existingCartItem.quantity === 1 || action.payload.button === "Remove") {
      updatedItems.splice(existingCartItemIndex, 1);
    } else {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity! - 1,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
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

  const addItem = useCallback((item: CartItemType) => {
    dispatchCartAction({ type: "ADD_ITEM", item });
  }, []);

  const removeItem = useCallback((id: number, button: string) => {
    dispatchCartAction({ type: "REMOVE_ITEM", payload: { id, button } });
  }, []);

  const totalCartItems = useMemo(() => {
    return cart.items.reduce((totalNumberOfItems, item) => {
      return totalNumberOfItems + item.quantity!;
    }, 0);
  }, [cart.items]);

  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const [searchedValue, setSearchedValue] = useState<string>("");

  const onlineShopCtxValues: ContextsObj<Product[]> = useMemo(
    () => ({
      loading,
      error,
      data: products,
      setData: setProducts,
      initialFetchedProducts: initialFetchedProducts.current,
      items: cart.items,
      addItem,
      removeItem,
      totalCartItems,
      selectedCategory,
      setSelectedCategory,
      searchedValue,
      setSearchedValue,
    }),
    [
      loading,
      error,
      products,
      setProducts,
      cart.items,
      addItem,
      removeItem,
      totalCartItems,
      selectedCategory,
      setSelectedCategory,
      searchedValue,
      setSearchedValue,
    ]
  );

  return (
    <OnlineShopContexts.Provider value={onlineShopCtxValues}>
      {children}
    </OnlineShopContexts.Provider>
  );
};

export { OnlineShopContextProvider, OnlineShopContexts };
