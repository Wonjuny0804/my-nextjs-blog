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

const Experience: FC<Props> = ({ title, period, desc }) => {
  return (
    <div>
      {!period?.to && (
        <span className={`text-normal font-bold text-white`}>Current</span>
      )}

      <div className={`flex gap-3 items-center`}>
        <span className={`font-montserrat text-xs block`}>
          {moment(period.from).format("MMM YYYY")} -{" "}
          {period?.to && moment(period.to).format("MMM YYYY")}
        </span>
      </div>
      <h3
        className={`font-medium text-xl font-montserrat decoration-1 underline-offset-[3px]`}
      >
        {title}
      </h3>

      <p className={`leading-[1.2] text-sm`}>{desc}</p>
      <div className={`flex gap-2 flex-wrap`}></div>
    </div>
  );
};

export default Experience;
