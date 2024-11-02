import { createContext, useState, useEffect } from "react";

import { CartModalContextType, children } from "../models/types";

const CartModalContext = createContext<CartModalContextType>({
  progress: "",
  showCart: () => null,
  hideCart: () => null,
  screenWidth: undefined as unknown as number,
});

const CartModalContextProvider: React.FC<children> = ({ children }) => {
  const [modalProgress, setModalProgress] = useState<"cart" | "">("");

  function showCart() {
    setModalProgress("cart");
  }

  function hideCart() {
    setModalProgress("");
  }

  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const CartModalCtx: CartModalContextType = {
    progress: modalProgress,
    showCart,
    hideCart,
    screenWidth,
  };

  return (
    <CartModalContext.Provider value={CartModalCtx}>
      {children}
    </CartModalContext.Provider>
  );
};

export { CartModalContextProvider, CartModalContext };
