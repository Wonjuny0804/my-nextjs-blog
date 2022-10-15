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
      {!period?.to && (
        <span
          className={`text-sm font-montserrat font-medium text-[#222222] bg-white rounded-full px-[10px] py-1.5`}
        >
          Current
        </span>
      )}
      <h3
        className={`font-bold text-xl font-montserrat mt-4 underline decoration-1 underline-offset-[3px]`}
      >
        {title}
      </h3>
      <div className={`flex gap-3 items-center mt-2`}>
        <span
          className={`font-montserrat text-sm white border block px-[10px] py-[5px]`}
        >
          {moment(period.from).format("MMM YYYY")} ~{" "}
          {period?.to && moment(period.to).format("MMM YYYY")}
        </span>
        <span
          className={`text-sm font-montserrat font-medium px-[10px] py-[5px] border text-white`}
        >
          {moment(period.to).diff(moment(period.from), "months") + 1} months
        </span>
      </div>
      <p className={`font-montserrat tracking-tight text-base mt-5`}>{desc}</p>
      <div className={`flex gap-2 mt-4 flex-wrap`}>
        {techStacks.map((techStack) => (
          <span
            key={techStack}
            className={`block font-montserrat leading-[20px] text-xs text-lighter-grey px-[10px] py-[3px] font-base bg-darker-grey rounded-[2px]
            `}
          >
            #{techStack}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Experience;
