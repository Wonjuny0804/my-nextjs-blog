/* eslint-disable react/display-name */
import React, { FC } from "react";
import Link from "next/link";
import Logo from "../../public/logo.svg";
import MobileMenu from "../MobileMenu/MobileMenu";

const LandingHeader: FC = React.memo(() => {
  return (
    <div
      className={` border-b-2 bg-[rgba(255,_255,_255,_1)] 
      backdrop-blur-xl lg:backdrop-blur border-[#000000] sticky 
      top-0 z-10 h-16 flex items-center justify-between px-3
      lg:justify-between lg:pl-10 lg:pr-10`}
    >
      <div className={`flex items-center gap-3`}>
        <Link href={"/"}>
          <a
            className={`w-fit text-[24px] block py-[12px] font-workSans font-medium text-primary-dark`}
          >
            <Logo className={`h-6`} />
          </a>
        </Link>
      </div>
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
      <MobileMenu />
    </div>
  );
});

export default LandingHeader;
