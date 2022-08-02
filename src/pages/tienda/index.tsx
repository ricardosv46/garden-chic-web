/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import CardProducto from "@components/cards/cardProducto";
import Container from "@components/container";
import InputSearch from "@components/inputs/InputSearch";
import { motion } from "framer-motion";
import SidebarFilter from "@components/sidebarFilter";
import Filtro from "@components/sidebarFilter/filtro";
import SidebarCart from "@components/sidebarCart";
import { Show } from "@components/show";
import { useProductos } from "@services/useProducto";
import Spinner from "@components/Sppinner";
import { BreadCrumb } from "@components/breadcrumb";

const Tienda = () => {
  const [isOpenCart, setIsOpenCart] = useState(false);

  const [isOpenFilter, setIsOpenFilter] = useState(false);
  const { db: productos, loading: loadingProductos } = useProductos();
  const [loadingDataFilter, setLoadingDataFilter] = useState(false);
  const [dataFilter, setDataFilter] = useState<any[]>([]);

  useEffect(() => {
    if (productos.length > 0) {
      setDataFilter(productos);
      setLoadingDataFilter(loadingProductos);
    }
  }, [productos]);

  return (
    <div>
      <Container className="mt-6 py-4">
        <BreadCrumb />
      </Container>
      
      <Container className="lg:flex py-6 gap-10 ">
        <div className="flex flex-row gap-x-2 sm:gap-x-7 w-full py-5 ">
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
              ? "lg:translate-x-0 lg:visible lg:opacity-100 lg:w-1/4"
              : ""
          }`}
        >
          <Filtro
            setDataFilter={setDataFilter}
            setLoadind={setLoadingDataFilter}
          />
        </div>
        {/* </Show> */}
        <motion.div
          className={`flex justify-center items-start w-full ${
            isOpenFilter ? " lg:w-3/4 " : "lg:w-full"
          }`}
          layout
        >
          <div
            className={`grid grid-cols-1 delay-200 ${
              isOpenFilter
                ? " xl:grid-cols-3"
                : " xl:grid-cols-4 lg:grid-cols-3 "
            } gap-5 justify-items-center  sm:grid-cols-2 md:grid-cols-3`}
          >
            <Show condition={!loadingDataFilter} isDefault={<Spinner />}>
              {dataFilter.map((item) => (
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
            </Show>
          </div>
        </motion.div>
      </Container>

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
