import React from "react";
import AdministrarMateria from "./TablaMateria";
import Sidbar from "../Dashboard/Aside";
import Navb from "../Dashboard/Nav";
import {BotonAgregar} from "../Botones/BotonAgregar"


export const Materia = () => {
    return (
        <div class="flex">
            <Sidbar/>
            <div class="ml-16 w-full">
                <Navb/>
                <div class="container mx-auto px-4 sm:px-8">
                    <div class="py-8">
                        <div>
                            <h2 class="text-2xl font-semibold leading-tight">Administración de Materias</h2>
                        </div>
                        <BotonAgregar tipo="agregarMateria"/>
                        <AdministrarMateria/>
                    </div>
                </div>
            </div>
        </div>

        
    )
}
export default Materia;