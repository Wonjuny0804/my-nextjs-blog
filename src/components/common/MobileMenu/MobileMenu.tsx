import React, { FC } from "react";
import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";

const MobileMenu: FC = () => {
  return (
    <div className={`flex font-montserrat items-center lg:hidden`}>
      <Menu as="div" className=" flex items-center text-left text-white">
        {({ open }) => {
          return (
            <>
              <Menu.Button
                as="button"
                className={`focus:outline-none inline-flex w-full 
          justify-center p-2 text-[20px]
           font-medium hover:bg-opacity-30
           focus-visible:ring-2 focus-visible:ring-white 
           focus-visible:ring-opacity-75`}
              >
                Menu
              </Menu.Button>

              <Transition
                show={open}
                leave="transition-all duration-300 ease-out"
                leaveFrom="opacity-100 z-[100]"
                leaveTo="opacity-0 z-[100]"
              >
                <Menu.Items
                  as="ul"
                  className={`fixed top-0 left-0 w-screen h-screen
           flex flex-col min-w-[160px] pt-8 px-5 pb-[38px] z-[140] animate-mobileMenuEnter
          bg-dark-teal text-white`}
                >
                  <div className="mobileMenu__header">
                    <Menu.Item
                      as="li"
                      className={`flex w-full justify-between opacity-0 animate-[mobileMenuItemsAppear_1s_cubic-bezier(0.62,0.05,0.01,0.99)_0.5s_forwards]`}
                    >
                      {({ close }) => (
                        <>
                          <Link
                            href="/"
                            className={`block text-[20px]`}
                            onClick={close}
                          >
                            Wonjun Jang
                          </Link>
                          <button
                            type="button"
                            className="capitalize text-[20px]"
                            onClick={close}
                          >
                            close
                          </button>
                        </>
                      )}
                    </Menu.Item>
                  </div>
                  <Menu.Item as="li" className="mt-[100px]">
                    {({ close }) => (
                      <Link
                        href="/"
                        className={`block w-full   text-white h-[68px] overflow-hidden`}
                        onClick={close}
                        passHref
                      >
                        <span className="relative text-[56px] overflow-hidden leading-[1.15]">
                          <span className="aria-hidden clip-path">Home</span>
                          <span className="opacity-0" aria-hidden="true">
                            H
                          </span>
                          <span className="opacity-0" aria-hidden="true">
                            O
                          </span>
                          <span className="opacity-0" aria-hidden="true">
                            M
                          </span>
                          <span className="opacity-0" aria-hidden="true">
                            E
                          </span>
                          <span className="absolute top-0 left-0 inline-block overflow-hidden clip-path-animated-chars">
                            <span
                              className={`inline-flex h-[68px] opacity-0 translate-y-[80%] animate-[charsIn_1.25s_cubic-bezier(0.62,0.05,0.01,0.99)_0.38s_forwards]`}
                            >
                              H
                            </span>
                            <span className="inline-flex h-[68px] opacity-0 translate-y-[80%] animate-[charsIn_1.25s_cubic-bezier(0.62,0.05,0.01,0.99)_0.48s_forwards]">
                              O
                            </span>
                            <span className="inline-flex h-[68px] opacity-0 translate-y-[80%] animate-[charsIn_1.25s_cubic-bezier(0.62,0.05,0.01,0.99)_0.58s_forwards]">
                              M
                            </span>
                            <span className="inline-flex h-[68px] opacity-0 translate-y-[80%] animate-[charsIn_1.25s_cubic-bezier(0.62,0.05,0.01,0.99)_0.68s_forwards]">
                              E
                            </span>
                          </span>
                        </span>
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item as="li">
                    {({ close }) => (
                      <Link
                        href="/about"
                        className={`block w-full   text-white h-[68px]`}
                        onClick={close}
                        passHref
                      >
                        <span className="relative text-[56px] overflow-hidden leading-[1.15]">
                          <span className="aria-hidden clip-path">About</span>
                          <span className="opacity-0" aria-hidden="true">
                            A
                          </span>
                          <span className="opacity-0" aria-hidden="true">
                            B
                          </span>
                          <span className="opacity-0" aria-hidden="true">
                            O
                          </span>
                          <span className="opacity-0" aria-hidden="true">
                            U
                          </span>
                          <span className="opacity-0" aria-hidden="true">
                            T
                          </span>
                          <span className="absolute top-0 left-0 inline-block overflow-hidden clip-path-animated-chars">
                            <span
                              className={`inline-flex h-[68px] opacity-0 translate-y-[80%] animate-[charsIn_1.25s_cubic-bezier(0.62,0.05,0.01,0.99)_0.38s_forwards]`}
                            >
                              A
                            </span>
                            <span className="inline-flex h-[68px] opacity-0 translate-y-[80%] animate-[charsIn_1.25s_cubic-bezier(0.62,0.05,0.01,0.99)_0.48s_forwards]">
                              B
                            </span>
                            <span className="inline-flex h-[68px] opacity-0 translate-y-[80%] animate-[charsIn_1.25s_cubic-bezier(0.62,0.05,0.01,0.99)_0.58s_forwards]">
                              O
                            </span>
                            <span className="inline-flex h-[68px] opacity-0 translate-y-[80%] animate-[charsIn_1.25s_cubic-bezier(0.62,0.05,0.01,0.99)_0.68s_forwards]">
                              U
                            </span>
                            <span className="inline-flex h-[68px] opacity-0 translate-y-[80%] animate-[charsIn_1.25s_cubic-bezier(0.62,0.05,0.01,0.99)_0.78s_forwards]">
                              T
                            </span>
                          </span>
                        </span>
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item as="li">
                    {({ close }) => (
                      <Link
                        href="/posts"
                        className={`block w-full  text-white`}
                        onClick={close}
                        passHref
                      >
                        <span className="relative text-[56px] overflow-hidden leading-[1.15]">
                          <span className="aria-hidden clip-path">Posts</span>
                          <span className="opacity-0" aria-hidden="true">
                            P
                          </span>
                          <span className="opacity-0" aria-hidden="true">
                            O
                          </span>
                          <span className="opacity-0" aria-hidden="true">
                            S
                          </span>
                          <span className="opacity-0" aria-hidden="true">
                            T
                          </span>
                          <span className="opacity-0" aria-hidden="true">
                            S
                          </span>
                          <span className="absolute top-0 left-0 overflow-hidden clip-path-animated-chars flex">
                            <span
                              className={`inline-flex h-[68px] opacity-0 translate-y-[80%] animate-[charsIn_1.25s_cubic-bezier(0.62,0.05,0.01,0.99)_0.38s_forwards]`}
                            >
                              P
                            </span>
                            <span className="inline-flex h-[68px] opacity-0 translate-y-[80%] animate-[charsIn_1.25s_cubic-bezier(0.62,0.05,0.01,0.99)_0.48s_forwards]">
                              O
                            </span>
                            <span className="inline-flex h-[68px] opacity-0 translate-y-[80%] animate-[charsIn_1.25s_cubic-bezier(0.62,0.05,0.01,0.99)_0.58s_forwards]">
                              S
                            </span>
                            <span className="inline-flex h-[68px] opacity-0 translate-y-[80%] animate-[charsIn_1.25s_cubic-bezier(0.62,0.05,0.01,0.99)_0.68s_forwards]">
                              T
                            </span>
                            <span className="inline-flex h-[68px] opacity-0 translate-y-[80%] animate-[charsIn_1.25s_cubic-bezier(0.62,0.05,0.01,0.99)_0.78s_forwards]">
                              S
                            </span>
                          </span>
                        </span>
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item as="li">
                    {({ close }) => (
                      <Link
                        href="/lab"
                        className={`block w-full   text-white`}
                        onClick={close}
                        passHref
                      >
                        <span className="relative text-[56px] overflow-hidden leading-[1.15]">
                          <span className="aria-hidden clip-path">Lab</span>
                          <span className="opacity-0" aria-hidden="true">
                            L
                          </span>
                          <span className="opacity-0" aria-hidden="true">
                            A
                          </span>
                          <span className="opacity-0" aria-hidden="true">
                            B
                          </span>
                          <span className="absolute top-0 left-0 inline-block overflow-hidden clip-path-animated-chars">
                            <span
                              className={`inline-flex h-[68px] opacity-0 translate-y-[80%] animate-[charsIn_1.25s_cubic-bezier(0.62,0.05,0.01,0.99)_0.38s_forwards]`}
                            >
                              L
                            </span>
                            <span className="inline-flex h-[68px] opacity-0 translate-y-[80%] animate-[charsIn_1.25s_cubic-bezier(0.62,0.05,0.01,0.99)_0.48s_forwards]">
                              A
                            </span>
                            <span className="inline-flex h-[68px] opacity-0 translate-y-[80%] animate-[charsIn_1.25s_cubic-bezier(0.62,0.05,0.01,0.99)_0.58s_forwards]">
                              B
                            </span>
                          </span>
                        </span>
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item
                    as="li"
                    className="mt-10 text-xl opacity-0 animate-[mobileMenuItemsAppear_1s_ease-in_1.2s_forwards]"
                  >
                    <p>
                      Currently Frontend <br />
                      Engineer at Paula's Choice
                    </p>
                    <p className="mt-7">
                      Based in Seoul <br />
                      South Korea
                    </p>
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </>
          );
        }}
      </Menu>
    </div>
  );
};

export default MobileMenu;
