/* eslint-disable react/display-name */
import React, { FC } from "react";
import Image from "next/image";
import myImage from "../../../public/assets/wonjun-2.png";

const Top: FC = React.memo(() => {
  return (
    <section
      className={`flex flex-col items-center font-workSans lg:flex 
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
      <div className={`px-4 lg:px-0`}>
        <div className={`text-center text-primary-dark lg:text-left`}>
          <h1 className={`text-2xl font-bold lg:text-3xl`}>Wonjun Jang</h1>
          <p className={`text-sm lg:text-base lg:mt-2`}>
            Frontend Developer at{" "}
            <span className={`font-bold`}>enkorwithus</span>
          </p>
        </div>
        <p className={`text-left text-base mt-4 lg:text-base`}>
          Currently on a UX journey. <br className={`lg:hidden`} />
          Studying and researching sustainable,{" "}
          <br className={`hidden lg:block`} />
          managable frontend products using React/Next.js
        </p>
      </div>
      <div
        className={`hidden lg:block lg:w-[120px] 
        lg:bg-gradient-to-r lg:from-cyan-500 lg:to-blue-500`}
      >
        <Image src={myImage} alt={""} className={`rounded-full`} />
      </div>
    </section>
  );
});

export default Top;
