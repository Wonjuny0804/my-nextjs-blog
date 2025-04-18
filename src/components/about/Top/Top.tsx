/* eslint-disable react/display-name */
import React, { FC } from "react";

const Top: FC = () => {
  return (
    <section
      className={`flex flex-col font-montserrat px-4
        lg:gap-14
      lg:mt-6 lg:px-0
      `}
    >
      <p
        className={`mt-5 font-[400] text-[16px] leading-[22px] 
        lg:text-[18px] lg:leading-[24px]
        text-grey`}
      >
        As a front-end developer, I pay meticulous attention to the journey and
        details that <b>users experience</b> within the application. My focus is
        on user experience. I believe that considering these elements leaves a
        lasting impression on users and leads to the success of the service.
      </p>
    </section>
  );
};

export default Top;
