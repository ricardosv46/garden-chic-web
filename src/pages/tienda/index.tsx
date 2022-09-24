/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import CardProducto from '@components/cards/cardProducto'
import Container from '@components/container'
import { motion } from 'framer-motion'
import Filtro from '@components/sidebarFilter/filtro'
import SidebarCart from '@components/sidebarCart'
import { Show } from '@components/show'
import { useProductos } from '@services/useProducto'
import Spinner from '@components/Sppinner'
import { LayoutTienda } from '@components/modules/tienda'
import { WrapperFiltrosBuscar } from '@components/modules/tienda/wrapperFiltrosBuscar'
import { Producto } from 'src/generated/graphql'
import { usePrecios } from '@services/tienda/usePrecios'
import { useCategoriaProductos } from '@services/useCategoriaProductos'
import { useFormik } from 'formik'
import SidebarFilter from '@components/sidebarFilter'
import { useRouter } from 'next/router'

import InputSearch from '@components/inputs/InputSearch'
import { Console } from 'console'
import { useBusquedaAvanzada } from '@services/tienda/useBusquedaAvanzada'
import { useBusquedaPalabraClave } from '@services/tienda/useBusquedaPalabraClave'
import Paginator from '@components/Paginator'
const tipoOrdenacion = [
  { value: 'asc', label: 'Ascendente' },
  { value: 'desc', label: 'Descendente' }
]

const Tienda = () => {
  const [isOpenFilter, setIsOpenFilter] = useState(false)
  const [state, setState] = useState({
    pagina: 1,
    numeroPagina: 12
  })
  const { db: productos, loading: loadingProductos, nTotal } = useProductos({ ...state, estado: 'Activado' })
  const [isfiltrados, setIsFiltrados] = useState(false)
  const [productosFiltrados, setProductosFiltrados] = useState<Producto[]>([] as Producto[])
  const { precios: dataPriceMinMax, loading: loadingPrecios } = usePrecios()
  const { db: categoriaProductos, loading: loadingCategoria } = useCategoriaProductos()
  const [precio, setPrecio] = useState({ min: 0, max: 0 })
  const { FunctionBusquedaAvanzada, loading: loadingBusqueda } = useBusquedaAvanzada()
  const { FunctionBusquedaPalabraClave, loading: loadingBusquedaPalabra } = useBusquedaPalabraClave()
  const [resetFilter, setResetFilter] = useState(false)

  const { push } = useRouter()
  const { values, handleChange, resetForm, handleSubmit } = useFormik({
    initialValues: {
      palabraClave: '',
      categoria: '',
      order: 'desc',
      destacado: false
    },
    onSubmit: async (values) => {
      setIsFiltrados(true)
      FunctionBusquedaAvanzada(handleData()).then((res) => setProductosFiltrados(res?.db!))
      // push({ pathname: '/tienda', query: { data: Code(JSON.stringify(handleData())) } })
    }
  })

  const handleData = () => {
    return {
      categoriaSlug: values?.categoria,
      precio: [precio?.min, precio?.max],
      tipoOrdenacion: values?.order,
      destacado: values?.destacado ? 'Activado' : '',
      pagina: 1,
      numeroPagina: 10
    }
  }

  useEffect(() => {
    if (!loadingPrecios) {
      setPrecio({ min: dataPriceMinMax?.minimo!, max: dataPriceMinMax?.maximo! })
    }
  }, [loadingPrecios])

  const handleClick = () => {
    setIsFiltrados(true)
    FunctionBusquedaPalabraClave({
      pagina: 1,
      numeroPagina: 10,
      palabraClave: values?.palabraClave
    }).then((res) => setProductosFiltrados(res?.db!))
    setPrecio({ min: dataPriceMinMax?.minimo!, max: dataPriceMinMax?.maximo! })
    resetForm()
    setResetFilter(!resetFilter)
  }

  return (
    <LayoutTienda>
      {/*Wrapper Search and bottom filter */}
      <WrapperFiltrosBuscar setIsOpenFilter={setIsOpenFilter} isOpenFilter={isOpenFilter}>
        <InputSearch placeholder='Buscar' onChange={handleChange} name='palabraClave' value={values.palabraClave} onClick={handleClick} />
      </WrapperFiltrosBuscar>

      {/* Wrapper sidebar filter desktop and card´s*/}
      <Container
        className={`flex flex-row w-full   relative
      			${isOpenFilter ? 'gap-x-7' : ''}
        		`}>
        {/* sidebar filter desktop */}
        <div
          className={`duration-300 transition-all transform -translate-x-32 opacity-0  w-0  absolute invisible 
					${isOpenFilter ? 'lg:translate-x-0  lg:opacity-100 lg:w-1/4 lg:visible static lg:relative' : ''}`}>
          {!loadingPrecios && precio?.max > 0 && !loadingCategoria && (
            <Filtro
              {...{
                values,
                handleChange,
                dataPriceMinMax,
                productos,
                categoriaProductos,
                tipoOrdenacion,
                precio,
                setPrecio,
                resetForm,
                loadingPrecios,
                handleSubmit,
                setIsFiltrados,
                resetFilter,
                setResetFilter
              }}
            />
          )}
        </div>

        {/* wrapper card´s */}
        <motion.div className={`flex justify-center flex-col items-start w-full mb-10 ${isOpenFilter ? ' lg:w-3/4 ' : 'lg:w-full'}`} layout>
          <Show
            condition={!loadingBusqueda && !loadingProductos && !loadingBusquedaPalabra}
            isDefault={
              <div className='flex justify-center w-full py-48 '>
                <Spinner />
              </div>
            }>
            <div
              className={`grid grid-cols-1 delay-200 ${
                isOpenFilter ? ' xl:grid-cols-3' : ' xl:grid-cols-4 lg:grid-cols-3 '
              } gap-5 justify-items-center  sm:grid-cols-2 md:grid-cols-3`}>
              {isfiltrados
                ? productosFiltrados.map((item) => (
                    <CardProducto
                      key={item.slug}
                      slug={item.slug!}
                      titulo={item.titulo!}
                      stockTotal={item.stockReal!}
                      amount={1}
                      firtsPrice={item.precioReal!}
                      categoty1={item.CategoriaProducto?.titulo!}
                      price={item.precioOferta!}
                      id={Number(item.productoId!)}
                      img={item.imagenPrincipal!}
                      rebaja
                    />
                  ))
                : productos.map((item: any) => (
                    <CardProducto
                      key={item.slug}
                      slug={item.slug!}
                      titulo={item.titulo!}
                      amount={1}
                      stockTotal={item.stockReal!}
                      firtsPrice={item.precioReal!}
                      categoty1={item.CategoriaProducto?.titulo!}
                      price={item.precioOferta!}
                      id={Number(item.productoId!)}
                      img={item.imagenPrincipal!}
                      rebaja
                    />
                  ))}
            </div>{' '}
          </Show>
          <div className='flex justify-center w-full pt-10'>
            <Paginator {...{ state, setState, nTotal: 100 }} />
          </div>
        </motion.div>
      </Container>

      {/* sidebar filtro mobile*/}
      <div className=''>
        <SidebarFilter isOpen={isOpenFilter} onClose={() => setIsOpenFilter(false)}>
          {!loadingPrecios && precio?.max > 0 && !loadingCategoria && (
            <Filtro
              {...{
                values,
                handleChange,
                dataPriceMinMax,
                productos,
                categoriaProductos,
                tipoOrdenacion,
                precio,
                setPrecio,
                resetForm,
                loadingPrecios,
                handleSubmit,
                setIsFiltrados,
                resetFilter,
                setResetFilter
              }}
            />
          )}
        </SidebarFilter>
      </div>
      <SidebarCart />
    </LayoutTienda>
  )
}

export default Tienda
