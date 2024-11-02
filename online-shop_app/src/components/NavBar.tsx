import CLASSES from "../Styles/classes";

import UserInfo from "./UserInfo";
import Cart from "./Cart/Cart";

import Logo from "../assets/images/Logo.png";

const NavBar: React.FC = () => {
  return (
    <nav className={CLASSES.MAIN_PAGE.nav}>
      <UserInfo />
      <div>
        <img
          src={Logo}
          alt="Online shop Logo"
          className={CLASSES.MAIN_PAGE.Logo}
        />
      </div>
      <Cart />
    </nav>
  );
};

export default NavBar;
