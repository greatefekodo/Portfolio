import React from "react";
import { FaGithub, FaInfoCircle } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { Link } from "react-router-dom";

const ProjectsList = ({ id, name, Github, url }) => {
  return (
    <div className="p-3 space-y-2 md:space-y-0 hover:scale-105 transition-transform duration-300 flex flex-col">
      <h3 className="text-lg font-semibold">{name}</h3>

      <div className="flex gap-1 items-center">
        <a
          href={Github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-1 text-slate-700 hover:text-blue-800"
        >
          <span>View on GitHub</span>
          <FaGithub size={18} />
        </a>
        
      </div>

      {url && (
        <div className="flex gap-1 items-center">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1 text-slate-700 hover:text-blue-800 hover:scale-110 transition-transform duration-200 ease-in-out"
          >
            <span>Live demo</span>
             <FiExternalLink size={18} />
            
          </a>
          
        </div>
      )}

      
      <Link
        to={`/project/${id}`}
        className="inline-flex items-center space-x-1 text-slate-700 hover:text-blue-800"
      >
        <span>Project Details</span>
         <FaInfoCircle size={18} />
      </Link>
    </div>
  );
};

export default ProjectsList;
