import React from "react";

import Navb from "../Dashboard/Nav";
import Sidbar from "../Dashboard/Aside";
import TablaGrado from "../Grado/TablaGrado";
import {BotonAgregar} from "../Botones/BotonAgregar"

export const Grado = () => {
  return (
    <div class="flex">
      <Sidbar />
      <div class="ml-16 w-full">
        <Navb />
        <div class="container mx-auto px-4 sm:px-8">
          <div class="py-8">
            <div>
              <h2 class="text-2xl font-semibold leading-tight">
                Administrar Grados
              </h2>
            </div>
            <BotonAgregar tipo="agregarGrado"/>
            <TablaGrado />
          </div>
          
        </div>
      </div>
    </div>
  );
};
export default Grado;
