import CLASSES from "../../Styles/classes";

import { memo } from "react";

import { CartItemComponentType } from "../../models/types";

const CartItem: React.FC<CartItemComponentType> = memo(
  ({ item, index, onDecrease, onIncrease, onRemove }) => {
    return (
      <tr key={item.id}>
        <td className={CLASSES.MODAL_PAGE.table_tbody_td}>{index + 1}</td>
        <td className={CLASSES.MODAL_PAGE.table_tbody_td}>{item.name}</td>
        <td className={CLASSES.MODAL_PAGE.table_tbody_td}>
          {item.description}
        </td>
        <td className={CLASSES.MODAL_PAGE.table_tbody_td}>
          <div className={CLASSES.MODAL_PAGE.table_tbody_count_div_desktop}>
            <span
              onClick={onDecrease}
              className={CLASSES.MODAL_PAGE.table_tbody_decrease_icon}
            >
              remove_shopping_cart
            </span>
            {`x${item.quantity}`}
            <span
              onClick={onIncrease}
              className={CLASSES.MODAL_PAGE.table_tbody_increase_icon}
            >
              add_shopping_cart
            </span>
          </div>
        </td>
        <td className={CLASSES.MODAL_PAGE.table_tbody_td}>{item.price}</td>
        <td className={CLASSES.MODAL_PAGE.table_tbody_td}>
          <div className={CLASSES.MODAL_PAGE.table_tbody_total_div}>
            {(item.price * item.quantity!).toFixed(2)}
            <span
              onClick={onRemove}
              className={CLASSES.MODAL_PAGE.table_tbody_decrease_icon}
            >
              delete
            </span>
          </div>
        </td>
      </tr>
    );
  }
);

export default CartItem;
