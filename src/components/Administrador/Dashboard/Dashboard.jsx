import React from "react";
import Contenido from "./Contenido";
import Navb from "./Nav";
import Aside from "./Aside";
import Graficas from "./Graficas";

export const Dashboard = () => {
  return (
    <div className="flex">
        <Aside/>
      <div className="w-full ml-16 sm:h-full ">
        {/*navbar */}
        <Navb />
        <div>
          {/*Contenido Demas contenido*/}
          <Contenido />
          <Graficas/>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
