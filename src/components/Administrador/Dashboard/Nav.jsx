import { Link } from "react-router-dom";
import {HiOutlineUser} from "react-icons/hi"
const Navb = () => {
  return (
    <div className="">
      <nav
        class="relative flex w-full items-center justify-between bg-aFuerte3 py-2 shadow-md shadow-black/5 lg:flex-wrap lg:justify-start"
        data-te-navbar-ref
      >
        <div class="flex w-full flex-wrap items-center justify-between pl-1 pr-6 ">
          <div className="flex items-center rounded px-6 py-4"></div>
          <div class="relative flex items-center">
            <div class="relative" data-te-dropdown-ref>
              <a
                class="hidden-arrow flex items-center whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none"
                href="#"
                id="dropdownMenuButton2"
                role="button"
                data-te-dropdown-toggle-ref
                aria-expanded="false"
              >
                <span class="rounded-full bg-slate-500">
                  <HiOutlineUser class=" p-2 w-12 h-12 text-white icon icon-tabler icon-tabler-user "/>
                </span>
              
              </a>
              <ul
                class="absolute left-auto right-0 z-[1000] float-left m-0 mt-2 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-bCasi text-left shadow-lg [&[data-te-dropdown-show]]:block"
                aria-labelledby="dropdownMenuButton2"
                data-te-dropdown-menu-ref
              >
                <li>
                  <Link
                    to="/ajustesi"
                    class="block w-full whitespace-nowrap bg-transparent py-2 px-10 text-sm font-normal text-neutral-700 hover:bg-sky-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400"
                    data-te-dropdown-item-ref
                  >Perfil
                  </Link>
                </li>
                <li>
                  <Link
                    to="/loginA"
                    class="block w-full whitespace-nowrap bg-transparent py-2 px-10 text-sm font-normal text-neutral-700 hover:bg-sky-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400"
                    data-te-dropdown-item-ref
                  >
                    Salir
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navb;
