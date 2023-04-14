import Sidbar from "../Dashboard/Aside";
import Navb from "../Dashboard/Nav";
import Ajustes from "./Ajustes";

const Ajustesi = () => {
  return (
    <>
      <div class="flex">
        <Sidbar />
        <div class="w-full">
          <Navb />
          <div class="container mx-auto px-4 sm:px-8">
            <div class="py-8">
              <div>
                <h2 class="text-2xl font-semibold leading-tight">
                  Perfil
                </h2>
              </div>
              <Ajustes />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Ajustesi;
