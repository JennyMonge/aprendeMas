import { HiOutlinePlusCircle, HiOutlineMinusCircle } from "react-icons/hi";
import { useState } from "react";
const OpcionesEnt = () => {
  const [opcionesList, setOpcionesList] = useState([{ opcion: "" }]);
  const handleServiceChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...opcionesList];
    list[index][name]=value;
    setOpcionesList(list);
  };
  const handleServiceRemove = (index) => {
    const list = [...opcionesList];
    list.splice(index, 1);
    setOpcionesList(list);
  };
  const handleServiceAdd = () => {
    setOpcionesList([...opcionesList, { opcion: "" }]);
  };
  
  return (
    <>
      <div class="relative mt-3 p-4 bg-slate-100 rounded-xl">
        <p>Opciones</p>
        
        {opcionesList.map((singleOpcion, index) => (
          <div key={index} class="inline-flex flex-wrap  gap-2">
            <div>
              <input
                class="rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none py-3 px-3"
                type="text"
                name="opcion"
                value={singleOpcion.opcion}
                onChange={(e) => handleServiceChange(e, index)}
              />
            </div>
            {opcionesList.length - 1 === index && opcionesList.length < 5 && (
              <div class="p-1">
                {/*ICON OPCION agregar*/}
                <button onClick={handleServiceAdd}>
                  <HiOutlinePlusCircle class="w-10 h-10 text-white icon icon-tabler icon-tabler-circle-plus bg-gray-800 object-cover object-center flex-shrink-0 rounded-full mr-4" />
                </button>
              </div>
            )}
            {opcionesList.length !== 1 && (
              <div class="p-1">
                {/*ICON OPCION eliminar*/}
                <button onClick={() => handleServiceRemove(index)}>
                  <HiOutlineMinusCircle class="w-10 h-10 text-white icon icon-tabler icon-tabler-circle-plus bg-gray-800 object-cover object-center flex-shrink-0 rounded-full mr-4" />
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};
export default OpcionesEnt;