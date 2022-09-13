/* eslint-disable jsx-a11y/alt-text */
import { ProyectItem } from '@components/proyects'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import { FiChevronRight } from 'react-icons/fi'
import CardProductosRelacionados from '../../components/cards/cardProducto/cardProductosRelacionados'
import Container from '../../components/container'
import { dataProyects } from '../../data/dataProyectos'
import { servicios } from '../../data/dataServicios'
import { useProductos } from '../../services/useProducto'

interface PropsStatic {
  url: {
    title: string
    position: string
    img: string
    icon: string
    url: string,
    content: { tittle: string, subcontent: string[] }[]
  }
}
interface IProps {
  slug: string
}

interface IDataBlog {
  params: IProps
}
const DetalleServicios = ({ url }: PropsStatic) => {
  const router = useRouter()
  let slug = router.query.slug
  const { db: productos, loading } = useProductos()

  const serviciosLat = [{
    text: 'Paisajismo',
    url: 'paisajismo'
  },
  {
    text: 'Jardines Verticales',
    url: 'jardinesverticales'
  },
  {
    text: 'Mantenimiento',
    url: 'mantenimientodeareasverdes'
  },
  {
    text: 'Techos Verdes',
    url: 'techosverdes'
  },
  {
    text: 'Sistema de Riego Tecnificado',
    url: 'sistemaderiegotecnificado'
  },
  {
    text: 'Impermeabilización',
    url: 'impermeabilización'
  }, {
    text: 'Vivero',
    url: 'vivero'
  }
  ]

  const SiguienteServicio = () => {
    const IndexServicio = servicios.map((data) => data.title).indexOf(url.title)
    if (IndexServicio === servicios.length - 1) {
      router.push(`/servicios/${servicios[0].url}`)
    } else {
      router.push(`/servicios/${servicios[IndexServicio + 1].url}`)
    }
  }


  return (
    <>
      <div className='relative w-full h-[600px]  '>
        <Image
          src={`/imgs/servicios/${url.img!}`}
          objectPosition='top'
          layout='fill'
          objectFit='cover'
        />
        <span className='absolute top-0 w-full h-full  bg-black opacity-50'></span>
        <div className='mx-auto my-0 w-[90%] xl:w-[1280px] h-full flex  justify-center items-center text-white relative z-10'>
          <h2 className='text-center text-2xl md:text-4xl lg:text-6xl text-white font-garden_bold relative z-10 '>
            {url.title || ''}
          </h2>
        </div>
      </div>
      <Container className='flex flex-col-reverse lg:flex lg:flex-row py-10 gap-10 mt-10  '>
        <div className='flex flex-col gap-x-2 sm:gap-x-7 w-full lg:w-3/12 p-5 lg:px-3'>
          <p className='text-garden-option1 text-xl md:text-3xl font-garden_medium pb-5'>Servicios</p>
          {serviciosLat.map((item, i) => (
            <div key={i} className='border-b-2 border-b-gray-200 py-4 lg:py-5'>
              <p
                onClick={() => router.push(`/servicios/${item.url}`)}
                className='text-gray-600 text-xs md:text-base lg:text-xl font-semibold hover:text-primary-300 ease-in-out duration-300 cursor-pointer'
              >
                {item.text}
              </p>
            </div>
          ))}

          <p className='text-garden-option1 text-xl md:text-3xl font-garden_medium py-5'>
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
                )
              } else {
                return null
              }
            })}
        </div>
        <div className='w-full lg:w-9/12'>
          {url?.content.map((obj, i) => (
            <article className='' key={i}>
              <h2 className='text-garden-option1 font-garden_medium leading-none text-xl md:text-3xl lg:text-5xl ' >
                {obj.tittle || ''}
              </h2>
              <div className='text-gray-600 font-garden_regular text-[14px] md:text-base lg:text-lg font-light py-7 text-justify'>
                {obj?.subcontent?.map((obj2, j) => <p className='pb-4' key={j}>
                  {obj2 || ''}
                </p>)}

              </div>
            </article>))}


          <div className='mt-3'>
            <h2 className='text-garden-option1 font-garden_medium leading-none text-xl md:text-3xl lg:text-5xl'>
              Proyectos
            </h2>
            <div className=' grid grid-cols-1 sm:grid-cols-2  gap-5  justify-items-center mt-10 '>
              {dataProyects.map((item, index) => {
                if (index < 5) {
                  return (
                    <ProyectItem key={index} data={item} />
                  )
                }
              })}
              <div
                className=' flex flex-row items-center justify-center gap-4 w-full aspect-[4/3] sm:aspect-auto max-h-[441px] cursor-pointer hover:border rounded-lg'
                onClick={() => SiguienteServicio()}
              >
                <div className='aspect-square w-1/5 relative '>
                  <Image
                    layout='fill'
                    src='/icons/png/iconProyect.png'
                    alt='imagen proyecto'
                    className='absolute '
                  />
                </div>
                <div className='flex flex-row text-sm lg:text-base  text-primary-800 font-garden_regular '>
                  <span>Ver más</span>
                  <FiChevronRight className='my-auto' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container >
    </>
  )
}

export default DetalleServicios

export async function getStaticProps({ params }: IDataBlog) {
  const data = servicios.find((item) => item.url === params.slug)

  return {
    props: {
      url: data
    }
  }
}

export async function getStaticPaths() {
  const paths = servicios.map((post) => ({ params: { slug: post.url } }))
  return {
    paths,
    fallback: false
  }
}
