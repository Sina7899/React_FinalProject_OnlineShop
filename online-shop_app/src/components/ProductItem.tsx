import CLASSES from "../Styles/classes";

import { useContext } from "react";

import { OnlineShopContexts } from "../store/OnlineShop_context";

import { ProductCardInfo, CartItemType } from "../models/types";

const ProductItem: React.FC<ProductCardInfo> = ({
  productId,
  productImage,
  productTitle,
  productDes,
  productPrice,
}) => {
  const { addItem } = useContext(OnlineShopContexts);

  const cartItem: CartItemType = {
    id: productId,
    name: productTitle,
    description: productDes,
    price: productPrice,
  };

  function handleAddToCart() {
    addItem(cartItem);
  }

  return (
    <div className={CLASSES.MAIN_PAGE.ProductItem_first_div}>
      <img
        src={productImage}
        alt="Product Image"
        className={CLASSES.MAIN_PAGE.ProductItem_img}
      />
      <div className={CLASSES.MAIN_PAGE.ProductItem_second_div}>
        <div>
          <h4 className={CLASSES.MAIN_PAGE.ProductItem_h4}>{productTitle}</h4>
          <p className={CLASSES.MAIN_PAGE.ProductItem_p}>{productDes}</p>
        </div>
        <div className={CLASSES.MAIN_PAGE.ProductItem_third_div}>
          <span className={CLASSES.MAIN_PAGE.ProductItem_first_span}>
            price:
            <span className={CLASSES.MAIN_PAGE.ProductItem_second_span}>
              {productPrice + "$"}
            </span>
          </span>
          <button
            type="button"
            onClick={handleAddToCart}
            className={CLASSES.MAIN_PAGE.ProductItem_button}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
