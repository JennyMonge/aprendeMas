
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
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
      EnviarDatosInstitucion();
    }
  };

  async function EnviarDatosInstitucion() {
    const url = "http://localhost:8000/api/institucion-insertar"
    const infoInputsInstitucion = {
      nombre_inst: formularioIn.institucion,
      tipo_institucion: formularioIn.tipoIn,
      id_municipio: formularioIn.muniIn,
    };
    let config = {
      headers: {
        'Content-Type':'application/json',
        'Accept':'application/json',
      }
    }
    try {
      const resp = await axios.post(url, infoInputsInstitucion, config);
      console.log(resp);
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'success',
        title: 'se ha agregado institucion con exito'
      })
    }catch(err){
      console.error(err);
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'error',
        title: 'ha ocurrido un error intente de nuevo'
      })
    }
  }
const [datosServidor, setDatosServidor] = useState([]);
  useEffect(()=>{
    async function getDepartamentos(){
      const url = "http://localhost:8000/api/municipio-listar";

      let config = {
        headers: {
          "Content-Type":"application/json",
          Accept: "application/json",
        },
      };
      try{
        const resp = await axios.get(url,config);
        setDatosServidor(resp.data);
      }catch(err){
        console.error(err);
      }
    }
    getDepartamentos();
  },[]);
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
  //GRADO
  const datosGrado = {
    gradoN: "",
  };
  const [formularioGr, setFormularioGr] = useState(datosGrado);
  const ManejarEventosDeInputsGr = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    //actualiza los valores capturados a estado formulario
    setFormularioGr({ ...formularioGr, [name]: value });
  };
  const handleRegisterSeccionGr = (e) => {
    e.preventDefault();
    let verificarInputs = [{ campo: "nombreG", value: formularioGr.gradoN }];
    //enviamos los datos a la funcion de validacion y recibimos las validadciones
    const datosValidados = ValidarInputsGr(verificarInputs);
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
  };
  //fin de handle
  const ValidarInputsGr = (data) => {
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
  //fin GRADO
  //UNIDAD
  const datosUnidades = {
    nivelU: "",
    materiaU: "",
    nombreU: "",
  };
  const [formularioUn, setFormularioUn] = useState(datosUnidades);
  const ManejarEventosDeInputsUn = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    //actualiza los valores capturados a estado formulario
    setFormularioUn({ ...formularioUn, [name]: value });
  };
  const handleRegisterSeccionUn = (e) => {
    e.preventDefault();
    let verificarInputs = [
      { campo: "nivelU", value: formularioUn.nivelU },
      { campo: "materiaU", value: formularioUn.materiaU },
      { campo: "nombreU", value: formularioUn.nombreU },
    ];
    //enviamos los datos a la funcion de validacion y recibimos las validadciones
    const datosValidados = ValidarInputsUn(verificarInputs);
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
  const ValidarInputsUn = (data) => {
    console.log(data);
    //declaramos un arreglo el cual se va a encargar de guardar las validaciones
    let errors = [];
    //recibimos los datos a validar
    const datosDelFormulario = data;
    //proceso devalidacion
    datosDelFormulario.map((valorInput) => {
      switch (valorInput.campo) {
        case "nivelU": {
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
        case "materiaU": {
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
  //fin UNIDAD
  //CUESTIONARIO
  const datosCuestionario = {
    materiaC: "",
    unidadC: "",
    nombreC: "",
  };
  const [formularioCu, setFormularioCu] = useState(datosCuestionario);
  const ManejarEventosDeInputsCu = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    //actualiza los valores capturados a estado formulario
    setFormularioCu({ ...formularioCu, [name]: value });
  };
  const handleRegisterSeccionCu = (e) => {
    e.preventDefault();
    let verificarInputs = [
      { campo: "materiaCu", value: formularioCu.materiaC },
      { campo: "unidadCu", value: formularioCu.nombreC },
      { campo: "nombreCu", value: formularioCu.nombreC },
    ];
    //enviamos los datos a la funcion de validacion y recibimos las validadciones
    const datosValidados = ValidarInputsCu(verificarInputs);
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
  const ValidarInputsCu = (data) => {
    console.log(data);
    //declaramos un arreglo el cual se va a encargar de guardar las validaciones
    let errors = [];
    //recibimos los datos a validar
    const datosDelFormulario = data;
    //proceso devalidacion
    datosDelFormulario.map((valorInput) => {
      switch (valorInput.campo) {
        case "materiaCu": {
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
        case "unidadCu": {
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
        case "nombreCu": {
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
  //fin de validar input
  //fin cuestionario
  //ENCUESTA
  const datosEncuesta = {
    comentarioE: "",
  };
  const [formularioE, setFormularioE] = useState(datosEncuesta);
  const ManejarEventosDeInputsEn = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    //actualiza los valores capturados a estado formulario
    setFormularioE({ ...formularioE, [name]: value });
  };
  const handleRegisterSeccionEn = (e) => {
    e.preventDefault();
    let verificarInputs = [
      { campo: "comentarioEn", value: formularioE.comentarioE },
    ];
    //enviamos los datos a la funcion de validacion y recibimos las validadciones
    const datosValidados = ValidarInputsEn(verificarInputs);
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
  const ValidarInputsEn = (data) => {
    console.log(data);
    //declaramos un arreglo el cual se va a encargar de guardar las validaciones
    let errors = [];
    //recibimos los datos a validar
    const datosDelFormulario = data;
    //proceso devalidacion
    datosDelFormulario.map((valorInput) => {
      switch (valorInput.campo) {
        case "comentarioEn": {
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
  const datosUsuario = {
    nombreUs: "",
    apellidoUs: "",
    correoUs: "",
    contra1Us: "",
    contra2Us: "",
  };
  const [formularioUs, setFormularioUs] = useState(datosUsuario);
  const ManejarEventosDeInputsUs = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    //actualiza los valores capturados a estado formulario
    setFormularioUs({ ...formularioUs, [name]: value });
  };
  const handleRegisterSeccionUs = (e) => {
    e.preventDefault();
    let verificarInputs = [
      { campo: "nombreUs", value: formularioUs.nombreUs },
      { campo: "apellidoUs", value: formularioUs.apellidoUs },
      { campo: "correoUs", value: formularioUs.correoUs },
      { campo: "contra1Us", value: formularioUs.contra1Us },
      { campo: "contra2Us", value: formularioUs.contra2Us },
    ];
    //enviamos los datos a la funcion de validacion y recibimos las validadciones
    const datosValidados = ValidarInputsUs(verificarInputs);
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
  const ValidarInputsUs = (data) => {
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
        case "contra1Us": {
          if (valorInput.value === "" || valorInput.value === null) {
            errors.push({
              valorInput: valorInput.campo,
              mensaje: "Campo requerido",
              estado: true,
            });
          } else if (valorInput.value.length < 8) {
            errors.push({
              valorInput: valorInput.campo,
              mensaje: "La contraseña debe tener al menos 8 caracteres",
              estado: true,
            });
          } else {
            var mayus = false;
            var minus = false;
            var num = false;
            var caracter_raro = false;
            for (var i = 0; i < valorInput.value.length; i++) {
              if (
                valorInput.value.charCodeAt(i) >= 65 &&
                valorInput.value.charCodeAt(i) >= 90
              ) {
                mayus = true;
              } else if (
                valorInput.value.charCodeAt(i) >= 97 &&
                valorInput.value.charCodeAt(i) <= 122
              ) {
                minus = true;
              } else if (
                valorInput.value.charCodeAt(i) >= 48 &&
                valorInput.charCodeAt(i) <= 57
              ) {
                num = true;
              } else {
                caracter_raro = true;
              }
            }
            if (
              mayus === true &&
              minus === true &&
              num == true &&
              caracter_raro === true
            ) {
              errors.push({
                valorInput: valorInput.campo,
                mensaje: "",
                estado: false,
              });
            } else {
              errors.push({
                valorInput: valorInput.campo,
                mensaje:
                  "Ingresar una combinación correcta de almenos 8 caracteres",
                estado: false,
              });
            }
            break;
          }
          break;
        }
        case "contra2Us": {
          if (valorInput.value === "" || valorInput.value === null) {
            errors.push({
              valorInput: valorInput.campo,
              mensaje: "Campo requerido",
              estado: true,
            });
          } else if (valorInput.value.length < 8) {
            errors.push({
              valorInput: valorInput.campo,
              mensaje: "La contraseña debe tener al menos 8 caracteres",
              estado: true,
            });
          } else {
            var mayus = false;
            var minus = false;
            var num = false;
            var caracter_raro = false;
            for (var i = 0; i < valorInput.value.length; i++) {
              if (
                valorInput.value.charCodeAt(i) >= 65 &&
                valorInput.value.charCodeAt(i) >= 90
              ) {
                mayus = true;
              } else if (
                valorInput.value.charCodeAt(i) >= 97 &&
                valorInput.value.charCodeAt(i) <= 122
              ) {
                minus = true;
              } else if (
                valorInput.value.charCodeAt(i) >= 48 &&
                valorInput.charCodeAt(i) <= 57
              ) {
                num = true;
              } else {
                caracter_raro = true;
              }
            }
            if (
              mayus === true &&
              minus === true &&
              num == true &&
              caracter_raro === true
            ) {
              errors.push({
                valorInput: valorInput.campo,
                mensaje: "",
                estado: false,
              });
            } else {
              errors.push({
                valorInput: valorInput.campo,
                mensaje:
                  "Ingresar una combinación correcta de almenos 8 caracteres",
                estado: false,
              });
            }
            break;
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
                      {datosServidor.map((municipio) =>{
                        return(
                          <option id={municipio.id_municipio}>{municipio.nombre_municipio}</option>
                        );
                      })}
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
            <form onSubmit={handleRegisterSeccionGr}>
              <div class="relative p-4">
                {/*nivel academico*/}
                <div class="flex-auto my-2">
                  <input
                    type="text"
                    name="gradoN"
                    placeholder="Nivel Académico"
                    class="shadow appearance-none w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none p-3"
                    value={formularioGr.gradoN}
                    onChange={ManejarEventosDeInputsGr}
                  />{" "}
                  {alerta
                    .filter(
                      (input) =>
                        input.valorInput == "nombreG" && input.estado === true
                    )
                    .map((message) => (
                      <div>
                        <span class="text-red-500 mt-2">{message.mensaje}</span>
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
            <form onSubmit={handleRegisterSeccionUn}>
              <div class="relative p-4">
                <div class="grid md:grid-cols-2 gap-1">
                  {/*select nivel academico */}
                  <div class="w-full">
                    <select
                      id=""
                      name="nivelU"
                      class="shadow appearance-none w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none p-3"
                      value={formularioUn.nivelU}
                      onChange={ManejarEventosDeInputsUn}
                    >
                      <option selected>Nivel académico</option>
                      <option value="#">Grado x</option>
                      <option value="#">Grado y</option>
                    </select>
                    {alerta
                      .filter(
                        (input) =>
                          input.valorInput == "nivelU" && input.estado === true
                      )
                      .map((message) => (
                        <div>
                          <span class="text-red-500 pl-2 mt-2">
                            {message.mensaje}
                          </span>
                        </div>
                      ))}
                  </div>
                  {/*select materia */}
                  <div class="w-full">
                    <select
                      id=""
                      name="materiaU"
                      class="shadow appearance-none w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none p-3"
                      value={formularioUn.materiaU}
                      onChange={ManejarEventosDeInputsUn}
                    >
                      <option selected>Materia</option>
                      <option value="#">Materia x</option>
                      <option value="#">Materia y</option>
                    </select>
                    {alerta
                      .filter(
                        (input) =>
                          input.valorInput == "materiaU" &&
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
                </div>
                {/*nombre */}
                <div class="flex-auto my-2">
                  <input
                    type="text"
                    name="nombreU"
                    placeholder="Nombre"
                    class="shadow appearance-none w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none p-3"
                    value={formularioUn.nombreU}
                    onChange={ManejarEventosDeInputsUn}
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
            <form onSubmit={handleRegisterSeccionCu}>
              <div class="relative p-4">
                <div class="grid md:grid-cols-2 gap-1">
                  {/*select materia */}
                  <div class="w-full">
                    <select
                      id=""
                      name="materiaC"
                      class="shadow appearance-none w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none p-3"
                      value={formularioCu.materiaC}
                      onChange={ManejarEventosDeInputsCu}
                    >
                      <option selected>Materia</option>
                      <option value="#">Materia x</option>
                      <option value="#">Materia y</option>
                    </select>
                    {alerta
                      .filter(
                        (input) =>
                          input.valorInput == "materiaCu" &&
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
                  {/*select unidad */}
                  <div class="w-full">
                    <select
                      id=""
                      name="unidadC"
                      class="shadow appearance-none w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none p-3"
                      value={formularioCu.unidadC}
                      onChange={ManejarEventosDeInputsCu}
                    >
                      <option selected>Unidad</option>
                      <option value="#">Unidad x</option>
                      <option value="#">Unidad y</option>
                    </select>
                    {alerta
                      .filter(
                        (input) =>
                          input.valorInput == "unidadCu" &&
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
                </div>
                {/*Nombre */}
                <div class="flex-auto my-2">
                  <label class="pl-1">Nombre</label>
                  <input
                    type="text"
                    name="nombreC"
                    class="shadow appearance-none w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none p-3"
                    value={formularioCu.nombreC}
                    onChange={ManejarEventosDeInputsCu}
                  />
                  {alerta
                    .filter(
                      (input) =>
                        input.valorInput == "nombreCu" && input.estado === true
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
            <form onSubmit={handleRegisterSeccionEn}>
              <div class="relative p-4">
                {/*Comentario */}
                <div class="flex-auto my-2">
                  <label class="pl-1">Comentario</label>
                  <textarea
                    name="comentarioE"
                    class="w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none py-1 px-3"
                    value={formularioE.comentarioE}
                    onChange={ManejarEventosDeInputsEn}
                  />
                  {alerta
                    .filter(
                      (input) =>
                        input.valorInput == "comentarioEn" &&
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
            <form onSubmit={handleRegisterSeccionUs}>
              <div class="relative p-4">
                {/*Nombre */}
                <div class="flex-auto my-2">
                  <input
                    type="text"
                    name="nombreUs"
                    placeholder="Nombres"
                    class="shadow appearance-none w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none p-3"
                    value={formularioUs.nombreUs}
                    onChange={ManejarEventosDeInputsUs}
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
                {/*apellido */}
                <div class="flex-auto my-2">
                  <input
                    type="text"
                    name="apellidoUs"
                    placeholder="Apellidos"
                    class="shadow appearance-none w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none p-3"
                    value={formularioUs.apellidoUs}
                    onChange={ManejarEventosDeInputsUs}
                  />{" "}
                  {alerta
                    .filter(
                      (input) =>
                        input.valorInput == "apellidoUs" &&
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
                {/*correo */}
                <div class="flex-auto my-2">
                  <input
                    type="email"
                    name="correoUs"
                    placeholder="ejemplo@email.com"
                    class="shadow appearance-none w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none p-3"
                    value={formularioUs.correoUs}
                    onChange={ManejarEventosDeInputsUs}
                  />
                  {alerta
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
                {/*contraseñas */}
                <div class="grid md:grid-cols-2 gap-1">
                  {/*contraseña 1*/}
                  <div class="w-full">
                    <input
                      type="password"
                      name="contra1Us"
                      placeholder="Contraseña"
                      class="shadow appearance-none w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none p-3"
                      value={formularioUs.contra1Us}
                      onChange={ManejarEventosDeInputsUs}
                    />{" "}
                    {alerta
                      .filter(
                        (input) =>
                          input.valorInput == "contra1Us" &&
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
                  {/*contraseña 2*/}
                  <div class="w-full">
                    <input
                      type="password"
                      name="contra2Us"
                      placeholder="Repetir Contraseña"
                      class="shadow appearance-none w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none p-3"
                      value={formularioUs.contra2Us}
                      onChange={ManejarEventosDeInputsUs}
                    />
                    {alerta
                      .filter(
                        (input) =>
                          input.valorInput == "contra2Us" &&
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
