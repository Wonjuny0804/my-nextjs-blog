import React from "react";
import AnimatedWords from "components/common/AnimatedWords";
import Image from "next/image";
import { InView } from "react-intersection-observer";

interface Props {
  pic1Ref: React.RefObject<HTMLImageElement>;
}

const IntroTopMobile = ({ pic1Ref }: Props) => {
  return (
    <div className=" lg:hidden">
      <h2 className="uppercase text-[56px] leading-[3rem] mt-20">
        <AnimatedWords word={["s", "o", "f", "t", "w", "a", "r", "e"]} />
        <br />
        <AnimatedWords word={["e", "n", "g", "i", "n", "e", "e", "r"]} />
      </h2>
      <section className="overflow-hidden mt-10 relative h-[300px]">
        <div className="bg-primary-dark h-[340px] z-[2] absolute top-0 w-full animate-imageOpen animation-delay-300"></div>
        <Image
          src="/../public/assets/landing_pic1.webp"
          width={290}
          height={300}
          alt="picture of me"
          ref={pic1Ref}
          className=""
        />
      </section>
      <InView triggerOnce>
        {({ inView, ref }) => (
          <div
            className={`uppercase text-[56px] leading-[0.9] mt-10 opacity-0 translate-y-[-20px] ${
              inView ? "animate-charsIn" : ""
            }`}
            ref={ref}
          >
            wonjoon <br />
            jang <span className={`text-[56px] w-[56px] h-[56px] `}>↓</span>
          </div>
        )}
      </InView>
    </div>
  );
};

export default IntroTopMobile;
