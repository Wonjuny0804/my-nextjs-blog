import React, { FC } from "react";
import rehypePrismGenerator from "rehype-prism-plus/generator";

interface Props {
  children: React.ReactNode | string;
}

const CODE: FC<Props> = ({ children }) => {
  return (
    <code
      className={`bg-[#0220470d] border border-[#001b371a] shadow-sm rounded-[4px] font-workSans text-primary-dark px-1 py-0.5`}
    >
      {children}
    </code>
  );
};

export default CODE;
