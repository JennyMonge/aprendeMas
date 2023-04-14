import Navb from "../Dashboard/Nav";
import Sidbar from "../Dashboard/Aside";
import Reportesi from "./Reportesi";
const Reporte = () =>{
    return( 
        <div class="flex">
        <Sidbar/>
        <div class="ml-16 w-full">
            <Navb/>
            <div class="container mx-auto px-4 sm:px-8">
                <div class="py-8">
                    <div>
                        <h2 class="text-2xl font-semibold leading-tight">Reportes</h2>
                    </div>
                    <Reportesi/>
                </div>
            </div>
        </div>

    </div>);
}
export default Reporte;
