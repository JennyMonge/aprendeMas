import React from "react";
import { Link } from 'react-router-dom';

export const Info = () => {
    return (
        <div class="bg-aFuerte text-gray-100 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h2 class="text-xs text-blue-500 tracking-widest font-medium title-font mb-1">ROOF PARTY POLAROID</h2>
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-aFuerte3">Master Cleanse Reliac Heirloom</h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
            <Link to="/registro" type="button" class=" text-center mx-auto mt-16 text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg" >Registrate</Link>
          </div>
          
          
        </div>
      </div>
    )
}
export default Info;