import React from "react";

interface Props {
  sentence: string[];
  mobileWidth?: string;
  desktopWidth?: string;
  className?: string;
}

const AnimatedLines = ({
  sentence,
  mobileWidth,
  desktopWidth,
  className,
}: Props) => {
  return (
    <p
      className={`text-lg uppercase  ${
        mobileWidth ? mobileWidth : "w-full"
      } lg:${desktopWidth ? `desktopWidth` : "w-full"} ${className}`}
    >
      {sentence.map((phrase, i) => (
        <span
          key={`${phrase}-${i}`}
          className="relative w-[255px] h-[20px] flex gap-x-2 flex-wrap"
        >
          <span
            className={`absolute overflow-hidden clip-path-animated-chars flex gap-x-2 flex-wrap`}
          >
            <span aria-hidden="true" className="opacity-0">
              {phrase}
            </span>
            <span
              className={`leading-[1.1] h-[20px] overflow-y-hidden
      inline-flex 
      opacity-0 
      translate-y-[80%] 
      animate-[charsIn_0.8s_cubic-bezier(0.62,0.05,0.01,0.99)_forwards]
      animation-delay-[${100 * i}ms]`}
            >
              {phrase}
            </span>
          </span>
        </span>
      ))}
    </p>
  );
};

export default AnimatedLines;
