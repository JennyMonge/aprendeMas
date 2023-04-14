import React from "react";
import { BotonEditar } from "../Botones/BotonEditar";
import {BotonEliminar} from "../Botones/BotonEliminar";

export const AdministrarAlumnos = () => {
  return (
    <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
      <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
        <table class="min-w-full leading-normal">
          <thead>
            <tr>
              <th class="px-5 py-3 border-b-2 border-gray-200 bg-aFuerte text-left text-xs font-semibold text-bCasi uppercase tracking-wider">
                Foto
              </th>
              <th class="px-5 py-3 border-b-2 border-gray-200 bg-aFuerte text-left text-xs font-semibold text-bCasi uppercase tracking-wider">
                Nombre
              </th>
              <th class="px-5 py-3 border-b-2 border-gray-200 bg-aFuerte text-left text-xs font-semibold text-bCasi uppercase tracking-wider">
                NIE
              </th>
              <th class="px-5 py-3 border-b-2 border-gray-200 bg-aFuerte text-left text-xs font-semibold text-bCasi uppercase tracking-wider">
                Correo
              </th>
              <th class="px-5 py-3 border-b-2 border-gray-200 bg-aFuerte text-left text-xs font-semibold text-bCasi uppercase tracking-wider">
                Institución
              </th>
              <th class="px-5 py-3 border-b-2 border-gray-200 bg-aFuerte text-left text-xs font-semibold text-bCasi uppercase tracking-wider">
                Grado
              </th>
              <th class="px-5 py-3 border-b-2 border-gray-200 bg-aFuerte text-left text-xs font-semibold text-bCasi uppercase tracking-wider">
                Estado
              </th>
              <th class="px-5 py-3 border-b-2 border-gray-200 bg-aFuerte text-left text-xs font-semibold text-bCasi uppercase tracking-wider">
                Opciones
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <div class="flex items-center">
                  <div class="flex-shrink-0 w-10 h-10">
                    <img
                      class="w-full h-full rounded-full"
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                      alt=""
                    />
                  </div>
                </div>
              </td>
              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p class="text-gray-900 whitespace-no-wrap">Jennifer Monge</p>
              </td>
              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p class="text-gray-900 whitespace-no-wrap">00987543</p>
              </td>
              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p class="text-gray-900 whitespace-no-wrap">Jenns@gmail.com</p>
              </td>
              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p class="text-gray-900 whitespace-no-wrap">Inarce</p>
              </td>
              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p class="text-gray-900 whitespace-no-wrap">2do bachillerato</p>
              </td>
              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                  <span
                    aria-hidden
                    class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                  ></span>
                  <span class="relative">Activo</span>
                </span>
              </td>
              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <BotonEditar tipo="editarAlumno" />
                <BotonEliminar tipo="eliminar"/>
              </td>
            </tr>
            <tr>
              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <div class="flex items-center">
                  <div class="flex-shrink-0 w-10 h-10">
                    <img
                      class="w-full h-full rounded-full"
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                      alt=""
                    />
                  </div>
                </div>
              </td>
              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p class="text-gray-900 whitespace-no-wrap">Jennifer Monge</p>
              </td>
              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p class="text-gray-900 whitespace-no-wrap">00987543</p>
              </td>
              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p class="text-gray-900 whitespace-no-wrap">Jenns@gmail.com</p>
              </td>
              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p class="text-gray-900 whitespace-no-wrap">Inarce</p>
              </td>
              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p class="text-gray-900 whitespace-no-wrap">2do bachillerato</p>
              </td>
              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <span class="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
                  <span
                    aria-hidden
                    class="absolute inset-0 bg-red-200 opacity-50 rounded-full"
                  ></span>
                  <span class="relative">Inactive</span>
                </span>
              </td>
              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <BotonEditar tipo="editarAlumno" />
                <BotonEliminar tipo="eliminar"/>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
          <span class="text-xs xs:text-sm text-gray-900">
            Showing 1 to 4 of 50 Entries
          </span>
          <div class="inline-flex mt-2 xs:mt-0">
            <button class="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l">
              Anterior
            </button>
            <button class="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r">
              Siguiente
            </button>
          </div>
        </div>
        <div
          data-te-modal-init
          class="fixed top-0 left-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
          id="exampleModalCenteredScrollable5"
          tabindex="-1"
          aria-modal="true"
          role="dialog"
        ></div>
      </div>
    </div>
  );
};
export default AdministrarAlumnos;
