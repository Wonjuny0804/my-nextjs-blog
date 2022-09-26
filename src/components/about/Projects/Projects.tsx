/* eslint-disable react/display-name */
import React, { FC } from "react";
import Project from "./Project";
import projects from "./projectDatas";

const Projects: FC = React.memo(() => {
  return (
    <section className={`mt-20 text-real-black px-4 lg:p-0 font-workSans `}>
      <h1 className={`font-medium text-lg lg:text-2xl lg:text-real-black`}>
        Projects
      </h1>
      <ul className={`flex flex-col gap-3 lg:gap-10`}>
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
      </ul>
    </section>
  );
});

export default Projects;
