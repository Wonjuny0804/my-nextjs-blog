import React, { FC } from "react";

interface Props {
  children: React.ReactNode | string;
}

const H4: FC<Props> = ({ children }) => {
  return (
    <h4 className={`text-lg lg:text-xl font-bold text-white font-montserrat`}>
      {children}
    </h4>
  );
};

export default H4;
