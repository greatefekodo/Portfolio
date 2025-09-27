import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const ProjectsList = ({ id, name, Github, url }) => {
  return (
    <div className="p-3 hover:scale-105 transition-transform duration-300 flex-col">
      <h3 className="text-lg font-semibold">{name}</h3>
      
      <div className='flex gap-1 items-center'>
        <a href={Github} target="_blank" rel="noopener noreferrer" className="text-slate-700 hover:text-blue-800">
          View on GitHub
        </a>
        <FaGithub size={18} />
      </div>
      
      {url && (
        <div className='flex gap-1 items-center'>
          <a href={url} target="_blank" rel="noopener noreferrer" className="text-slate-700 hover:text-blue-800 hover:scale-120 transition-transform duration-300">
            Live demo 
          </a>
          <FiExternalLink size={18} />
        </div>
      )}

      {/* Project Details Page link */}
      <Link 
        to={`/project/${id}`} 
        className="text-slate-700 hover:text-blue-800 hover:scale-120 transition-transform duration-300"
      >
        Project Details
      </Link>
    </div>
  );
};

export default ProjectsList;
