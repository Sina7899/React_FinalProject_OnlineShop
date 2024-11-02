import React, { useContext } from "react";

import { CartModalContext } from "../store/CartModal_context";
import { OnlineShopContexts } from "../store/OnlineShop_context";

import Modal from "./Modal";
import CartItem from "./CartItem";

import CLASSES from "../Styles/classes";

import { TableDesigns } from "../models/types";

const CartModal: React.FC = () => {
  const { progress, hideCart, screenWidth } = useContext(CartModalContext);
  const { items } = useContext(OnlineShopContexts);

  function handleCloseCart() {
    hideCart();
  }

  const cartTotalCost = items.reduce((totalCost, item) => {
    return totalCost + item.quantity! * item.price;
  }, 0);

  const tableDesigns: TableDesigns = {
    desktopDesign: (
      <table className={CLASSES.MODAL_PAGE.table}>
        <thead>
          <tr>
            <th className={CLASSES.MODAL_PAGE.table_thead_th}>Row</th>
            <th className={CLASSES.MODAL_PAGE.table_thead_th}>Title</th>
            <th className={CLASSES.MODAL_PAGE.table_thead_th}>Description</th>
            <th className={CLASSES.MODAL_PAGE.table_thead_th}>Count</th>
            <th className={CLASSES.MODAL_PAGE.table_thead_th}>
              Fee<sub>($)</sub>
            </th>
            <th className={CLASSES.MODAL_PAGE.table_thead_th}>
              Total<sub>($)</sub>
            </th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => {
            return <CartItem item={item} index={index} key={item.id} />;
          })}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={5} className={CLASSES.MODAL_PAGE.table_tfoot_first_td}>
              Total Cost:
            </td>
            <td className={CLASSES.MODAL_PAGE.table_tfoot_second_td}>
              {`${cartTotalCost.toFixed(2)}$`}
            </td>
          </tr>
        </tfoot>
      </table>
    ),
    mobileDesign: (
      <table className={CLASSES.MODAL_PAGE.table}>
        <thead>
          <tr>
            <th className={CLASSES.MODAL_PAGE.table_thead_th}>Title</th>
            <th className={CLASSES.MODAL_PAGE.table_thead_th}>Count</th>
            <th className={CLASSES.MODAL_PAGE.table_thead_th}>
              Fee<sub>($)</sub>
            </th>
            <th className={CLASSES.MODAL_PAGE.table_thead_th}>
              Total<sub>($)</sub>
            </th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => {
            return (
              <tr key={item.id}>
                <td className={CLASSES.MODAL_PAGE.table_tbody_td}>
                  {item.name}
                </td>
                <td className={CLASSES.MODAL_PAGE.table_tbody_td}>
                  {`x${item.quantity}`}
                </td>
                <td className={CLASSES.MODAL_PAGE.table_tbody_td}>
                  {item.price}
                </td>
                <td className={CLASSES.MODAL_PAGE.table_tbody_td}>
                  {(item.price * item.quantity!).toFixed(2)}
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={3} className={CLASSES.MODAL_PAGE.table_tfoot_first_td}>
              Total Cost:
            </td>
            <td className={CLASSES.MODAL_PAGE.table_tfoot_second_td}>
              {`${cartTotalCost.toFixed(2)}$`}
            </td>
          </tr>
        </tfoot>
      </table>
    ),
  };

  return (
    <Modal
      className="w-fit min-h-[500px]"
      open={progress === "cart"}
      onClose={progress === "cart" ? handleCloseCart : undefined}
    >
      <div className={CLASSES.MODAL_PAGE.closeIcon_div}>
        <span
          onClick={handleCloseCart}
          className={CLASSES.MODAL_PAGE.closeIcon_span}
        >
          close
        </span>
      </div>
      {screenWidth > 640 && tableDesigns.desktopDesign}
      {screenWidth < 640 && tableDesigns.mobileDesign}
    </Modal>
  );
};

export default CartModal;
