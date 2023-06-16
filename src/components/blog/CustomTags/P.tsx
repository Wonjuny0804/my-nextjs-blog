import React, { FC } from "react";

interface Props {
  children: React.ReactNode | string;
}

const P: FC<Props> = ({ children }) => {
  return <p className={`paragraph`}>{children}</p>;
};

export default P;
