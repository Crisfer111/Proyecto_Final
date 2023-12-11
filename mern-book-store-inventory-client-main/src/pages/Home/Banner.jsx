import React from "react";
import BannerCard from "../shared/BannerCard";

export const Banner = () => {
  return (
    <div className=" bg-teal-100  px-4 lg:px-24 flex items-center">
      <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-12 py-40">
        {/* right side */}
        <div className="md:w-1/2 h-full">
          <BannerCard />
        </div>

        {/* left side */}
        <div className="md:w-1/2 space-y-8 bg-teal-100">
          <h1 className="lg:text-6xl text-5xl font-bold text-black mb-5 lg:leading-tight leading-snug">
          Compra y vende tus libros.{" "}
            <span className="text-blue-700">Por los mejores precios</span>
          </h1>
          <p>
          Encuentre y lea más libros que le encantarán y realice un seguimiento de los libros
            quieres leer. Sé parte de la comunidad de libros más grande del mundo.
            amantes en Goodreads.
          </p>
          <div>
            <input
              type="search"
              placeholder="Search a book here"
              className="py-2 px-2 rounded-s-sm"
            />
            <button className="bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200">
              Buscar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
