import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
const RegistroA = () => {
  const Navigate = useNavigate();
  //estado inicial del formulario
  const datosFormulario = {
    nombreR: "",
    apellidoR: "",
    correoRe: "",
    contraR1: "",
    contraR2: "",
  };
  //estado inicial para alerta
  const initialStateInput = {
    input: "",
    message: "",
    state: false,
  };
  //manejar los valores del formulario
  const [formulario, setFormulario] = useState(datosFormulario);
  //manejar las alertar de validacion
  const [alerta, setAlerta] = useState([initialStateInput]);
  //funcion para obtener lo de los inputs
  const ManejarEventosDeInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    //actualiza los valores capturados a estado formulario
    setFormulario({ ...formulario, [name]: value });
  };
  //encargada de validar los inputs
  const handleRegisterSeccion = (e) => {
    e.preventDefault();
    let verificarInputs = [
      { campo: "nombre", value: formulario.nombreR },
      { campo: "apellido", value: formulario.apellidoR },
      { campo: "correo", value: formulario.correoRe },
      { campo: "contra1", value: formulario.contraR1 },
      { campo: "contra2", value: formulario.contraR2 },
    ];
    //enviamos los datos a la funcion de validacion y recibimos las validadciones
    const datosValidados = ValidarInputs(verificarInputs);
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
    if (totalValidaciones.length >= 5) {
      EnviarDatosRegistroAdmin()
    }
  };

  async function EnviarDatosRegistroAdmin() {
    const url = "http://localhost:8000/api/auth/registro2";
    const infoInputs = {
      nombre_registro: formulario.nombreR,
      apellido_registro: formulario.apellidoR,
      email: formulario.correoRe,
      password: formulario.contraR1,
      password_confirmed: formulario.contraR2
    };
    let config = {
      headers: {
        'Content-Type':'application/json',
        'Accept':'application/json',
      }
    }
    try {
      const resp = await axios.post(url, infoInputs, config);
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
        title: 'se ha registrado con exito'
      })
      setTimeout(() => {
        Navigate("/loginA");
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
    //proceso devalidacion
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
        case "apellido": {
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
        case "contra1": {
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
                valorInput.value.charCodeAt(i) <= 57
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
        case "contra2": {
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
                valorInput.value.charCodeAt(i) <= 57
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

  return (
    <>
      <body class="bg-aFuerte3 min-h-screen pt-10 md:pt-8 pb-6 px-2 md:px-0">
        <header class="max-w-lg mx-auto">
          <h1 class="text-white text-4xl font-bold text-center">Learn +</h1>
          <h1 class="text-white text-center">Registro Administradores</h1>
        </header>

        <main class="bg-bCasi max-w-lg mx-auto p-8 md:p-12 my-4 rounded-3xl shadow-2xl">
          <form class="flex flex-col gap-1" onSubmit={handleRegisterSeccion}>
            <div class="flex-auto">
              {/*Nombre */}
              <input
                type="text"
                name="nombreR"
                placeholder="Nombre"
                class="shadow appearance-none w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none p-3"
                value={formulario.nombreR}
                onChange={ManejarEventosDeInputs}
              />
              {alerta
                .filter(
                  (input) =>
                    input.valorInput == "nombre" && input.estado === true
                )
                .map((message) => (
                  <div>
                    <span class="text-red-500 mt-2">{message.mensaje}</span>
                  </div>
                ))}
            </div>
            <div class="flex-auto">
              {/*apellido */}
              <input
                type="text"
                name="apellidoR"
                placeholder="Apellido"
                class="shadow appearance-none w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none p-3"
                value={formulario.apellidoR}
                onChange={ManejarEventosDeInputs}
              />
              {alerta
                .filter(
                  (input) =>
                    input.valorInput == "apellido" && input.estado === true
                )
                .map((message) => (
                  <div>
                    <span class="text-red-500 mt-2">{message.mensaje}</span>
                  </div>
                ))}
            </div>
            <div class="flex-auto">
              {/*correo */}
              <input
                type="email"
                name="correoRe"
                placeholder="ejemplo@email.com"
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
                    <span class="text-red-500 mt-2">{message.mensaje}</span>
                  </div>
                ))}
            </div>
            {/*PASSWORD */}
            <div class="grid md:grid-cols-2 gap-1">
              <div class="w-full">
                <input
                  type="password"
                  name="contraR1"
                  placeholder="Contraseña"
                  class="shadow appearance-none w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none p-3"
                  value={formulario.contra1}
                  onChange={ManejarEventosDeInputs}
                />
                {alerta
                  .filter(
                    (input) =>
                      input.valorInput == "contra1" && input.estado === true
                  )
                  .map((message) => (
                    <div>
                      <span class="text-red-500 mt-2">{message.mensaje}</span>
                    </div>
                  ))}
              </div>
              <div class="w-full">
                <input
                  type="password"
                  name="contraR2"
                  placeholder="Repetir Contraseña"
                  class="shadow appearance-none w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none p-3"
                  value={formulario.contra2}
                  onChange={ManejarEventosDeInputs}
                />
                {alerta
                  .filter(
                    (input) =>
                      input.valorInput == "contra2" && input.estado === true
                  )
                  .map((message) => (
                    <div>
                      <span class="text-red-500 mt-2">{message.mensaje}</span>
                    </div>
                  ))}
              </div>
            </div>

            <input
              class="bg-aFuerte2 hover:bg-aFuerte3 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200"
              type="submit"
              value="Registrar"
            />
          </form>
        </main>

        <div class="max-w-lg mx-auto text-center mt-8 mb-3">
          <p class="text-white">
            ¿Ya tienes una cuenta?
            <Link to="/loginA" class="font-bold hover:underline">
              Ingresar.
            </Link>
          </p>
        </div>
      </body>
    </>
  );
};
export default RegistroA;
