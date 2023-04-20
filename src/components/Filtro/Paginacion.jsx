export const Paginacion = ({
    datosPages,
    currentPage,
    setCurrentPage,
    totalPaginas,
  }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPaginas / datosPages); i++) {
      pageNumbers.push(i);
    }
  
    //mover botones anterior y siguiente
    const onPrevPage = () => {
      if(currentPage === 1){
          setCurrentPage(1);
      }else{
      setCurrentPage(currentPage - 1);}
    };
  
    const onNextPage = () => {
      if(currentPage >= pageNumbers.length){
          setCurrentPage(pageNumbers.length);
      } else
      {setCurrentPage(currentPage + 1);}
    };
  
    const onSpecificpage = (n) => {
      setCurrentPage(n);
    };
  
    return (
      <div className="items-center justify-center py-10 lg:px-0 sm:px-6 px-4">
        <div class="inline-flex mt-2 xs:mt-0">
        <button
          className={
            "text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l cursor-pointer ${...currentPage <= 1 ? 'invisible' : ' '}"
          }
          onClick={onPrevPage}
        >
          <p className="text-sm ml-3 font-medium leading-none hover:text-blue">
            Anterior
          </p>
        </button>
        <div className="sm:flex hidden text-white ">
          {pageNumbers.map((numeroPagina) => (
            <button
              key={numeroPagina}
              className={
                "items-center hidden px-4 py-2 mx-1 transition-colors duration-300 transform bg-aFuerte3 rounded-md sm:flex  hover:bg-black hover:text-white ${numeroPagina === currentPage ? 'fill-current' : '' "
              }
              onClick={() => onSpecificpage(numeroPagina)}
            >
              {numeroPagina}
            </button>
          ))}
        </div>
        <button
          className={
            "text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r cursor-pointer ${ currentPage >= pageNumbers.length ? 'hidden' : ''}"
          }
          onClick={onNextPage}
        >
          <p className="text-sm font-medium leading-none mr-3 hover:text-black  ">
            Siguiente
          </p>
        </button>
      </div>
      </div>
    );
  };