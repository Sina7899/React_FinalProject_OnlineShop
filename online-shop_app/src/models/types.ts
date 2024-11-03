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
  addItem: (cartItem: CartItemType) => void;
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

type CartItemComponentType = {
  item: CartItemType;
  index: number;
  onDecrease: () => void;
  onIncrease: () => void;
  onRemove: () => void;
};

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
  removeItem: (id: number, button: string) => void;
  totalCartItems: number;
}

type CartState = {
  items: CartItemType[];
};

type CartAction =
  | { type: "ADD_ITEM"; item: CartItemType }
  | {
      type: "REMOVE_ITEM";
      payload: {
        id: number;
        button: string;
      };
    };

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
  CartItemComponentType,
  CartItemType,
  CartState,
  CartAction,
  ModalProps,
  CartModalContextType,
  TableDesigns,
};
