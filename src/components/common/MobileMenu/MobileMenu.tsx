import React, { FC } from "react";
import { MenuIcon } from "@heroicons/react/outline";
import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";

const MobileMenu: FC = () => {
  return (
    <div
      className={`flex font-workSans text-real-black items-center lg:hidden`}
    >
      <Menu as="div" className=" flex items-center text-left">
        {({ open }) => (
          <>
            <Menu.Button
              as="button"
              className={`focus:outline-none inline-flex w-full 
          justify-center p-2
           text-sm font-medium text-white hover:bg-opacity-30
           focus-visible:ring-2 focus-visible:ring-white 
           focus-visible:ring-opacity-75`}
            >
              <MenuIcon
                className={`w-5 h-5 text-white font-bold`}
                aria-hidden="true"
              />
            </Menu.Button>
            <Transition
              show={open}
              enter={`transition-opacity transition-[height] duration-300`}
              enterFrom={`opacity-0 h-0`}
              enterTo={`opacity-100 h-screen`}
            >
              <Menu.Items
                as="ul"
                className={`absolute top-0 left-0 w-screen h-screen
           flex flex-col min-w-[160px] py-6 
          bg-[#f4f4f0]`}
              >
                <Menu.Item as="li">
                  <Link href="/">
                    <a className={`block w-full border-b py-3 pl-6`}>main</a>
                  </Link>
                </Menu.Item>
                <Menu.Item as="li">
                  <Link href="/about">
                    <a className={`block w-full border-b py-3 pl-6`}>about</a>
                  </Link>
                </Menu.Item>
                <Menu.Item as="li">
                  <Link href="/posts">
                    <a className={`block w-full border-b py-3 pl-6`}>posts</a>
                  </Link>
                </Menu.Item>
                <Menu.Item as="li">
                  <Link href="/lab">
                    <a className={`block w-full border-b py-3 pl-6`}>lab</a>
                  </Link>
                </Menu.Item>
                <Menu.Item as="li">
                  <Link href="/admin">
                    <a className={`block w-full border-b py-3 pl-6`}>admin</a>
                  </Link>
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>
    </div>
  );
};

export default MobileMenu;
