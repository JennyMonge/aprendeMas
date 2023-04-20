const Graficas = () => {
  return (
    <>
      <div class="bg-blue-200 p-4">
      <div className="mt-4  grid grid-cols-1 gap-8  sm:grid-cols-2  lg:grid-cols-2">
              <div className="md:col-span-2 lg:col-span-1">
              <div class="mt-6 mx-4 text-left ">
              <h2 class="text-3xl font-bold sm:text-4xl">Mis Insignias</h2>
            </div>
                <div className="flex justify-start">
                  <div class="flex-shrink-0 w-20 h-20 bg-blue-600 text-blue-500 rounded-full inline-flex items-center justify-center">
                  
                  </div>
                  <div class="h-5 mt-8 w-full bg-gray-200 rounded-full">
                    <div
                      class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 rounded-full"
                      style={{ width: "45%" }}
                    >
                      {" "}
                      45%
                    </div>
                  </div>
                </div>
                <div className="flex justify-start">
                  <div class="flex-shrink-0 w-20 h-20 bg-blue-600 text-blue-500 rounded-full inline-flex items-center justify-center">
                    
                  </div>
                  <div class="h-5 mt-8 w-full bg-gray-200 rounded-full">
                    <div
                      class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 rounded-full"
                      style={{ width: "20%" }}
                    >
                      {" "}
                      20%
                    </div>
                  </div>
                </div>
                <div className="flex justify-start">
                  <div class="flex-shrink-0 w-20 h-20 bg-blue-600 text-blue-500 rounded-full inline-flex items-center justify-center">
                 
                  </div>
                  <div class="h-5 mt-8 w-full bg-gray-200 rounded-full">
                    <div
                      class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 rounded-full"
                      style={{ width: "10%" }}
                    >
                      {" "}
                      10%
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="md:col-span-2 lg:col-span-1 w-full ">
              <div class="mt-6 mx-4 text-left ">
              <h2 class="text-3xl font-bold sm:text-4xl">% de Avance</h2>
            </div>
                <section
                  x-data="skillDisplay"
                  class="p-0  justify-center space-y-6 bg-gray-300 rounded-xl md:grid md:grid-cols-1 md:gap-4 sm:space-y-0"
                >
                  <div
                    class="mt-4  flex items-center justify-center"
                    x-data="{ circumference: 2 * 22 / 7 * 120 }"
                  >
                    <svg class="transform -rotate-90 w-72 h-72">
                      <circle
                        cx="145"
                        cy="145"
                        r="120"
                        stroke="currentColor"
                        stroke-width="30"
                        fill="transparent"
                        class="text-gray-700 "
                        
                      />

                      <circle
                        cx="145"
                        cy="145"
                        r="120"
                        stroke="currentColor"
                        stroke-width="30"
                        fill="transparent"
                        class="text-blue-500 "
                        style={{ width: `10%` }}
                      />
                    </svg>
                    <span
                      class="absolute text-5xl text-aFuerte"
                      x-text="`${currentSkill.percent}%`"
                    >
                      {" "}
                      10%
                    </span>
                  </div>
                </section>
              </div>
            </div>
      </div>
    </>
  );
};
export default Graficas;
