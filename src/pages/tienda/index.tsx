import { useState, useEffect } from "react";
import BannerTienda from "../../components/banner/bannerTienda";
import CardProducto from "../../components/cards/cardProducto";
import Container from "../../components/container";
import InputSearch from "../../components/inputs/InputSearch";
import { motion } from "framer-motion";
import SidebarFilter from "../../components/sidebarFilter";
import Filtro from "../../components/sidebarFilter/filtro";
import SidebarCart from "../../components/sidebarCart";
import { Show } from "@components/show";
import { useProductos } from "../../services/useProducto";

const Tienda = () => {
  const [isOpenCart, setIsOpenCart] = useState(false);
  const [openFilter, setOpenFilter] = useState(false);
  const [isOpenFilter, setIsOpenFilter] = useState(false);
  const { db: productos, loading } = useProductos();

  return (
    <div>
      <BannerTienda />
      {/* <Container className="lg:flex py-10 gap-10 p-5">hola</Container> */}
      <Show
        condition={!loading}
        isDefault={
          <div className="flex justify-center py-10">
            <svg
              className="animate-spin  h-8 w-8 text-primary-300"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          </div>
        }
      >
        <Container className="lg:flex py-10 gap-10 ">
          <div className="flex flex-row gap-x-2 sm:gap-x-7 w-full p-5 lg:px-3">
            {/* Grupo buscar y filtrar */}
            <div className="w-1/2 lg:w-1/4">
              <button
                onClick={() => setIsOpenFilter(!isOpenFilter)}
                className="w-full bg-primary-600 text-white px-8 py-2.5 rounded-lg ease-out duration-300 hover:bg-primary-800"
              >
                Filtros
              </button>
            </div>
            <div className="w-1/2 lg:w-3/4">
              <InputSearch placeholder="Buscar" />
            </div>
          </div>
        </Container>
        
        <Container
          className={`flex flex-row  w-full 
        ${isOpenFilter ? "gap-10" : "gap-0"}
        `}
        >
          <div
            className={`duration-300 transition-all -translate-x-32 opacity-0 w-0 invisible  ${
              isOpenFilter
                ? "lg:translate-x-0 lg:visible lg:opacity-100 lg:w-[40%] xl:w-[25%] "
                : ""
            }`}
          >
            <Filtro />
          </div>
          {/* </Show> */}
          <motion.div className="w-full" layout>
            <div
              className={`grid grid-cols-1  delay-200 ${
                isOpenFilter
                  ? " xl:grid-cols-3"
                  : " xl:grid-cols-4 lg:grid-cols-3 "
              } gap-5 justify-items-center  sm:grid-cols-2`}
            >
              {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-5 xl:grid-cols-3 2xl:grid-cols-4 justify-items-center mt-16  "> */}
              {productos.map((item) => (
                <CardProducto
                  key={item.slug}
                  slug={item.slug!}
                  titulo={item.titulo!}
                  amount={1}
                  firtsPrice={item.precioReal!}
                  categoty1={item.CategoriaProducto?.titulo!}
                  price={item.precioOferta!}
                  id={Number(item.productoId!)}
                  img={item.imagenPrincipal!}
                  rebaja
                  openModal={() => setIsOpenCart(true)}
                />
              ))}
            </div>
          </motion.div>
        </Container>
      </Show>

      {/* sidebar filtro */}
      <div className="">
        <SidebarFilter
          isOpen={isOpenFilter}
          onClose={() => setIsOpenFilter(false)}
        />
      </div>
      <SidebarCart isOpen={isOpenCart} onClose={() => setIsOpenCart(false)} />
    </div>
  );
};

export default Tienda;
