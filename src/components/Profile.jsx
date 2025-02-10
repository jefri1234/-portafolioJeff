"use client";

import { Code2, BookOpen, BrainCircuit } from "lucide-react";

export default function Profile() {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
            Desarrollador Full Stack
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Apasionado por crear soluciones tecnológicas innovadoras y escalables. 
            Con experiencia en desarrollo web full stack y arquitectura de software.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Languages Section */}
          <div className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <Code2 className="w-6 h-6 text-blue-400 mr-2" />
              <h2 className="text-xl font-semibold">Lenguajes</h2>
            </div>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                JavaScript/TypeScript
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                Python
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                PHP
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                SQL
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                Java
              </li>
            </ul>
          </div>

          {/* Frameworks Section */}
          <div className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <BrainCircuit className="w-6 h-6 text-purple-400 mr-2" />
              <h2 className="text-xl font-semibold">Frameworks</h2>
            </div>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                React/Next.js
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                Vue/VueRouter
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                Node.js/Express/Nest
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                Laravel
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                Django
              </li>
            </ul>
          </div>

          {/* Education Section */}
          <div className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <BookOpen className="w-6 h-6 text-green-400 mr-2" />
              <h2 className="text-xl font-semibold">Educación</h2>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-green-400">Ingeniería Software</h3>
                <p className="text-gray-400">Instituto Senati</p>
                <p className="text-sm text-gray-500">2021 - 2024</p>
              </div>
              <div>
                <h3 className="font-medium text-green-400">Certificaciones</h3>
                <p className="text-gray-400">Cisco IP Networking </p>
                <p className="text-gray-400">Desarollador Full Stack</p>
              </div>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="bg-gray-800 rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">Experiencia Profesional</h2>
          <div className="space-y-6">
            <div className="border-l-2 border-blue-400 pl-4">
              <h3 className="font-semibold text-xl text-blue-400">Desarrollador Full Stack Senior</h3>
              <p className="text-gray-400 mb-2">Consultinggroup • 10/02/2024 - 29/12/2024</p>
              <p className="text-gray-200">
                Lideré equipo de desarrollo en proyectos.
                En donde elaborare una Aplicacion de un Aula virtual donde podemos visualizar cursos, ingreso al aula virtual, modulos , materiales de estudio, generación de certificados y constancias. Filtrado de cursos, modulos, Landing Pages para cada curso,
                Filtrado de alumnos, Panel administrativo para realizar operaciones asi como el diseño y adapataciones y creación de interfaces a nivel general.
              </p>
            </div>
            <div className="border-l-2 border-purple-400 pl-4">
              <h3 className="font-semibold text-xl text-purple-400">Desarrollador FullStack</h3>
              <p className="text-gray-400 mb-2">Rematazo • 2022 - 2023</p>
              <p className="text-gray-200">
                Desarrollé e implementé interfaces para la visualización de productos por mas vendidos,
                ofertas o promociones asi como la organizacion por categoria y busqueda de productos, clasificación de nuevos producos, Panel administrativo para realización de cotizaciones asi como adaptacion de interfaces en diferentes pantallas y mejoramiento en velocidad y carga de la aplicación.
              </p>
            </div>

            <div className="border-l-2 border-green-400 pl-4">
              <h3 className="font-semibold text-xl text-green-400">Desarrollador Frontend</h3>
              <p className="text-gray-400 mb-2">nbjconstructores • 2021 - 2022</p>
              <p className="text-gray-200">
                Desarollo una Aplicacion inmobiliaria de venta de propiedades,casas, lotes, pisos, departamento donde podemos
                realizar busquedas para obtener por direccion o precios, ademas de obtener descripcion detallada de cada propiedad y mejoramiento
                de la velocidad y rendimiento del aplicativo.
              </p>
            </div>
            <div className="border-l-2 border-blue-400 pl-4">
              <h3 className="font-semibold text-xl text-blue-400">Desarrollador Backend</h3>
              <p className="text-gray-400 mb-2">corporacionPegasus • 2020 - 2021</p>
              <p className="text-gray-200">
                Desarollo una Backend robusto y escalable que cuenta con validacion de usuarios, roles,  permisos, menejo de contraseñas, encriptaciones y creacion de un API REST con validaciones, menejo de errores, pruebas unitarias asi como la optimizacion de peticiones, gestion de la base de datos, manejo de errores para llevar un backend robusto escalable realizado con buenas practicas. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}