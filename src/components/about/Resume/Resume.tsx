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
    <section className={`px-4 mt-20 text-white lg:px-0`}>
      <div className={`mt-20`}>
        <h2
          className={`text-[17px] font-medium mb-3 lg:text-2xl font-montserrat`}
        >
          Work Experience
        </h2>

        <div className={`flex flex-col gap-6`}>
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
