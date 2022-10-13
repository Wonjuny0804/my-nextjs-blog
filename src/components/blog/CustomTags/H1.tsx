import React, { FC } from "react";

interface Props {
  children: React.ReactNode | string;
}

const H1: FC<Props> = ({ children }) => {
  return (
    <h1
      className={`text-[32px] lg:text-[40px] font-montserrat lg:leading-[56px] font-bold mt-[100px] text-white`}
    >
      {children}
    </h1>
  );
};

export default H1;
