/* eslint-disable react/display-name */
import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

const MobileMenu = dynamic(() => import("./MobileMenu/MobileMenu"));

const NavBar = () => {
  return (
    <div className={`flex pt-[32px] px-5 justify-between font-customFont`}>
      <Link href={"/"} passHref className="text-white text-[20px] p-2">
        Wonjoon Jang
      </Link>
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
