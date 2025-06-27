"use client"

import { useState, useEffect } from "react"
import { FaTiktok } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";
import { FaGithub } from "react-icons/fa6";
import Link from "next/link"
import data from '../data/data.json'; // Importa el JSON
import { MorphingText } from "@/components/magicui/morphing-text";
import ScrollToTopButton from "@/components/ScrollToTopButton";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [activeSection, setActiveSection] = useState<string | null>(null);

  // Efecto para seguir la posición del mouse
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  // Efecto para detectar la sección activa con Intersection Observer
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const options = {
      root: null, // Usa el viewport como área de observación
      rootMargin: "0px",
      threshold: 0.5 // Activa cuando el 50% de la sección es visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id); // Actualiza la sección activa
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section); // Observa cada sección
    });

    // Limpieza al desmontar el componente
    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="relative min-h-screen font-sans text-gray-200 overflow-hidden">
      {/* Cursor light effect */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
        }}
      />

      {/* Background */}
      <div className="fixed inset-0 bg-[#0a192f] z-0" />

      <div className="flex flex-col md:flex-row relative z-10">
        {/* Fixed sidebar */}
        <aside
          className="w-full md:w-[500px] md:h-screen md:fixed p-8 md:p-20 flex flex-col"
          style={{ left: "calc((100vw - 1072px) / 3)" }}
        >
          <div className="py-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-2 text-white">Max Obregon</h1>
            <h2 className="text-xl md:text-2xl text-gray-400 pb-10">Ingeniero software</h2>
            <MorphingText texts={["Frontend", "Backend", "UX/UI", "Mobile", "Diseño", "Web"]} />
          </div>

          <nav className="pt-20">

            <ul className="space-y-6">
              <li>
                <Link
                  href="#about"
                  className={`flex items-center text-gray-400 hover:text-teal-300 transition-all duration-300 ease-in-out cursor-none ${activeSection === 'about' ? 'transform -translate-x-4 text-teal-300 font-bold' : ''
                    }`}
                >
                  <div className="w-12 h-[1px] bg-gray-400 mr-4"></div>
                  SOBRE MI
                </Link>
              </li>
              <li>
                <Link
                  href="#experience"
                  className={`flex items-center text-gray-400 hover:text-teal-300 transition-all duration-300 ease-in-out cursor-none ${activeSection === 'experience' ? 'transform -translate-x-4 text-teal-300 font-bold' : ''
                    }`}
                >
                  <div className="w-12 h-[1px] bg-gray-400 mr-4"></div>
                  EXPERIENCIA
                </Link>
              </li>
              <li>
                <Link
                  href="#projects"
                  className={`flex items-center text-gray-400 hover:text-teal-300 transition-all duration-300 ease-in-out cursor-none ${activeSection === 'projects' ? 'transform -translate-x-4 text-teal-300 font-bold' : ''
                    }`}
                >
                  <div className="w-12 h-[1px] bg-gray-400 mr-4"></div>
                  PROYECTOS
                </Link>
              </li>
              <li>
                <Link
                  href="#skills"
                  className={`flex items-center text-gray-400 hover:text-teal-300 transition-all duration-300 ease-in-out cursor-none ${activeSection === 'skills' ? 'transform -translate-x-4 text-teal-300 font-bold' : ''
                    }`}
                >
                  <div className="w-12 h-[1px] bg-gray-400 mr-4"></div>
                  HABILIDADES
                </Link>
              </li>
            </ul>
          </nav>

          <div className="mt-auto pt-12">
            <div className="flex space-x-5">
              <Link href="https://github.com/jefri1234" target="blank" className="text-gray-400 hover:text-white transition-colors cursor-none">
                <FaGithub size={20} />
              </Link>
              <Link href="https://www.linkedin.com/in/max-obregon-mejia-2245842b0/" target="blank" className="text-gray-400 hover:text-white transition-colors cursor-none">
                <FiLinkedin size={20} />
              </Link>
              <Link href="https://www.tiktok.com/@werksapps" target="blank" className="text-gray-400 hover:text-white transition-colors cursor-none">
                <FaTiktok size={20} />
              </Link>
            </div>
          </div>
        </aside>

        {/* Scrollable content */}
        <main className="w-full md:ml-[400px] p-8 md:p-12">
          <section id="about" className="py-16">
            <div className="max-w-2xl mx-auto">
              <p className="text-lg mb-6 text-gray-400">
                Hola soy Max, soy desarrollador full stack me dedico a construir soluciones web que realmente funcionen: estables, bien pensadas y con una experiencia de usuario que sume. Me manejo con fluidez tanto en el frontend como en el backend, y disfruto cada etapa del desarrollo, desde planificar la arquitectura hasta pulir los últimos detalles de diseño.
              </p>
              <p className="text-lg text-gray-400 mb-6">
                A lo largo de mi carrera he trabajado con <span className="text-teal-300">tecnologías</span>,
                como JavaScript, React, Angular, Node.js, Express, Php, Laravel, Python, Java, y bases de datos como MongoDB y PostgreSQL. También tengo experiencia integrando APIs, trabajando con autenticación, y creando interfaces que realmente buscan mejorar la experiencia del usuario.
              </p>
              <p className="text-lg text-gray-400 mb-6">
                Me interesa que el código funcione, que sea mantenible, eficiente y claro para cualquier persona que lo toque después. Tengo una forma muy práctica de encarar los proyectos, buscando siempre soluciones simples pero sólidas, y aprendiendo lo que haga falta para que las cosas salgan bien. Disfruto resolver problemas, aprender cosas nuevas{" "}
                <span className="text-teal-300">colaborar en equipos</span> y{" "}
                <span className="text-teal-300">las buenas prácticas</span>{" "}
                <span className="text-teal-300">Me tomo en serio lo que hago</span> pero{" "}
                <span className="text-teal-300">también disfruto el proceso y la oportunidad de seguir creciendo en cada proyecto.</span>{" "}
              </p>
              <p className="text-lg text-gray-400">
                Si querés conocer más sobre cómo trabajo o ver algunos de mis proyectos, te invito a seguir navegando por mi portafolio.
              </p>
            </div>
          </section>

          <section id="experience" className="py-16">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-5xl mb-8 px-3 text-teal-300 font-black">Experiencia</h2>
              {data.experiences.map((exp, index) => (
                <div key={index} className="mb-12 hover:bg-[#42474c64] p-5 rounded-xl duration-100">
                  <div className="text-gray-400 mb-2">{exp.date}</div>
                  <h3 className="text-2xl font-semibold text-white mb-2 flex items-center">
                    {exp.title}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-4 h-4 ml-2"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </h3>
                  <p className="text-gray-400">{exp.description}</p>
                  <Link href={exp.link} target="_blank" rel="noopener noreferrer" className="text-teal-300 hover:underline mt-2 inline-block cursor-none">
                    Ver más
                  </Link>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 text-sm bg-[#172a46] text-teal-300 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="projects" className="py-5">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-5xl mb-8 px-3 text-teal-300 font-black">Proyectos</h2>
              {data.projects.map((project, index) => (
                <div key={index} className="mb-12 hover:bg-[#42474c64] p-5 rounded-xl transition-colors duration-100">
                  <h3 className="text-2xl font-semibold text-white mb-4">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 text-sm bg-[#172a46] text-teal-300 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="skills" className="py-5">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-5xl mb-8 px-5 text-teal-300 font-black">Habilidades</h2>

              <div className="mb-10 px-5">
                <h3 className="text-2xl font-semibold text-white mb-4">Lenguajes</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-sm bg-[#172a46] text-teal-300 rounded">JavaScript</span>
                  <span className="px-3 py-1 text-sm bg-[#172a46] text-teal-300 rounded">TypeScript</span>
                  <span className="px-3 py-1 text-sm bg-[#172a46] text-teal-300 rounded">PHP</span>
                  <span className="px-3 py-1 text-sm bg-[#172a46] text-teal-300 rounded">Python</span>
                  <span className="px-3 py-1 text-sm bg-[#172a46] text-teal-300 rounded">Java</span>
                  <span className="px-3 py-1 text-sm bg-[#172a46] text-teal-300 rounded">C#</span>
                </div>
              </div>

              <div className="mb-10 px-5">
                <h3 className="text-2xl font-semibold text-white mb-4">Frameworks y Librerías</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-sm bg-[#172a46] text-teal-300 rounded">React</span>
                  <span className="px-3 py-1 text-sm bg-[#172a46] text-teal-300 rounded">Tailwind CSS</span>
                  <span className="px-3 py-1 text-sm bg-[#172a46] text-teal-300 rounded">Next.js</span>
                  <span className="px-3 py-1 text-sm bg-[#172a46] text-teal-300 rounded">Angular</span>
                  <span className="px-3 py-1 text-sm bg-[#172a46] text-teal-300 rounded">Vue</span>
                  <span className="px-3 py-1 text-sm bg-[#172a46] text-teal-300 rounded">Svelte</span>
                  <span className="px-3 py-1 text-sm bg-[#172a46] text-teal-300 rounded">Nest.js</span>
                  <span className="px-3 py-1 text-sm bg-[#172a46] text-teal-300 rounded">Express</span>
                  <span className="px-3 py-1 text-sm bg-[#172a46] text-teal-300 rounded">Laravel</span>
                  <span className="px-3 py-1 text-sm bg-[#172a46] text-teal-300 rounded">.NET</span>
                  <span className="px-3 py-1 text-sm bg-[#172a46] text-teal-300 rounded">FastApi</span>
                </div>
              </div>

              <div className="mb-10 px-5">
                <h3 className="text-2xl font-semibold text-white mb-4">Bases de Datos</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-sm bg-[#172a46] text-teal-300 rounded">PostgreSQL</span>
                  <span className="px-3 py-1 text-sm bg-[#172a46] text-teal-300 rounded">SQLserver</span>
                  <span className="px-3 py-1 text-sm bg-[#172a46] text-teal-300 rounded">MySQL</span>
                  <span className="px-3 py-1 text-sm bg-[#172a46] text-teal-300 rounded">MongoDB</span>
                  <span className="px-3 py-1 text-sm bg-[#172a46] text-teal-300 rounded">MySQL</span>
                  <span className="px-3 py-1 text-sm bg-[#172a46] text-teal-300 rounded">Redis</span>
                </div>
              </div>

              <div className="px-5">
                <h3 className="text-2xl font-semibold text-white mb-4">Herramientas y Otros</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-sm bg-[#172a46] text-teal-300 rounded">Docker</span>
                  <span className="px-3 py-1 text-sm bg-[#172a46] text-teal-300 rounded">Git</span>
                  <span className="px-3 py-1 text-sm bg-[#172a46] text-teal-300 rounded">GitHab</span>
                  <span className="px-3 py-1 text-sm bg-[#172a46] text-teal-300 rounded">VPS</span>
                  <span className="px-3 py-1 text-sm bg-[#172a46] text-teal-300 rounded">AWS</span>
                  <span className="px-3 py-1 text-sm bg-[#172a46] text-teal-300 rounded">Trello</span>
                  <span className="px-3 py-1 text-sm bg-[#172a46] text-teal-300 rounded">Jira</span>
                  <span className="px-3 py-1 text-sm bg-[#172a46] text-teal-300 rounded">Scrum</span>
                  <span className="px-3 py-1 text-sm bg-[#172a46] text-teal-300 rounded">Figma</span>
                  <span className="px-3 py-1 text-sm bg-[#172a46] text-teal-300 rounded">Postman</span>
                </div>
              </div>
            </div>
          </section>
          
        </main>
        <ScrollToTopButton />
      </div>
    </div>
  )
}