import React, { FC } from "react";
import moment from "moment";

interface Props {
  title: string;
  period: {
    from: string;
    to?: string;
  };
  desc: string;
  techStacks: Array<string>;
  role?: string;
}

const Experience: FC<Props> = ({ title, period, desc, techStacks }) => {
  return (
    <div>
      <h3 className={`font-bold text-xl`}>{title}</h3>
      <span className={`font-notoSans text-sm text-secondary-dark block mt-1`}>
        {moment(period.from).format("MMM YYYY")} ~{" "}
        {period?.to && moment(period.to).format("MMM YYYY")}
      </span>
      <p className={`font-notoSans tracking-tight text-base mt-1`}>{desc}</p>
      <div className={`flex gap-2 mt-2`}>
        {techStacks.map((techStack) => (
          <span
            key={techStack}
            className={`block font-workSans leading-[20px] text-xs text-[#555770] px-[10px] py-[3px] font-base bg-[#f2f2f5] rounded-3xl `}
          >
            {techStack}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Experience;
