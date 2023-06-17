/* eslint-disable react/display-name */
import React, { FC } from "react";
import Link from "next/link";
import Logo from "../../../../public/wonjundevtech-logo.svg";

const Footer: FC = React.memo(() => {
  return (
    <footer className={`px-8 py-8 flex gap-3 mt-20`}>
      <Link
        href={"/about"}
        passHref
        className={`w-fit text-[24px] grid items-center justify-center`}
      >
        <Logo className={`h-4`} />
      </Link>
      <div className={`flex gap-2 items-center text-white text-xs`}>
        <Link href={"/"} passHref>
          Instagram
        </Link>
        <Link href={"/"} passHref>
          LinkedIn
        </Link>
        <Link href={"/"} passHref>
          Email
        </Link>
      </div>
    </footer>
  );
});

export default Footer;
