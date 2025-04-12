import React, { useState, useEffect } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";

const MobileMenu = dynamic(() => import("./MobileMenu/MobileMenu"));

const NavBar = () => {
  const pathName = usePathname();
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [activeSection, setActiveSection] = useState("home");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      // Always show on top position or when scrolling up
      const isVisible =
        prevScrollPos > currentScrollPos || currentScrollPos < 50;

      // Add a small delay to avoid flickering
      setTimeout(() => {
        setPrevScrollPos(currentScrollPos);
        setVisible(isVisible);
      }, 50);

      // Determine active section based on scroll position
      const aboutSection = document.getElementById("about");
      const resumeSection = document.getElementById("resume");

      const aboutPosition = aboutSection?.offsetTop || 0;
      const resumePosition = resumeSection?.offsetTop || 0;

      // Add buffer to make transitions smoother
      const buffer = 100;

      if (currentScrollPos >= resumePosition - buffer) {
        setActiveSection("resume");
      } else if (currentScrollPos >= aboutPosition - buffer) {
        setActiveSection("about");
      } else {
        setActiveSection("home");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <div
      className={`fixed top-0 w-full flex py-4 px-5 lg:px-20 lg:py-5 lg:text-xl justify-between font-customFont z-[140] transition-all duration-300 ease-in-out bg-[#1e1e1e] shadow-md ${
        visible ? "translate-y-0" : "-translate-y-full"
      } ${mounted ? "opacity-100" : "opacity-0"}`}
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

      <div className={`hidden lg:flex lg:gap-6 font-customFont uppercase`}>
        <Link
          href={`/`}
          className={`text-white relative hover:text-gray-300 transition-colors duration-200 ${
            activeSection === "home"
              ? 'after:content-[""] after:absolute after:w-full after:h-[2px] after:bg-white after:bottom-[-5px] after:left-0'
              : ""
          }`}
        >
          Home
        </Link>
        <Link
          href={`/#about`}
          className={`text-white relative hover:text-gray-300 transition-colors duration-200 ${
            activeSection === "about"
              ? 'after:content-[""] after:absolute after:w-full after:h-[2px] after:bg-white after:bottom-[-5px] after:left-0'
              : ""
          }`}
        >
          About
        </Link>
        <Link
          href={`/#resume`}
          className={`text-white relative hover:text-gray-300 transition-colors duration-200 ${
            activeSection === "resume"
              ? 'after:content-[""] after:absolute after:w-full after:h-[2px] after:bg-white after:bottom-[-5px] after:left-0'
              : ""
          }`}
        >
          Resume
        </Link>
      </div>

      <MobileMenu />
    </div>
  );
};
export default React.memo(NavBar);
