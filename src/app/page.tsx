"use client"

import { useState, useEffect } from "react"
import { Github, Linkedin, Code2, Instagram, BookMarked, } from "lucide-react"
import { FaTiktok } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";
import { FaGithub } from "react-icons/fa6";
import Link from "next/link"

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

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
            <h2 className="text-xl md:text-2xl text-gray-400">Desarollador Full Stack</h2>
            <p className="mt-6 text-gray-400">Creo experiencias digitales accesibles y con píxeles perfectos para la web.</p>
          </div>

          <nav className="mt-8">
            <ul className="space-y-6">
              <li>
                <Link href="#about" className="flex items-center text-gray-400 hover:text-teal-300 transition-colors">
                  <div className="w-12 h-[1px] bg-gray-400 mr-4"></div>
                  SOBRE MI
                </Link>
              </li>
              <li>
                <Link
                  href="#experience"
                  className="flex items-center text-gray-400 hover:text-teal-300 transition-colors"
                >
                  <div className="w-12 h-[1px] bg-gray-400 mr-4"></div>
                  EXPERIENCIA
                </Link>
              </li>
              <li>
                <Link
                  href="#projects"
                  className="flex items-center text-gray-400 hover:text-teal-300 transition-colors"
                >
                  <div className="w-12 h-[1px] bg-gray-400 mr-4"></div>
                  PROYECTOS
                </Link>
              </li>
            </ul>
          </nav>

          <div className="mt-auto pt-12">
            <div className="flex space-x-5">
              <Link href="https://github.com/jefri1234" target="blank" className="text-gray-400 hover:text-white transition-colors">
                <FaGithub size={20} />
              </Link>
              <Link href="https://www.linkedin.com/in/max-obregon-mejia-2245842b0/" target="blank"  className="text-gray-400 hover:text-white transition-colors">
                <FiLinkedin size={20} />
              </Link>
              <Link href="https://www.tiktok.com/@werksapps" target="blank"  className="text-gray-400 hover:text-white transition-colors">
                <FaTiktok size={20} />
              </Link>
            </div>
          </div>
        </aside>

        {/* Scrollable content */}
        <main className="w-full md:ml-[400px] p-8 md:p-12">
          <section id="about" className=" py-16 ">
            <div className="max-w-2xl mx-auto">
              <p className="text-lg mb-6 text-gray-400">
                I'm a developer passionate about crafting accessible, pixel-perfect user interfaces that blend
                thoughtful design with robust engineering. My favorite work lies at the intersection of design and
                development, creating experiences that not only look great but are meticulously built for performance
                and usability.
              </p>
              <p className="text-lg text-gray-400 mb-6">
                Currently, I'm a Senior Front-End Engineer at <span className="text-teal-300">Compañía</span>,
                specializing in accessibility. I contribute to the creation and maintenance of UI components that power
                Compañía's frontend, ensuring our platform meets web accessibility standards and best practices to
                deliver an inclusive user experience.
              </p>
              <p className="text-lg text-gray-400 mb-6">
                In the past, I've had the opportunity to develop software across a variety of settings — from{" "}
                <span className="text-teal-300">advertising agencies</span> and{" "}
                <span className="text-teal-300">large corporations</span> to{" "}
                <span className="text-teal-300">start-ups</span> and{" "}
                <span className="text-teal-300">small digital product studios</span>. Additionally, I also released a{" "}
                <span className="text-teal-300">comprehensive video course</span> a few years ago, guiding learners
                through building a web app with the Spotify API.
              </p>
              <p className="text-lg text-gray-400">
                In my spare time, I'm usually climbing, reading, hanging out with my family, or running around
                exploring new places.
              </p>
            </div>
          </section>

          <section id="experience" className=" py-16 ">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-5xl s mb-8 px-3 text-teal-300  font-black">Experiencia</h2>
              
              
              <div className="mb-12 hover:bg-[#42474c64] p-5 rounded-xl  duration-100 ">
                <div className="text-gray-400 mb-2">2025-01 / 2025-04</div>
                <h3 className="text-2xl font-semibold text-white mb-2 flex items-center ">
                  OVERHAULMINING - Desarrollador Full Stack 
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
                <p className="text-gray-400">
                Creación de un sistema para una empresa Minera para el proceso de conexión con la SUNAT, creación de facturación electrónica, documentos firmados digitalmente, Optimizar la gestión de los datos para poder obtener de manera organizada, búsqueda de empresas, equipos, placa, ruc, personas, empresas matrices, filtrar y buscar por diferentes tipos de opciones, Autenticación y asignación de roles para gerente, contador, inspector, administrador cada rol tiene asignado sus respectivas acciones, cargar, descargar, filtrar, crear, editar, notificar y demás acciones, Implementación de web corporativa para la representación a la empresa acerca de los servicios, cursos, empresas.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="px-3 py-1 text-sm bg-[#172a46] text-teal-300 rounded">PHP</span>
                  <span className="px-3 py-1 text-sm bg-[#172a46] text-teal-300 rounded">Laravel</span>
                  <span className="px-3 py-1 text-sm bg-[#172a46] text-teal-300 rounded">Typescript</span>
                  <span className="px-3 py-1 text-sm bg-[#172a46] text-teal-300 rounded">React</span>
                  <span className="px-3 py-1 text-sm bg-[#172a46] text-teal-300 rounded">Next.js</span>
                  <span className="px-3 py-1 text-sm bg-[#172a46] text-teal-300 rounded">Docker</span>
                  <span className="px-3 py-1 text-sm bg-[#172a46] text-teal-300 rounded">VPS</span>
                  <span className="px-3 py-1 text-sm bg-[#172a46] text-teal-300 rounded">AWS</span>
                  
                </div>
              </div>

              <div className="mb-12 hover:bg-[#42474c64] p-5 rounded-xl  duration-100 ">
                <div className="text-gray-400 mb-2">2024-01 / 2024-12</div>
                <h3 className="text-2xl font-semibold text-white mb-2 flex items-center ">
                  Consultinggroup - Desarrollador Full Stack 
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
                <p className="text-gray-400">
                Lideré para la creacion de la  Aplicacion de un Aula virtual donde podemos visualizar cursos, ingreso al aula virtual, modulos , materiales de estudio, generación de certificados y constancias. Filtrado de cursos, modulos, Landing Pages para cada curso, Filtrado de alumnos, Panel administrativo y adapataciones y creación de interfaces a nivel general.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="px-3 py-1 text-sm bg-[#172a46] text-teal-300 rounded">JavaScript</span>
                  <span className="px-3 py-1 text-sm bg-[#172a46] text-teal-300 rounded">TypeScript</span>
                  <span className="px-3 py-1 text-sm bg-[#172a46] text-teal-300 rounded">React</span>
                  <span className="px-3 py-1 text-sm bg-[#172a46] text-teal-300 rounded">Next.js</span>
                  <span className="px-3 py-1 text-sm bg-[#172a46] text-teal-300 rounded">Node.js</span>
                  <span className="px-3 py-1 text-sm bg-[#172a46] text-teal-300 rounded">AWS</span>
                </div>
              </div>

              <div className="mb-12 hover:bg-[#42474c64] p-5 rounded-xl transition-colors duration-100">
                <div className="text-gray-400 mb-2">2023-01 / 2023-12</div>
                <h3 className="text-2xl font-semibold text-white mb-2">Rematazo - Desarrollador Full Stack </h3>
                <p className="text-gray-400">
                Creacion de un aplicativo de ventas de productos tecnologicos, interfaces para la visualización de productos por mas vendidos, ofertas o promociones asi como la organizacion por categoria y busqueda de productos, clasificación de nuevos producos, Panel administrativo para realización de cotizaciones asi como adaptacion de interfaces en diferentes dispositivos.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="px-3 py-1 text-sm bg-[#172a46] text-teal-300 rounded">React</span>
                  <span className="px-3 py-1 text-sm bg-[#172a46] text-teal-300 rounded">Next.js</span>
                  <span className="px-3 py-1 text-sm bg-[#172a46] text-teal-300 rounded">Tailwind CSS</span>
                  <span className="px-3 py-1 text-sm bg-[#172a46] text-teal-300 rounded">PHP</span>
                  <span className="px-3 py-1 text-sm bg-[#172a46] text-teal-300 rounded">Laravel</span>
                </div>
              </div>

              <div className="mb-12 hover:bg-[#42474c64] p-5 rounded-xl transition-colors duration-100">
                <div className="text-gray-400 mb-2">2022-01 / 2022-06</div>
                <h3 className="text-2xl font-semibold text-white mb-2">nbjconstructores - Desarrollador Frontend</h3>
                <p className="text-gray-400">
                Desarollo una Aplicacion inmobiliaria de venta de propiedades,casas, lotes, pisos, departamento donde podemos realizar busquedas para obtener por direccion o precios, ademas de obtener descripcion detallada de cada propiedad.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="px-3 py-1 text-sm bg-[#172a46] text-teal-300 rounded">Angular</span>
                  <span className="px-3 py-1 text-sm bg-[#172a46] text-teal-300 rounded">Material UI</span>
                  <span className="px-3 py-1 text-sm bg-[#172a46] text-teal-300 rounded">Tailwind CSS</span>
                  <span className="px-3 py-1 text-sm bg-[#172a46] text-teal-300 rounded">PHP</span>
                  <span className="px-3 py-1 text-sm bg-[#172a46] text-teal-300 rounded">Laravel</span>
                </div>
              </div>

            </div>
          </section>

          <section id="projects" className=" py-5 ">
            <div className="max-w-2xl mx-auto">
            <h2 className="text-5xl s mb-8 px-3 text-teal-300  font-black">Proyectos</h2>
              <div className="mb-12 hover:bg-[#42474c64] p-5 rounded-xl transition-colors duration-100">
                <h3 className="text-2xl font-semibold text-white mb-4">Proyecto Destacado</h3>
                <p className="text-gray-400 mb-4">
                  Una aplicación web completa que permite a los usuarios gestionar sus tareas diarias, establecer
                  recordatorios y organizar proyectos. Implementada con React, Next.js y una API RESTful.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="px-3 py-1 text-sm bg-[#172a46] text-teal-300 rounded">React</span>
                  <span className="px-3 py-1 text-sm bg-[#172a46] text-teal-300 rounded">Next.js</span>
                  <span className="px-3 py-1 text-sm bg-[#172a46] text-teal-300 rounded">Node.js</span>
                  <span className="px-3 py-1 text-sm bg-[#172a46] text-teal-300 rounded">MongoDB</span>
                </div>
              </div>

              <div className="mb-12 hover:bg-[#42474c64] p-5 rounded-xl transition-colors duration-100">
                <h3 className="text-2xl font-semibold text-white mb-4">Otro Proyecto</h3>
                <p className="text-gray-400 mb-4">
                  Una aplicación de comercio electrónico con funcionalidades de carrito de compras, pagos y gestión de
                  pedidos. Desarrollada con React, Redux y Firebase.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="px-3 py-1 text-sm bg-[#172a46] text-teal-300 rounded">React</span>
                  <span className="px-3 py-1 text-sm bg-[#172a46] text-teal-300 rounded">Redux</span>
                  <span className="px-3 py-1 text-sm bg-[#172a46] text-teal-300 rounded">Firebase</span>
                </div>
              </div>

              <div className="mb-12 hover:bg-[#42474c64] p-5 rounded-xl transition-colors duration-100">
                <h3 className="text-2xl font-semibold text-white mb-4">Otro Proyecto</h3>
                <p className="text-gray-400 mb-4">
                  Una aplicación de comercio electrónico con funcionalidades de carrito de compras, pagos y gestión de
                  pedidos. Desarrollada con React, Redux y Firebase.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="px-3 py-1 text-sm bg-[#172a46] text-teal-300 rounded">React</span>
                  <span className="px-3 py-1 text-sm bg-[#172a46] text-teal-300 rounded">Redux</span>
                  <span className="px-3 py-1 text-sm bg-[#172a46] text-teal-300 rounded">Firebase</span>
                </div>
              </div>
            </div>
          </section>

        </main>

      </div>
    </div>
  )
}