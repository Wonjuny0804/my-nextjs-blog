/* eslint-disable react/display-name */
import React, { FC } from "react";
import Link from "next/link";
import Logo from "../../public/logo.svg";

const LandingHeader: FC = React.memo(() => {
  return (
    <div
      className={`border-b bg-[rgba(255, 255, 255, .8)] backdrop-blur-xl lg:backdrop-blur border-gray sticky top-0 z-10 h-16 flex items-center lg:justify-between lg:pl-10 lg:pr-10`}
    >
      <Link href={"/"}>
        <a
          className={`w-fit text-[24px] block ml-[12px] py-[12px] font-workSans font-medium text-primary-dark`}
        >
          <Logo className={`h-6`} />
        </a>
      </Link>
      <div className={`hidden lg:flex lg:gap-8`}>
        <Link href={`/about`}>
          <a
            className={`font-workSans text-primary-dark hover:text-primary-blue hover:cursor-pointer transition-all delay-75`}
          >
            about
          </a>
        </Link>
        <Link href={`/`}>
          <a
            className={`font-workSans text-primary-dark hover:text-primary-blue hover:cursor-pointer transition-all delay-75`}
          >
            posts
          </a>
        </Link>
        <Link href={`/`}>
          <a
            className={`font-workSans text-primary-dark text-base hover:text-primary-blue hover:cursor-pointer transition-all delay-75`}
          >
            lab
          </a>
        </Link>
      </div>
    </div>
  );
});

export default LandingHeader;
