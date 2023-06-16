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

  const handleScroll = () => {};

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
      {/* <div className={`w-[160px] lg:w-[240px]`}>
        <Image
          src={myImage}
          alt={"Image of Wonjun"}
          className={`rounded-full`}
        />
      </div> */}
      <h1 className={`text-white text-xl font-medium mt-6`}>
        글쓰는 취미를 가진 개발자입니다.
      </h1>

      {/* TODO: maybe too much of a description? */}
      {/* <h2
        className={`font-regular text-xl
        lg:text-[36px] lg:leading-[40px] 
        tracking-tight leading-[30px] mt-[80px] font-montserrat
        lg:mt-[30px] text-white`}
      >
        Currently on a <span className={`font-`}>UX journey.</span>
        <br />
        Studying and researching
        <br /> a better, managable frontend products.
      </h2> */}

      <p
        className={`mt-[300px] font-[400] text-[16px] leading-[22px] 
        lg:text-[18px] lg:leading-[24px]
        text-grey`}
        ref={ptagRef}
      >
        프론트엔드 개발자로서, 저는 애플리케이션 내에서 사용자들이 겪는 여정과
        세부 사항들에 세심한 주의를 기울입니다. <b>사용자 경험</b>에 중점을 두는
        것이지요. 이러한 요소들을 고려하는 것이 사용자에게 깊은 인상을 남기고,
        서비스의 성공을 이끌 것이라고 믿습니다.
      </p>
    </section>
  );
};

export default Top;
