"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"
import projects from "../project";

// const projects = [
//     {
//         id: 1,
//         year: 2023,
//         title: 'Doodle - customer support chatbot',
//         description:
//             "We built an advanced customer support chatbot for Doodle. Our chatbot now handles 87% of Doodle's customer support inquiries, freeing up their team to focus on more complex issues.",
//         image: project1,
//     },
//     {
//         id: 2,
//         year: 2024,
//         title: 'Dash - AI calling system',
//         description:
//             "We developed Dash, an AI-powered calling system that enhances customer communication and support with automated features.",
//         image: project2,
//     },
//     {
//         id: 3,
//         year: 2024,
//         title: 'Atomic - AI driven outreach',
//         description:
//             "Atomic is our AI-driven outreach tool that maximizes engagement and conversions through intelligent automation.",
//         image: project3,
//     },
// ]

export const Portfolio = () => {
    const [selectedProject, setSelectedProject] = useState(projects[0]);


    return (
        <section id="portfolio" className="py-32 text-white">
            <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12">

                <div className="h-[400px] overflow-y-auto modern-scrollbar direction-rtl
                                [&::-webkit-scrollbar]:w-2 
                                [&::-webkit-scrollbar-track]:bg-gray-100 
                                [&::-webkit-scrollbar-thumb]:bg-purple-400 
                                [&::-webkit-scrollbar-thumb]:rounded-full 
                                [&::-webkit-scrollbar-thumb]:hover:bg-purple-500"
                                style={{ direction: "rtl" }}>

                    <div style={{ direction: "ltr" }} className="ml-4"> 
                    <h2 className="text-6xl font-bold mb-10"><span className="text-purple-300/60">Projects</span></h2>
                    {projects.map((project) => (
                        <div key={project.id}
                            onClick={() => setSelectedProject(project)}
                            className="cursor-pointer mb-8 group">

                            {/* <p className="text-purple-400 text-lg mb-2 ">{project.year}</p> */}
                            <h3 className={`text-3xl font-semibold group-hover:text-purple-400 transition-colors ${selectedProject.id === project.id ? "text-purple-200" : ""} duration-300`}>
                                {project.title}
                            </h3>
                            {selectedProject.id === project.id && (
                                <div className="border-b-2 border-purple-200 my-4"></div>
                            )}

                            {selectedProject.id === project.id && (
                                <div>
                                    <p className="text-gray-400 transition-all duration-500 ease-in-out">
                                        {project.description}
                                    </p>

                                    <button
                                        onClick={() => window.open(selectedProject.url, "_blank")}
                                        className="px-4 py-2 bg-purple-600 rounded-lg font-semibold text-lg mt-2 cursor-pointer hover:bg-purple-400"
                                    >
                                        View project
                                    </button>


                                </div>

                            )}

                        </div>
                    ))}
                    </div>
                </div>


                <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="rounded-xl shadow-lg transition-opacity duration-500 ease-in-out"
                    width={800}
                    height={450}
                />

            </div>
        </section>
    )
}