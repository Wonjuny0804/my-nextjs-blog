import React, { useState, useEffect } from "react";
import Head from "next/head";
import NavBar from "../NavBar";
import Footer from "../Footer/Footer";

interface Props {
  children: React.ReactNode;
  fullWidth?: boolean;
  fixedHeader?: boolean;
  metaData?: {
    title?: string;
    description?: string;
    author?: string;
    image?: string;
  };
  noNav?: boolean;
  noFooter?: boolean;
}

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div
      className={`fixed bottom-5 right-5 z-50 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <button
        onClick={scrollToTop}
        className="bg-white text-black p-3 rounded-full shadow-lg hover:bg-gray-100 focus:outline-none"
        aria-label="Scroll to top"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 15l7-7 7 7"
          />
        </svg>
      </button>
    </div>
  );
};

const Layout = (props: Props) => {
  const { metaData, children, noNav, fixedHeader, noFooter } = props;

  return (
    <>
      <Head>
        <title>{metaData?.title ?? "Wonjun Jang"}</title>
        <meta
          name="description"
          content={
            metaData?.description ??
            "This is Wonjun Jangs' tech blog. Where you can find contents for development and technology"
          }
        />
        <meta
          name="og:description"
          content={
            metaData?.description ??
            "This is Wonjun Jangs' tech blog. Where you can find contents for development and technology"
          }
        />
      </Head>

      {!noNav && <NavBar />}
      <main>{children}</main>
      {!noFooter && <Footer />}
      <ScrollToTop />
    </>
  );
};

export default Layout;
