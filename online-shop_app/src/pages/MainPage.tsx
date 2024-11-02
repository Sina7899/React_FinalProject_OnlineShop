import CLASSES from "../Styles/classes";

import { OnlineShopContextProvider } from "../store/OnlineShop_context";
import { CartModalContextProvider } from "../store/CartModal_context";

import NavBar from "../components/NavBar";
import PageTitle from "../components/PageTitle";
import SearchBar from "../components/SearchBar";
import CategorySelect from "../components/CategorySelect";
import Products from "../components/Products";
import CartModal from "../components/CartModal";

const MainPage: React.FC = () => {
  return (
    <OnlineShopContextProvider>
      <CartModalContextProvider>
        <header className={CLASSES.MAIN_PAGE.header}>
          <PageTitle />
          <NavBar />
        </header>
        <main className={CLASSES.MAIN_PAGE.main}>
          <section className={CLASSES.MAIN_PAGE.main_searchAndCategory_section}>
            <SearchBar />
            <CategorySelect />
          </section>
          <section>
            <Products />
          </section>
        </main>
        <CartModal />
      </CartModalContextProvider>
    </OnlineShopContextProvider>
  );
};

export default MainPage;
