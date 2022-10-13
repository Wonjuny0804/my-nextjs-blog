import React, { FC } from "react";

interface Props {
  children: React.ReactNode | string;
}

const H3: FC<Props> = ({ children }) => {
  return (
    <h3
      className={`text-[20px] lg:text-[24px] mt-3 lg:mt-6 font-bold text-white font-montserrat`}
    >
      {children}
    </h3>
  );
};

export default H3;
