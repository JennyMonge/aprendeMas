import React from "react";
import * as te from "tw-elements";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./components/Inicio/Inicio";
import Login from "./components/Login/Login";
import Registro from "./components/Registro/Registro";

//administrador

import LoginA from "./components/Administrador/LoginRegistro/LoginA";
import RegistroA from "./components/Administrador/LoginRegistro/RegistroA";
import Alumno from "./components/Administrador/Alumno/Alumno";
import Materia from "./components/Administrador/Materia/Materia";
import Unidad from "./components/Administrador/Unidad/unidad"
import Institucion from "./components/Administrador/Institucion/Institucion";
import Encuesta from "./components/Administrador/Encuesta/Encuesta";
import Grado from "./components/Administrador/Grado/Grado";
import Dashboard from "./components/Administrador/Dashboard/Dashboard";
import Usuarios from "./components/Administrador/Usuario/Usuario";
import Reporte from "./components/Administrador/Reportes/Reporte";
import Cuestionario from "./components/Administrador/Cuestionario/cuestionario";
import CuestionarioPreguntas from "./components/Administrador/PreguntaCuestionario/CuestionarioPreguntas"
import EncuestaPreguntas from "./components/Administrador/PreguntasEncuesta/EncuestaPreguntas";

import Ajustesi from "./components/Administrador/Ajustes/Ajustesi";
import Registros from "./components/Administrador/Pruebas/registros"
import EjemplosPractica from "./components/Administrador/Pruebas/EjemplosPractica";
import OtraPrueba from "./components/Administrador/Pruebas/OtraPrueba";
import PruebaFiltro from "./components/Administrador/Pruebas/Pruebafiltro";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/registro" element={<Registro />}></Route>
        {/*administrador*/}
        <Route path="/loginA" element={<LoginA/>}></Route>
        <Route path="/registroA" element={<RegistroA/>}></Route>
        <Route path="/ajustesi" element={<Ajustesi/>}></Route>
        <Route path="/alumno" element={<Alumno />}></Route>
        <Route path="/materia" element={<Materia />}></Route>
        <Route path="/unidad" element={<Unidad/>}></Route>
        <Route path="/institucion" element={<Institucion />}></Route>
        <Route path="/encuesta" element={<Encuesta />}></Route>
        <Route path="/grado" element={<Grado />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/usuarios" element={<Usuarios />}></Route>
        <Route path="/reporte" element={<Reporte />}></Route>
        <Route path="/cuestionario" element={<Cuestionario/>}></Route>
        <Route path="/preguntascto" element={<CuestionarioPreguntas/>}></Route>
        <Route path="/preguntasent" element={<EncuestaPreguntas/>}></Route>
        {/*pruebas*/}
        {/*<Route path="/pruebas" element={<Registros/>}></Route>*/}
        {/*<Route path="/ejemploo" element={<EjemplosPractica/>}></Route>*/}
        {/*<Route path="/pruebaAxios" element={<OtraPrueba/>}></Route>*/}
        {/*<Route path="/pruebaFiltro" element={<PruebaFiltro/>}></Route>*/}
        
        <Route path="*" element={<h2>Ingrese a una Ruta correcta</h2>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
