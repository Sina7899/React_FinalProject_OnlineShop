import CLASSES from "../Styles/classes";

import { useState, useContext } from "react";

import { OnlineShopContexts } from "../store/OnlineShop_context";

import { Product } from "../models/types";

const CategorySelect: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const {
    data: fetchedProducts,
    setData: setProducts,
    initialFetchedProducts,
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
      setProducts(initialFetchedProducts);
    } else {
      const selectedCategory = products.filter(
        (product) => product.category.toLowerCase() === category.toLowerCase()
      );
      setProducts(selectedCategory);
    }
  }

  if (
    products.length === fetchedProducts.length &&
    selectedCategory !== "All"
  ) {
    setSelectedCategory("All");
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
