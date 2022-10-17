import moment from "moment";
import React, { FC } from "react";

export interface Props {
  period: {
    from: string;
    to: string;
  };
  projectTitle: string;
  team: string;
  desc: string;
  list: any;
  link?: string;
}

const Project: FC<Props> = ({
  period,
  projectTitle,
  team,
  desc,
  list,
  link,
}) => {
  return (
    <div
      className={`border border-white lg:px-[60px] lg:py-[60px] 
      `}
    >
      <div className={`flex items-center lg:gap-5`}>
        <span className={`text-[#666666]`}>1</span>
        <span className={`text-white text-sm font-montserrat`}>
          {moment(period.from).format("MMM YYYY")} ~{" "}
          {moment(period.to).format("MMM YYYY")}
        </span>
      </div>
      <div className={`flex items-center lg:gap-5`}>
        <span className={`text-[#666666]`}>2</span>
        {link ? (
          <a target={`_blank`} href={link} className={`hover:underline`}>
            <h1 className={`font-bold text-xl font-montserrat`}>
              {projectTitle}
            </h1>
          </a>
        ) : (
          <h1 className={`font-bold text-xl font-montserrat`}>
            {projectTitle}
          </h1>
        )}
      </div>
      <div className={`flex items-center lg:gap-5`}>
        <span className={`text-[#666666]`}>3</span>
        <span
          className={`font-light italic text-[#797979] mb-1 block font-montserrat`}
        >
          {team}
        </span>
      </div>
      <div className={`flex items-center lg:gap-5`}>
        <span className={`text-[#666666] self-start`}>4</span>
        <p className={`text-white font-montserrat`}>{desc}</p>
      </div>
      <div className={`ml-8 mt-8`}>
        <h2 className={` text-lg mt-3 font-montserrat`}>Things I did</h2>
        <ul
          className={` pl-0 font-light font-montserrat flex flex-col gap-1 pt-3`}
          dangerouslySetInnerHTML={{
            __html: list,
          }}
        ></ul>
      </div>
    </div>
  );
};

export default Project;
