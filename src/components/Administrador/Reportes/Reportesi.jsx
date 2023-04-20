import { useState, useEffect } from "react";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import Vista from "./Vista";
import DocuPDF from "./DocuPDF";
const Reportesi = () => {
  const [selecionado, setSelect] = useState("");
  const [poema, setPoema] = useState("");
  const [verWeb, setVerWeb] = useState(false);
  const [verPDF, setVerPDF] = useState(false);
  const handleSelectChange = (e) => {
    setSelect(e.target.value);
  };
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
      <div class="flex gap-2">
        <select
          id=""
          class="shadow appearance-none w-full sm:w-1/2 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none py-3 px-3 my-2"
          value={selecionado}
          onChange={handleSelectChange}
        >
          <option selected>Elegir Reporte</option>
          <option value="1">Reporte por municipio</option>
          <option value="2">Reporte Fecha registro</option>
          <option value="3">Reporte Centro educativo</option>
          <option value="4">Reporte Centro educativo público</option>
          <option value="5">Reporte Centro educativo privado</option>
          <option value="6">Reporte por Edad</option>
          <option value="7">Reporte por Genero</option>
          <option value="8">Reporte por sesiones abiertas</option>
          <option value="9">Reporte por nivel académico</option>
          <option value="10">Reporte por materias utilizadas</option>
        </select>
        {(() => {
          switch (selecionado) {
            case "1":
              return (
                <select
                  id=""
                  class="shadow appearance-none w-full sm:w-1/2 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none py-3 px-3 my-2"
                >
                  <option selected>Elegir Municipio</option>
                  <option value="#">Municipio x</option>
                  <option value="#">Municipio y</option>
                </select>
              );
            case "2":
              return (
                <input
                  class="shadow appearance-none w-full sm:w-1/2 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none py-3 px-3 my-2"
                  type="date"
                  id="start"
                  name="trip-start"
                  min="2023-04-10"
                  max="2023-04-19"
                />
              );
            case "3":
              return (
                <select
                  id=""
                  class="shadow appearance-none w-full sm:w-1/2 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none py-3 px-3 my-2"
                >
                  <option selected>Elegir Institucion</option>
                  <option value="#">Institucion x</option>
                  <option value="#">Institucion y</option>
                </select>
              );
            case "4":
              return "";
            case "5":
              return "";
            case "6":
              return (
                <input
                  class="shadow appearance-none w-full sm:w-1/2 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none py-3 px-3 my-2"
                  type="number"
                  min="8"
                  max="70"
                  placeholder="Seleccione la edad"
                />
              );
            case "7":
              return (
                <select
                  id=""
                  class="shadow appearance-none w-full sm:w-1/2 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none py-3 px-3 my-2"
                >
                  <option selected>Elegir Genero</option>
                  <option value="#">Masculino</option>
                  <option value="#">Femenino</option>
                </select>
              );
            case "8":
              return "";
            case "9":
              return (
                <select
                  id=""
                  class="shadow appearance-none w-full sm:w-1/2 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none py-3 px-3 my-2"
                >
                  <option selected>Elegir Nivel Academico</option>
                  <option value="#">Octavo</option>
                  <option value="#">Bachiller</option>
                </select>
              );
            case "10":
              return "";
            default:
              return null;
          }
        })()}
      </div>

      <div class="flex w-full h-screen bg-slate-400 rounded-lg">
        <div class="mt-4 mx-4 space-x-3">
          <button
            onClick={() => {
              setVerWeb(!verWeb);
              setVerPDF(false);
            }}
            class="mx-auto text-white bg-aFuerte2 border-0 py-2 px-8 focus:outline-none hover:bg-aFuerte3 rounded text-lg"
          >
            Boton 1 {verWeb ? "Ocultar Web" : "Ver Web"}
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
