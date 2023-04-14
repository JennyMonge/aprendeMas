import React from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import Carrousel from "./Carrousel/Carrousel";
import Cards from "./Cards/cards";
import Content from "./contenedores/Content";
import Info from "./contenedores/Info";
import Testimonios from "./Testimonio/Testimonios";

function Inicio() {
  return (
   <div>
      <Navbar/>
      <Carrousel/>
      <Cards/>
      <Content/>
      <Info/>
      <Testimonios/>
      <Footer/>
   </div>
  );
}

export default Inicio;