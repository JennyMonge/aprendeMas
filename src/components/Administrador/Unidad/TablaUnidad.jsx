import { BotonEditar } from "../Botones/BotonEditar";
import { BotonEliminar } from "../Botones/BotonEliminar";
import axios from "axios";
import { BotonActivar } from "../Botones/BotonActivar";
import { useState, useEffect } from "react";
const TablaUnidad = () => {
  const [datosServidor, setDatosServidor] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [tabla, setTabla] = useState([]);
  const [seleccion, setSeleccion] = useState("");
  useEffect(() => {
    async function getInfo() {
      const url = "http://localhost:8000/api/unidad-listar2";
      let config = {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      };
      try {
        const resp = await axios.get(url, config);
        setDatosServidor(resp.data);
        setTabla(resp.data);
        //console.log(resp.data);
      } catch (err) {
        console.error(err);
      }
    }
    getInfo();
  }, []);
  const handleChangeSelect = (e) => {
    setSeleccion(e.target.value);
    filtrarSelect(e.target.value);
  };

  const filtrarSelect = (dos) => {
    console.log(dos);

    if (dos != "todos") {
      var resultadosBusqueda = tabla.filter((elemento) => {
        console.log(elemento.estado_unidad);

        if (elemento.estado_unidad === dos) {
          return elemento;
        }
      });
      setDatosServidor(resultadosBusqueda);
    } else {
      setDatosServidor(tabla);
    }
  };

  const handleChange = (e) => {
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  };
  const filtrar = (terminoBusqueda) => {
    var resultadosBusqueda = tabla.filter((elemento) => {
      if (
        elemento.nombre_unidad
          .toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase())
      ) {
        return elemento;
      }
    });
    setDatosServidor(resultadosBusqueda);
  };
  return (
    <>
      {/*INICIO filtro */}
      <div class="my-2 flex sm:flex-row flex-col">
        <div class="flex flex-row mb-1 sm:mb-0">
          <div class="relative">
            <select class="h-full rounded-l border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
              <option>5</option>
              <option>10</option>
              <option>20</option>
            </select>
          </div>
          <div class="relative">
            <select
              class="h-full rounded-r border-t sm:rounded-r-none sm:border-r-0 border-r border-b block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500"
              value={seleccion}
              onChange={handleChangeSelect}
            >
              <option value="todos" class="py-1">
                Todos
              </option>
              <option value="activo" class="py-1">
                Activos
              </option>
              <option value="inactivo" class="py-1">
                Inactivos
              </option>
            </select>
          </div>
        </div>
        <div class="block relative">
          <span class="h-full absolute inset-y-0 left-0 flex items-center pl-2">
            <svg viewBox="0 0 24 24" class="h-4 w-4 fill-current text-gray-500">
              <path d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"></path>
            </svg>
          </span>
          <input
            placeholder="Buscar nombre"
            class="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
            value={busqueda}
            onChange={handleChange}
          />
        </div>
      </div>
      {/*INICIO filtro */}
      <div className="flex flex-col">
        <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table class="min-w-full leading-normal">
              <thead>
                <tr>
                  <th class="px-5 py-3 border-b-2 border-gray-200 bg-aFuerte text-left text-xs font-semibold text-bCasi uppercase tracking-wider">
                    ID
                  </th>
                  <th class="px-5 py-3 border-b-2 border-gray-200 bg-aFuerte text-left text-xs font-semibold text-bCasi uppercase tracking-wider">
                    Nombre
                  </th>
                  <th class="px-5 py-3 border-b-2 border-gray-200 bg-aFuerte text-left text-xs font-semibold text-bCasi uppercase tracking-wider">
                    Materia
                  </th>
                  <th class="px-5 py-3 border-b-2 border-gray-200 bg-aFuerte text-left text-xs font-semibold text-bCasi uppercase tracking-wider">
                    #Cuestionarios
                  </th>
                  <th class="px-5 py-3 border-b-2 border-gray-200 bg-aFuerte text-left text-xs font-semibold text-bCasi uppercase tracking-wider">
                    Estado
                  </th>
                  <th class="px-5 py-3 border-b-2 border-gray-200 bg-aFuerte text-left text-xs font-semibold text-bCasi uppercase tracking-wider">
                    Opciones
                  </th>
                </tr>
              </thead>
              {(() => {
                switch (seleccion) {
                  case "activo":
                    return (
                      <tbody>
                        {datosServidor &&
                          datosServidor.map((unidad) => {
                            return (
                              <tr>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                  {unidad.id_unidad}
                                </td>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                  {unidad.nombre_unidad}
                                </td>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                  {unidad.nombre_materia}
                                </td>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                  0
                                </td>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                  <span
                                    class={`relative inline-block px-3 py-1 font-semibold  leading-tight ${
                                      unidad.estado_unidad == "activo"
                                        ? "text-green-900"
                                        : " text-red-900"
                                    }`}
                                  >
                                    <span
                                      class={`${
                                        unidad.estado_unidad == "activo"
                                          ? "absolute inset-0 bg-green-200 opacity-50 rounded-full"
                                          : "absolute inset-0 bg-red-200 opacity-50 rounded-full-50 rounded-full"
                                      }`}
                                    ></span>
                                    <span class="relative">
                                      {unidad.estado_unidad}
                                    </span>
                                  </span>
                                </td>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                  <BotonEditar tipo="editarUnidad" />
                                  {unidad.estado_unidad == "activo" ? (
                                    <BotonEliminar tipo="eliminar" />
                                  ) : (
                                    <BotonActivar tipo="activar" />
                                  )}
                                </td>
                              </tr>
                            );
                          })}
                      </tbody>
                    );
                  case "inactivo":
                    return (
                      <tbody>
                        {datosServidor &&
                          datosServidor.map((unidad) => {
                            return (
                              <tr>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                  {unidad.id_unidad}
                                </td>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                  {unidad.nombre_unidad}
                                </td>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                  {unidad.nombre_materia}
                                </td>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                  0
                                </td>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                  <span
                                    class={`relative inline-block px-3 py-1 font-semibold  leading-tight ${
                                      unidad.estado_unidad == "activo"
                                        ? "text-green-900"
                                        : " text-red-900"
                                    }`}
                                  >
                                    <span
                                      class={`${
                                        unidad.estado_unidad == "activo"
                                          ? "absolute inset-0 bg-green-200 opacity-50 rounded-full"
                                          : "absolute inset-0 bg-red-200 opacity-50 rounded-full-50 rounded-full"
                                      }`}
                                    ></span>
                                    <span class="relative">
                                      {unidad.estado_unidad}
                                    </span>
                                  </span>
                                </td>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                  <BotonEditar tipo="editarUnidad" />
                                  {unidad.estado_unidad == "activo" ? (
                                    <BotonEliminar tipo="eliminar" />
                                  ) : (
                                    <BotonActivar tipo="activar" />
                                  )}
                                </td>
                              </tr>
                            );
                          })}
                      </tbody>
                    );
                  default:
                    return (
                      <tbody>
                        {datosServidor &&
                          datosServidor.map((unidad) => {
                            return (
                              <tr>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                  {unidad.id_unidad}
                                </td>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                  {unidad.nombre_unidad}
                                </td>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                  {unidad.nombre_materia}
                                </td>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                  0
                                </td>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                  <span
                                    class={`relative inline-block px-3 py-1 font-semibold  leading-tight ${
                                      unidad.estado_unidad == "activo"
                                        ? "text-green-900"
                                        : " text-red-900"
                                    }`}
                                  >
                                    <span
                                      class={`${
                                        unidad.estado_unidad == "activo"
                                          ? "absolute inset-0 bg-green-200 opacity-50 rounded-full"
                                          : "absolute inset-0 bg-red-200 opacity-50 rounded-full-50 rounded-full"
                                      }`}
                                    ></span>
                                    <span class="relative">
                                      {unidad.estado_unidad}
                                    </span>
                                  </span>
                                </td>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                  <BotonEditar tipo="editarUnidad" />
                                  {unidad.estado_unidad == "activo" ? (
                                    <BotonEliminar tipo="eliminar" />
                                  ) : (
                                    <BotonActivar tipo="activar" />
                                  )}
                                </td>
                              </tr>
                            );
                          })}
                      </tbody>
                    );
                }
              })()}
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
          </div>
        </div>
      </div>
    </>
  );
};
export default TablaUnidad;
