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

type CartItemType = {
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
  items: CartItemType[];
  addItem: (item: CartItemType) => void;
  totalCartItems: number;
}

type CartState = {
  items: CartItemType[];
};

type CartAction = { type: "ADD_ITEM"; item: CartItemType };

interface ModalProps {
  children: React.ReactNode;
  open: boolean;
  onClose?: () => void;
  className?: string;
}

interface CartModalContextType {
  progress: "cart" | "";
  showCart: () => void;
  hideCart: () => void;
  screenWidth: number;
}

type TableDesigns = {
  desktopDesign: JSX.Element;
  mobileDesign: JSX.Element;
};

export type {
  ClassesStructure,
  ShopTitle,
  ProductCardInfo,
  FetchError,
  Product,
  children,
  ContextsObj,
  CartItemType,
  CartState,
  CartAction,
  ModalProps,
  CartModalContextType,
  TableDesigns,
};
