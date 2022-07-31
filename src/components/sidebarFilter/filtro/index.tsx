/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
// import InputRange, { Range } from 'react-input-range'
import IconFilter from "../../../../public/icons/IconFilter";
import { useProductos } from "../../../services/useProducto";
import Accordion from "../../accordion";
import CardProductosRelacionados from "../../cards/cardProducto/cardProductosRelacionados";
import InputRadio from "../../inputs/InputRadio";
import InputSearch from "../../inputs/InputSearch";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import { useCategoriaProductos } from "src/services/useCategoriaProductos";
import InputCheckbox from "@components/inputs/InputCheckbox";
import { useBusquedaAvanzada } from "src/services/useBusquedaAvanzada";

interface Ifilter {
  categoriaSlug?: string | null;
  destacado: string;
  numeroPagina: number;
  pagina: number;
  precio: {
    min: number;
    max: number;
  };
  tipoOrdenacion: string;
}

const Filtro = () => {
  const { db: productos, loading } = useProductos();
  const { db: dataCategoria, loading: loadingCategoria } =
    useCategoriaProductos();
  const {
    FiltrarBusqueda,
    data,
    loading: loadingBusqueda,
  } = useBusquedaAvanzada();
  const [filter, setFilter] = useState<Ifilter>({
    categoriaSlug: null,
    destacado: "1",
    numeroPagina: 10,
    pagina: 1,
    precio: { min: 0, max: 10000 },
    tipoOrdenacion: "desc",
  });

  const [currentPro, setCurrentPro] = useState({});
  // const {} = useBusquedaAvanzada(filter);
  // const [range, setRange] = useState({
  //   min: 0,
  //   max: 10000,
  // });

  const FilterAction = async () => {
    const newPrecio = { precio: Object.values(filter.precio) };
    await FiltrarBusqueda(Object.assign(filter, newPrecio));
  };
  useEffect(() => {
    setCurrentPro(dataCategoria);
  }, [loadingCategoria]);

  useEffect(() => {
    setCurrentPro(productos);
  }, []);

  return (
    <div className="">
      <div className="flex gap-x-3 mt-5 items-center">
        <IconFilter height={22} width={22} fill="#35405E" />
        <h2 className="text-2xl font-light uppercase">Filtros</h2>
      </div>

      {/* accordion radio button */}
      <div className="py-4 border-b">
        <Accordion title="Categoria">
          <div className="w-full">
            <InputSearch placeholder="Buscar" />
            <div className="mt-4">
              {/* Render input radios */}
              {dataCategoria.map((obj, index) => (
                <InputRadio
                  label={obj.titulo || ""}
                  name={"categoriaProductoId"}
                  value={obj.slug || ""}
                  // stock={1}
                  id={obj.titulo || ""}
                  key={obj.categoriaProductoId}
                />
              ))}
            </div>
          </div>
        </Accordion>
      </div>
      {/* accordion precio */}
      <div className="py-4 border-b">
        <Accordion title="Precio">
          <div className="flex flex-col">
            <div className="mb-10">
              <p>Selecciona un rango de precio para filtrar tu búsqueda.</p>
            </div>
            <div className="pb-10">
              <div className="flex justify-between text-primary-600">
                <div className="flex flex-col ">
                  <div className="text-base">S/. {filter.precio?.min}</div>
                  {/* <p className='text-sm'>S/ {(range as Range).min}</p> */}
                </div>
                <div className="flex flex-col ">
                  <div className="text-base">S/. {filter.precio?.max}</div>
                  {/* <p className='text-sm'>S/ {(range as Range).max}</p> */}
                </div>
              </div>
              <div className="mx-2 mt-2  border-transparent border max-h-6">
                <InputRange
                  maxValue={10000}
                  minValue={0}
                  value={filter.precio}
                  onChange={(value: any) => {
                    setFilter({ ...filter, precio: { ...value } });
                  }}
                />
              </div>
              {/* <div className="mx-2 flex justify-between items-center border">
                <div className="w-14 text-sm flex justify-center items-center h-8 border">{range.min}</div>
                <div>pepe</div>
              </div> */}
            </div>
          </div>
        </Accordion>
      </div>

      {/* accordion ordenamiento */}
      <div className="py-4 border-b">
        <Accordion title="Ordenar">
          <div className="w-full">
            <InputRadio
              label="Ascendente"
              id="ascedente"
              value="asc"
              name="typeOrder"
              // onchange={()=>{

              // }}
            />
            <InputRadio
              label="Descendente"
              id="descedente"
              value="desc"
              name="typeOrder"
            />
          </div>
        </Accordion>
      </div>

      {/* producto destacado */}
      <div className="py-4 border-b">
        <Accordion title="Destacado">
          <div className="w-full">
            <InputCheckbox label="Producto Destacado" name="destacado" />
          </div>
        </Accordion>
      </div>
      <button
        className="w-full bg-primary-600 text-white px-8 py-2.5 rounded-lg ease-out duration-300 hover:bg-primary-800"
        onClick={() => FilterAction()}
      >
        Aplicar Filtros
      </button>

      <p className="text-gray-900 text-2xl font-bold py-10">
        Productos similares
      </p>

      {!loading &&
        productos.map((item, i) => {
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
  );
};

export default Filtro;
