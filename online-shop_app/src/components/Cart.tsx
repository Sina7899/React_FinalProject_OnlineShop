import CLASSES from "../Styles/classes";

const Cart: React.FC = () => {
  return (
    <div className={CLASSES.MAIN_PAGE.Cart_div}>
      <span className={CLASSES.MAIN_PAGE.Cart_span}>Cart</span>
      <div className={CLASSES.MAIN_PAGE.Cart_count_div}>0</div>
    </div>
  );
};

export default Cart;
