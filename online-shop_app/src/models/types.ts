interface ComponentClassesStructure {
  [key: string]: string;
}

interface ClassesStructure {
  MAIN_PAGE: ComponentClassesStructure;
  MODAL_PAGE: ComponentClassesStructure;
}

interface ShopTitle {
  shopTitle?: string;
}

interface ProductCardInfo {
  productId: number;
  productImage: string;
  productTitle: string;
  productDes: string;
  productPrice: number;
}

interface Product {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: object;
  title: string;
}

interface FetchError {
  message: string;
}

interface children {
  children?: React.ReactNode;
}

type CartItem = {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity?: number | undefined;
};

interface ContextsObj<T> {
  loading: boolean;
  error: FetchError | null;
  data: T;
  setData: React.Dispatch<React.SetStateAction<T>>;
  initialFetchedProducts: T;
  items: CartItem[];
  addItem: (item: CartItem) => void;
}

type CartState = {
  items: CartItem[];
};

type CartAction = { type: "ADD_ITEM"; item: CartItem };

export type {
  ClassesStructure,
  ShopTitle,
  ProductCardInfo,
  FetchError,
  Product,
  children,
  ContextsObj,
  CartItem,
  CartState,
  CartAction,
};
