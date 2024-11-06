import CLASSES from "../Styles/classes";

import { useContext } from "react";

import { OnlineShopContexts } from "../store/OnlineShop_context";

import { Product } from "../models/types";

import { categoryLogic, searchLogic } from "../utils/searchAndCategory";

const CategorySelect: React.FC = () => {
  const {
    data: fetchedProducts,
    setData: setProducts,
    initialFetchedProducts,
    selectedCategory,
    setSelectedCategory,
    searchedValue,
  } = useContext(OnlineShopContexts);

  let products: Product[] = [...initialFetchedProducts];

  function handleCategoryChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const category = event.target.value;
    setSelectedCategory(category);

    //Check to avoid set empty products array because of initial useRef value on mount.
    if (initialFetchedProducts.length === 0) {
      products = [...fetchedProducts];
    }

    if (category === "All") {
      let selectedCategory = [...initialFetchedProducts];

      //if user set category to "all" on first select because of previous reason that mentioned on last comment.
      if (initialFetchedProducts.length === 0) {
        selectedCategory = [...fetchedProducts];
      }

      if (searchedValue) {
        const searchResultsByCategory = searchLogic(
          selectedCategory,
          searchedValue
        );

        if (searchResultsByCategory) {
          setProducts(searchResultsByCategory);
        }
      } else {
        setProducts(selectedCategory);
      }
    } else {
      const selectedCategory = categoryLogic(products, category);

      if (searchedValue) {
        const searchResultsByCategory = searchLogic(
          selectedCategory,
          searchedValue
        );

        if (searchResultsByCategory) {
          setProducts(searchResultsByCategory);
        }
      } else {
        setProducts(selectedCategory);
      }
    }
  }

  return (
    <select
      value={selectedCategory}
      onChange={handleCategoryChange}
      className={CLASSES.MAIN_PAGE.CategorySelect_select}
    >
      <option value="" disabled>
        Select Category
      </option>
      <option value="All">All</option>
      <option value="Men's clothing">Men's clothing</option>
      <option value="Jewelery">Jewelery</option>
      <option value="Electronics">Electronics</option>
      <option value="Women's clothing">Women's clothing</option>
    </select>
  );
};

export default CategorySelect;
