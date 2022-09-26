/* eslint-disable react/jsx-no-target-blank */
import React, { FC } from "react";

interface Props {
  children: React.ReactNode | string;
  href: string | undefined;
}

const A: FC<Props> = ({ children, href }) => {
  return (
    <a
      href={href}
      target={"_blank"}
      className={`underline cursor-pointer text-primary-blue`}
    >
      {children}
    </a>
  );
};

export default A;
