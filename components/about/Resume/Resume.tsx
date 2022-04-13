/* eslint-disable react/display-name */
import React, { FC } from "react";
import Experience from "./Experience";
import datas from "./experienceData.json";
import moment from "moment";

const Resume: FC = React.memo(() => {
  datas.data.sort(
    (exA, exB) =>
      moment(exB.period.to).valueOf() - moment(exA.period.to).valueOf()
  );

  return (
    <section className={`px-4 mt-20 text-primary-dark lg:px-0`}>
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
            <span className={`font-bold`}>SCSS</span> are also preferred
            however, do think still tailwindcss gave me the best development
            experience.
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
          <li
            className={`before:content-[""] before:w-[6px] before:h-[2px] 
            before:inline-block before:mb-[5px] before:mr-[8px] before:bg-[#9ca3af]
            pl-3.5 indent-[-14px]`}
          >
            Usually deploy frontend products using{" "}
            <span className={`font-bold`}>AWS Amplify or S3</span>. However
            thesedays I have been using{" "}
            <span className={`font-bold`}>Vercel</span> a lot for deployment as
            well.
          </li>
        </ul>
      </div>
      <div className={`mt-6`}>
        <h2 className={`text-xl font-bold`}>Operating with others</h2>
        <ul className={`font-notoSans mt-4 list-none flex flex-col gap-2`}>
          <li
            className={`before:content-[""] before:w-[6px] before:h-[2px] 
            before:inline-block before:mb-[5px] before:mr-[8px] before:bg-[#9ca3af]
            pl-3.5 indent-[-14px]`}
          >
            Used to{" "}
            <span className={`font-bold text-primary-blue`}>Agile methods</span>{" "}
            when working, most of my work experiences include working in an
            iteration using <span className={`font-bold`}>JIRA</span>.
          </li>
          <li
            className={`before:content-[""] before:w-[6px] before:h-[2px] 
            before:inline-block before:mb-[5px] before:mr-[8px] before:bg-[#9ca3af]
            pl-3.5 indent-[-14px]`}
          >
            Familiar with Designing tools such as{" "}
            <span className={`font-bold text-primary-blue`}>Figma</span> or
            Adobe files
          </li>
          <li
            className={`before:content-[""] before:w-[6px] before:h-[2px] 
            before:inline-block before:mb-[5px] before:mr-[8px] before:bg-[#9ca3af]
            pl-3.5 indent-[-14px]`}
          >
            <span className={`font-bold`}>Git and github PR</span> and peer code
            reviewing is usually how I&apos;ve managed to sum up codes.
          </li>
        </ul>
      </div>

      <div className={`mt-20`}>
        <h2 className={`text-[17px] font-medium mb-3`}>Experiences</h2>

        <div className={`flex flex-col gap-4`}>
          {datas.data.map((experience) => (
            <Experience
              title={experience.title}
              period={experience.period}
              desc={experience.desc}
              techStacks={experience.techStacks}
              key={experience.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
});

export default Resume;
