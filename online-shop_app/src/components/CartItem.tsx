import CLASSES from "../Styles/classes";

import { CartItemType } from "../models/types";

const CartItem: React.FC<{ item: CartItemType; index: number }> = ({
  item,
  index,
}) => {
  return (
    <tr key={item.id}>
      <td className={CLASSES.MODAL_PAGE.table_tbody_td}>{index + 1}</td>
      <td className={CLASSES.MODAL_PAGE.table_tbody_td}>{item.name}</td>
      <td className={CLASSES.MODAL_PAGE.table_tbody_td}>{item.description}</td>
      <td className={CLASSES.MODAL_PAGE.table_tbody_td}>
        {`x${item.quantity}`}
      </td>
      <td className={CLASSES.MODAL_PAGE.table_tbody_td}>{item.price}</td>
      <td className={CLASSES.MODAL_PAGE.table_tbody_td}>
        {(item.price * item.quantity!).toFixed(2)}
      </td>
    </tr>
  );
};

export default CartItem;
