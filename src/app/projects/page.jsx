import React from 'react'
import BoxRevealDemo from './components/BoxRevealDemo'
import { MagicCardDemo } from './components/MagicCardDemo'

import { ExternalLink, Code2, BookOpen, Brain } from "lucide-react";

const projects = [
  {
    title: "Plataforma Educativa",
    description: "Sistema integral de aprendizaje en línea con características interactivas y seguimiento de progreso.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=1200",
    technologies: ["React", "Next.js", "TypeScript", "PostgreSQL", "JavaScript","Node.js","Prisma"],
    link: "https://consultinggroup.com.pe",
    icon: BookOpen,
  },
  {
    title: "Plataforma venta Online",
    description: "Plataforma de ventas de productos tecnlogicas, computadoras, laptops, CPU, RAM , MEMORIAS",
    image: "/img/plataforma-ventas.png",
    technologies: ["React", "Node.js", "Next.js", "Express", "Typescript","Postgresql","Tailwind.css"],
    link: "https://caleta.pe/",
    icon: Code2,
  },
  {
    title: "IA Assistant",
    description: "Asistente virtual inteligente para automatización de tareas y análisis de datos.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200",
    technologies: ["Python", "TensorFlow", "FastAPI", "Redis", "AWS"],
    link: "#",
    icon: Brain,
  },
];

function Proyects() {
  return (
    <>
      <BoxRevealDemo />

      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20 flex items-center justify-center">
                  <project.icon className="w-16 h-16 text-white opacity-75 transform group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>

              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">
                  {project.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300 font-medium"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Ver Proyecto
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='container mx-auto p-10'>
        <MagicCardDemo />
      </div>

     

    </>
  )
}

export default Proyects