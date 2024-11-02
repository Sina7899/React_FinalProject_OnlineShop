import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

import CLASSES from "../Styles/classes";

import { ModalProps } from "../models/types";

const modalRef = document.getElementById("modal") as HTMLElement;

const Modal: React.FC<ModalProps> = ({
  children,
  open,
  onClose = () => undefined,
  className = "",
}) => {
  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const modal = dialog.current;

    if (modal && open) {
      modal.showModal();
    }

    return () => {
      if (modal) modal.close();
    };
  }, [open]);

  return createPortal(
    <dialog
      ref={dialog}
      className={`${CLASSES.MODAL_PAGE.Modal} ${className}`}
      onClose={onClose}
    >
      {children}
    </dialog>,
    modalRef
  );
};

export default Modal;
