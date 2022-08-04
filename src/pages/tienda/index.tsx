/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import CardProducto from "@components/cards/cardProducto";
import Container from "@components/container";
import InputSearch from "@components/inputs/InputSearch";
import { ProductsContext } from "src/context/products/ProductsContext";
import { EntityProduct } from "src/context/products/entity/EntityProducts";
import { motion } from "framer-motion";
import SidebarFilter from "@components/sidebarFilter";
import Filtro from "@components/sidebarFilter/filtro";
import SidebarCart from "@components/sidebarCart";
import { Show } from "@components/show";
import { useProductos } from "@services/useProducto";
import Spinner from "@components/Sppinner";
import { BreadCrumb } from "@components/breadcrumb";
import { LayoutTienda } from "@components/modules/tienda";
import { WrapperFiltrosBuscar } from "@components/modules/tienda/wrapperFiltrosBuscar";
import { useContext } from "react";

const Tienda = () => {
  const [isOpenCart, setIsOpenCart] = useState(false);
  const [isOpenFilter, setIsOpenFilter] = useState(false);
  const { db: productos, loading: loadingProductos } = useProductos();
  const [loadingDataFilter, setLoadingDataFilter] = useState(false);
  const [dataFilter, setDataFilter] = useState<any[]>([]);
  const { DispatchProducts } = useContext(ProductsContext);

  useEffect(() => {
    if (productos.length > 0) {
      DispatchProducts({
        type: "AddProducts",
        payload: productos as EntityProduct[],
      });
      // setDataFilter(productos);
      setLoadingDataFilter(loadingProductos);
    }
  }, [productos]);

  return (
    <LayoutTienda>
      {/*Wrapper Search and bottom filter */}
      <WrapperFiltrosBuscar
        setIsOpenFilter={setIsOpenFilter}
        isOpenFilter={isOpenFilter}
      />

      {/* Wrapper sidebar filter desktop and card´s*/}
      <Container
        className={`flex flex-row w-full   relative
      ${isOpenFilter ? "gap-x-7" : ""}
        `}
      >
        {/* sidebar filter desktop */}
        <div
          className={`duration-300 transition-all transform -translate-x-32 opacity-0  w-0  absolute invisible ${
            isOpenFilter
              ? "lg:translate-x-0  lg:opacity-100 lg:w-1/4 lg:visible static lg:relative"
              : ""
          }`}
        >
          <Filtro
            setDataFilter={setDataFilter}
            setLoadind={setLoadingDataFilter}
          />
        </div>

        {/* wrapper card´s */}
        <motion.div
          className={`flex justify-center items-start w-full  ${
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

      {/* sidebar filtro mobile*/}
      <div className="">
        <SidebarFilter
          isOpen={isOpenFilter}
          onClose={() => setIsOpenFilter(false)}
        />
      </div>
      <SidebarCart isOpen={isOpenCart} onClose={() => setIsOpenCart(false)} />
    </LayoutTienda>
  );
};

export default Tienda;
