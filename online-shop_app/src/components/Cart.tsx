import CLASSES from "../Styles/classes";

import { useContext } from "react";

import { OnlineShopContexts } from "../store/OnlineShop_context";
import { CartModalContext } from "../store/CartModal_context";

const Cart: React.FC = () => {
  const { totalCartItems } = useContext(OnlineShopContexts);
  const { showCart } = useContext(CartModalContext);

  function handleShowCart() {
    if (totalCartItems === 0) {
      alert("Noting Add yet!");
    } else {
      showCart();
    }
  }

  return (
    <div className={CLASSES.MAIN_PAGE.Cart_div} onClick={handleShowCart}>
      <span className={CLASSES.MAIN_PAGE.Cart_span}>Cart</span>
      <div className={CLASSES.MAIN_PAGE.Cart_count_div}>{totalCartItems}</div>
    </div>
  );
};

export default Cart;
