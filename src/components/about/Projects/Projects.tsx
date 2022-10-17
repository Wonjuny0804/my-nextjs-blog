/* eslint-disable react/display-name */
import React, { FC, useState } from "react";
import Project from "./Project";
import projects from "./projectDatas";

const Projects: FC = React.memo(() => {
  const [currentProjectIdx, setCurrentProjectIdx] = useState<number>(0);

  const { period, projectTitle, team, desc, list, link } =
    projects[currentProjectIdx];

  return (
    <section className={`mt-20 text-white px-4 lg:p-0 font-montserrat `}>
      <span className={`block w-full bg-white h-[1px] mb-5`}></span>
      <h1 className={`font-medium text-lg lg:text-2xl lg:text-white`}>
        Projects
      </h1>
      <ul className={`flex flex-col gap-3 lg:gap-10 mt-20`}>
        {projects.map(({ period, projectTitle, team, desc, list, link }) => (
          <Project
            period={{
              from: period.from,
              to: period.to,
            }}
            projectTitle={projectTitle}
            team={team}
            desc={desc}
            list={list}
            key={projectTitle}
            link={link}
          />
        ))}
        {/* <Project
          period={{
            from: period.from,
            to: period.to,
          }}
          projectTitle={projectTitle}
          team={team}
          desc={desc}
          list={list}
          key={projectTitle}
          link={link}
        /> */}
      </ul>
    </section>
  );
});

export default Projects;
