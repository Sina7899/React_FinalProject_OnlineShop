import CLASSES from "../Styles/classes";

import { useContext } from "react";

import { OnlineShopContexts } from "../store/OnlineShop_context";

const Cart: React.FC = () => {
  const { items } = useContext(OnlineShopContexts);

  const totalCartItems = items.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity!;
  }, 0);

  return (
    <div className={CLASSES.MAIN_PAGE.Cart_div}>
      <span className={CLASSES.MAIN_PAGE.Cart_span}>Cart</span>
      <div className={CLASSES.MAIN_PAGE.Cart_count_div}>{totalCartItems}</div>
    </div>
  );
};

export default Cart;
