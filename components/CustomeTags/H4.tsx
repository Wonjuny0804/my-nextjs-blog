import React, { FC } from "react";

interface Props {
  children: React.ReactNode | string;
}

const H4: FC<Props> = ({ children }) => {
  return (
    <h4 className={`text-[20px] font-meduium text-primary-dark`}>{children}</h4>
  );
};

export default H4;