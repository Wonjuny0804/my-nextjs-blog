import React, { FC } from "react";

interface Props {
  children: React.ReactNode | string;
}

const H2: FC<Props> = ({ children }) => {
  return (
    <h2
      className={`text-[24px] mt-5 lg:mt-10 lg:text-[32px] font-bold text-primary-dark`}
    >
      {children}
    </h2>
  );
};

export default H2;
