import { Product } from "../models/types";

function searchLogic(
  products: Product[],
  searchedValue: string
): Product[] | undefined {
  const searchResults: Product[] = products.filter((product) =>
    product.title.toLowerCase().includes(searchedValue.toLowerCase())
  );

  if (searchResults.length === 0) {
    alert("Nothing Found!");
    return;
  }

  return searchResults;
}

function categoryLogic(products: Product[], category: string): Product[] {
  const selectedCategory: Product[] = products.filter(
    (product) => product.category.toLowerCase() === category.toLowerCase()
  );

  return selectedCategory;
}

export { searchLogic, categoryLogic };
