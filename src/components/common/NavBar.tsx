/* eslint-disable react/display-name */
import React, { FC } from "react";
import Link from "next/link";
import Logo from "../../../public/wonjundevtech-designLogo.svg";
import dynamic from "next/dynamic";

const MobileMenu = dynamic(() => import("./MobileMenu/MobileMenu"));

const NavBar: FC = React.memo(() => {
  return (
    <div
      className={` sticky 
      top-0 z-10 flex justify-between px-3 xl:w-[1280px] xl:m-auto xl:px-0 xl:pr-0 xl:pt-6
       lg:pl-10 lg:pr-10`}
    >
      <div className={`flex items-center gap-3 font-montserrat self-start`}>
        <Link href={"/"}>
          <a
            className={`w-fit text-[24px] block py-[12px]  font-medium text-white`}
          >
            <Logo className={`h-6`} />
          </a>
        </Link>
      </div>
      <div
        className={`hidden mt-4 lg:flex lg:flex-col lg:gap-2 font-montserrat uppercase`}
      >
        <Link href={`/about`}>
          <a
            className={` text-white hover:text-primary-blue hover:cursor-pointer transition-all delay-75`}
          >
            Home
          </a>
        </Link>
        <Link href={`/about`}>
          <a
            className={` text-white hover:text-primary-blue hover:cursor-pointer transition-all delay-75`}
          >
            about
          </a>
        </Link>
        <Link href={`/posts`}>
          <a
            className={` text-white hover:text-primary-blue hover:cursor-pointer transition-all delay-75`}
          >
            posts
          </a>
        </Link>
        <Link href={`/lab`}>
          <a
            className={` text-white text-base hover:text-primary-blue hover:cursor-pointer transition-all delay-75`}
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
