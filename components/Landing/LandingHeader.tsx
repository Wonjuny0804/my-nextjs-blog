import React from "react";
import Link from "next/link";

const LandingHeader = () => {
  return (
    <div className={`border-b bg-[#ffffff] border-[#d1d1d1] sticky top-0`}>
      <Link href={"/"}>
        <a
          className={`w-fit text-[24px] block ml-[12px] py-[12px] font-workSans font-medium text-primary-dark`}
        >
          WonjunDev.
          <span className={`font-normal text-primary-blue`}>tech</span>
        </a>
      </Link>
    </div>
  );
};

export default LandingHeader;
