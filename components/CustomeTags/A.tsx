import React, { FC } from "react";

interface Props {
  children: React.ReactNode | string;
}

const A: FC<Props> = ({ children }) => {
  return (
    <a className={`underline cursor-pointer text-primary-blue`}>{children}</a>
  );
};

export default A;
