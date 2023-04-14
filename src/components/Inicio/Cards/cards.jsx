import React from "react";

export const Cards = () => {
    return (
        <div class="md:h-full flex items-center text-blue-700">
          <div class="container px-5 py-2x ms-auto">
            <div class="text-center mb-12">
              <h1 class="text-4xl md:text-6xl text-gray-700 font-semibold">texto importante aqui</h1>
            </div>

            <div class="flex flex-wrap -m-4">
              <div class="p-4 sm:w-1/2 lg:w-1/3">
                <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <img src="img/beneficios-estudiantes-min.jpg" alt="image" class="lg:b-72 md:h-48 w-full object-cover object-center"/>
                  <div class="p-6 hover:bg-indigo-700 hover:text-white transition duration-300 ease-in text-center">
                    <h1 class="text-2xl font-semibold mb-3">texto impornta</h1>
                    <p class="leading-relaxed mb-3 text-aFuerte">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, libero quisquam. Aliquam consequatur itaque cupiditate explicabo sequi. Minus neque, illo commodi ipsa sit unde nulla eveniet excepturi blanditiis, officiis porro?</p>
                  </div>
                </div>
              </div>
              <div class="p-4 sm:w-1/2 lg:w-1/3">
                <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <img src="img/imagen-convalidaciones-768x512.png" alt="image" class="lg:b-72 md:h-48 w-full object-cover object-center"/>
                  <div class="p-6 hover:bg-indigo-700 hover:text-white transition duration-300 ease-in text-center">
                    <h1 class="text-2xl font-semibold mb-3">texto impornta</h1>
                    <p class="leading-relaxed mb-3  text-aFuerte">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, libero quisquam. Aliquam consequatur itaque cupiditate explicabo sequi. Minus neque, illo commodi ipsa sit unde nulla eveniet excepturi blanditiis, officiis porro?</p>
                  </div>
                </div>
              </div>
              <div class="p-4 sm:w-1/2 lg:w-1/3">
                <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden text-center">
                  <img src="img/Student-Transparent-Images (2).png" alt="image" class="lg:b-72 md:h-48 w-full object-cover object-center"/>
                  <div class="p-6 hover:bg-indigo-700 hover:text-white transition duration-300 ease-in">
                    <h1 class="text-2xl font-semibold mb-3">texto impornta</h1>
                    <p class="leading-relaxed mb-3  text-aFuerte">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, libero quisquam. Aliquam consequatur itaque cupiditate explicabo sequi. Minus neque, illo commodi ipsa sit unde nulla eveniet excepturi blanditiis, officiis porro?</p>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
    )
}
export default Cards;