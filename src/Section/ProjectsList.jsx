import React from 'react'

const ProjectsList = ({ name, Github, url }) => {
  return (
    <div className="p-3 hover:scale-105 transition-transform duration-300">
      <h3 className="text-lg font-semibold">{name}</h3>
      <a href={Github} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-800">
        View on GitHub
      </a>
      <br />
      <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-800  hover:scale-120 transition-transform duration-300">
        Project website
      </a>
    </div>
  );
};

export default ProjectsList