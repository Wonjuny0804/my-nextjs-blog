import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";

const MobileMenu = dynamic(() => import("./MobileMenu/MobileMenu"));

const NavBar = () => {
  const pathName = usePathname();
  return (
    <div
      className={`fixed top-0 w-full  flex pt-[32px] px-5 lg:px-20 lg:pt-11 lg:text-xl justify-between font-customFont  z-[140]`}
    >
      <Link
        href={"/"}
        passHref
        className={`text-white text-[20px] ${
          pathName === "/posts" && "lg:text-transparent"
        }`}
      >
        Wonjoon Jang
      </Link>

      {pathName !== "/about" ||
        (pathName.startsWith("/posts") && (
          <>
            <div className="hidden lg:block text-white leading-[28px]">
              Working at <br /> Paula's Choice
            </div>
            <div className="hidden lg:block text-white leading-[28px]">
              Based in Seoul
              <br /> South Korea
            </div>
          </>
        ))}

      <div className={`hidden lg:flex lg:gap-2 font-customFont uppercase`}>
        <Link href={`/`} className={` text-white`}>
          Home
        </Link>
        <Link href={`/about`} className={`text-white `}>
          about
        </Link>
      </div>

      <MobileMenu />
    </div>
  );
};
export default React.memo(NavBar);
