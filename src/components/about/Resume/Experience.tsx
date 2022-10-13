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
      <h3 className={`font-bold text-xl font-montserrat`}>{title}</h3>
      <div className={`flex gap-3 items-center mt-1`}>
        <span className={`font-montserrat text-sm text-secondary-dark block `}>
          {moment(period.from).format("MMM YYYY")} ~{" "}
          {period?.to && moment(period.to).format("MMM YYYY")}
        </span>
        <span
          className={`text-sm font-montserrat font-medium bg-[#92B1F5] text-white px-1 rounded-xl`}
        >
          {moment(period.to).diff(moment(period.from), "months") + 1} months
        </span>
        {!period?.to && (
          <span
            className={`text-sm font-montserrat font-medium bg-emerald-300 text-white px-1 rounded-xl`}
          >
            Current
          </span>
        )}
      </div>
      <p className={`font-montserrat tracking-tight text-base mt-1`}>{desc}</p>
      <div className={`flex gap-2 mt-2 flex-wrap`}>
        {techStacks.map((techStack) => (
          <span
            key={techStack}
            className={`block font-montserrat leading-[20px] text-xs text-[#555770] px-[10px] py-[3px] font-base bg-[#f2f2f5] rounded-3xl 
            border-2 border-real-black shadow-[2px_2px_0_0] shadow-black
            `}
          >
            {techStack}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Experience;
