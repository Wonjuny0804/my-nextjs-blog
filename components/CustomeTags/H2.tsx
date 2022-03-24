import React, { FC } from "react";

interface Props {
  children: React.ReactNode | string;
}

const H2: FC<Props> = ({ children }) => {
  return <h2 className={`text-primary-dark`}>{children}</h2>;
};

export default H2;
