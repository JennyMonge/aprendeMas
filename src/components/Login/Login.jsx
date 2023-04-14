import React from "react";
import Navbar from "../Inicio/Navbar/Navbar";
import { Link } from "react-router-dom";
export const Login = () => {
  return (
    <div class="bg-aFuerte3 min-h-screen">
      <Navbar />
      <header class="max-w-lg mx-auto">
        <h1 class="text-white text-4xl font-bold  text-center">Sistema</h1>
        <h1 class="text-white  text-center">Ingreso</h1>
      </header>

      <main class="bg-bCasi max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
        <section class="">
          <form class="flex flex-col" method="POST" action="#">
            <div class="">
              <input
                type="tel"
                placeholder="NIE (Solo número)"
                class="shadow appearance-none border rounded w-full py-3 px-3 my-3 text-gray-700 leading-tight focus:outline-none focus:ring"
              />
            </div>

            <div class="">
              <input
                type="password"
                placeholder="Contraseña"
                class="shadow appearance-none border rounded w-full py-3 px-3 my-3 text-gray-700 leading-tight focus:outline-none focus:ring"
              />
            </div>

            <input
              class="bg-aFuerte2 hover:bg-aFuerte3 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200"
              type="submit"
              value="Ingresar"
            />

            <div class="flex justify-end">
              <a
                href="#"
                class="text-sm text-aFuerte2 hover:text-aFuerte3 hover:underline mt-3"
              >
                ¿Olvido su contraseña?
              </a>
            </div>
          </form>
        </section>
      </main>

      <div class="max-w-lg mx-auto text-center mt-12 mb-6">
        <p class="text-white">
          ¿No tienes cuenta?
          <Link to="/registro" class="font-bold hover:underline">
            Crea una.
          </Link>
        </p>
      </div>
    </div>
  );
};
export default Login;
