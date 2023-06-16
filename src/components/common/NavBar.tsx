/* eslint-disable react/display-name */
import React from "react";
import Link from "next/link";
import Logo from "../../../public/wonjundevtech-logo.svg";
import dynamic from "next/dynamic";

const MobileMenu = dynamic(() => import("./MobileMenu/MobileMenu"));

interface Props {
  position?: "sticky" | "fixed";
}

const NavBar = ({ position = "sticky" }: Props) => {
  return (
    <div
      className={` ${position === "sticky" && position} 
      top-0 z-10 flex justify-between px-3 xl:w-[1280px] xl:m-auto xl:px-0 xl:pr-0 xl:pt-6
      bg-[#1e1e1e] lg:bg-transparent
       lg:pl-10 lg:pr-10`}
    >
      <div className={`flex items-center gap-3 font-montserrat self-start`}>
        <Link href={"/"} passHref>
          <Logo
            className={`h-6 w-fit text-[24px] block py-[12px]  font-medium text-white`}
          />
        </Link>
      </div>
      <div
        className={`hidden mt-4 lg:flex lg:flex-col lg:gap-2 font-montserrat uppercase`}
      >
        <Link
          href={`/about`}
          className={` text-white hover:text-primary-blue hover:cursor-pointer transition-all delay-75 hover-underline`}
        >
          Home
        </Link>
        <Link
          href={`/about`}
          className={` text-white hover:text-primary-blue hover:cursor-pointer transition-all delay-75`}
        >
          about
        </Link>
        <Link
          href={`/posts`}
          className={` text-white hover:text-primary-blue hover:cursor-pointer transition-all delay-75`}
        >
          posts
        </Link>
        <Link
          href={`/lab`}
          className={` text-white text-base hover:text-primary-blue hover:cursor-pointer transition-all delay-75`}
        >
          lab
        </Link>
      </div>
      <MobileMenu />
    </div>
  );
};
export default NavBar;
