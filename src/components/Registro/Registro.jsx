import React from "react";
import Navbar from "../Inicio/Navbar/Navbar";
import { Link } from "react-router-dom";
export const Registro = () => {
  return (
    <div class="bg-aFuerte3 min-h-screen">
      <Navbar />
      <header class="max-w-lg mx-auto">
        <h1 class="text-white text-4xl font-bold  text-center">Sistema</h1>
        <h1 class="text-white text-center">Registro de Sección</h1>
      </header>

      <main class="bg-bCasi max-w-lg mx-auto p-8 md:p-12 my-4 rounded-lg shadow-2xl">
        <section class="">
          <form class="flex flex-col" method="" action="#">
            <div class="">
              <input
                type="text"
                placeholder="Nombres"
                class="shadow appearance-none border rounded w-full py-3 px-3 my-3 text-gray-700 leading-tight focus:outline-none focus:ring"
              />
            </div>

            <div class="">
              <input
                type="text"
                placeholder="Apellidos"
                class="shadow appearance-none border rounded w-full py-3 px-3 my-3 text-gray-700 leading-tight focus:outline-none focus:ring"
              />
            </div>

            <div class="">
              <input
                type="tel"
                placeholder="NIE (Solo número)"
                class="shadow appearance-none border rounded w-full py-3 px-3 my-3 text-gray-700 leading-tight focus:outline-none focus:ring"
              />
            </div>

            <div class="">
              <input
                type="email"
                placeholder="ejemplo@correo.com"
                class="shadow appearance-none border rounded w-full py-3 px-3 my-3 text-gray-700 leading-tight focus:outline-none focus:ring"
              />
            </div>

            <div class="flex flex-wrap -mx-3 mb-6 my-3">
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <input
                  type="password"
                  class="shadow appearance-none block border rounded w-full py-3 px-4  text-gray-700 leading-tight focus:outline-none focus:ring"
                  placeholder="Contraseña"
                />
              </div>
              <div class="w-full md:w-1/2 px-3 md:mb-0">
                <input
                  type="password"
                  class="shadow appearance-none block border rounded w-full py-3 px-4  text-gray-700 leading-tight focus:outline-none focus:ring"
                  placeholder="Repetir Contraseña"
                />
              </div>
            </div>

            <input
              class="bg-aFuerte2 hover:bg-aFuerte3 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200"
              type="submit"
              value="Ingresar"
            />
          </form>
        </section>
      </main>

      <div class="max-w-lg mx-auto text-center mt-8 mb-3">
        <p class="text-white">
          ¿Ya tienes una cuenta?
          <Link to="/login" class="font-bold hover:underline">
            Ingresa.
          </Link>
        </p>
      </div>
    </div>
  );
};
export default Registro;
