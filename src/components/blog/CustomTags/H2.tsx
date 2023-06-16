import React, { FC } from "react";

interface Props {
  children: React.ReactNode | string;
}

const H2: FC<Props> = ({ children }) => {
  return (
    <h2 className={`text-2xl my-2 lg:my-5 font-medium text-white`}>
      {children}
    </h2>
  );
};

export default H2;
