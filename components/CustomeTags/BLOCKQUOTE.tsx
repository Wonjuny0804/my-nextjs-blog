import React, { FC } from "react";

interface Props {
  children: React.ReactNode | string;
}

const BLOCKQUOTE: FC<Props> = ({ children }) => {
  return (
    <blockquote
      className={`border-l-4 border-secondary-dark text-[#999999] pl-4 italic text-sm lg:text-base`}
    >
      {children}
    </blockquote>
  );
};

export default BLOCKQUOTE;
