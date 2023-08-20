/* eslint-disable react/display-name */
import React, { FC, useCallback, useRef } from "react";
import Link from "next/link";
import Logo from "../../../../public/wonjundevtech-logo.svg";
import { XIcon } from "@heroicons/react/outline";
import useLanguageSlice, { LanguageSlice } from "stores/language";

const Footer: FC = React.memo(() => {
  const modalRef = useRef<HTMLDialogElement>(null);
  const langService = useLanguageSlice();

  const handleLanguageClick = useCallback(
    (lang: LanguageSlice["locale"]) => {
      if (!modalRef.current) return;

      langService.setLocale(lang);
      modalRef.current.close();
    },
    [langService]
  );

  const handleCloseModal = useCallback(() => {
    if (!modalRef.current) return;
    modalRef.current.close();
  }, []);

  const handleShowModal = useCallback(() => {
    if (!modalRef.current) return;
    modalRef.current.showModal();
  }, []);

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
        <Link href={"/"} passHref>
          Github,
        </Link>
        <Link href={"/"} passHref>
          LinkedIn,
        </Link>
        <Link href={"mailto: wonwonjune@gmail.com"} passHref>
          Email,
        </Link>
        {/* <button type="button" onClick={handleShowModal}>
          language
        </button> */}
      </div>

      {/* <dialog
        ref={modalRef}
        className="w-[80vw] bg-secondary-dark text-white p-5"
      >
        <header className="relative">
          <h2 className="text-2xl">Available Languages</h2>
          <button
            type="button"
            onClick={handleCloseModal}
            className="absolute top-0 right-0"
          >
            <XIcon width={22} />
          </button>
        </header>

        <ul className="mt-5 flex flex-col gap-3">
          <li>
            <button type="button" onClick={() => handleLanguageClick("ko")}>
              한국어
            </button>
          </li>
          <li>
            <button type="button" onClick={() => handleLanguageClick("en")}>
              English
            </button>
          </li>
        </ul>
      </dialog> */}
    </footer>
  );
});

export default Footer;
