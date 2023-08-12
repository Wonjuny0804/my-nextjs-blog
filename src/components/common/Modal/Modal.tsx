import React from "react";

interface Props {
  children: React.ReactNode;
}

const Modal = ({ children }: Props) => {
  return <dialog>{children}</dialog>;
};

export default Modal;
