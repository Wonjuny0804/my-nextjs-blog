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
    <div>
      <span className={`text-secondary-dark text-sm font-notoSansEng`}>
        {moment(period.from).format("MMM YYYY")} ~{" "}
        {moment(period.to).format("MMM YYYY")}
      </span>
      {link ? (
        <a target={`_blank`} href={link} className={`hover:underline`}>
          <h1 className={`font-bold text-xl font-notoSans`}>{projectTitle}</h1>
        </a>
      ) : (
        <h1 className={`font-bold text-xl font-workSans`}>{projectTitle}</h1>
      )}
      <span
        className={`font-light italic text-[#797979] mb-1 block font-workSans`}
      >
        {team}
      </span>
      <p className={`text-primary-dark font-notoSansEng`}>{desc}</p>
      <h2 className={`font-medium text-lg mt-3 font-notoSans`}>Things I did</h2>
      <ul
        className={`list-disc pl-10 font-light font-notoSansEng flex flex-col gap-1 pt-3`}
        dangerouslySetInnerHTML={{
          __html: list,
        }}
      ></ul>
    </div>
  );
};

export default Project;
