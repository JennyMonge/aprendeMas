import { useState } from "react";
import { Link } from "react-router-dom";
import {
  HiMenu,
  HiOutlineOfficeBuilding,
  HiHome,
  HiOutlineHome,
  HiOutlineAcademicCap,
  HiOutlineBookOpen,
  HiOutlineClipboardList,
  HiOutlineClipboardCheck,
  HiUsers,
  HiOutlineClipboardCopy,
  HiOutlineDocumentText,
} from "react-icons/hi";
const Aside = () => {
  const [open, setOpen] = useState(true);
  return (
    <div
      className={`fixed z-10 bg-[#034078] min-h-screen ${
        open ? "w-16" : "w-72"
      } duration-500 text-gray-100 px-4`}
    >
      <div class=" py-3 flex justify-between">
        <div
          className={`whitespace-pre duration-500 ${
            open && "opacity-0 translate-x-28 overflow-hidden"
          }`}
        >
          <h1 className="">Learn +</h1>
        </div>
        <div className="">
          <span>
            <HiMenu class=" w-7 h-7 " onClick={() => setOpen(!open)} />
          </span>
        </div>
      </div>
      <div class="mt-4 flex flex-col gap-4 relative">
        <div class="mt-5">
          <Link
            to="/dashboard"
            class="flex items-center text-sm gap-3.5 font-medium p-1.5 hover:bg-gray-800 rounded"
          >
            <div>
              <span>
                <HiHome class="ml-0 w-5 h-5 icon icon-tabler icon-tabler-users" />
              </span>
            </div>
            <h2
              className={`whitespace-pre duration-500 ${
                open && "opacity-0 translate-x-28 overflow-hidden"
              }`}
            >
              Inicio
            </h2>
          </Link>
        </div>
        <div class="mt-2">
          <Link
            to="/institucion"
            class="my-1 flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded"
          >
            <div>
              <span>
                <HiOutlineOfficeBuilding class="ml-0 w-5 h-5 icon icon-tabler icon-tabler-users" />
              </span>
            </div>
            <h2
              className={`whitespace-pre duration-500 ${
                open && "opacity-0 translate-x-28 overflow-hidden"
              }`}
            >
              Institución
            </h2>
          </Link>
          <Link
            to="/alumno"
            class="my-1 flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded"
          >
            <div>
              <span>
                <HiOutlineAcademicCap class=" w-5 h-5 icon icon-tabler icon-tabler-users" />
              </span>
            </div>
            <h2
              className={`whitespace-pre duration-500 ${
                open && "opacity-0 translate-x-28 overflow-hidden"
              }`}
            >
              Alumno
            </h2>
          </Link>
          <Link
            to="/grado"
            class="my-1 flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded"
          >
            <div>
              <span>
                <HiOutlineHome class="w-5 h-5 icon icon-tabler icon-tabler-users" />
              </span>
            </div>
            <h2
              className={`whitespace-pre duration-500 ${
                open && "opacity-0 translate-x-28 overflow-hidden"
              }`}
            >
              Grado
            </h2>
          </Link>

          <Link
            to="/materia"
            class="my-1 flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded"
          >
            <div>
              <span>
                <HiOutlineBookOpen class="w-5 h-5 icon icon-tabler icon-tabler-users" />
              </span>
            </div>
            <h2
              className={`whitespace-pre duration-500 ${
                open && "opacity-0 translate-x-28 overflow-hidden"
              }`}
            >
              Materias
            </h2>
          </Link>

          <Link
            to="/cuestionario"
            class="my-1 flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded"
            href=""
          >
            <div>
              <span>
                <HiOutlineClipboardList class="w-5 h-5 icon icon-tabler icon-tabler-users" />
              </span>
            </div>
            <h2
              className={`whitespace-pre duration-500 ${
                open && "opacity-0 translate-x-28 overflow-hidden"
              }`}
            >
              Cuestionario
            </h2>
          </Link>
          <Link
            to="/preguntascto"
            class="my-1 flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded"
          >
            <div>
              <span>
                <HiOutlineClipboardCopy class="w-5 h-5 icon icon-tabler icon-tabler-users" />
              </span>
            </div>
            <h2
              className={`whitespace-pre duration-500 ${
                open && "opacity-0 translate-x-28 overflow-hidden"
              }`}
            >
              Preguntas
            </h2>
          </Link>
          <Link
            to="/encuesta"
            class="my-1 flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded"
          >
            <div>
              <span>
                <HiOutlineClipboardCheck class="w-5 h-5 icon icon-tabler icon-tabler-users" />
              </span>
            </div>
            <h2
              className={`whitespace-pre duration-500 ${
                open && "opacity-0 translate-x-28 overflow-hidden"
              }`}
            >
              Encuesta
            </h2>
          </Link>
          
          <Link
            to="/usuarios"
            class="my-1 flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded"
            href=""
          >
            <div>
              <span>
                <HiUsers class="w-5 h-5 icon icon-tabler icon-tabler-users" />
              </span>
            </div>
            <h2
              className={`whitespace-pre duration-500 ${
                open && "opacity-0 translate-x-28 overflow-hidden"
              }`}
            >
              Usuarios
            </h2>
          </Link>
          <Link
            to="/reporte"
            class="my-1 flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded"
          >
            <div>
              <span>
                <HiOutlineDocumentText class="w-5 h-5 icon icon-tabler icon-tabler-users" />
              </span>
            </div>
            <h2
              className={`whitespace-pre duration-500 ${
                open && "opacity-0 translate-x-28 overflow-hidden"
              }`}
            >
              Reporte
            </h2>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Aside;
