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
import { useBusqueda } from '@services/tienda/useBusqueda'
import { usePalabraClave } from '@services/tienda/usePalabraClave'
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
  const [filters, setFilters] = useState({
    precio: [] as any,
    categoriaSlug: '',
    tipoOrdenacion: 'desc',
    destacado: ''
  })
  const [palabraClave, setPalabraClave] = useState('')
  const { db: productos, loading: loadingProductos, nTotal } = useProductos({ ...state, estado: 'Activado' })
  const [isShow, setIsShow] = useState('productos')
  const { precios: dataPriceMinMax, loading: loadingPrecios } = usePrecios()
  const { db: categoriaProductos, loading: loadingCategoria } = useCategoriaProductos()
  const [precio, setPrecio] = useState({ min: 0, max: 0 })
  const { db: dbBusqueda, loading: loadingBusqueda, nTotal: nTotalB } = useBusqueda({ ...state, ...filters })
  const { db: dbPalabra, loading: loadingBusquedaPalabra, nTotal: nTotalP } = usePalabraClave({ ...state, palabraClave })
  const [resetFilter, setResetFilter] = useState(false)
  const { values, handleChange, resetForm, handleSubmit } = useFormik({
    initialValues: {
      palabraClave: '',
      categoria: '',
      order: 'desc',
      destacado: false
    },
    onSubmit: async (values) => {
      setIsShow('busqueda')
      setPalabraClave('')
      setFilters({
        categoriaSlug: values?.categoria,
        precio: [precio?.min, precio?.max],
        tipoOrdenacion: values?.order,
        destacado: values?.destacado ? 'Activado' : ''
      })

      setState({
        pagina: 1,
        numeroPagina: 12
      })
    }
  })

  useEffect(() => {
    if (!loadingPrecios) {
      setPrecio({ min: dataPriceMinMax?.minimo!, max: dataPriceMinMax?.maximo! })
      setFilters({ ...filters, precio: [dataPriceMinMax?.minimo!, dataPriceMinMax?.maximo!] })
    }
  }, [loadingPrecios])

  const handleClick = () => {
    setPalabraClave(values.palabraClave)
    setIsShow('palabra')
    setPrecio({ min: dataPriceMinMax?.minimo!, max: dataPriceMinMax?.maximo! })
    resetForm()
    setResetFilter(!resetFilter)
    setState({
      pagina: 1,
      numeroPagina: 12
    })
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
                setIsShow,
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
              {isShow === 'productos' &&
                productos.map((item: any) => (
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
              {isShow === 'busqueda' &&
                dbBusqueda.map((item) => (
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
                ))}

              {isShow === 'palabra' &&
                dbPalabra.map((item: any) => (
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
            </div>
          </Show>
          <div className='flex justify-center w-full pt-10'>
            <Paginator {...{ state, setState, nTotal: isShow === 'productos' ? nTotal : isShow === 'busqueda' ? nTotalB : nTotalP }} />
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
                setIsShow,
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
