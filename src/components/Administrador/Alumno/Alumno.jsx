import React from "react";
import AdministrarAlumnos from "./TablaAlumnos";
import Sidbar from "../Dashboard/Aside";
import Navb from "../Dashboard/Nav";
import {BotonAgregar} from "../Botones/BotonAgregar"

export const Alumnos = () => {
    return (
        <div class="flex">
            <Sidbar/>
            <div class="ml-16 w-full">
                <Navb/>
                <div class="container mx-auto px-4 sm:px-8">
                    <div class="py-8">
                        <div>
                            <h2 class="text-2xl font-semibold leading-tight">Administración de Alumnos</h2>
                        </div>
                        <AdministrarAlumnos/>
                    </div>
                </div>
            </div>

        </div>
        
    )
}
export default Alumnos;