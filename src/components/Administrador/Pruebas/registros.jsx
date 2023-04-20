import { useState } from "react";

const Registros = () => {
  //estado inicial del formulario
  const datosFormulario = {
    nombre: "",
    apellido: "",
    correo: "",
  };
  //es valido para correo
  const isValidEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //estado inicial para alerta
  const initialStateInput = {
    input: "",
    message: "",
    state: false,
  };
  //estado para manejar los valores del formulario
  const [formulario, setFormulario] = useState(datosFormulario);

  //estado para manejar las alertas de validacion
  const [alerta, setAlerta] = useState([initialStateInput]);
  //funcion para obtener lo de los inputs
  const ManejarEventosDeInputs = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    //actualizamos los valores capturados anuestro estado de formularo
    setFormulario({ ...formulario, [name]: value });
  };

  //funcion que se va a encargar de validar los campos
  const handleLoginSeccion = (e) => {
    e.preventDefault();
    //ordenamos los datos para enviarloa a la validacion
    let verificarInputs = [
      { nombre: "nombre", value: formulario.nombre },
      { nombre: "apellido", value: formulario.apellido },
      { nombre: "email", value: formulario.correo },
    ];
    //enviamos los datos a la funcion de validacion y recibimos las validaciones
    const datosValidados = ValidarInputs(verificarInputs);
    console.log(datosValidados);

    //enviamos las validaciones al estado que se va a encargar de mostrarlas en el formulario
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
  const ValidarInputs = (data) => {
    console.log(data);
    //declaramos un arreglo el cual se va a encargar de guardar las validaciones
    let errors = [];
    //recibimos los datos a validar
    const datosDelFormulario = data;
    //proceso devalidacion
    datosDelFormulario.map((valorInput) => {
      switch (valorInput.nombre) {
        case "nombre": {
          if (valorInput.value === "" || valorInput.value === null) {
            errors.push({
              valorInput: valorInput.nombre,
              mensaje: "Campo requerido",
              estado: true,
            });
          } else {
            errors.push({
              valorInput: valorInput.nombre,
              mensaje: "",
              estado: false,
            });
          }
          break;
        }
        case "apellido": {
          if (valorInput.value === "" || valorInput.value === null) {
            errors.push({
              valorInput: valorInput.nombre,
              mensaje: "Campo requerido",
              estado: true,
            });
          } else if (valorInput.value.length < 8) {
            errors.push({
              valorInput: valorInput.nombre,
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
                valorInput: valorInput.nombre,
                mensaje: "",
                estado: false,
              });
            } else {
              errors.push({
                valorInput: valorInput.nombre,
                mensaje:
                  "Ingresar una combinación correcta de almenos 8 caracteres",
                estado: false,
              });
            }
            break;
          }
          break;
        }
        case "email": {
          if (valorInput.value === "" || valorInput.value === null) {
            errors.push({
              valorInput: valorInput.nombre,
              mensaje: "Campo requerido",
              estado: true,
            });
          } else if (!isValidEmail.test(valorInput.value)) {
            errors.push({
              valorInput: valorInput.nombre,
              mensaje: "Ingresa un correo electronico valido",
              estado: true,
            });
          } else {
            errors.push({
              valorInput: valorInput.nombre,
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
  return (
    <>
      <form onSubmit={handleLoginSeccion}>
        <section class="text-gray-600 body-font">
          <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
            <div class="bg-gray-300 p-4 rounded-xl">
              <h2 class="text-gray-900 text-lg font-medium title-font mb-5">
                Registro
              </h2>
              <div class="relative mb-4">
                <label for="full-name" class="leading-7 text-sm text-gray-600">
                  Nombre
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  value={formulario.nombre}
                  onChange={ManejarEventosDeInputs}
                />
                {alerta
                  .filter(
                    (input) =>
                      input.valorInput == "nombre" && input.estado === true
                  )
                  .map((message) => (
                    <div class="py-2">
                      <span class="text-red-500 mt-2">{message.mensaje}</span>
                    </div>
                  ))}
              </div>
              <div class="relative mb-4">
                <label for="full-name" class="leading-7 text-sm text-gray-600">
                  Apellido
                </label>
                <input
                  type="text"
                  id="apellido"
                  name="apellido"
                  class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  value={formulario.apellido}
                  onChange={ManejarEventosDeInputs}
                />
                {alerta
                  .filter(
                    (input) =>
                      input.valorInput == "apellido" && input.estado === true
                  )
                  .map((message) => (
                    <div class="py-2">
                      <span class="text-red-500 mt-2">{message.mensaje}</span>
                    </div>
                  ))}
              </div>
              <div class="relative mb-4">
                <label for="email" class="leading-7 text-sm text-gray-600">
                  Correo
                </label>
                <input
                  type="text"
                  id="corre"
                  name="correo"
                  class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  value={formulario.correo}
                  onChange={ManejarEventosDeInputs}
                />
                {alerta
                  .filter(
                    (input) =>
                      input.valorInput == "email" && input.estado === true
                  )
                  .map((message) => (
                    <div class="py-2">
                      <span class="text-red-500 mt-2">{message.mensaje}</span>
                    </div>
                  ))}
              </div>
              <input
                type="submit"
                class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                value="Guardar"
              />
            </div>
          </div>
        </section>
      </form>
    </>
  );
};
export default Registros;
