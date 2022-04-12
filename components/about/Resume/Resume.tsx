/* eslint-disable react/display-name */
import React, { FC } from "react";

const Resume: FC = React.memo(() => {
  return (
    <section className={`px-4 mt-20 text-primary-dark`}>
      <h1 className={`text-[17px] font-medium`}>Skills and experiences</h1>

      <div className={`mt-3`}>
        <h2 className={`text-xl font-bold`}>Creating a product</h2>
        <ul className={`font-notoSans mt-4 list-none flex flex-col gap-2`}>
          <li
            className={`before:content-[""] before:w-[6px] before:h-[2px] 
            before:inline-block before:mb-[5px] before:mr-[8px] before:bg-[#9ca3af]
            pl-3.5 indent-[-14px]`}
          >
            Used to using{" "}
            <span className={`text-primary-blue font-bold`}>Typescript</span>{" "}
            these days. <br />
            Have mostly used <span className={`font-bold`}>
              React/Nextjs
            </span>{" "}
            for most projects, professional production level applications.
          </li>
          <li
            className={`before:content-[""] before:w-[6px] before:h-[2px] 
            before:inline-block before:mb-[5px] before:mr-[8px] before:bg-[#9ca3af]
            pl-3.5 indent-[-14px]`}
          >
            Prefer styling in{" "}
            <span className={`text-primary-blue font-bold`}>tailwindcss</span>.{" "}
            <span className={`font-bold`}>CSS</span> and{" "}
            <span className={`font-bold`}>SCSS</span> is also prefered however,
            do think still tailwindcss gave me the best development experience.
          </li>
          <li
            className={`before:content-[""] before:w-[6px] before:h-[2px] 
            before:inline-block before:mb-[5px] before:mr-[8px] before:bg-[#9ca3af]
            pl-3.5 indent-[-14px]`}
          >
            Used to using{" "}
            <span className={`font-bold`}>Redux Toolkit, MobX</span> for state
            management. Currently using{" "}
            <span className={`text-primary-blue font-bold`}>React-Query</span>{" "}
            to fetch data and sync client-side and server-side states.
          </li>
        </ul>
      </div>
      <div className={`mt-3`}>
        <h2 className={`text-xl font-bold`}>Operating with others</h2>
        <ul className={`font-notoSans mt-4`}>
          <li>- Javascript ES6+ 문법에 익숙하며 TypeScript로 개발합니다.</li>
        </ul>
      </div>

      <div>
        <h2>Experiences</h2>
      </div>
    </section>
  );
});

export default Resume;
