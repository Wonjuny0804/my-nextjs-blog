/* eslint-disable react/display-name */
import React, { FC } from "react";
import Image from "next/image";
import myImage from "../../../public/assets/wonjun-2.png";

const Top: FC = React.memo(() => {
  return (
    <section
      className={`flex flex-col items-center font-workSans lg:flex lg:justify-between`}
    >
      <div className={`w-[160px] lg:hidden`}>
        <Image
          src={myImage}
          alt={"Image of Wonjun"}
          className={`rounded-full`}
        />
      </div>
      <div className={`px-4`}>
        <div className={`text-center text-primary-dark`}>
          <h1 className={`text-2xl font-bold`}>Wonjun Jang</h1>
          <p className={`text-sm`}>
            Frontend developer at{" "}
            <span className={`font-bold`}>enkorwithus</span>
          </p>
        </div>
        <p className={`text-left text-base mt-4 `}>
          Currently on a UX journey. <br />
          Studying and researching sustainable, managable frontend products
          using React/Next.js
        </p>
      </div>
      <div
        className={`hidden lg:block lg:w-[160px] lg:bg-gradient-to-r lg:from-cyan-500 lg:to-blue-500`}
      >
        <Image src={myImage} alt={""} />
      </div>
    </section>
  );
});

export default Top;
