import React, { FC } from "react";

interface Props {
  children: React.ReactNode | string;
}

const P: FC<Props> = ({ children }) => {
  return (
    <p
      className={`text-sm font-montserrat lg:text-base text-white leading-7 lg:leading-7 my-4 lg:my-6`}
    >
      {children}
    </p>
  );
};

export default P;
