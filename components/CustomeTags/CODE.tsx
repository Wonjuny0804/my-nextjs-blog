import React, { FC } from "react";

interface Props {
  children: React.ReactNode | string;
}

const CODE: FC<Props> = ({ children }) => {
  return (
    <code
      className={`bg-[#0220470d] text-sm lg:text-base whitespace-pre-wrap border border-[#001b371a] shadow-sm rounded-[4px] px-1 py-0.5`}
    >
      {children}
    </code>
  );
};

export default CODE;
