/* eslint-disable react/display-name */
import React, { FC } from "react";
import Image from "next/image";
import myImage from "../../../public/assets/wonjun-2.png";

const Top: FC = () => {
  return (
    <section
      className={`flex flex-col font-workSans px-4 lg:flex 
        lg:gap-14 lg:flex-row 
      lg:mt-10 lg:px-10
      `}
    >
      <div className={`w-[160px] lg:hidden`}>
        <Image
          src={myImage}
          alt={"Image of Wonjun"}
          className={`rounded-full`}
        />
      </div>
      <h1
        className={`font-bold text-[42px] leading-[52px] 
         text-transparent bg-clip-text bg-gradient-to-tr 
         from-blue-600 to-blue-300 tracking-tight`}
      >
        Hi there, <br />
        this is Wonjun.
      </h1>

      <h2
        className={`font-medium text-[24px] tracking-tight leading-[30px] mt-[120px] text-primary-dark`}
      >
        Currently on a UX journey.
        <br />
        Studying and researching
        <br /> a better, managable frontend products.
      </h2>

      <p
        className={`mt-5 font-[400] text-[16px] leading-[20px] text-primary-dark`}
      >
        As a frontend developer, try to see the details and think about the
        journey users go through within the application. I Truly believe that
        keeping these in mind will leave a memorable experience for the users
        and lead to successful product.
      </p>
    </section>
  );
};

export default Top;
