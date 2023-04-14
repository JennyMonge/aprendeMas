import React from "react";
import EncabezadoTabal from "../../Filtro/Filtro";
import Navb from "../Dashboard/Nav";
import Sidbar from "../Dashboard/Aside";
import AdministrarInstitucion from "./TablaInstitucion";
import {BotonAgregar} from "../Botones/BotonAgregar"



export const Institucion = () => {
    return (
        <div class="flex">
            <Sidbar/>
            <div class="ml-16 w-full">
                <Navb/>
                <div class="container mx-auto px-4 sm:px-8">
                    <div class="py-8">
                    <div>
                        <h2 class="text-2xl font-semibold leading-tight">Administración de Institución</h2>
                    </div>
                    <BotonAgregar tipo="agregarinstitucion"/>
                    <EncabezadoTabal/>
                    <AdministrarInstitucion/>
                    </div>
                </div>
            </div>
        </div>

        
    )
}
export default Institucion;