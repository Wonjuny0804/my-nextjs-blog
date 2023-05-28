/* eslint-disable react/display-name */
import React, { FC } from "react";
import Link from "next/link";
import Logo from "../../../../public/wonjundevtech-designLogo.svg";

const Footer: FC = React.memo(() => {
  return (
    <footer
      className={`pt-[60px] bg-transparent pb-10 px-10 border-t flex flex-col items-center`}
    >
      <Link
        href={"/"}
        passHref
        className={`w-fit text-[24px] block font-workSans font-medium text-primary-dark`}
      >
        <Logo className={`h-6`} />
      </Link>
      <p
        className={`font-regular text-white font-montserrat text-sm font-light`}
      >
        © All rights reserved to Wonjun Jang
      </p>
    </footer>
  );
});

export default Footer;
