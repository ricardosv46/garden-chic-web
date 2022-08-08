/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, FormEvent, ChangeEvent } from "react";
import IconFilter from "public/icons/IconFilter";
import { useProductos } from "@services/useProducto";
import Accordion from "../../accordion";
import CardProductosRelacionados from "../../cards/cardProducto/cardProductosRelacionados";
import InputRadio from "../../inputs/InputRadio";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import { useCategoriaProductos } from "@services/useCategoriaProductos";
import InputCheckbox from "@components/inputs/InputCheckbox";
import { useBusquedaAvanzada } from "@services/useBusquedaAvanzada";
import { FiTrash2 } from "react-icons/fi";
import {
  useGetAllProductosRelacionadosQuery,
  useGetPreciosQuery,
} from "src/generated/graphql";
import { useProductContext } from "@context/products/ProductsContext";
import { HeaderFiltro } from "./components/HeaderFiltro";

const Filtro = ({ setDataFilter = () => { }, setLoadind = () => { } }: any) => {
  const { db: productos, loading } = useProductos();
  const [resetFilter, setResetFilter] = useState(false)
  const { db: dataCategoria, loading: loadingCategoria } =
    useCategoriaProductos();
  // const {} = useBusquedaAvanzada(filter);
  const { data: dataPriceMinMax } = useGetPreciosQuery({
    fetchPolicy: "network-only",
  });
  const minPrice: any = dataPriceMinMax?.GetPrecios?.minimo;
  const maxPrice: any = dataPriceMinMax?.GetPrecios?.maximo;

  const { DataProducts, DispatchProducts } = useProductContext()
  const { FilterOptions } = DataProducts

  const [range, setRange] = useState<any>({
    min: 0,
    max: 10000,
  });

  const [form, setForm] = useState({
    destacado: false,
    categoriaSlug: "",
    tipoOrdenacion: "asc",
  });
  const { data: dataRelatedProducts, loading: loadingRelatedProducts } = useGetAllProductosRelacionadosQuery({
    fetchPolicy: "network-only",
    variables: {
      slug: "iphone-14",
      numeroPagina: 5,
      pagina: 1,
    },
  });
  console.log('pr', dataRelatedProducts);

  const [relatedProducts, setRelatedProducts] = useState<any[]>([]);
  const { data } = useBusquedaAvanzada({
    destacado: form.destacado ? "1" : "0",
    categoriaSlug: form.categoriaSlug,
    tipoOrdenacion: form.tipoOrdenacion,
    precio: [range.min, range.max],
    pagina: 1,
    numeroPagina: 10,
  });

  useEffect(() => {
    setRelatedProducts(
      dataRelatedProducts?.GetAllProductosRelacionados.data ?? []
    );
  }, [dataRelatedProducts]);

  useEffect(() => {
    setRange({ min: minPrice, max: maxPrice });
  }, [dataPriceMinMax]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleChecked = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.checked });
  };

  const handleFilter = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const db = data ? data?.GetBusquedaAvanzada?.data : [];
    setLoadind(true);
    setDataFilter(db);
    setTimeout(() => {
      setLoadind(false);
    }, 750);
  };

  return (
    <div className="">
      <HeaderFiltro />
      <form action="" onSubmit={handleFilter}>
        {/* accordion categorias */}
        <div className="py-4 border-b">
          <Accordion title="Categoria" reset={resetFilter}>
            <div className="w-full">
              <div className="mt-4">
                {/* Render input radios */}
                {!loadingCategoria &&
                  dataCategoria.map((category) => (
                    <InputRadio
                      label={category.titulo || ""}
                      name={"categoriaSlug"}
                      value={category.slug || ""}
                      id={category.titulo || ""}
                      key={category.categoriaProductoId}
                      onChange={({ target }) =>
                        DispatchProducts({
                          type: "ChangeCategoriaSlug",
                          payload: target.value,
                        })
                      }

                    />
                  ))}
              </div>
            </div>
          </Accordion>
        </div>

        {/* accordion rango de precios */}
        <div className="py-4 border-b">
          <Accordion title="Precio" reset={resetFilter}>
            <div className="flex flex-col">
              <div className="mb-10">
                <p>Selecciona un rango de precio para filtrar tu búsqueda.</p>
              </div>
              <div className="pb-10">
                <div className="flex justify-between text-primary-600">
                  <div className="flex flex-col ">
                    <div className="text-base">S/. {FilterOptions.precio[0]}</div>
                  </div>
                  <div className="flex flex-col ">
                    <div className="text-base">S/. {FilterOptions.precio[1]}</div>
                  </div>
                </div>
                <div className="mx-2 mt-2  border-transparent border max-h-6">
                  <InputRange
                    maxValue={maxPrice}
                    minValue={minPrice}
                    value={{
                      min: FilterOptions.precio[0],
                      max: FilterOptions.precio[1]
                    }}
                    onChange={(value: any) => { DispatchProducts({ type: 'ChangePrecio', payload: [value.min, value.max] }) }}
                  // onChange={(value: any) => {
                  //   setRange({ ...range, ...value });
                  // }}
                  />
                </div>
              </div>
            </div>
          </Accordion>
        </div>

        {/* accordion ordenamiento */}
        <div className="py-4 border-b">
          <Accordion title="Ordenar" reset={resetFilter}>
            <div className="w-full">
              <InputRadio
                label="Ascendente"
                id="ascedente"
                value="asc"
                name="tipoOrdenacion"
                // onChange={handleChange}
                onChange={() =>
                  DispatchProducts({
                    type: "ChangeTipoOrdenacion",
                    payload: "asc",
                  })
                }
              />
              <InputRadio
                label="Descendente"
                id="descedente"
                value="desc"
                name="tipoOrdenacion"
                onChange={() =>
                  DispatchProducts({
                    type: "ChangeTipoOrdenacion",
                    payload: "desc",
                  })
                }

              // onChange={handleChange}
              />
            </div>
          </Accordion>
        </div>

        {/* producto destacado */}
        <div className="py-4 border-b">
          <Accordion title="Destacado" reset={resetFilter}>
            <div className="w-full">
              <InputCheckbox
                label="Producto Destacado"
                name="destacado"
                onChange={({ target }) =>
                  DispatchProducts({
                    type: "ChangeDestacado",
                    payload: target.checked ? "1" : "0",
                  })
                }

                // onChange={handleChecked}
                value={FilterOptions.destacado}
              />
            </div>
          </Accordion>
        </div>

        <div className="py-4 flex flex-row gap-2">
          <button
            className="w-5/6 bg-primary-600 text-white px-8 py-2.5 rounded-lg ease-out duration-300 hover:bg-primary-800"
            type="submit"
          >
            Filtrar
          </button>
          <div className="w-1/6 border  text-black border-red-500 hover:text-white hover:bg-red-700 transition-all duration-300 rounded-md ease-out"
            onClick={() => {
              DispatchProducts({ type: 'ClearFilterOptions' })
              setResetFilter(!resetFilter)
            }}
          >
            <FiTrash2 className="block m-auto my-3" />
          </div>
        </div>
      </form >
      <p className="text-gray-900 text-2xl font-bold py-10">
        Productos similares
      </p>
      {
        !loadingRelatedProducts &&
        relatedProducts.map((item, i) => {
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
        })
      }
    </div >
  );
};

export default Filtro;
