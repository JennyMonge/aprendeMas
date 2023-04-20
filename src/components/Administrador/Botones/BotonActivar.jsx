import { HiOutlineCheckCircle } from "react-icons/hi";
import {ImSpinner11} from "react-icons/im"
export function BotonActivar({ tipo }) {
  return (
    <>
      <button data-te-toggle="modal" data-te-target={"#" + tipo}>
        <span>
          <ImSpinner11 class="icon icon-tabler w-6 h-7 text-green-500" />{" "}
        </span>
      </button>
      {/*aactivar alumno*/}
      <div
        data-te-modal-init
        class="fixed top-0 left-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
        id="activar"
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
                Activar
              </h5>
            </div>
            <form action="">
              <div class="relative p-4 text-center">
                <h2 class="text-lg">¿Desea activar de nuevo este registro?</h2>
              </div>
              {/*Botones */}
              <div class="flex flex-shrink-0 flex-wrap items-center justify-center rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4">
                <button
                  type="button"
                  class="inline-block rounded bg-aFuerte4 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-aFuerte2 transition duration-150 ease-in-out hover:bg-aFuerte4 bg-opacity-75"
                  data-te-modal-dismiss
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  Cancelar
                </button>
                <input
                  type="submit"
                  class="ml-1 inline-block rounded bg-aFuerte2 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out
                            hover:bg-aFuerte3"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  value="Aceptar"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
