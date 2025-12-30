import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import projects from "../data/projectsData";

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projects[Number(id)];

  useEffect(() => {
    const scrollY = sessionStorage.getItem("scrollPosition");
    if (scrollY) {
      window.scrollTo(0, Number(scrollY));
      sessionStorage.removeItem("scrollPosition");
    }
  }, []);

  if (!project) {
    return (
      <h2 className="text-center mt-20 text-red-500">
        Project not found
      </h2>
    );
  }

  return (
    <section className="px-6 py-10 max-w-4xl mx-auto">
      <Link
        to="/"
        onClick={(e) => {
          e.preventDefault();
          navigate(-1);
        }}
        className="text-blue-600 hover:underline mb-6 inline-block"
      >
        ← Back to Projects
      </Link>

      <h1 className="text-3xl font-bold mb-4">{project.name}</h1>

      <img
        src={project.image}
        alt={project.name}
        className="rounded-lg shadow-lg w-full mb-6"
      />

      <p className="text-lg text-gray-700 mb-4">
        {project.description}
      </p>

      <h3 className="text-xl font-semibold mb-2">
        🔧 Technologies Used:
      </h3>

      <ul className="list-disc pl-6 mb-6">
        {project.tech.map((t, index) => (
          <li key={index}>{t}</li>
        ))}
      </ul>

      {project.admin && (
        <div className="bg-gray-100 p-4 rounded-lg shadow mb-6">
          <h3 className="text-lg font-semibold mb-2">
            🔑 Admin Access
          </h3>
          <p>Email: {project.admin.email}</p>
          <p>Password: {project.admin.password}</p>
        </div>
      )}

      {project.stripe && (
        <div className="bg-gray-100 p-4 rounded-lg shadow mb-6">
          <h3 className="text-lg font-semibold mb-2">
            💳 Stripe Card Details
          </h3>
          <p>Card Number: {project.stripe.CardNumber}</p>
          <p>CVV: {project.stripe.CVV}</p>
          <p>Date: {project.stripe.Date}</p>
        </div>
      )}

      <div className="flex gap-4">
        <a
          href={project.Github}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900"
        >
          GitHub
        </a>

        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Live Demo
          </a>
        )}
      </div>
    </section>
  );
};

export default ProjectDetails;
