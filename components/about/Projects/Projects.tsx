/* eslint-disable react/display-name */
import React, { FC } from "react";
import Project from "./Project";
import projects from "./projectDatas";

const Projects: FC = React.memo(() => {
  return (
    <section className={`mt-20 text-primary-dark px-4`}>
      <h1 className={`font-medium text-lg`}>Projects</h1>
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
    </section>
  );
});

export default Projects;
