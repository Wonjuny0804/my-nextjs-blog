import React from "react";

interface Props {
  word: string[];
}

const AnimatedWords = ({ word }: Props) => {
  return (
    <span className="clip-path-animated-chars relative overflow-hidden">
      {word.map((letter, i) => (
        <span className="opacity-0" key={`${word}-hidden-${letter}-${i}`}>
          {letter}
        </span>
      ))}
      <span className="absolute top-0 left-0 whitespace-nowrap">
        {word.map((letter, i) => (
          <span
            key={`${word}-${letter}-${i}`}
            className={`
      leading-[1.2]
      inline-flex
      translate-y-[90%] 
      animate-[charsIn_0.8s_cubic-bezier(0.62,0.05,0.01,0.99)_forwards]
      animation-delay-[${100 * i}ms]
      `}
          >
            {letter}
          </span>
        ))}
      </span>
    </span>
  );
};

export default AnimatedWords;
