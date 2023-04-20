import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
const LoginA = () => {
  const Navigate = useNavigate();
  //estado inicial
  const datosFormulario = {
    correo: "",
    contra1: "",
  };
  //lo mismo pero para recuperar contra
  const datosFormularioC = {
    correo2: "",
  };
  //estado inicial alerta
  const initialStateInput = {
    input: "",
    message: "",
    state: false,
  };
  //manejar los valores del formulario
  const [formulario, setFormulario] = useState(datosFormulario);
  //lo mismo para recuperar
  const [formularioC, setFormularioC] = useState(datosFormularioC);
  //manejar las alertar de validacion
  const [alerta, setAlerta] = useState([initialStateInput]);
  //obtener de los inputs
  const ManejarEventosDeInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    //actualiza los valores capturados a estado formulario
    setFormulario({ ...formulario, [name]: value });
  };
  //lo mismo para recuperar
  const ManejarEventosDeInputsC = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    //lo mismo para recuperar
    setFormularioC({ ...formularioC, [name]: value });
  };
  //encargada de validar los inputs
  const handleLoginSeccion = (e) => {
    e.preventDefault();
    let verificarInputs = [
      { campo: "correo", value: formulario.correo },
      { campo: "contra", value: formulario.contra1 },
    ];
    //enviamos los datos a la funcion de validacion y recibimos las validaciones
    const datosValidados = ValidarInputs(verificarInputs);
    console.log(datosValidados);
    //envia las validaciones al estado que se va a encargar de mostrarlas en el formulario
    setAlerta(datosValidados);
    //obtenemos el total de validadciones
    const totalValidaciones = datosValidados
      .filter((input) => input.estado === false)
      .map((estado) => {
        return false;
      });
    console.log("Total de validaciones:", totalValidaciones.length);
    //validacion para enviar los datos al servidor
    if (totalValidaciones.length >= 2) {
      
      EnviarDatosServe();
    }
  };
  //recupear contra
  const handleLoginSeccion2 = (e) => {
    e.preventDefault();
    let verificarInputs = [{ campo: "correoR", value: formularioC.correo2 }];
    //enviamos los datos a la funcion de validacion y recibimos las validaciones
    const datosValidados = ValidarInputsC(verificarInputs);
    console.log(datosValidados);
    //envia las validaciones al estado que se va a encargar de mostrarlas en el formulario
    setAlerta(datosValidados);
    //lo mismo
    setAlerta(datosValidados);
    //obtenemos el total de validadciones
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

  async function EnviarDatosServe() {
    const url = "http://localhost:8000/api/auth/iniciar-sesion2";
    const infoInputs = {
      email: formulario.correo,
      password: formulario.contra1
    };
    let config = {
      'Content-Type':'application/json',
        'Accept':'application/json',
    }
     try{
        const resp = await axios.post(url, infoInputs,config);
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
          title: 'ha iniciado sesion correctamente'
        })
        setTimeout(() => {
          Navigate("/dashboard");
        }, 2000);
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

  const ValidarInputs = (data) => {
    console.log(data);
    //declaramos un arreglo el cual se va a encargar de guardar las validaciones
    let errors = [];
    //recibimos los datos a validar
    const datosDelFormulario = data;
    //proceso de validacion
    datosDelFormulario.map((valorInput) => {
      switch (valorInput.campo) {
        case "correo": {
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
        case "contra": {
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
    //retornamos al total de validaciones
    return errors;
  };
  const ValidarInputsC = (data) => {
    console.log(data);
    //declaramos un arreglo el cual se va a encargar de guardar las validaciones
    let errors = [];
    //recibimos los datos a validar
    const datosDelFormulario = data;
    //proceso de validacion
    datosDelFormulario.map((valorInput) => {
      switch (valorInput.campo) {
        case "correoR": {
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
    //retornamos al total de validaciones
    return errors;
  };
  console.log(formulario);
  console.log(formularioC);
  return (
    <>
      <body class="bg-aFuerte3 min-h-screen pt-12 md:pt-20 pb-6 px-2 md:px-0">
        <header class="max-w-lg mx-auto">
          <h1 class="text-white text-4xl font-bold text-center">Learn +</h1>
          <h1 class="text-white text-center">Administración</h1>
        </header>
        <main class="bg-bCasi max-w-lg mx-auto p-8 md:p-12 my-10 rounded-3xl shadow-2xl">
          <section class="">
            <form class="flex flex-col gap-1" onSubmit={handleLoginSeccion}>
              <div class="flex-auto">
                {/*Correo */}
                <input
                  type="email"
                  name="correo"
                  placeholder="Correo"
                  class="shadow appearance-none w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none p-3"
                  value={formulario.correo}
                  onChange={ManejarEventosDeInputs}
                />
                {alerta
                  .filter(
                    (input) =>
                      input.valorInput == "correo" && input.estado === true
                  )
                  .map((message) => (
                    <div>
                      <span class="text-red-500 mx-2 mt-2">
                        {message.mensaje}
                      </span>
                    </div>
                  ))}
              </div>
              <div class="flex-auto">
                {/*contraseña */}
                <input
                  type="password"
                  name="contra1"
                  placeholder="Contraseña"
                  class="shadow appearance-none w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none p-3"
                  value={formulario.contra1}
                  onChange={ManejarEventosDeInputs}
                />
                {alerta
                  .filter(
                    (input) =>
                      input.valorInput == "contra" && input.estado === true
                  )
                  .map((message) => (
                    <div>
                      <span class="text-red-500 mx-2 mt-2">
                        {message.mensaje}
                      </span>
                    </div>
                  ))}
              </div>
              <input
                class="bg-aFuerte2 hover:bg-aFuerte3 rounded shadow-lg hover:shadow-xl transition duration-200 text-center text-white font-bold py-2 "
                type="submit"
                value="Ingresar"
              />

              <div class="flex justify-end">
                <a
                  href="#"
                  class="text-sm text-aFuerte2 hover:text-aFuerte3 hover:underline mt-3"
                  data-te-toggle="modal"
                  data-te-target="#exampleModalCenteredScrollable"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  ¿Olvido su contraseña?
                </a>
              </div>
            </form>
          </section>
        </main>

        <div class="max-w-lg mx-auto text-center mt-12 mb-6">
          <p class="text-white">
            ¿No tienes cuenta?
            <Link to="/registroA" class="font-bold hover:underline">
              Crea una.
            </Link>
          </p>
        </div>
        {/*Modal de recuperar contraseña */}
        <div
          data-te-modal-init
          class="fixed top-0 left-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
          id="exampleModalCenteredScrollable"
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
                  Recuperar contraseña
                </h5>
              </div>
              <form onSubmit={handleLoginSeccion2}>
                <div class="relative p-4">
                  <p>Ingrese su correo.</p>
                  <div class="">
                    <input
                      type="email"
                      name="correo2"
                      placeholder="ejemplo@correo.com"
                      class="shadow appearance-none border rounded w-full py-3 px-3 my-3 text-gray-700 leading-tight focus:outline-none focus:ring"
                      value={formularioC.correo2}
                      onChange={ManejarEventosDeInputsC}
                    />
                    {alerta
                      .filter(
                        (input) =>
                          input.valorInput === "correoR" && input.estado == true
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
      </body>
    </>
  );
};
export default LoginA;
