import React, { FC } from "react";
import { MenuIcon } from "@heroicons/react/outline";
import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";

const MobileMenu: FC = () => {
  return (
    <div className={`flex font-montserrat items-center lg:hidden`}>
      <Menu as="div" className=" flex items-center text-left bg-primary-dark">
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
          bg-primary-dark`}
              >
                <Menu.Item as="li">
                  {({ close }) => (
                    <Link
                      href="/"
                      className={`block w-full  py-3 pl-6 text-white`}
                      onClick={close}
                    >
                      main
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item as="li">
                  {({ close }) => (
                    <Link
                      href="/about"
                      className={`block w-full  py-3 pl-6 text-white`}
                      onClick={close}
                    >
                      about
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item as="li">
                  {({ close }) => (
                    <Link
                      href="/posts"
                      className={`block w-full  py-3 pl-6 text-white`}
                      onClick={close}
                    >
                      posts
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item as="li">
                  {({ close }) => (
                    <Link
                      href="/lab"
                      className={`block w-full  py-3 pl-6 text-white`}
                      onClick={close}
                    >
                      lab
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item as="li">
                  {({ close }) => (
                    <Link
                      href="/admin"
                      className={`block w-full  py-3 pl-6 text-white`}
                      onClick={close}
                    >
                      admin
                    </Link>
                  )}
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
