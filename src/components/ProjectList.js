import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  const myProjects = projects.map((project, index) => {
    return (
      <li key={index}>
        <ProjectItem
          id={project.id}
          name={project.name}
          about={project.about}
          technologies={project.technologies}
        />
      </li>
    );
  });

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        <ul>{myProjects}</ul>
      </div>
    </div>
  );
}

export default ProjectList;

