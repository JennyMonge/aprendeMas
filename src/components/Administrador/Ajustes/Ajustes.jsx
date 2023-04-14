import { useState } from "react";
import {
  HiOutlineBadgeCheck,
  HiOutlineCamera,
  HiOutlineXCircle,HiOutlineUser
} from "react-icons/hi";
function Campos() {
  return (
    <>
      <div class="w-full">
        <label>Nueva contraseña</label>
        <input
          class="shadow appearance-none w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none p-3"
          type="password"
        />
      </div>
      <div class="w-full">
        <label>Repetir contraseña</label>
        <input
          class="shadow appearance-none w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none p-3"
          type="password"
        />
      </div>
      <div></div>
    </>
  );
}

const Ajustes = () => {
  const [contra, setContra] = useState("");
  const [showContent, setShowContent] = useState(false);
  const [imageURL, setImageURL] = useState(<HiOutlineUser/>);
  function handleChange(e) {
    setContra(e.target.value);
  }
  function handleClick(e) {
    e.preventDefault()
    if (contra === "si") {
      setShowContent(true);
    } else {
      setShowContent(false);
    }
  }
  function handleImageUpload(e) {
    const file = e.target.files[0];
    const reader = new FileReader();
  
    reader.onload = () => {
      setImageURL(reader.result);
    }
  
    reader.readAsDataURL(file);
  }
  
  
  

  return (
    <>
      <form action="">
        <div class="flex mt-4 md:flex-row flex-wrap gap-2">
          {/*IMG */}
          <div class="w-full flex justify-center items-center rounded-xl md:w-1/4 p-4 text-center text-black bg-slate-400">
            <div class="mb-5 text-center">
              <div class="mx-auto w-32 h-32 mb-2 border rounded-full relative bg-gray-100 shadow-inset">
                <img id="image" src={imageURL} class="object-cover w-full h-32 rounded-full"  />
              </div>
              <label
                for="fileInput"
                type="button"
                class="cursor-pointer inine-flex justify-between items-center focus:outline-none border py-2 px-4 rounded-lg shadow-sm text-left text-gray-600 bg-white hover:bg-gray-100 font-medium"
              >
                <span>
                  <HiOutlineCamera class="inline-flex flex-shrink-0 w-6 h-6 -mt-1 mr-1" />
                </span>
                Buscar foto
              </label>
              <input
                name="photo"
                id="fileInput"
                accept="image/*"
                class="hidden"
                type="file"
                onChange={handleImageUpload}
              />
            </div>
          </div>
          {/*IMG end */}
          <div class="w-full rounded-xl md:w-3/5 bg-gray-500 p-4 text-black">
            <div class="grid md:grid-cols-2 gap-3">
              <div class="w-full">
                <label>Nombre</label>
                <input
                  class="shadow appearance-none w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none p-3"
                  type="text"
                  placeholder="Jenny"
                />
              </div>
              <div class="w-full">
                <label>Apellido</label>
                <input
                  class="shadow appearance-none w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none p-3"
                  type="text"
                  placeholder="Monge"
                />
              </div>
              <div class="w-full">
                <label>Correo</label>
                <input
                  class="shadow appearance-none w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none p-3"
                  type="email"
                  placeholder="jennyMonge@gmail.com"
                />
              </div>
              <div class="w-full">
                <label>Cambiar contraseña</label>
                <div class="flex">
                  <div>
                    <input
                      type="password"
                      class="shadow appearance-none w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none p-3"
                      placeholder="Contraseña actual"
                      value={contra} onChange={handleChange}
                    />
                    {/*onChange={(e) => {
                        setContra(e.target.value);
                      }}*/}
                  </div>
                  <div class="p-1 mr-0">
                    <button
                      onClick={handleClick}
                    >
                      <HiOutlineBadgeCheck class="text-white w-10 h-10 icon icon-tabler icon-tabler-circle-plus bg-gray-800 object-cover object-center flex-shrink-0 rounded-full mr-4" />
                    </button>
                  </div>
                </div>
              </div>
              {/*campos */}
              {showContent && <Campos></Campos>}
            </div>
            <hr class="my-2" />
            <div class="flex justify-end mb-0">
              <input
                    type="submit"
                    value="Guardar"
                    class="text-white bg-aFuerte2 border-0 py-2 px-8 focus:outline-none hover:bg-aFuerte3 rounded text-lg"
                  />
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
export default Ajustes;
