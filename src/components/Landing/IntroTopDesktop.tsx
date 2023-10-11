import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";

const IntroTopDesktop = () => {
  const pic1Ref = useRef<HTMLImageElement>(null);

  const [profileImageRef, setProfileImageRef] =
    useState<HTMLImageElement | null>(null);

  useEffect(() => {
    setProfileImageRef(pic1Ref.current);

    window.addEventListener("scroll", () => {
      //parallax effect
      if (profileImageRef) {
        profileImageRef.style.transform = `translateY(${
          window.scrollY * -0.1 + -230
        }px)`;
      }
    });

    return () => {
      window.removeEventListener("scroll", () => {
        //parallax effect
        if (profileImageRef) {
          profileImageRef.style.transform = `translateY(${
            window.scrollY * -0.1 + -230
          }px)`;
        }
      });
    };
  }, [profileImageRef]);

  return (
    <div className="hidden lg:grid grid-rows-[1fr_auto_auto] grid-cols-12 gap-x-[25px] gap-y-[35px]">
      <div className=" row-start-1 row-end-2 col-start-1 col-end-6 text-8xl uppercase ">
        software <br />
        developer
      </div>

      <section className="overflow-hidden relative h-[200px] col-start-1 col-end-6 row-start-2 row-end-3">
        <div className="bg-primary-dark z-[2] h-[200px] absolute top-0 w-full animate-imageOpen animation-delay-300"></div>
        <Image
          src="/../public/assets/landing_pic1.webp"
          width={500}
          height={500}
          alt="picture of me"
          ref={pic1Ref}
          className="translate-y-[-230px]"
        />
      </section>

      <div className="row-start-3 row-end-4 col-start-1 col-end-2 text-8xl self-center">
        ↓
      </div>
      <div className="self-center text-xl row-start-3 row-end-4 col-start-2 col-end-7">
        I help designers and developers to create beautiful and seamless web
        applications
      </div>

      <div className="text-8xl uppercase col-start-7 col-end-13 row-start-3 row-end-4 text-right">
        wonjoon <br /> jang
      </div>
    </div>
  );
};

export default IntroTopDesktop;
