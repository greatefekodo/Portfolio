import React from 'react'
import ProjectsList from './ProjectsList'

const Projects = () => {
  const projects = [
    {id: 1, name: "GTA VI Landing page",
      Github: "https://github.com/greatefekodo/GTA_VI_landing_page",
      url: "https://gta-vi-landing-page-sigma.vercel.app/"
    },

    {id: 2, name: "Music Fest",
      Github: "https://github.com/greatefekodo/Music-Fest",
      url: "https://music-fest-duld.vercel.app/"
    },

     {id: 3, name: "Ecommerce shopping",
      Github: "https://github.com/greatefekodo/Ecommerce_SpringBoot-Frontend",
      url: "https://my-ecommerce-store-project.netlify.app/"
    }
  ]

  return (
  <section className="mt-32 h-dvh px-4 project">
    <h1 className="text-3xl font-bold flex items-center justify-center mb-8 text-gray-800">Projects</h1>

    <div className="container mx-auto relative rounded-lg bg-blue-100 py-10  ">
      
      {/* Timeline Vertical Line */}
      <div className="absolute top-0 left-1/2 w-1 h-full bg-gradient-to-b from-sky-400 via-cyan-700 to-teal-900 hidden md:block">
  {/* Animated Dot Indicator */}
        <div className="sticky top-1/2 -translate-y-1/2">
          <div className="absolute left-1/2 -translate-x-1/2 size-4">
            <div className="absolute size-4 animate-ping rounded-full bg-pink-500 opacity-75"></div>
            <div className="relative rounded-full bg-rose-500 size-4"></div>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">

        {/* Project 1 */}
        <div className="p-3 backdrop-blur-md rounded-lg bg-white/60 border border-white/40 shadow-sm hover:shadow transition-shadow">
          {projects.length > 0 && (
            <ProjectsList key={projects[0].id} {...projects[0]} />
          )}
        </div>

        {/* Project 2 */}
        <div className="p-3 backdrop-blur-md rounded-lg bg-white/60 border border-white/40 shadow-sm hover:shadow transition-shadow">
          {projects.length > 1 && (
            <ProjectsList key={projects[1].id} {...projects[1]} />
          )}
        </div>

        {/* Project 3 */}
        <div className="p-3 backdrop-blur-md rounded-lg bg-white/60 border border-white/40 shadow-sm hover:shadow transition-shadow">
          {projects.length > 2 && (
            <ProjectsList key={projects[2].id} {...projects[2]} />
          )}
        </div>

      

      </div>
    </div>
</section>
  )
}

export default Projects