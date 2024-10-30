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

interface ContextsObj<T> {
  loading: boolean;
  error: FetchError | null;
  data: T;
  setData: React.Dispatch<React.SetStateAction<T>>;
}

export type {
  ClassesStructure,
  ShopTitle,
  ProductCardInfo,
  FetchError,
  Product,
  children,
  ContextsObj,
};
