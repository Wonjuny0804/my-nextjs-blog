import React, { FC } from "react";

interface Props {
  children: React.ReactNode | string;
}

const CODE: FC<Props> = ({ children }) => {
  return (
    <code
      className={`bg-tertiary-dark rounded-md font-workSans text-[#ffffff] px-1.5 py-0.5`}
    >
      {children}
    </code>
  );
};

export default CODE;
