import { useState } from "react";
import { HiOutlinePlusCircle, HiOutlineXCircle } from "react-icons/hi";
import OpcionesPrt from "./OpcionesPrt";
const PreguntasCto = () => {
  const [preguntaList, setPreguntaList] = useState([
    { pre1: "", pre2: "", pre3: [] },
  ]);
  const handleServiceChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...preguntaList];
    list[index][name] = value;
    setPreguntaList(list);
  };

  const handleServiceRemove = (index) => {
    const list = [...preguntaList];
    list.splice(index, 1);
    setPreguntaList(list);
  };

  const handleServiceAdd = () => {
    setPreguntaList([...preguntaList, { pre1: "", pre2: "", pre3: [] }]);
  };
  //INICIO VALIDAR CONTENIDO
  //estado inicial para alerta
  const initialStateInput = {
    input: "",
    message: "",
    state: false,
  };
  //const [formularioPr, setFormularioPr] = useState(datosPreguntas);
  const [alerta, setAlerta] = useState([initialStateInput]);
  const ManejarEventosDeInputsPr = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    //actualizamos los valores capturados anuestro estado de formularo
    //setFormularioPr({ ...formularioPr, [name]: value });
  };
  //funcion que se va a encargar de validar los campos
  const handleLoginSeccionPr = (e) => {
    e.preventDefault();
    //ordenamos los datos para enviarloa a la validacion
    let verificarInputs = [
      //{ campo: "preg1", value: pre1 },
      //{ campo: "preg2", value: pre2 },
      //{ campo: "preg3", value: pre3 },
    ];
    //enviamos los datos a la funcion de validacion y recibimos las validaciones
    const datosValidados = ValidarInputsPr(verificarInputs);
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
  const ValidarInputsPr = (data) => {
    console.log(data);
    //declaramos un arreglo el cual se va a encargar de guardar las validaciones
    let errors = [];
    //recibimos los datos a validar
    const datosDelFormulario = data;
    //proceso devalidacion
    datosDelFormulario.map((valorInput) => {
      switch (valorInput.nombre) {
        case "preg1": {
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
        case "preg2": {
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
        case "preg3": {
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
        default: {
          break;
        }
      }
    });
    //retornamos al total de validaciones
    return errors;
  };
  //fin validar
  return (
    <>
      <form onSubmit={handleLoginSeccionPr}>
        {/*SELECTS*/}
        <div class="flex gap-2">
          <select
            id=""
            class="shadow appearance-none w-full sm:w-1/2 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none py-3 px-3 my-2"
          >
            <option selected>Materia</option>
            <option value="#">Materia 1</option>
            <option value="#">Materia 2</option>
          </select>
          <select
            id=""
            class="shadow appearance-none w-full sm:w-1/2 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none py-3 px-3 my-2"
          >
            <option selected>Cuestionario</option>
            <option value="#">Cuestionario 1</option>
            <option value="#">Cuestionario 2</option>
          </select>
        </div>
        {/*SELECTS end*/}
        {preguntaList.map((singlePregunta, index) => (
          <div key={index} class="flex md:flex-row flex-wrap m-1">
            <div class="w-full rounded-xl  md:w-11/12 bg-gray-500 p-4">
              {/*Preguntas */}
              <div class="py-2 px-5 w-full">
                <div class="relative py-2">
                  <label>Descripción</label>
                  <input
                    type="text"
                    name="pre1"
                    class="text-black shadow appearance-none w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none py-3 px-3"
                    value={singlePregunta.pre1}
                    onChange={(e) => handleServiceChange(e, index)}
                  />
                  {alerta
                    .filter(
                      (input) =>
                        input.valorInput == "preg1" && input.estado === true
                    )
                    .map((message) => (
                      <div class="py-2">
                        <span class="text-red-500 mt-2">{message.mensaje}</span>
                      </div>
                    ))}
                </div>
                <div class="relative py-2">
                  <label>Puntuación</label>
                  <input
                    name="pre2"
                    type="text"
                    class="text-black w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none py-3 px-3"
                    value={singlePregunta.pre2}
                    onChange={(e) => handleServiceChange(e, index)}
                  />
                </div>
                <OpcionesPrt
                  value={singlePregunta.pre3}
                  onChange={(e) => handleServiceChange(e, index)}
                />
              </div>
            </div>
            {preguntaList.length - 1 === index && (
              <div class="w-full flex justify-center items-center md:w-1/12">
                {/*1*/}
                {/*icono */}
                <button onClick={handleServiceAdd}>
                  <HiOutlinePlusCircle class="w-10 h-10 text-white icon icon-tabler icon-tabler-circle-plus bg-gray-800 object-cover object-center flex-shrink-0 rounded-full my-1 mr-4" />
                </button>
              </div>
            )}
            {preguntaList.length !== 1 && (
              <div class="w-full flex justify-center items-center md:w-1/12">
                {/*1*/}
                {/*icono */}
                <button onClick={() => handleServiceRemove(index)}>
                  <HiOutlineXCircle class="w-10 h-10 text-white icon icon-tabler icon-tabler-circle-plus bg-gray-800 object-cover object-center flex-shrink-0 rounded-full my-1 mr-4" />
                </button>
              </div>
            )}
          </div>
        ))}
        {/*Boton */}
        <div class="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4">
          <input
            type="submit"
            value="Guardar"
            class="flex mx-auto mt-16 text-white bg-aFuerte2 border-0 py-2 px-8 focus:outline-none hover:bg-aFuerte3 rounded text-lg"
          />
        </div>
      </form>
    </>
  );
};
export default PreguntasCto;
