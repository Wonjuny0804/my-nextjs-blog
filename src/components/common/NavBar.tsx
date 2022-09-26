/* eslint-disable react/display-name */
import React, { FC } from "react";
import Link from "next/link";
import Logo from "../../../public/logo.svg";
import dynamic from "next/dynamic";

const MobileMenu = dynamic(() => import("./MobileMenu/MobileMenu"));

const NavBar: FC = React.memo(() => {
  return (
    <div
      className={` border-b-2 bg-[#f4f4f0]
      backdrop-blur-xl lg:backdrop-blur border-[#000000] sticky 
      top-0 z-10 h-16 flex items-center justify-between px-3
      lg:justify-between lg:pl-10 lg:pr-10`}
    >
      <div className={`flex items-center gap-3`}>
        <Link href={"/"}>
          <a
            className={`w-fit text-[24px] block py-[12px] font-workSans font-medium text-real-black`}
          >
            <Logo className={`h-6`} />
          </a>
        </Link>
      </div>
      <div className={`hidden lg:flex lg:gap-8`}>
        <Link href={`/about`}>
          <a
            className={`font-workSans text-real-black hover:text-primary-blue hover:cursor-pointer transition-all delay-75`}
          >
            about
          </a>
        </Link>
        <Link href={`/posts`}>
          <a
            className={`font-workSans text-real-black hover:text-primary-blue hover:cursor-pointer transition-all delay-75`}
          >
            posts
          </a>
        </Link>
        <Link href={`/lab`}>
          <a
            className={`font-workSans text-real-black text-base hover:text-primary-blue hover:cursor-pointer transition-all delay-75`}
          >
            lab
          </a>
        </Link>
      </div>
      <MobileMenu />
    </div>
  );
});

export default NavBar;
