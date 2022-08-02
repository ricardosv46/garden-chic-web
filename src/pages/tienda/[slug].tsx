import request from "graphql-request";
import React, { useState } from "react";
import { useEffect } from "react";
import CardProducto from "../../components/cards/cardProducto";
import CardProductosRelacionados from "../../components/cards/cardProducto/cardProductosRelacionados";
import Container from "../../components/container";
import Gallery from "../../components/gallery";
import InputSearch from "../../components/inputs/InputSearch";
import ModalProduct from "../../components/modal/modalProduct";
import SidebarCart from "../../components/sidebarCart";
import { dataProductos } from "../../data/dataProductos";
import { Imagenes } from "../../generated/graphql";
import { GET_SLUG_PRODUCTO, URL } from "../../graphql/ssr/ssr";
import { useProductos } from "../../services/useProducto";
import { BreadCrumb } from "@components/breadcrumb";

interface IProps {
  slug: string;
}

interface Producto {
  producto: {
    galeria: Imagenes[];
    CategoriaProducto: { titulo: string };
    titulo: string;
    precioOferta: number;
    descripcionLarga: string;
    descripcionCorta: string;
  };
}

const Productos = ({ producto }: Producto) => {
  const [isOpenCart, setIsOpenCart] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { db: productos, loading } = useProductos();

  return (
    <div>
      <Container className="mt-6 py-4">
        <BreadCrumb />
      </Container>
      <ModalProduct
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        data={producto?.galeria!}
      />
      <Container className="lg:flex py-10 gap-10">
        <div className="w-full lg:w-9/12 ">
          <div className="lg:flex gap-5">
            <div className="flex-1">
              <Gallery
                onClick={() => setIsOpen(true)}
                data={producto?.galeria!}
              />
            </div>
            <div className="flex-1 ">
              <div className="flex gap-3 items-center">
                <p className="text-gray-900 text-md font-semibold ease-in-out duration-300 hover:text-primary-300 cursor-pointer">
                  {producto?.CategoriaProducto?.titulo!}
                </p>
                <span className="w-1 h-1 bg-primary-300 rounded-full"></span>
              </div>
              <p className="text-gray-900 text-3xl  font-bold mt-3">
                {producto?.titulo!}
              </p>
              <div className="w-5 h-0.5 bg-primary-300 my-5"></div>
              <p className="text-gray-900 text-5xl  ">
                S/ {producto?.precioOferta!.toFixed(2)}
              </p>

              <p className="text-gray-900 text-lg  my-5">
                {producto?.descripcionLarga!}
              </p>
              <div className="flex justify-between border-2">
                <div className="flex-1 flex justify-center items-center">
                  <input
                    type="number"
                    min="1"
                    placeholder="1"
                    className="w-16 p-2 focus:outline-none border-2 rounded-lg"
                  />
                </div>

                <p className="flex-1 p-5 border-l-2 text-primary-300 text-center">
                  {producto?.titulo}
                </p>
                <p className="flex-1 p-5 border-l-2">$20.00</p>
              </div>

              <button className="mt-5 py-3 px-5 border-primary-300 bg-primary-300 border-2 hover:bg-white ease-in-out duration-300 text-white hover:text-primary-300 font-bold text-sm rounded-lg">
                AGREGAR AL CARRITO
              </button>
            </div>
          </div>
          <div>
            <p className="text-gray-900 text-3xl  font-bold mt-10">
              Descripción
            </p>
            <p className="text-gray-900 text-lg  my-5">
              {producto?.descripcionLarga}
            </p>
            <p className="text-gray-900 text-3xl  font-bold mt-10">
              También te puede interesar
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  justify-items-center py-10">
              {productos.map((item, i) => {
                if (i < 3) {
                  return (
                    <CardProducto
                      key={item.slug}
                      slug={item.slug!}
                      titulo={item.titulo!}
                      amount={14}
                      firtsPrice={item.precioReal!}
                      categoty1={item.CategoriaProducto?.titulo!}
                      price={item.precioOferta!}
                      id={Number(item.productoId!)}
                      img={item.imagenPrincipal!}
                      rebaja
                      openModal={() => setIsOpenCart(true)}
                    />
                  );
                } else {
                  return null;
                }
              })}
            </div>
            <p className="text-gray-900 text-3xl  font-bold mt-10">
              Productos relacionados
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  justify-items-center py-10">
              {productos.map((item, i) => {
                if (i > 2 && i < 5) {
                  return (
                    <CardProducto
                      key={item.slug}
                      slug={item.slug!}
                      titulo={item.titulo!}
                      amount={14}
                      firtsPrice={item.precioReal!}
                      categoty1={item.CategoriaProducto?.titulo!}
                      price={item.precioOferta!}
                      id={14}
                      img={item.imagenPrincipal!}
                      rebaja
                      openModal={() => setIsOpenCart(true)}
                    />
                  );
                } else {
                  return null;
                }
              })}
            </div>
          </div>
        </div>

        <div className="w-full lg:w-3/12 px-3">
          <InputSearch placeholder="Buscar" />
          <p className="text-gray-900 text-2xl font-bold py-10">
            Productos similares
          </p>
          {productos.map((item, i) => {
            if (i < 5) {
              return (
                <CardProductosRelacionados
                  slug={item?.slug!}
                  img={item.imagenPrincipal?.url!}
                  precioOferta={item?.precioOferta!}
                  precioReal={item?.precioReal!}
                  titulo={item?.titulo!}
                  key={i}
                  {...item}
                />
              );
            } else {
              return null;
            }
          })}
        </div>
      </Container>
      <SidebarCart isOpen={isOpenCart} onClose={() => setIsOpenCart(false)} />
    </div>
  );
};
export default Productos;

export async function getServerSideProps({ params }: any) {
  const res = await request(URL, GET_SLUG_PRODUCTO, {
    slug: params.slug,
  });
  console.log(res);
  const data = res?.GetProductoSlug;

  return {
    props: {
      producto: data,
    },
  };
}
