
import OpcionesEnt from "./OpcionesEnt";
import { useState } from "react";
import { HiOutlinePlusCircle, HiOutlineXCircle } from "react-icons/hi";
const PreguntaEnt = () => {
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
    setPreguntaList([...preguntaList, { pre1: "", pre3: [] }]);
  };
  return (
    <>
      {/** */}
      <div>
        <select
          id=""
          class="shadow appearance-none w-full sm:w-1/2 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none py-3 px-3 my-2"
        >
          <option selected>Elegir encuesta</option>
          <option value="#">Encuesta 1</option>
          <option value="#">Encuesta 2</option>
        </select>
        {/** */}
      </div>
      {/** */}
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
              </div>
              <OpcionesEnt
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
    </>
  );
};
export default PreguntaEnt;
