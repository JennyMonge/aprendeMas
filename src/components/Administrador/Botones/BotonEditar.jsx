import {HiPencilAlt} from "react-icons/hi";
export function BotonEditar({ tipo }) {
  return (
    <>
      <button data-te-toggle="modal" data-te-target={"#" + tipo}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-edit"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#ffec00"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M9 7h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
          <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
          <line x1="16" y1="5" x2="19" y2="8" />
        </svg>
      </button>
      {/*editar alumno*/}
      <div
        data-te-modal-init
        class="fixed top-0 left-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
        id="editarAlumno"
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
                Editar Alumno
              </h5>
            </div>
            <form action="">
              <div class="relative p-4">
                <div class="flex-auto my-2">
                  {/*Nombre */}
                  <input
                    type="text"
                    placeholder="Nombres"
                    class="shadow appearance-none w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none p-3"
                  />
                </div>
                <div class="flex-auto my-2">
                  {/*apellido */}
                  <input
                    type="text"
                    placeholder="Apellidos"
                    class="shadow appearance-none w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none p-3"
                  />
                </div>
                <div class="flex-auto my-2">
                  {/*Nombre */}
                  <input
                    type="tel"
                    placeholder="NIE(solo numeros)"
                    class="shadow appearance-none w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none p-3"
                  />
                </div>
                {/*Select */}
                <div class="flex-auto my-2">
                  <select
                    id=""
                    class="shadow appearance-none w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none p-3"
                  >
                    <option selected>Grado</option>
                    <option value="#">Tercer ciclo</option>
                    <option value="#">Bachillerato</option>
                  </select>
                </div>
                <div class="flex-auto my-2">
                  <select
                    id=""
                    class="shadow appearance-none w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none p-3"
                  >
                    <option selected>Institucion</option>
                    <option value="#">Institucion 1</option>
                    <option value="#">Institucion 2</option>
                  </select>
                </div>
                <div class="grid md:grid-cols-2 gap-1">
                  <div class="w-full">
                    <input
                      class="shadow appearance-none w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none p-3"
                      type="date"
                      id="start"
                      name="trip-start"
                      value="2018-07-22"
                      min="2018-01-01"
                      max="2018-12-31"
                    />
                  </div>
                  <div class="w-full">
                    <select
                      id=""
                      class="shadow appearance-none w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none p-3"
                    >
                      <option selected>Genero</option>
                      <option value="#">Femenino</option>
                      <option value="#">Masculino</option>
                    </select>
                  </div>
                </div>
              </div>
              {/*Botones */}
              <div class="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4">
                <button
                  type="button"
                  class="inline-block rounded bg-aFuerte4 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-aFuerte2 transition duration-150 ease-in-out hover:bg-aFuerte4 bg-opacity-75"
                  data-te-modal-dismiss
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  Cerrar
                </button>
                <input
                  type="submit"
                  class="ml-1 inline-block rounded bg-aFuerte2 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out
                            hover:bg-aFuerte3"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  value="Enviar"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      {/*editar institucion*/}
      <div
        data-te-modal-init
        class="fixed top-0 left-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
        id="editarInstitucion"
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
                Editar Institucion
              </h5>
            </div>
            <form action="">
              <div class="relative p-4">
                <div class="flex-auto my-2">
                  {/*Nombre */}
                  <input
                    type="text"
                    placeholder="Nombre"
                    class="shadow appearance-none w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none p-3"
                  />
                </div>
              </div>
              <div class="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4">
                <button
                  type="button"
                  class="inline-block rounded bg-aFuerte4 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-aFuerte2 transition duration-150 ease-in-out hover:bg-aFuerte4 bg-opacity-75"
                  data-te-modal-dismiss
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  Cerrar
                </button>
                <input
                  type="submit"
                  class="ml-1 inline-block rounded bg-aFuerte2 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out
                        hover:bg-aFuerte3"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  value="Enviar"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      {/** editar grado*/}
      <div
        data-te-modal-init
        class="fixed top-0 left-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
        id="editarGrado"
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
                Editar Grado
              </h5>
            </div>
            <form action="">
              <div class="relative p-4">
                <div class="flex-auto my-2">
                  {/*nivel */}
                  <input
                    type="text"
                    placeholder="Nivel"
                    class="shadow appearance-none w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none p-3"
                  />
                </div>
              </div>
              <div class="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4">
                <button
                  type="button"
                  class="inline-block rounded bg-aFuerte4 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-aFuerte2 transition duration-150 ease-in-out hover:bg-aFuerte4 bg-opacity-75"
                  data-te-modal-dismiss
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  Cerrar
                </button>
                <input
                  type="submit"
                  class="ml-1 inline-block rounded bg-aFuerte2 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out
                        hover:bg-aFuerte3"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  value="Enviar"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      {/*editar materia */}
      <div
        data-te-modal-init
        class="fixed top-0 left-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
        id="editarMateria"
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
                Editar Materia
              </h5>
            </div>
            <form action="">
              <div class="relative p-4">
                <div class="flex-auto my-2">
                  {/*nombre */}
                  <input
                    type="text"
                    placeholder="Nombre"
                    class="shadow appearance-none w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none p-3"
                  />
                </div>
              </div>
              <div class="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4">
                <button
                  type="button"
                  class="inline-block rounded bg-aFuerte4 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-aFuerte2 transition duration-150 ease-in-out hover:bg-aFuerte4 bg-opacity-75"
                  data-te-modal-dismiss
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  Cerrar
                </button>
                <input
                  type="submit"
                  class="ml-1 inline-block rounded bg-aFuerte2 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out
                        hover:bg-aFuerte3"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  value="Enviar"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      {/*editar unidad */}
      <div
        data-te-modal-init
        class="fixed top-0 left-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
        id="editarUnidad"
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
                Editar Unidad
              </h5>
            </div>
            <form action="">
              <div class="relative p-4">
                <div class="flex-auto my-2">
                  {/*nombre */}
                  <input
                    type="text"
                    placeholder="Nombre"
                    class="shadow appearance-none w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none p-3"
                  />
                </div>
              </div>
              <div class="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4">
                <button
                  type="button"
                  class="inline-block rounded bg-aFuerte4 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-aFuerte2 transition duration-150 ease-in-out hover:bg-aFuerte4 bg-opacity-75"
                  data-te-modal-dismiss
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  Cerrar
                </button>
                <input
                  type="submit"
                  class="ml-1 inline-block rounded bg-aFuerte2 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out
                        hover:bg-aFuerte3"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  value="Enviar"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      {/*editar cuestionario */}
      <div
        data-te-modal-init
        class="fixed top-0 left-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
        id="editarCuestionario"
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
                Editar Cuestionario
              </h5>
            </div>
            <form action="">
              <div class="relative p-4">
                <div class="flex-auto my-2">
                  {/*Nombre */}
                  <label class="pl-1">Nombre</label>
                  <input
                    type="text"
                    class="shadow appearance-none w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none p-3"
                  />
                </div>
              </div>

              <div class="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4">
                <button
                  type="button"
                  class="inline-block rounded bg-aFuerte4 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-aFuerte2 transition duration-150 ease-in-out hover:bg-aFuerte4 bg-opacity-75"
                  data-te-modal-dismiss
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  Cerrar
                </button>
                <input
                  type="submit"
                  class="ml-1 inline-block rounded bg-aFuerte2 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out
                            hover:bg-aFuerte3"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  value="Enviar"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      {/*editar encuesta*/}
      <div
        data-te-modal-init
        class="fixed top-0 left-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
        id="editarEncuesta"
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
                Editar Encuesta
              </h5>
            </div>
            <form action="">
              <div class="relative p-4">
                <div class="flex-auto my-2">
                  <label class="pl-1">Comentario</label>
                  <textarea class="w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none py-1 px-3"></textarea>
                </div>
                {/*fin datos */}
              </div>
              <div class="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4">
                <button
                  type="button"
                  class="inline-block rounded bg-aFuerte4 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-aFuerte2 transition duration-150 ease-in-out hover:bg-aFuerte4 bg-opacity-75"
                  data-te-modal-dismiss
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  Cerrar
                </button>
                <input
                  type="submit"
                  class="ml-1 inline-block rounded bg-aFuerte2 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out
                              hover:bg-aFuerte3"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  value="Enviar"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      {/*editar usuario*/}
      <div
        data-te-modal-init
        class="fixed top-0 left-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
        id="editarUsuario"
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
                Editar Usuario
              </h5>
            </div>
            <form action="">
              <div class="relative p-4">
                <div class="flex-auto my-2">
                  {/*Nombre */}
                  <input
                    type="text"
                    placeholder="Nombres"
                    class="shadow appearance-none w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none p-3"
                  />
                </div>
                <div class="flex-auto my-2">
                  {/*apellido */}
                  <input
                    type="text"
                    placeholder="Apellidos"
                    class="shadow appearance-none w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none p-3"
                  />
                </div>
                <div class="flex-auto my-2">
                  {/*correo */}
                  <input
                    type="email"
                    placeholder="ejemplo@email.com"
                    class="shadow appearance-none w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none p-3"
                  />
                </div>
              </div>
              <div class="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4">
                <button
                  type="button"
                  class="inline-block rounded bg-aFuerte4 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-aFuerte2 transition duration-150 ease-in-out hover:bg-aFuerte4 bg-opacity-75"
                  data-te-modal-dismiss
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  Cerrar
                </button>
                <input
                  type="submit"
                  class="ml-1 inline-block rounded bg-aFuerte2 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out
                        hover:bg-aFuerte3"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  value="Enviar"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
