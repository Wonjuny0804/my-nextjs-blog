import React, { FC } from "react";

interface Props {
  children: React.ReactNode | string;
}

const H5: FC<Props> = ({ children }) => {
  return (
    <h5 className={`text-[16px] font-medium text-white font-montserrat`}>
      {children}
    </h5>
  );
};

export default H5;
