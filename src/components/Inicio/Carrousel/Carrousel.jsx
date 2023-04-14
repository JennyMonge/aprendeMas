import React from "react";
import Banner1 from '../img/banner1.jpg';
import Banner2 from '../img/banner2.jpg';
import Banner3 from '../img/banner3.jpg';
export const Carrousel = () => {
    return (

        <div id="carouselExampleControls" class="relative" data-te-carousel-init data-te-carousel-slide>
            <div class="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
                <div class="relative float-left -mr-[100%] w-full transition-transform duration-[400ms] ease-in-out motion-reduce:transition-none"
                    data-te-carousel-item
                    data-te-carousel-active>
                    <img
                        src={Banner1}
                        class="block w-full"
                        alt="" />
                </div>
                <div
                    class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[400ms] ease-in-out motion-reduce:transition-none"
                    data-te-carousel-item>
                    <img
                        src={Banner2}
                        class="block w-full"
                         />
                </div>
                <div
                    class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[400ms] ease-in-out motion-reduce:transition-none"
                    data-te-carousel-item>
                    <img
                        src={Banner3}
                        class="block w-full"
                        alt="" />
                </div>
            </div>
            <button
                class="absolute top-0 bottom-0 left-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                type="button"
                data-te-target="#carouselExampleControls"
                data-te-slide="prev">
                <span class="inline-block h-8 w-8">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="h-6 w-6">
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </span>
                <span class="absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 [clip:rect(0,0,0,0)]">Previous </span>
            </button>
            <button
                class="absolute top-0 bottom-0 right-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                type="button"
                data-te-target="#carouselExampleControls"
                data-te-slide="next">
                <span class="inline-block h-8 w-8">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="h-6 w-6">
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </span>
                <span class="absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 [clip:rect(0,0,0,0)]"> Next </span>
            </button>
        </div>

    )
}
export default Carrousel;