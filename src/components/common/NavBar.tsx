/* eslint-disable react/display-name */
import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

const MobileMenu = dynamic(() => import("./MobileMenu/MobileMenu"));

const NavBar = () => {
  return (
    <div
      className={`fixed top-0 w-full  flex pt-[32px] px-5 lg:px-20 lg:pt-11 lg:text-xl justify-between font-customFont  z-[140]`}
    >
      <Link href={"/"} passHref className="text-white text-[20px]">
        Wonjoon Jang
      </Link>

      <div className="hidden lg:block text-white leading-[28px]">
        Working at <br /> Paula's Choice
      </div>

      <div className="hidden lg:block text-white leading-[28px]">
        Based in Seoul
        <br /> South Korea
      </div>

      <div className={`hidden lg:flex lg:gap-2 font-customFont uppercase`}>
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
          className={` text-white hover:text-primary-blue hover:cursor-pointer transition-all delay-75`}
        >
          lab
        </Link>
      </div>

      <MobileMenu />
    </div>
  );
};
export default NavBar;
