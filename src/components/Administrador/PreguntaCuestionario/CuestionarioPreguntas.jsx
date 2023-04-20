import Sidbar from "../Dashboard/Aside";
import Navb from "../Dashboard/Nav";
import PreguntasCto from "./PreguntasCto";
const CuestionarioPreguntas = () => {
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
                  Administración de Preguntas Cuestionario
                </h2>
              </div>
              
              
                <div class="relative p-4">
                <PreguntasCto/>
                </div>
                
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CuestionarioPreguntas;
