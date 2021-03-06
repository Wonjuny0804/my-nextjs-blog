/* eslint-disable react/display-name */
import Link from "next/link";
import React, { FC } from "react";
import Logo from "../../public/logo.svg";

const Footer: FC = React.memo(() => {
  return (
    <footer
      className={`pt-[60px] pb-10 px-10 border-t border-gray mt-20 flex flex-col items-center`}
    >
      <Link href={"/"}>
        <a
          className={`w-fit text-[24px] block font-workSans font-medium text-primary-dark`}
        >
          <Logo className={`h-6`} />
        </a>
      </Link>
      <p className={`font-regular font-workSans text-sm font-light`}>
        © All rights reserved to Wonjun Jang
      </p>
    </footer>
  );
});

export default Footer;
