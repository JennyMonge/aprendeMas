import { HiPencilAlt } from "react-icons/hi";
import { useState } from "react";
export function BotonEditar({ tipo }) {
  //ALUMNO
  const datosAlumnoe = {
    nombreEdA: "",
    apellidoEdA: "",
    nieEdA: "",
    nivelEdA: "",
    institucionEdA: "",
    fechaEdA: "",
    generoEdA: "",
  };
  //estado inicial para alerta
  const initialStateInput = {
    input: "",
    message: "",
    state: false,
  };
  //manejar los valores del formulario
  const [formularioEdA, setFormularioEdA] = useState(datosAlumnoe);
  //manejar las alertar de validacion
  const [alerta, setAlerta] = useState([initialStateInput]);
  //funcion para obtener lo de los inputs
  const ManejarEventosDeInputsEdA = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    //actualiza los valores capturados a estado formulario
    setFormularioEdA({ ...formularioEdA, [name]: value });
  };
  //encargada de validar los inputs
  const handleRegisterSeccionEdA = (e) => {
    e.preventDefault();
    let verificarInputs = [
      { campo: "nombreA", value: formularioEdA.nombreEdA },
      { campo: "apellidoA", value: formularioEdA.apellidoEdA },
      { campo: "nieA", value: formularioEdA.nieEdA },
      { campo: "nivelA", value: formularioEdA.nivelEdA },
      { campo: "institucionA", value: formularioEdA.institucionEdA },
      { campo: "fechaA", value: formularioEdA.fechaEdA },
      { campo: "generoA", value: formularioEdA.generoEdA },
    ];
    //enviamos los datos a la funcion de validacion y recibimos las validadciones
    const datosValidados = ValidarInputsEdA(verificarInputs);
    console.log(datosValidados);
    //enviando las validaciones al estado que se va a encargar de mostarlas en el formulario
    setAlerta(datosValidados);
    //obtenemos el total de validaciones
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
  }; //fin de handle
  const ValidarInputsEdA = (data) => {
    console.log(data);
    //declaramos un arreglo el cual se va a encargar de guardar las validaciones
    let errors = [];
    //recibimos los datos a validar
    const datosDelFormulario = data;
    //proceso devalidacion
    datosDelFormulario.map((valorInput) => {
      switch (valorInput.campo) {
        case "nombreA": {
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
        case "apellidoA": {
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
        case "nieA": {
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
        case "nivelA": {
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
        case "institucionA": {
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
        case "fechaA": {
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
        case "generoA": {
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
  //fin de validar inputs
  //fin alumno
  //INSTITUCION
  const datosInstitucione = { nombreEdIn: "" };
  const [formularioEdIn, setFormularioEdIn] = useState(datosInstitucione);
  const ManejarEventosDeInputsEdIn = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    //actualiza los valores capturados a estado formulario
    setFormularioEdIn({ ...formularioEdIn, [name]: value });
  };
  const handleRegisterSeccionEdIn = (e) => {
    e.preventDefault();
    let verificarInputs = [
      { campo: "nombreIn", value: formularioEdIn.nombreEdIn },
    ];
    //enviamos los datos a la funcion de validacion y recibimos las validadciones
    const datosValidados = ValidarInputsEdIn(verificarInputs);
    console.log(datosValidados);
    //enviando las validaciones al estado que se va a encargar de mostarlas en el formulario
    setAlerta(datosValidados);
    //obtenemos el total de validaciones
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
  }; //fin de handle
  const ValidarInputsEdIn = (data) => {
    console.log(data);
    //declaramos un arreglo el cual se va a encargar de guardar las validaciones
    let errors = [];
    //recibimos los datos a validar
    const datosDelFormulario = data;
    //proceso devalidacion
    datosDelFormulario.map((valorInput) => {
      switch (valorInput.campo) {
        case "nombreIn": {
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
        default: {
          break;
        }
      }
    });
    return errors;
  };
  //fin de validar inputs
  //fin institucion
  //GRADO
  const datosGradoe = { nombreEdG: "" };
  const [formularioEdG, setFormularioEdG] = useState(datosGradoe);
  const ManejarEventosDeInputsEdG = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    //actualiza los valores capturados a estado formulario
    setFormularioEdG({ ...formularioEdG, [name]: value });
  };
  const handleRegisterSeccionEdG = (e) => {
    e.preventDefault();
    let verificarInputs = [
      { campo: "nombreG", value: formularioEdG.nombreEdG },
    ];
    //enviamos los datos a la funcion de validacion y recibimos las validadciones
    const datosValidados = ValidarInputsEdG(verificarInputs);
    console.log(datosValidados);
    //enviando las validaciones al estado que se va a encargar de mostarlas en el formulario
    setAlerta(datosValidados);
    //obtenemos el total de validaciones
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
  }; //fin de handle
  const ValidarInputsEdG = (data) => {
    console.log(data);
    //declaramos un arreglo el cual se va a encargar de guardar las validaciones
    let errors = [];
    //recibimos los datos a validar
    const datosDelFormulario = data;
    //proceso devalidacion
    datosDelFormulario.map((valorInput) => {
      switch (valorInput.campo) {
        case "nombreG": {
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
        default: {
          break;
        }
      }
    });
    return errors;
  };
  //fin de validar inputs
  //fin grado
  //MATERIA
  const datosMateriae = { nombreEdM: "" };
  const [formularioEdM, setFormularioEdM] = useState(datosMateriae);
  const ManejarEventosDeInputsEdM = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    //actualiza los valores capturados a estado formulario
    setFormularioEdM({ ...formularioEdM, [name]: value });
  };
  const handleRegisterSeccionEdM = (e) => {
    e.preventDefault();
    let verificarInputs = [
      { campo: "nombreM", value: formularioEdM.nombreEdM },
    ];
    //enviamos los datos a la funcion de validacion y recibimos las validadciones
    const datosValidados = ValidarInputsEdM(verificarInputs);
    console.log(datosValidados);
    //enviando las validaciones al estado que se va a encargar de mostarlas en el formulario
    setAlerta(datosValidados);
    //obtenemos el total de validaciones
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
  }; //fin de handle
  const ValidarInputsEdM = (data) => {
    console.log(data);
    //declaramos un arreglo el cual se va a encargar de guardar las validaciones
    let errors = [];
    //recibimos los datos a validar
    const datosDelFormulario = data;
    //proceso devalidacion
    datosDelFormulario.map((valorInput) => {
      switch (valorInput.campo) {
        case "nombreM": {
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
        default: {
          break;
        }
      }
    });
    return errors;
  };
  //fin de validar inputs
  //fin materia
  //UNIDAD
  const datosUnidade = { nombreEdU: "" };
  const [formularioEdU, setFormularioEdU] = useState(datosUnidade);
  const ManejarEventosDeInputsEdU = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    //actualiza los valores capturados a estado formulario
    setFormularioEdU({ ...formularioEdU, [name]: value });
  };
  const handleRegisterSeccionEdU = (e) => {
    e.preventDefault();
    let verificarInputs = [
      { campo: "nombreU", value: formularioEdM.nombreEdM },
    ];
    //enviamos los datos a la funcion de validacion y recibimos las validadciones
    const datosValidados = ValidarInputsEdU(verificarInputs);
    console.log(datosValidados);
    //enviando las validaciones al estado que se va a encargar de mostarlas en el formulario
    setAlerta(datosValidados);
    //obtenemos el total de validaciones
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
  }; //fin de handle
  const ValidarInputsEdU = (data) => {
    console.log(data);
    //declaramos un arreglo el cual se va a encargar de guardar las validaciones
    let errors = [];
    //recibimos los datos a validar
    const datosDelFormulario = data;
    //proceso devalidacion
    datosDelFormulario.map((valorInput) => {
      switch (valorInput.campo) {
        case "nombreU": {
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
        default: {
          break;
        }
      }
    });
    return errors;
  };
  //fin de validar inputs
  //fin unidad
  //CUESTIONARIO
  const datosCuestionarioe = { nombreEdC: "" };
  const [formularioEdC, setFormularioEdC] = useState(datosCuestionarioe);
  const ManejarEventosDeInputsEdC = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    //actualiza los valores capturados a estado formulario
    setFormularioEdC({ ...formularioEdC, [name]: value });
  };
  const handleRegisterSeccionEdC = (e) => {
    e.preventDefault();
    let verificarInputs = [
      { campo: "nombreC", value: formularioEdC.nombreEdC },
    ];
    //enviamos los datos a la funcion de validacion y recibimos las validadciones
    const datosValidados = ValidarInputsEdC(verificarInputs);
    console.log(datosValidados);
    //enviando las validaciones al estado que se va a encargar de mostarlas en el formulario
    setAlerta(datosValidados);
    //obtenemos el total de validaciones
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
  }; //fin de handle
  const ValidarInputsEdC = (data) => {
    console.log(data);
    //declaramos un arreglo el cual se va a encargar de guardar las validaciones
    let errors = [];
    //recibimos los datos a validar
    const datosDelFormulario = data;
    //proceso devalidacion
    datosDelFormulario.map((valorInput) => {
      switch (valorInput.campo) {
        case "nombreC": {
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
        default: {
          break;
        }
      }
    });
    return errors;
  };
  //fin de validar inputs
  //fin cuestionario
  //ENCUESTA
  const datosEncuestae = { comentarioEdEn: "" };
  const [formularioEdEn, setFormularioEdEn] = useState(datosEncuestae);
  const ManejarEventosDeInputsEdEn = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    //actualiza los valores capturados a estado formulario
    setFormularioEdEn({ ...formularioEdEn, [name]: value });
  };
  const handleRegisterSeccionEdEn = (e) => {
    e.preventDefault();
    let verificarInputs = [
      { campo: "nombreEn", value: formularioEdEn.comentarioEdEn },
    ];
    //enviamos los datos a la funcion de validacion y recibimos las validadciones
    const datosValidados = ValidarInputsEdEn(verificarInputs);
    console.log(datosValidados);
    //enviando las validaciones al estado que se va a encargar de mostarlas en el formulario
    setAlerta(datosValidados);
    //obtenemos el total de validaciones
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
  }; //fin de handle
  const ValidarInputsEdEn = (data) => {
    console.log(data);
    //declaramos un arreglo el cual se va a encargar de guardar las validaciones
    let errors = [];
    //recibimos los datos a validar
    const datosDelFormulario = data;
    //proceso devalidacion
    datosDelFormulario.map((valorInput) => {
      switch (valorInput.campo) {
        case "nombreEn": {
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
        default: {
          break;
        }
      }
    });
    return errors;
  };
  //fin de validar inputs
  //fin encuesta
  //USUARIO
  const datosUsuarioe = {
    nombreUsEd: "",
    apellidoUsEd: "",
    correoUsEd: "",
  };
  const [formularioUsEd, setFormularioUsEd] = useState(datosUsuarioe);
  const ManejarEventosDeInputsUsEd = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    //actualiza los valores capturados a estado formulario
    setFormularioUsEd({ ...formularioUsEd, [name]: value });
  };
  const handleRegisterSeccionUsEd = (e) => {
    e.preventDefault();
    let verificarInputs = [
      { campo: "nombreUs", value: formularioUsEd.nombreUsEd },
      { campo: "apellidoUs", value: formularioUsEd.apellidoUsEd },
      { campo: "correoUs", value: formularioUsEd.correoUsEd },
    ];
    //enviamos los datos a la funcion de validacion y recibimos las validadciones
    const datosValidados = ValidarInputsUsEd(verificarInputs);
    console.log(datosValidados);
    //enviando las validaciones al estado que se va a encargar de mostarlas en el formulario
    setAlerta(datosValidados);
    //obtenemos el total de validaciones
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
  }; //fin de handle
  const ValidarInputsUsEd = (data) => {
    console.log(data);
    //declaramos un arreglo el cual se va a encargar de guardar las validaciones
    let errors = [];
    //recibimos los datos a validar
    const datosDelFormulario = data;
    //proceso devalidacion
    datosDelFormulario.map((valorInput) => {
      switch (valorInput.campo) {
        case "nombreUs": {
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
        case "apellidoUs": {
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
        case "correoUs": {
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
        default: {
          break;
        }
      }
    });
    return errors;
  };
  //fin de validar inputs
  //fin usuario
  return (
    <>
      <button data-te-toggle="modal" data-te-target={"#" + tipo}>
        <HiPencilAlt class="icon icon-tabler w-8 h-8 text-yellow-200" />
      </button>
      {/*editar alumno*/}
      <div
        data-te-modal-init
        class="fixed top-0 left-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
        id="editarAlumno"
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
                Editar Alumno
              </h5>
            </div>
            <form onSubmit={handleRegisterSeccionEdA}>
              <div class="relative p-4">
                {/*Nombre */}
                <div class="flex-auto my-2">
                  <input
                    type="text"
                    name="nombreEdA"
                    placeholder="Nombres"
                    class="shadow appearance-none w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none p-3"
                    value={formularioEdA.nombreEdA}
                    onChange={ManejarEventosDeInputsEdA}
                  />
                  {alerta
                    .filter(
                      (input) =>
                        input.valorInput == "nombreA" && input.estado === true
                    )
                    .map((message) => (
                      <div>
                        <span class="text-red-500 pl-2 mt-2">
                          {message.mensaje}
                        </span>
                      </div>
                    ))}
                </div>
                {/*apellido */}
                <div class="flex-auto my-2">
                  <input
                    type="text"
                    name="apellidoEdA"
                    placeholder="Apellidos"
                    class="shadow appearance-none w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none p-3"
                    value={formularioEdA.apellidoEdA}
                    onChange={ManejarEventosDeInputsEdA}
                  />{" "}
                  {alerta
                    .filter(
                      (input) =>
                        input.valorInput == "apellidoA" && input.estado === true
                    )
                    .map((message) => (
                      <div>
                        <span class="text-red-500 pl-2 mt-2">
                          {message.mensaje}
                        </span>
                      </div>
                    ))}
                </div>
                {/*NIE */}
                <div class="flex-auto my-2">
                  <input
                    type="tel"
                    name="nieEdA"
                    placeholder="NIE(solo numeros)"
                    class="shadow appearance-none w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none p-3"
                    value={formularioEdA.nieEdA}
                    onChange={ManejarEventosDeInputsEdA}
                  />{" "}
                  {alerta
                    .filter(
                      (input) =>
                        input.valorInput == "nieA" && input.estado === true
                    )
                    .map((message) => (
                      <div>
                        <span class="text-red-500 pl-2 mt-2">
                          {message.mensaje}
                        </span>
                      </div>
                    ))}
                </div>
                {/*Select nivel academico*/}
                <div class="flex-auto my-2">
                  <select
                    id=""
                    name="nivelEdA"
                    class="shadow appearance-none w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none p-3"
                    value={formularioEdA.nivelEdA}
                    onChange={ManejarEventosDeInputsEdA}
                  >
                    <option selected>Nivel Académico</option>
                    <option value="#">Tercer ciclo</option>
                    <option value="#">Bachillerato</option>
                  </select>
                  {alerta
                    .filter(
                      (input) =>
                        input.valorInput == "nivelA" && input.estado === true
                    )
                    .map((message) => (
                      <div>
                        <span class="text-red-500 pl-2 mt-2">
                          {message.mensaje}
                        </span>
                      </div>
                    ))}
                </div>
                {/*Select institucion*/}
                <div class="flex-auto my-2">
                  <select
                    id=""
                    name="institucionEdA"
                    class="shadow appearance-none w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none p-3"
                    value={formularioEdA.institucionEdA}
                    onChange={ManejarEventosDeInputsEdA}
                  >
                    <option selected>Institucion</option>
                    <option value="#">Institucion 1</option>
                    <option value="#">Institucion 2</option>
                  </select>
                  {alerta
                    .filter(
                      (input) =>
                        input.valorInput == "institucionA" &&
                        input.estado === true
                    )
                    .map((message) => (
                      <div>
                        <span class="text-red-500 pl-2 mt-2">
                          {message.mensaje}
                        </span>
                      </div>
                    ))}
                </div>
                <div class="grid md:grid-cols-2 gap-1">
                  <div class="w-full">
                    <input
                      class="shadow appearance-none w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none p-3"
                      type="date"
                      id="start"
                      name="fechaEdA"
                      max="2023-04-10"
                      value={formularioEdA.fechaEdA}
                      onChange={ManejarEventosDeInputsEdA}
                    />
                    {alerta
                      .filter(
                        (input) =>
                          input.valorInput == "fechaA" && input.estado === true
                      )
                      .map((message) => (
                        <div>
                          <span class="text-red-500 pl-2 mt-2">
                            {message.mensaje}
                          </span>
                        </div>
                      ))}
                  </div>
                  {/*Select Genero*/}
                  <div class="w-full">
                    <select
                      id=""
                      name="generoEdA"
                      class="shadow appearance-none w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none p-3"
                      value={formularioEdA.generoEdA}
                      onChange={ManejarEventosDeInputsEdA}
                    >
                      <option selected>Genero</option>
                      <option value="#">Femenino</option>
                      <option value="#">Masculino</option>
                    </select>{" "}
                    {alerta
                      .filter(
                        (input) =>
                          input.valorInput == "generoA" && input.estado === true
                      )
                      .map((message) => (
                        <div>
                          <span class="text-red-500 pl-2 mt-2">
                            {message.mensaje}
                          </span>
                        </div>
                      ))}
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
      {/*editar institucion*/}
      <div
        data-te-modal-init
        class="fixed top-0 left-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
        id="editarInstitucion"
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
                Editar Institucion
              </h5>
            </div>
            <form onSubmit={handleRegisterSeccionEdIn}>
              <div class="relative p-4">
                <div class="flex-auto my-2">
                  {/*Nombre */}
                  <input
                    type="text"
                    name="nombreEdIn"
                    placeholder="Nombre"
                    class="shadow appearance-none w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none p-3"
                    value={formularioEdIn.nombreEdIn}
                    onChange={ManejarEventosDeInputsEdIn}
                  />{" "}
                  {alerta
                    .filter(
                      (input) =>
                        input.valorInput == "nombreIn" && input.estado === true
                    )
                    .map((message) => (
                      <div>
                        <span class="text-red-500 pl-2 mt-2">
                          {message.mensaje}
                        </span>
                      </div>
                    ))}
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
      {/** editar grado*/}
      <div
        data-te-modal-init
        class="fixed top-0 left-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
        id="editarGrado"
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
                Editar Grado
              </h5>
            </div>
            <form onSubmit={handleRegisterSeccionEdG}>
              <div class="relative p-4">
                <div class="flex-auto my-2">
                  {/*nivel */}
                  <input
                    type="text"
                    placeholder="Nivel Académico"
                    class="shadow appearance-none w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none p-3"
                    value={formularioEdG.nombreEdG}
                    onChange={ManejarEventosDeInputsEdG}
                  />{" "}
                  {alerta
                    .filter(
                      (input) =>
                        input.valorInput == "nombreG" && input.estado === true
                    )
                    .map((message) => (
                      <div>
                        <span class="text-red-500 pl-2 mt-2">
                          {message.mensaje}
                        </span>
                      </div>
                    ))}
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
      {/*editar materia */}
      <div
        data-te-modal-init
        class="fixed top-0 left-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
        id="editarMateria"
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
                Editar Materia
              </h5>
            </div>
            <form onSubmit={handleRegisterSeccionEdM}>
              <div class="relative p-4">
                <div class="flex-auto my-2">
                  {/*nombre */}
                  <input
                    type="text"
                    name="nombreEdM"
                    placeholder="Nombre"
                    class="shadow appearance-none w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none p-3"
                    value={formularioEdM.nombreEdM}
                    onChange={ManejarEventosDeInputsEdM}
                  />
                  {alerta
                    .filter(
                      (input) =>
                        input.valorInput == "nombreM" && input.estado === true
                    )
                    .map((message) => (
                      <div>
                        <span class="text-red-500 pl-2 mt-2">
                          {message.mensaje}
                        </span>
                      </div>
                    ))}
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
      {/*editar unidad */}
      <div
        data-te-modal-init
        class="fixed top-0 left-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
        id="editarUnidad"
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
                Editar Unidad
              </h5>
            </div>
            <form onSubmit={handleRegisterSeccionEdU}>
              <div class="relative p-4">
                <div class="flex-auto my-2">
                  {/*nombre */}
                  <input
                    type="text"
                    name="nombreEdU"
                    placeholder="Nombre"
                    class="shadow appearance-none w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none p-3"
                    value={formularioEdU.nombreEdU}
                    onChange={ManejarEventosDeInputsEdU}
                  />
                  {alerta
                    .filter(
                      (input) =>
                        input.valorInput == "nombreU" && input.estado === true
                    )
                    .map((message) => (
                      <div>
                        <span class="text-red-500 pl-2 mt-2">
                          {message.mensaje}
                        </span>
                      </div>
                    ))}
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
      {/*editar cuestionario */}
      <div
        data-te-modal-init
        class="fixed top-0 left-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
        id="editarCuestionario"
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
                Editar Cuestionario
              </h5>
            </div>
            <form onSubmit={handleRegisterSeccionEdC}>
              <div class="relative p-4">
                <div class="flex-auto my-2">
                  {/*Nombre */}
                  <label class="pl-1">Nombre</label>
                  <input
                    type="text"
                    name="nombreEdC"
                    class="shadow appearance-none w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none p-3"
                    value={formularioEdC.nombreEdC}
                    onChange={ManejarEventosDeInputsEdC}
                  />
                  {alerta
                    .filter(
                      (input) =>
                        input.valorInput == "nombreC" && input.estado === true
                    )
                    .map((message) => (
                      <div>
                        <span class="text-red-500 pl-2 mt-2">
                          {message.mensaje}
                        </span>
                      </div>
                    ))}
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
      {/*editar encuesta*/}
      <div
        data-te-modal-init
        class="fixed top-0 left-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
        id="editarEncuesta"
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
                Editar Encuesta
              </h5>
            </div>
            <form onSubmit={handleRegisterSeccionEdEn}>
              <div class="relative p-4">
                <div class="flex-auto my-2">
                  <label class="pl-1">Comentario</label>
                  <textarea
                    name="comentarioEdEn"
                    class="w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none py-1 px-3"
                    value={formularioEdEn.comentarioEdEn}
                    onChange={ManejarEventosDeInputsEdEn}
                  />
                  {alerta
                    .filter(
                      (input) =>
                        input.valorInput == "nombreEn" && input.estado === true
                    )
                    .map((message) => (
                      <div>
                        <span class="text-red-500 pl-2 mt-2">
                          {message.mensaje}
                        </span>
                      </div>
                    ))}
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
                  class="ml-1 inline-block rounded bg-aFuerte2 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-aFuerte3"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  value="Enviar"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      {/*editar usuario*/}
      <div
        data-te-modal-init
        class="fixed top-0 left-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
        id="editarUsuario"
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
                Editar Usuario
              </h5>
            </div>
            <form onSubmit={handleRegisterSeccionUsEd}>
              <div class="relative p-4">
                <div class="flex-auto my-2">
                  {/*Nombre */}
                  <input
                    type="text"
                    name="nombreUsEd"
                    placeholder="Nombres"
                    class="shadow appearance-none w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none p-3"
                    value={formularioUsEd.nombreUsEd}
                    onChange={ManejarEventosDeInputsUsEd}
                  />
                  {alerta
                    .filter(
                      (input) =>
                        input.valorInput == "nombreUs" && input.estado === true
                    )
                    .map((message) => (
                      <div>
                        <span class="text-red-500 pl-2 mt-2">
                          {message.mensaje}
                        </span>
                      </div>
                    ))}
                </div>
                <div class="flex-auto my-2">
                  {/*apellido */}
                  <input
                    type="text"
                    name="apellidoUsEd"
                    placeholder="Apellidos"
                    class="shadow appearance-none w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none p-3"
                    value={formularioUsEd.apellidoUsEd}
                    onChange={ManejarEventosDeInputsUsEd}
                  /> {alerta
                    .filter(
                      (input) =>
                        input.valorInput == "apellidoUs" && input.estado === true
                    )
                    .map((message) => (
                      <div>
                        <span class="text-red-500 pl-2 mt-2">
                          {message.mensaje}
                        </span>
                      </div>
                    ))}
                </div>
                <div class="flex-auto my-2">
                  {/*correo */}
                  <input
                    type="email"
                    name="correoUsEd"
                    placeholder="ejemplo@email.com"
                    class="shadow appearance-none w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none p-3"
                    value={formularioUsEd.correoUsEd}
                    onChange={ManejarEventosDeInputsUsEd}
                  /> {alerta
                    .filter(
                      (input) =>
                        input.valorInput == "correoUs" && input.estado === true
                    )
                    .map((message) => (
                      <div>
                        <span class="text-red-500 pl-2 mt-2">
                          {message.mensaje}
                        </span>
                      </div>
                    ))}
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
