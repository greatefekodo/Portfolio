import React from "react";
import { useParams, Link } from "react-router-dom";


const projects = [
  {
    id: 1,
    name: "GTA VI Landing page",
    description: "A landing page with modern animations and responsive design.",
    tech: ["React", "Tailwind", "GSAP"],
    Github: "https://github.com/greatefekodo/GTA_VI_landing_page",
    url: "https://gta-vi-landing-page-sigma.vercel.app/",
    image: "/images/gta.png"
  },
  {
    id: 2,
    name: "Music Fest",
    description: "An interactive music festival website with dynamic animations, where users can discover artist profiles and check concert schedules—including when and where performances take place.",
    tech: ["Html", "CSS"],
    Github: "https://github.com/greatefekodo/Music-Fest",
    url: "https://music-fest-duld.vercel.app/",
    image: "/images/musicfest.png"
  },
  {
    id: 3,
    name: "Ecommerce shopping",
    description: "Full e-commerce web app with cart, checkout, and authentication.",
    tech: ["React", "Spring Boot", "JWT","Amazon S3", "Amazon RDS", "Amazon EC2", "Stripe payment"],
    Github: "http://ecom-development-frontend.s3-website-us-east-1.amazonaws.com/",
    image: "/images/ecom.png",
    stripe: {
      CardNumber: "4000056655665556",
      CVV: "Any 3 digit of your choice",
      Date: "Any future date"

    }
  },
  {
    id: 4,
    name: "Food Delivery app",
    description:
      "Food ordering app with live tracking and secure payments. User can register and see the status of their orders. The admin can manage details through the admin portal, see live transactions and monthly revenue, monitor failed/successful transactions, and track the most ordered items from the admin dashboard.",
    tech: ["React", "Spring Boot", "Amazon S3", "Amazon RDS", "Amazon EC2", "Stripe payment", "Gmail SMTP with Jakarta Mail -For real time notification"],
    Github: "https://github.com/greatefekodo/Ecommerce_SpringBoot-Frontend",
    url: "http://foodapp-dev-4567.s3-website.eu-north-1.amazonaws.com/",
    image: "/images/foodApp.png",
    admin: {
      email: "greatefekodo@gmail.com",
      password: "progress"
    },
    stripe: {
      CardNumber: "4000056655665556",
      CVV: "Any 3 digit of your choice",
      Date: "Any future date"

    }
  }
];

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return <h2 className="text-center mt-20 text-red-500">Project not found</h2>;
  }

  return (
    <section className="px-6 py-10 max-w-4xl mx-auto">
      <Link to="/" className="text-blue-600 hover:underline mb-6 inline-block">
        ← Back to Projects
      </Link>

      <h1 className="text-3xl font-bold mb-4">{project.name}</h1>
      <img
        src={project.image}
        alt={project.name}
        className="rounded-lg shadow-lg w-full mb-6"
      />

      <p className="text-lg text-gray-700 mb-4">{project.description}</p>

      <h3 className="text-xl font-semibold mb-2">🔧 Technologies Used:</h3>
      <ul className="list-disc pl-6 mb-6">
        {project.tech.map((t, index) => (
          <li key={index}>{t}</li>
        ))}
      </ul>

      {/* admin login only for food delivery app */}
      {project.admin && (
      <div className="bg-gray-100 p-4 rounded-lg shadow mb-6">
        <h3 className="text-lg font-semibold mb-2">🔑 Admin Access</h3>
        <p>
          <strong>Email:</strong> {project.admin.email}
        </p>
        <p>
          <strong>Password:</strong> {project.admin.password}
        </p>
      </div>
    )}




      {project.admin && (
        <div className="bg-gray-100 p-4 rounded-lg shadow mb-6">
          <h3 className="text-lg font-semibold mb-2">Stripe card details</h3>
          <p>
            <strong>Card Number:</strong> {project.stripe.CardNumber}
          </p>
          <p>
            <strong>CVV:</strong> {project.stripe.CVV}
          </p>
          <p>
            <strong>Date:</strong> {project.stripe.Date}
          </p>
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
