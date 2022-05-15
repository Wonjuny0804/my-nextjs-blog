import React, { FC } from "react";
import { MenuIcon } from "@heroicons/react/outline";
import { Menu } from "@headlessui/react";
import Link from "next/link";

const MobileMenu: FC = () => {
  return (
    <div
      className={`flex font-workSans text-primary-dark items-center lg:hidden`}
    >
      <Menu as="div" className="relative flex items-center text-left">
        <Menu.Button
          as="button"
          className={`focus:outline-none inline-flex w-full 
          justify-center p-2
           text-sm font-medium text-white hover:bg-opacity-30
           focus-visible:ring-2 focus-visible:ring-white 
           focus-visible:ring-opacity-75`}
        >
          <MenuIcon
            className={`w-5 h-5 text-[#000000] font-bold`}
            aria-hidden="true"
          />
        </Menu.Button>
        <Menu.Items
          as="ul"
          className={`absolute shadow-md rounded-lg top-[40px] right-0 flex flex-col gap-3 min-w-[160px] px-5 py-4 bg-white`}
        >
          <Menu.Item as="li">
            <Link href="/">
              <a>main</a>
            </Link>
          </Menu.Item>
          <Menu.Item as="li">
            <Link href="/about">
              <a>about</a>
            </Link>
          </Menu.Item>
          <Menu.Item as="li">
            <Link href="/">
              <a>posts</a>
            </Link>
          </Menu.Item>
          <Menu.Item as="li">
            <Link href="/lab">
              <a>lab</a>
            </Link>
          </Menu.Item>
        </Menu.Items>
      </Menu>
    </div>
  );
};

export default MobileMenu;
