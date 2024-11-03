import {
  createContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";

import { CartModalContextType, children } from "../models/types";

const CartModalContext = createContext<CartModalContextType>({
  progress: "",
  showCart: () => null,
  hideCart: () => null,
  screenWidth: undefined as unknown as number,
});

const CartModalContextProvider: React.FC<children> = ({ children }) => {
  const [modalProgress, setModalProgress] = useState<"cart" | "">("");

  const showCart = useCallback(() => setModalProgress("cart"), []);
  const hideCart = useCallback(() => setModalProgress(""), []);

  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const CartModalCtx: CartModalContextType = useMemo(
    () => ({
      progress: modalProgress,
      showCart,
      hideCart,
      screenWidth,
    }),
    [modalProgress, showCart, hideCart, screenWidth]
  );

  return (
    <CartModalContext.Provider value={CartModalCtx}>
      {children}
    </CartModalContext.Provider>
  );
};

export { CartModalContextProvider, CartModalContext };
