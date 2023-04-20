import React from "react";
import Navb from "../Dashboard/Nav";
import Sidbar from "../Dashboard/Aside";
import AdministrarUsuario from "./TablaUsuario";
import {BotonAgregar} from "../Botones/BotonAgregar"


export const Usuarios = () => {
    return (
        <div class="flex">
            <Sidbar/>
            <div class="ml-16 w-full">
                <Navb/>
                <div class="container mx-auto px-4 sm:px-8">
                    <div class="py-8">
                        <div>
                            <h2 class="text-2xl font-semibold leading-tight">Administración de Usuarios</h2>
                        </div>
                        <BotonAgregar tipo="agregarUsuario"/>
                        <AdministrarUsuario/>

                    </div>
                </div>
            </div>
        </div>

        
    )
}
export default Usuarios;