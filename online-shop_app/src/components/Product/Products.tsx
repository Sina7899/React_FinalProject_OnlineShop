import CLASSES from "../../Styles/classes";

import { useContext } from "react";

import { OnlineShopContexts } from "../../store/OnlineShop_context";

import ProductItem from "./ProductItem";

import { Product } from "../../models/types";

const Products: React.FC = () => {
  const { loading, error, data: productsInfo } = useContext(OnlineShopContexts);

  if (loading)
    return (
      <p className={CLASSES.MAIN_PAGE.Products_loadingOrError}>
        Loading products...
      </p>
    );

  if (error) {
    CLASSES.MAIN_PAGE.Products_loadingOrError += " text-red-300";
    return (
      <p className={CLASSES.MAIN_PAGE.Products_loadingOrError}>
        {`Error: ${error.message}`}
      </p>
    );
  }

  return (
    <div className={CLASSES.MAIN_PAGE.Products}>
      {productsInfo.map((product: Product) => {
        const productCardInfo = {
          productId: product.id,
          productImage: product.image,
          productTitle: product.title,
          productDes: product.description,
          productPrice: product.price,
        };
        return <ProductItem key={product.id} {...productCardInfo} />;
      })}
    </div>
  );
};

export default Products;
