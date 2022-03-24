import React, { FC } from "react";

interface Props {
  children: React.ReactNode | string;
}

const H2: FC<Props> = ({ children }) => {
  return (
    <h2 className={`text-[36px] font-bold mt-[100px] text-primary-dark`}>
      {children}
    </h2>
  );
};

export default H2;
