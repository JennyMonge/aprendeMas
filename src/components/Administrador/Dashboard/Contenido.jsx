import React from "react";
import { Link } from "react-router-dom";
import {
  HiOutlineOfficeBuilding,
  HiOutlineAcademicCap,
  HiOutlineHome,
  HiOutlineBookOpen,
  HiOutlineBookmarkAlt,
  HiOutlineClipboardList,
  HiOutlineClipboardCheck,
  HiUsers,
  HiOutlineClipboardCopy,
  HiOutlineDocumentText,
} from "react-icons/hi";
export const Contenido = () => {
  return (
    <div class="flex flex-wrap m-3">
      <Link to="/institucion" class="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <div class="flex-grow text-center">
            <p class="text-gray-900 title-font font-medium">Institucion</p>
          </div>
          <span>
            <HiOutlineOfficeBuilding class="text-white icon icon-tabler icon-tabler-list w-16 h-16 bg-gray-800 object-cover object-center flex-shrink-0 rounded-full mr-4 p-1" />
          </span>
        </div>
      </Link>
      <Link to="/alumno" class="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <div class="flex-grow text-center">
            <p class="text-gray-900 title-font font-medium">Alumnos</p>
          </div>
          <span>
            <HiOutlineAcademicCap class="text-white icon icon-tabler icon-tabler-list w-16 h-16 bg-gray-800 object-cover object-center flex-shrink-0 rounded-full mr-4 p-1" />
          </span>
        </div>
      </Link>
      <Link to="/grado" class="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <div class="flex-grow text-center">
            <p class="text-gray-900 title-font font-medium">Grado</p>
          </div>
          <span>
            <HiOutlineHome class="text-white icon icon-tabler icon-tabler-list w-16 h-16 bg-gray-800 object-cover object-center flex-shrink-0 rounded-full mr-4 p-1" />
          </span>
        </div>
      </Link>
      <Link to="/materia" class="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <div class="flex-grow text-center">
            <p class="text-gray-900 title-font font-medium">Materias</p>
          </div>
          <span>
            <HiOutlineBookOpen class="text-white icon icon-tabler icon-tabler-list w-16 h-16 bg-gray-800 object-cover object-center flex-shrink-0 rounded-full mr-4 p-1" />
          </span>
        </div>
      </Link>
      <Link to="/unidad" class="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <div class="flex-grow text-center">
            <p class="text-gray-900 title-font font-medium">Unidades</p>
          </div>
          <span>
            <HiOutlineBookmarkAlt class="text-white icon icon-tabler icon-tabler-list w-16 h-16 bg-gray-800 object-cover object-center flex-shrink-0 rounded-full mr-4 p-1" />
          </span>
        </div>
      </Link>
      <Link to="/cuestionario" class="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <div class="flex-grow text-center">
            <p class="text-gray-900 title-font font-medium">Cuestionario</p>
          </div>
          <span>
            <HiOutlineClipboardList class="text-white icon icon-tabler icon-tabler-list w-16 h-16 bg-gray-800 object-cover object-center flex-shrink-0 rounded-full mr-4 p-1" />
          </span>
        </div>
      </Link>
      <Link to="/preguntascto" class="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <div class="flex-grow text-center">
            <p class="text-gray-900 title-font font-medium">
              Preguntas Cuestionario
            </p>
          </div>
          <span>
            <HiOutlineClipboardCopy class="text-white icon icon-tabler icon-tabler-list w-16 h-16 bg-gray-800 object-cover object-center flex-shrink-0 rounded-full mr-4 p-1" />
          </span>
        </div>
      </Link>
      <Link to="/encuesta" class="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <div class="flex-grow text-center">
            <p class="text-gray-900 title-font font-medium">Encuesta</p>
          </div>
          <span>
            <HiOutlineClipboardCheck class="text-white icon icon-tabler icon-tabler-list w-16 h-16 bg-gray-800 object-cover object-center flex-shrink-0 rounded-full mr-4 p-1" />
          </span>
        </div>
      </Link>
      <Link to="/preguntasent" class="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <div class="flex-grow text-center">
            <p class="text-gray-900 title-font font-medium">
              Preguntas Encuesta
            </p>
          </div>
          <span>
            <HiOutlineClipboardCopy class="text-white icon icon-tabler icon-tabler-list w-16 h-16 bg-gray-800 object-cover object-center flex-shrink-0 rounded-full mr-4 p-1" />
          </span>
        </div>
      </Link>
      <Link to="/usuarios" class="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <div class="flex-grow text-center">
            <p class="text-gray-900 title-font font-medium">Usuarios</p>
          </div>
          <span>
            <HiUsers class="text-white icon icon-tabler icon-tabler-list w-16 h-16 bg-gray-800 object-cover object-center flex-shrink-0 rounded-full mr-4 p-1" />
          </span>
        </div>
      </Link>
      <Link to="/reporte" class="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div class="h-full flex items-center border border-gray-200 p-4 rounded-lg">
          <div class="flex-grow text-center">
            <p class="text-gray-900 title-font font-medium">Reportes</p>
          </div>
          <span>
            <HiOutlineDocumentText class="text-white icon icon-tabler icon-tabler-list w-16 h-16 bg-gray-800 object-cover object-center flex-shrink-0 rounded-full mr-4 p-1" />
          </span>
        </div>
      </Link>

      {/**
      <div class=" rounded-lg bg-aFuerte4 p-3 my-2 mx-1">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio velit
          nesciunt ducimus consectetur ipsam! Animi, iure enim? Pariatur, magni
          quaerat! Consequatur ullam explicabo placeat dicta laboriosam
          cupiditate vitae laborum fugiat.
        </p>
      </div>*/}
    </div>
  );
};
export default Contenido;
