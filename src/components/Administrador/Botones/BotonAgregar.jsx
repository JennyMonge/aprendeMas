import { useState } from "react";
export function BotonAgregar({ tipo }) {
  //INSTITUCION
  const datosInstitucion = {
    institucion: "",
    tipoIn: "",
    deparIn: "",
    muniIn: "",
  };
  //estado inicial del formulario alerta VARIOS ******
  const initialStateInput = {
    input: "",
    message: "",
    state: false,
  };
  //maneja los valores del formulario
  const [formularioIn, setFormularioIn] = useState(datosInstitucion);
  //manejar las alertas de validacion VARIOS *****
  const [alerta, setAlerta] = useState([initialStateInput]);
  //obtniene los inputs
  const ManejarEventosDeInputsIn = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    //actualiza los valores capturados a nuestro estado de formulario
    setFormularioIn({ ...formularioIn, [name]: value });
  };
  //valida los inputs o campos
  const handleLoginSeccionIn = (e) => {
    e.preventDefault();
    //ordenamos los datos para enviarlos a la validacion
    let verificarInputs = [
      { campo: "nombre", value: formularioIn.institucion },
      { campo: "tipo", value: formularioIn.tipoIn },
      { campo: "departamento", value: formularioIn.deparIn },
      { campo: "municipio", value: formularioIn.muniIn },
    ];
    //envia los datos a la funcion validacion y recibimmos las validaciones
    const datosValidados = ValidarInputs(verificarInputs);
    console.log(datosValidados);
    //envia las validaciones al estado que se va a encargar de mostrarlas en el formulario
    setAlerta(datosValidados);
    //obtiene el total de validaciones
    const totalValidaciones = datosValidados
      .filter((input) => input.estado === false)
      .map((estado) => {
        return false;
      });
    console.log("Total de validaciones:", totalValidaciones.length);
    //validacion para enviar los datos al servidor
    if (totalValidaciones.length >= 1) {
      console.log("Enviar al servidor");
    }
  };
  const ValidarInputs = (data) => {
    console.log(data);
    //declaramos un arreglo el cual se va encargar de guardar las validaciones
    let errors = [];
    //recibimos los datos a validar
    const datosDelFormulario = data;
    //proceso de validacion
    datosDelFormulario.map((valorInput) => {
      switch (valorInput.campo) {
        case "nombre": {
          if (valorInput.value === "" || valorInput.value === null) {
            errors.push({
              valorInput: valorInput.campo,
              mensaje: "Campo requerido",
              estado: true,
            });
          } else {
            errors.push({
              valorInput: valorInput.campo,
              mensaje: "",
              estado: false,
            });
          }
          break;
        }
        case "tipo": {
          if (valorInput.value === "" || valorInput.value === null) {
            errors.push({
              valorInput: valorInput.campo,
              mensaje: "Seleccionar",
              estado: true,
            });
          } else {
            errors.push({
              valorInput: valorInput.campo,
              mensaje: "",
              estado: false,
            });
          }
          break;
        }
        case "departamento": {
          if (valorInput.value === "" || valorInput.value === null) {
            errors.push({
              valorInput: valorInput.campo,
              mensaje: "Seleccionar",
              estado: true,
            });
          } else {
            errors.push({
              valorInput: valorInput.campo,
              mensaje: "",
              estado: false,
            });
          }
          break;
        }
        case "municipio": {
          if (valorInput.value === "" || valorInput.value === null) {
            errors.push({
              valorInput: valorInput.campo,
              mensaje: "Seleccionar",
              estado: true,
            });
          } else {
            errors.push({
              valorInput: valorInput.campo,
              mensaje: "",
              estado: false,
            });
          }
          break;
        }
        default: {
          break;
        }
      }
    });
    //retornamos al total de validaciones
    return errors;
  };
  console.log(formularioIn);
  //fin de institucion
  //MATERIA
  const datosMateria = {
    materia: "",
    nivelAc: "",
  };
  const [formularioMa, setFormularioMa] = useState(datosMateria);
  const ManejarEventosDeInputsMa = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormularioMa({ ...formularioMa, [name]: value });
  };
  const handleLoginSeccionMa = (e) => {
    e.preventDefault();
    let verificarInputs = [
      { campo: "nombre", value: formularioMa.materia },
      { campo: "nivel", value: formularioMa.nivelAc },
    ];
    const datosValidados = ValidarInputsMa(verificarInputs);
    console.log(datosValidados);
    //setAlerta
    setAlerta(datosValidados);
    const totalValidaciones = datosValidados
      .filter((input) => input.estado === false)
      .map((estado) => {
        return false;
      });
    console.log("Total de validaciones:", totalValidaciones.length);
    if (totalValidaciones.length >= 1) {
      console.log("Enviar al servidor");
    }
  };
  const ValidarInputsMa = (data) => {
    console.log(data);
    let errors = [];
    const datosDelFormulario = data;
    datosDelFormulario.map((valorInput) => {
      switch (valorInput.campo) {
        case "nombre": {
          if (valorInput.value === "" || valorInput.value === null) {
            errors.push({
              valorInput: valorInput.campo,
              mensaje: "Campo requerido",
              estado: true,
            });
          } else {
            errors.push({
              valorInput: valorInput.campo,
              mensaje: "",
              estado: false,
            });
          }
          break;
        }
        case "nivel": {
          if (valorInput.value === "" || valorInput.value === null) {
            errors.push({
              valorInput: valorInput.campo,
              mensaje: "Seleccione",
              estado: true,
            });
          } else {
            errors.push({
              valorInput: valorInput.campo,
              mensaje: "",
              estado: false,
            });
          }
          break;
        }
        default: {
          break;
        }
      }
    });
    return errors;
  };
  //fin de materia

  return (
    <>
      <button
        type="button"
        class="float-right rounded bg-aFuerte2 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
        data-te-toggle="modal"
        data-te-target={"#" + tipo}
        data-te-ripple-init
        data-te-ripple-color="light"
      >
        Ingresar
      </button>
      {/*agregar alumno*/}
      <div
        data-te-modal-init
        class="fixed top-0 left-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
        id="agregarAlumno"
        tabindex="-1"
        aria-modal="true"
        role="dialog"
      >
        <div
          data-te-modal-dialog-ref
          class="pointer-events-none relative flex min-h-[calc(100%-1rem)] w-auto translate-y-[-50px] items-center opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:min-h-[calc(100%-3.5rem)] min-[576px]:max-w-[500px]"
        >
          <div class="pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none">
            <div class="flex justify-center items-center rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 ">
              <h5
                class="text-xl font-medium leading-normal text-neutral-800 text-center"
                id="exampleModalCenteredScrollableLabel"
              >
                Ingresar Alumno
              </h5>
            </div>
            <form action="">
              <div class="relative p-4">
                <div class="flex-auto my-2">
                  {/*Nombre */}
                  <input
                    type="text"
                    placeholder="Nombres"
                    class="shadow appearance-none w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none p-3"
                  />
                </div>
                <div class="flex-auto my-2">
                  {/*apellido */}
                  <input
                    type="text"
                    placeholder="Apellidos"
                    class="shadow appearance-none w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none p-3"
                  />
                </div>
                <div class="flex-auto my-2">
                  {/*Nombre */}
                  <input
                    type="tel"
                    placeholder="NIE(solo numeros)"
                    class="shadow appearance-none w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none p-3"
                  />
                </div>
                {/*Select */}
                <div class="flex-auto my-2">
                  <select
                    id=""
                    class="shadow appearance-none w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none p-3"
                  >
                    <option selected>Grado</option>
                    <option value="#">Tercer ciclo</option>
                    <option value="#">Bachillerato</option>
                  </select>
                </div>
                <div class="flex-auto my-2">
                  <select
                    id=""
                    class="shadow appearance-none w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none p-3"
                  >
                    <option selected>Institucion</option>
                    <option value="#">Institucion 1</option>
                    <option value="#">Institucion 2</option>
                  </select>
                </div>
                <div class="grid md:grid-cols-2 gap-1">
                  <div class="w-full">
                    <input
                      class="shadow appearance-none w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none p-3"
                      type="date"
                      id="start"
                      name="trip-start"
                      value="2018-07-22"
                      min="2018-01-01"
                      max="2018-12-31"
                    />
                  </div>
                  <div class="w-full">
                    <select
                      id=""
                      class="shadow appearance-none w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none p-3"
                    >
                      <option selected>Genero</option>
                      <option value="#">Femenino</option>
                      <option value="#">Masculino</option>
                    </select>
                  </div>
                </div>
              </div>
              {/*Botones */}
              <div class="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4">
                <button
                  type="button"
                  class="inline-block rounded bg-aFuerte4 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-aFuerte2 transition duration-150 ease-in-out hover:bg-aFuerte4 bg-opacity-75"
                  data-te-modal-dismiss
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  Cerrar
                </button>
                <input
                  type="submit"
                  class="ml-1 inline-block rounded bg-aFuerte2 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out
                            hover:bg-aFuerte3"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  value="Enviar"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      {/*agregar institucion*/}
      <div
        data-te-modal-init
        class="fixed top-0 left-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
        id="agregarinstitucion"
        tabindex="-1"
        aria-modal="true"
        role="dialog"
      >
        <div
          data-te-modal-dialog-ref
          class="pointer-events-none relative flex min-h-[calc(100%-1rem)] w-auto translate-y-[-50px] items-center opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:min-h-[calc(100%-3.5rem)] min-[576px]:max-w-[500px]"
        >
          <div class="pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none">
            <div class="flex justify-center items-center rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 ">
              <h5
                class="text-xl font-medium leading-normal text-neutral-800 text-center"
                id="exampleModalCenteredScrollableLabel"
              >
                Agregar Institucion
              </h5>
            </div>
            <form onSubmit={handleLoginSeccionIn}>
              <div class="relative p-4">
                <div class="flex-auto my-2">
                  {/*Nombre */}
                  <input
                    type="text"
                    name="institucion"
                    placeholder="Nombre"
                    class="shadow appearance-none w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none p-3"
                    value={formularioIn.institucion}
                    onChange={ManejarEventosDeInputsIn}
                  />
                  {alerta
                    .filter(
                      (input) =>
                        input.valorInput == "nombre" && input.estado === true
                    )
                    .map((message) => (
                      <div>
                        <span class="text-red-500 mx-2 mt-2">
                          {message.mensaje}
                        </span>
                      </div>
                    ))}
                </div>
                {/*Select */}
                <div class="flex-auto my-2">
                  {/*tipo de institucion */}
                  <select
                    id=""
                    name="tipoIn"
                    class="shadow appearance-none w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none p-3"
                    value={formularioIn.tipoIn}
                    onChange={ManejarEventosDeInputsIn}
                  >
                    <option selected>Tipo</option>
                    <option value="#">Pública</option>
                    <option value="#">Privada</option>
                  </select>
                  {alerta
                    .filter(
                      (input) =>
                        input.valorInput == "tipo" && input.estado === true
                    )
                    .map((message) => (
                      <div>
                        <span class="text-red-500   mx-2 mt-2">
                          {message.mensaje}
                        </span>
                      </div>
                    ))}
                </div>
                <div class="grid md:grid-cols-2 gap-1">
                  <div class="w-full">
                    {/*Departamento */}
                    <select
                      id=""
                      name="deparIn"
                      class="shadow appearance-none w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none p-3"
                      value={formularioIn.deparIn}
                      onChange={ManejarEventosDeInputsIn}
                    >
                      <option selected>Departamento</option>
                      <option value="#">Departamento x</option>
                      <option value="#">Departamento y</option>
                    </select>
                    {alerta
                      .filter(
                        (input) =>
                          input.valorInput == "departamento" &&
                          input.estado === true
                      )
                      .map((message) => (
                        <div>
                          <span class="text-red-500 mx-2 mt-2">
                            {message.mensaje}
                          </span>
                        </div>
                      ))}
                  </div>
                  <div class="w-full">
                    {/*Municipio*/}
                    <select
                      id=""
                      name="muniIn"
                      class="shadow appearance-none w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none p-3"
                      value={formularioIn.muniIn}
                      onChange={ManejarEventosDeInputsIn}
                    >
                      <option selected>Municipio</option>
                      <option value="#">Municipio x</option>
                      <option value="#">Municipio y</option>
                    </select>
                    {alerta
                      .filter(
                        (input) =>
                          input.valorInput == "municipio" &&
                          input.estado === true
                      )
                      .map((message) => (
                        <div>
                          <span class="text-red-500 mx-2 mt-2">
                            {message.mensaje}
                          </span>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
              <div class="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4">
                <button
                  type="button"
                  class="inline-block rounded bg-aFuerte4 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-aFuerte2 transition duration-150 ease-in-out hover:bg-aFuerte4 bg-opacity-75"
                  data-te-modal-dismiss
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  Cerrar
                </button>
                <input
                  type="submit"
                  class="ml-1 inline-block rounded bg-aFuerte2 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out
                        hover:bg-aFuerte3"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  value="Enviar"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      {/** agregar grado*/}
      <div
        data-te-modal-init
        class="fixed top-0 left-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
        id="agregarGrado"
        tabindex="-1"
        aria-modal="true"
        role="dialog"
      >
        <div
          data-te-modal-dialog-ref
          class="pointer-events-none relative flex min-h-[calc(100%-1rem)] w-auto translate-y-[-50px] items-center opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:min-h-[calc(100%-3.5rem)] min-[576px]:max-w-[500px]"
        >
          <div class="pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none">
            <div class="flex justify-center items-center rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 ">
              <h5
                class="text-xl font-medium leading-normal text-neutral-800 text-center"
                id="exampleModalCenteredScrollableLabel"
              >
                Ingresar Grado
              </h5>
            </div>
            <form action="">
              <div class="relative p-4">
                <div class="flex-auto my-2">
                  {/*nivel */}
                  <input
                    type="text"
                    placeholder="Nivel"
                    class="shadow appearance-none w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none p-3"
                  />
                </div>
                {/*Select */}
                <div class="flex-auto my-2">
                  <select
                    id=""
                    class="shadow appearance-none w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none p-3"
                  >
                    <option selected>Estado</option>
                    <option value="#">Inactivo</option>
                    <option value="#">Activo</option>
                  </select>
                </div>
              </div>
              <div class="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4">
                <button
                  type="button"
                  class="inline-block rounded bg-aFuerte4 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-aFuerte2 transition duration-150 ease-in-out hover:bg-aFuerte4 bg-opacity-75"
                  data-te-modal-dismiss
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  Cerrar
                </button>
                <input
                  type="submit"
                  class="ml-1 inline-block rounded bg-aFuerte2 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out
                        hover:bg-aFuerte3"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  value="Enviar"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      {/*agregar materia */}
      <div
        data-te-modal-init
        class="fixed top-0 left-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
        id="agregarMateria"
        tabindex="-1"
        aria-modal="true"
        role="dialog"
      >
        <div
          data-te-modal-dialog-ref
          class="pointer-events-none relative flex min-h-[calc(100%-1rem)] w-auto translate-y-[-50px] items-center opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:min-h-[calc(100%-3.5rem)] min-[576px]:max-w-[500px]"
        >
          <div class="pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none">
            <div class="flex justify-center items-center rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 ">
              <h5
                class="text-xl font-medium leading-normal text-neutral-800 text-center"
                id="exampleModalCenteredScrollableLabel"
              >
                Ingresar Materia
              </h5>
            </div>
            <form onSubmit={handleLoginSeccionMa}>
              <div class="relative p-4">
                {/*nombre */}
                <div class="flex-auto my-2">
                  <input
                    type="text"
                    placeholder="Nombre Materia"
                    name="materia"
                    class="shadow appearance-none w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none p-3"
                    value={formularioMa.materia}
                    onChange={ManejarEventosDeInputsMa}
                  />
                  {alerta
                    .filter(
                      (input) =>
                        input.valorInput == "nombre" && input.estado === true
                    )
                    .map((message) => (
                      <div>
                        <span class="text-red-500 mx-2 mt-2">
                          {message.mensaje}
                        </span>
                      </div>
                    ))}
                </div>
                <div class="grid md:grid-cols-2 gap-1">
                  {/*seleccion nivel academico */}
                  <div class="w-full">
                    <select
                      id=""
                      name="nivelAc"
                      class="shadow appearance-none w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none p-3"
                      value={formularioMa.nivelAc}
                      onChange={ManejarEventosDeInputsMa}
                    >
                      <option selected>Nivel académico</option>
                      <option value="#">Grado x</option>
                      <option value="#">Grado y</option>
                    </select>
                    {alerta
                      .filter(
                        (input) =>
                          input.valorInput == "nivel" && input.estado === true
                      )
                      .map((message) => (
                        <div>
                          <span class="text-red-500 mx-2 mt-2">
                            {message.mensaje}
                          </span>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
              <div class="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4">
                <button
                  type="button"
                  class="inline-block rounded bg-aFuerte4 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-aFuerte2 transition duration-150 ease-in-out hover:bg-aFuerte4 bg-opacity-75"
                  data-te-modal-dismiss
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  Cerrar
                </button>
                <input
                  type="submit"
                  class="ml-1 inline-block rounded bg-aFuerte2 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out
                        hover:bg-aFuerte3"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  value="Enviar"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      {/*agregar unidad */}
      <div
        data-te-modal-init
        class="fixed top-0 left-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
        id="agregarUnidad"
        tabindex="-1"
        aria-modal="true"
        role="dialog"
      >
        <div
          data-te-modal-dialog-ref
          class="pointer-events-none relative flex min-h-[calc(100%-1rem)] w-auto translate-y-[-50px] items-center opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:min-h-[calc(100%-3.5rem)] min-[576px]:max-w-[500px]"
        >
          <div class="pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none">
            <div class="flex justify-center items-center rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 ">
              <h5
                class="text-xl font-medium leading-normal text-neutral-800 text-center"
                id="exampleModalCenteredScrollableLabel"
              >
                Ingresar Unidad
              </h5>
            </div>
            <form action="">
              <div class="relative p-4">
                <div class="grid md:grid-cols-2 gap-1">
                  <div class="w-full">
                    <select
                      id=""
                      class="shadow appearance-none w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none p-3"
                    >
                      <option selected>Nivel</option>
                      <option value="#">Grado x</option>
                      <option value="#">Grado y</option>
                    </select>
                  </div>
                  <div class="w-full">
                    <select
                      id=""
                      class="shadow appearance-none w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none p-3"
                    >
                      <option selected>Estado</option>
                      <option value="#">Activo</option>
                      <option value="#">Inactivo</option>
                    </select>
                  </div>
                </div>
                <div class="w-full my-2">
                  <select
                    id=""
                    class="shadow appearance-none w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none p-3"
                  >
                    <option selected>Materia</option>
                    <option value="#">Materia x</option>
                    <option value="#">Materia y</option>
                  </select>
                </div>
                <div class="flex-auto my-2">
                  {/*nombre */}
                  <input
                    type="text"
                    placeholder="Nombre"
                    class="shadow appearance-none w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none p-3"
                  />
                </div>
              </div>
              <div class="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4">
                <button
                  type="button"
                  class="inline-block rounded bg-aFuerte4 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-aFuerte2 transition duration-150 ease-in-out hover:bg-aFuerte4 bg-opacity-75"
                  data-te-modal-dismiss
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  Cerrar
                </button>
                <input
                  type="submit"
                  class="ml-1 inline-block rounded bg-aFuerte2 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out
                        hover:bg-aFuerte3"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  value="Enviar"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      {/*agregar cuestionario */}
      <div
        data-te-modal-init
        class="fixed top-0 left-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
        id="agregarCuestionario"
        tabindex="-1"
        aria-modal="true"
        role="dialog"
      >
        <div
          data-te-modal-dialog-ref
          class="pointer-events-none relative flex min-h-[calc(100%-1rem)] w-auto translate-y-[-50px] items-center opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:min-h-[calc(100%-3.5rem)] min-[576px]:max-w-[500px]"
        >
          <div class="pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none">
            <div class="flex justify-center items-center rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 ">
              <h5
                class="text-xl font-medium leading-normal text-neutral-800 text-center"
                id="exampleModalCenteredScrollableLabel"
              >
                Ingresar Cuestionario
              </h5>
            </div>
            <form action="">
              <div class="relative p-4">
                <div class="grid md:grid-cols-2 gap-1">
                  <div class="w-full">
                    <select
                      id=""
                      class="shadow appearance-none w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none p-3"
                    >
                      <option selected>Estado</option>
                      <option value="#">Activo</option>
                      <option value="#">Inactivo</option>
                    </select>
                  </div>

                  <div class="w-full">
                    <select
                      id=""
                      class="shadow appearance-none w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none p-3"
                    >
                      <option selected>Materia</option>
                      <option value="#">Materia x</option>
                      <option value="#">Materia y</option>
                    </select>
                  </div>
                  <div class="w-full">
                    <select
                      id=""
                      class="shadow appearance-none w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none p-3"
                    >
                      <option selected>Unidad</option>
                      <option value="#">Unidad x</option>
                      <option value="#">Unidad y</option>
                    </select>
                  </div>
                </div>
                <div class="flex-auto my-2">
                  {/*Nombre */}
                  <label class="pl-1">Nombre</label>
                  <input
                    type="text"
                    class="shadow appearance-none w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none p-3"
                  />
                </div>
              </div>

              <div class="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4">
                <button
                  type="button"
                  class="inline-block rounded bg-aFuerte4 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-aFuerte2 transition duration-150 ease-in-out hover:bg-aFuerte4 bg-opacity-75"
                  data-te-modal-dismiss
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  Cerrar
                </button>
                <input
                  type="submit"
                  class="ml-1 inline-block rounded bg-aFuerte2 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out
                            hover:bg-aFuerte3"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  value="Enviar"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      {/*agregar encuesta*/}
      <div
        data-te-modal-init
        class="fixed top-0 left-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
        id="agregarEncuesta"
        tabindex="-1"
        aria-modal="true"
        role="dialog"
      >
        <div
          data-te-modal-dialog-ref
          class="pointer-events-none relative flex min-h-[calc(100%-1rem)] w-auto translate-y-[-50px] items-center opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:min-h-[calc(100%-3.5rem)] min-[576px]:max-w-[500px]"
        >
          <div class="pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none">
            <div class="flex justify-center items-center rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 ">
              <h5
                class="text-xl font-medium leading-normal text-neutral-800 text-center"
                id="exampleModalCenteredScrollableLabel"
              >
                Ingresar Encuesta
              </h5>
            </div>
            <form action="">
              <div class="relative p-4">
                {/*datos */}
                <div class="w-1/2">
                  <div class="">
                    <select
                      id=""
                      class="shadow appearance-none w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none py-3 px-3"
                    >
                      <option selected>Estado</option>
                      <option value="#">Activa</option>
                      <option value="#">Inactiva</option>
                    </select>
                  </div>
                </div>
                <div class="flex-auto my-2">
                  <label class="pl-1">Comentario</label>
                  <textarea class="w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none py-1 px-3"></textarea>
                </div>
                {/*fin datos */}
              </div>
              <div class="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4">
                <button
                  type="button"
                  class="inline-block rounded bg-aFuerte4 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-aFuerte2 transition duration-150 ease-in-out hover:bg-aFuerte4 bg-opacity-75"
                  data-te-modal-dismiss
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  Cerrar
                </button>
                <input
                  type="submit"
                  class="ml-1 inline-block rounded bg-aFuerte2 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out
                              hover:bg-aFuerte3"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  value="Guardar"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      {/*agregar usuario*/}
      <div
        data-te-modal-init
        class="fixed top-0 left-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
        id="agregarUsuario"
        tabindex="-1"
        aria-modal="true"
        role="dialog"
      >
        <div
          data-te-modal-dialog-ref
          class="pointer-events-none relative flex min-h-[calc(100%-1rem)] w-auto translate-y-[-50px] items-center opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:min-h-[calc(100%-3.5rem)] min-[576px]:max-w-[500px]"
        >
          <div class="pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none">
            <div class="flex justify-center items-center rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 ">
              <h5
                class="text-xl font-medium leading-normal text-neutral-800 text-center"
                id="exampleModalCenteredScrollableLabel"
              >
                Ingresar Usuario
              </h5>
            </div>
            <form action="">
              <div class="relative p-4">
                <div class="flex-auto my-2">
                  {/*Nombre */}
                  <input
                    type="text"
                    placeholder="Nombres"
                    class="shadow appearance-none w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none p-3"
                  />
                </div>
                <div class="flex-auto my-2">
                  {/*apellido */}
                  <input
                    type="text"
                    placeholder="Apellidos"
                    class="shadow appearance-none w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none p-3"
                  />
                </div>
                <div class="flex-auto my-2">
                  {/*correo */}
                  <input
                    type="email"
                    placeholder="ejemplo@email.com"
                    class="shadow appearance-none w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none p-3"
                  />
                </div>
                <div class="grid md:grid-cols-2 gap-1">
                  <div class="w-full">
                    <input
                      type="password"
                      placeholder="Contraseña"
                      class="shadow appearance-none w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none p-3"
                    />
                  </div>
                  <div class="w-full">
                    <input
                      type="password"
                      placeholder="Repetir Contraseña"
                      class="shadow appearance-none w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none p-3"
                    />
                  </div>
                </div>
              </div>
              <div class="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4">
                <button
                  type="button"
                  class="inline-block rounded bg-aFuerte4 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-aFuerte2 transition duration-150 ease-in-out hover:bg-aFuerte4 bg-opacity-75"
                  data-te-modal-dismiss
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  Cerrar
                </button>
                <input
                  type="submit"
                  class="ml-1 inline-block rounded bg-aFuerte2 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out
                        hover:bg-aFuerte3"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  value="Enviar"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
