import React, { FC } from "react";

interface Props {
  children: React.ReactNode | string;
}

const P: FC<Props> = ({ children }) => {
  return (
    <p
      className={`text-sm font-notoSans lg:text-base text-primary-dark leading-7 lg:leading-7 my-4 lg:my-6`}
    >
      {children}
    </p>
  );
};

export default P;
