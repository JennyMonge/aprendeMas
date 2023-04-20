import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export function Filtro() {
  const [datosServidor, setDatosServidor] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [tabla, setTabla] = useState([]);
  const [seleccion, setSeleccion] = useState("");
  //const [paginacion, setPaginacion] = useState(8);
  //console.log("listar datos", datosServidor);
  useEffect(() => {
    async function getInfo() {
      
      const url = "http://localhost:8000/api/institucion-listar";
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
    console.log(e.target.value);
    setSeleccion(e.target.value);
    filtrarSelect(e.target.value);
  };

  const filtrarSelect = (dos) => {
    console.log(dos);

    if(dos != "todos"){

      var resultadosBusqueda = tabla.filter((elemento) => {
        console.log(elemento.estado_institucion);
        
        if (elemento.estado_institucion === dos) {
          return elemento;
        }
  
      });
      setDatosServidor(resultadosBusqueda);
    }else{
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
        elemento.nombre_inst
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
              <option value="todos" class="py-1" >
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
      <div>
        
        {(() => {
          switch (seleccion) {
            case "activo":
              return (
                <table class="table-auto text-black">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Titulo</th>
                      <th>Cuerpo</th>
                    </tr>
                  </thead>
                  <tbody>
                    {datosServidor &&
                      datosServidor.map((institucion) => {
                        return (
                          <tr>
                            <td class="px-4 py-3">
                              {institucion.id_institucion}
                            </td>
                            <td class="px-4 py-3">{institucion.nombre_inst}</td>
                            <td class="px-4 py-3">
                              {institucion.estado_institucion}
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              );
            case "inactivo":
              return (
                <table class="table-auto text-black">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Titulo</th>
                      <th>Cuerpo</th>
                    </tr>
                  </thead>
                  <tbody>
                    {datosServidor &&
                      datosServidor.map((institucion) => {
                        return (
                          <tr>
                            <td class="px-4 py-3">
                              {institucion.id_institucion}
                            </td>
                            <td class="px-4 py-3">{institucion.nombre_inst}</td>
                            <td class="px-4 py-3">
                              {institucion.estado_institucion}
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              );
            default:
              return (
                <table class="table-auto text-black">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Titulo</th>
                      <th>Cuerpo</th>
                    </tr>
                  </thead>
                  <tbody>
                    {datosServidor &&
                      datosServidor.map((institucion) => {
                        return (
                          <tr>
                            <td class="px-4 py-3">
                              {institucion.id_institucion}
                            </td>
                            <td class="px-4 py-3">{institucion.nombre_inst}</td>
                            <td class="px-4 py-3">
                              {institucion.estado_institucion}
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              );
          }
        })()}
      </div>
    </>
  );
}
