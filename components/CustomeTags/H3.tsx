import React, { FC } from "react";

interface Props {
  children: React.ReactNode | string;
}

const H3: FC<Props> = ({ children }) => {
  return (
    <h3 className={`text-[24px] font-medium text-primary-dark`}>{children}</h3>
  );
};

export default H3;
