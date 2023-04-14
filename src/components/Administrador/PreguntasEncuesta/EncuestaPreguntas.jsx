import Sidbar from "../Dashboard/Aside";
import Navb from "../Dashboard/Nav";
import PreguntaEnt from "./PreguntaEnt";
const EncuestaPreguntas = () => {
  return (
    <>
      <div class="flex">
        <Sidbar />
        <div class="ml-16 w-full">
          <Navb />
          <div class="container mx-auto px-4 sm:px-8">
            <div class="py-8">
              <div>
                <h2 class="text-2xl font-semibold leading-tight">
                  Administración de Preguntas Encuesta
                </h2>
              </div>

              <form action="">
                <div class="relative p-4">
                  {/*hola aqui va*/}
                  <PreguntaEnt/>
                </div>
                {/*Boton */}
                <div class="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4">
                  <input
                    type="submit"
                    value="Guardar"
                    class="flex mx-auto mt-4 text-white bg-aFuerte2 border-0 py-2 px-8 focus:outline-none hover:bg-aFuerte3 rounded text-lg"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default EncuestaPreguntas;
