import { useState, useEffect } from "react";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import Vista from "./Vista";
import DocuPDF from "./DocuPDF";
const Reportesi = () => {
  const [poema, setPoema] = useState("");
  const [verWeb, setVerWeb] = useState(false);
  const [verPDF, setVerPDF] = useState(false);
  function fetchPoema() {
    fetch("https://www.poemist.com/api/v1/randompoems")
      .then((response) => response.json())
      .then((data) => {
        setPoema(data[0]);
        console.log(data[0]);
      });
  }

  useEffect(() => {
    fetchPoema();
  }, []);
  return (
    <>
      <select
        id=""
        class="shadow appearance-none w-full sm:w-1/2 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none py-3 px-3 my-2"
      >
        <option selected>Elegir Reporte</option>
        <option value="#">Reporte por municipio</option>
        <option value="#">Reporte Fecha registro</option>
        <option value="#">Reporte Centro educativo</option>
        <option value="#">Reporte Centro educativo público</option>
        <option value="#">Reporte Centro educativo privado</option>
        <option value="#">Reporte por Edad</option>
        <option value="#">Reporte por Genero</option>
        <option value="#">Reporte por sesiones abiertas</option>
        <option value="#">Reporte por niveles</option>
        <option value="#">Reporte por materias utilizadas</option>
      </select>
      <div class="flex w-full h-screen bg-slate-400 rounded-lg">
        <div class="mt-4 mx-4 space-x-3">
          <button
            onClick={() => {
              setVerWeb(!verWeb);
              setVerPDF(false);
            }}
            class="mx-auto text-white bg-aFuerte2 border-0 py-2 px-8 focus:outline-none hover:bg-aFuerte3 rounded text-lg"
          >
            Boton 1  {verWeb ? "Ocultar Web" : "Ver Web"}
          </button>
          <button
            onClick={() => {
              setVerPDF(!verPDF);
              setVerWeb(false);
            }}
            class="mx-auto text-white bg-aFuerte2 border-0 py-2 px-8 focus:outline-none hover:bg-aFuerte3 rounded text-lg"
          >
            Boton 2 Ver pdf {verPDF ? "Ocultar PDF" : "Ver PDF"}
          </button>
          <PDFDownloadLink
            document={<DocuPDF poema={poema} />}
            fileName="poema.pdf"
          >
            <button class="mx-auto text-white bg-aFuerte2 border-0 py-2 px-8 focus:outline-none hover:bg-aFuerte3 rounded text-lg">
              Boton 3 Descargar
            </button>
          </PDFDownloadLink>

          <div class="relative w-full mt-4 z-10">
            {poema ? (
              <>
                {verWeb ? <Vista poema={poema} /> : null}
                {verPDF ? (
                  <PDFViewer class="w-full">
                    <DocuPDF poema={poema} />
                  </PDFViewer>
                ) : null}
              </>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};
export default Reportesi;
