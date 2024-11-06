import CLASSES from "../Styles/classes";

import { useRef, useContext } from "react";

import { OnlineShopContexts } from "../store/OnlineShop_context";

import { Product } from "../models/types";

import { searchLogic, categoryLogic } from "../utils/searchAndCategory";

const SearchBar: React.FC = () => {
  const lastChange = useRef<NodeJS.Timeout | null>(null);

  const {
    data: fetchedProducts,
    setData: setProducts,
    initialFetchedProducts,
    selectedCategory,
    searchedValue,
    setSearchedValue,
  } = useContext(OnlineShopContexts);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const searchedValue = event.target.value;
    setSearchedValue(searchedValue);

    if (lastChange.current) {
      clearTimeout(lastChange.current);
    }

    let products: Product[] = [...initialFetchedProducts];

    //Check to avoid set empty products array because of initial useRef value on mount.
    if (initialFetchedProducts.length === 0) {
      products = [...fetchedProducts];
    }

    if (selectedCategory !== "All" && selectedCategory) {
      products = categoryLogic([...initialFetchedProducts], selectedCategory);
    } else if (selectedCategory === "All") {
      products = [...initialFetchedProducts];
    }

    lastChange.current = setTimeout(() => {
      const searchResults = searchLogic(products, searchedValue);

      if (searchResults) {
        setProducts([...searchResults]);
      }

      lastChange.current = null;
    }, 500);
  }

  return (
    <div className={CLASSES.MAIN_PAGE.SearchBar_div}>
      <input
        value={searchedValue}
        type="search"
        placeholder="Search Title of Something..."
        className={CLASSES.MAIN_PAGE.SearchBar_input}
        onChange={handleChange}
      />
      <button type="button" className={CLASSES.MAIN_PAGE.SearchBar_button}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 192.904 192.904"
          width="16px"
          className={CLASSES.MAIN_PAGE.SearchBar_svg}
        >
          <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
        </svg>
      </button>
    </div>
  );
};

export default SearchBar;
