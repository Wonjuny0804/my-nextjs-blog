import React, { FC } from "react";

interface Props {
  children: React.ReactNode | string;
}

const H1: FC<Props> = ({ children }) => {
  return (
    <h1 className={`text-[48px] font-bold mt-[100px] text-primary-dark`}>
      {children}
    </h1>
  );
};

export default H1;