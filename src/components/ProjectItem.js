import React from "react";


function ProjectItem({ id, name, about, technologies }) {
  const tech = technologies.map((technology) => {
    return <span key={`${id}-${technology}`}>{technology}</span>;
  });

  return (
    <div className="project-item" key={id}>
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {tech}
      </div>
    </div>
  );
}

export default ProjectItem;

