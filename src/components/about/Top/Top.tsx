/* eslint-disable react/display-name */
import React, { FC, useEffect, useRef, useState } from "react";
import Image from "next/image";
import myImage from "../../../../public/assets/wonjun-2.png";
import AOS from "aos";

const Top: FC = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const ptagRef = useRef<HTMLParagraphElement>(null);
  const ptag = ptagRef.current;

  const [opacity, setOpacity] = useState<number>(0);

  const handleScroll = () => {
    console.log(ptag?.getBoundingClientRect().top, window.innerHeight);
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [ptag]);

  return (
    <section
      className={`flex flex-col font-montserrat px-4
        lg:gap-14
      lg:mt-10 lg:px-0
      `}
    >
      <div className={`w-[160px] lg:w-[240px]`}>
        <Image
          src={myImage}
          alt={"Image of Wonjun"}
          className={`rounded-full`}
        />
      </div>
      <h1
        className={`font-bold text-[42px] leading-[52px] lg:text-[60px] lg:leading-[72px]
         text-transparent bg-clip-text bg-gradient-to-tr underline decoration-white underline-offset-2 decoration-1
         from-white to-blue-300 tracking-tight`}
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
      >
        Hi there, <br />
        this is Wonjun.
      </h1>

      <h2
        className={`font-medium text-[24px] lg:text-[36px] lg:leading-[40px] tracking-tight leading-[30px] mt-[80px] lg:mt-[30px] text-white`}
      >
        Currently on a <span className={`underline`}>UX journey.</span>
        <br />
        Studying and researching
        <br /> a better, managable frontend products.
      </h2>

      <p
        className={`mt-6 font-[400] text-[16px] leading-[20px] 
        lg:text-[18px] lg:leading-[24px]
        text-grey`}
        ref={ptagRef}
      >
        As a frontend developer, I try to see the details and think about the
        journey users go through within the application. In other words,{" "}
        <span className={`text-blue-500 font-medium`}>User Experience.</span>{" "}
        <span className={`font-medium`}>
          I Truly believe that keeping these in mind will leave a memorable
          experience for the users and lead to a successful service.
        </span>
      </p>
    </section>
  );
};

export default Top;
