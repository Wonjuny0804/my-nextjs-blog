/* eslint-disable react/display-name */
import React, { FC } from "react";
import Link from "next/link";

const Footer: FC = React.memo(() => {
  return (
    <footer className={`px-8 py-8 flex flex-col gap-3 mt-20`}>
      <Link
        href={"/about"}
        passHref
        className={`w-fit text-xl grid items-center justify-center text-white leading-[1] capitalize`}
      >
        Wonjoon Jang <br />
        software engineer
      </Link>
      <div className={`flex gap-1 items-center text-white text-xl`}>
        <Link href={"https://github.com/Wonjuny0804"} passHref>
          Github,
        </Link>
        <Link
          href={"https://www.linkedin.com/in/wonjun-jang-0a8597a7/"}
          passHref
        >
          LinkedIn,
        </Link>
        <Link href={"mailto: wonwonjune@gmail.com"} passHref>
          Email
        </Link>
      </div>
    </footer>
  );
});

export default Footer;
