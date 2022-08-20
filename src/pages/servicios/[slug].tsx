import { ProyectItem } from '@components/proyects'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import BannerContactos from '../../components/banner/bannerContatcos'
import CardProductosRelacionados from '../../components/cards/cardProducto/cardProductosRelacionados'
import Container from '../../components/container'
import { ServicioItem } from '@components/servicios'
import { dataProyectos, dataProyects } from '../../data/dataProyectos'
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

  // console.log({ url })

  const { db: productos, loading } = useProductos()

  // const serviciosLat = ['Jardines', 'Urbano', 'Mantenimiento', 'Eventos']
  const serviciosLat = ['Paisajismo',
    'Jardines Verticales',
    'Mantenimiento',
    'Techos Verdes',
    'Sistema de Riego Tecnificado',
    'Impermeabilización ',
    'Vivero'
  ]


  return (
    <>
      <div className='relative w-full h-[600px]  '>
        <Image
          src={`/imgs/servicios/${url?.img}`}
          // width={'100%'}
          // height={'100%'}
          objectPosition='top'
          layout='fill'
          objectFit='cover'
        />
        <span className='absolute top-0 w-full h-full  bg-black opacity-50'></span>
        <div className='mx-auto my-0 w-[90%] xl:w-[1280px]  h-full flex  justify-center items-center text-white relative z-10    md:justify-start  '>
          <h2 className='text-center text-5xl sm:text-8xl text-white font-bold relative z-10 capitalize'>
            {url.title || ''}
          </h2>
        </div>
      </div>
      <Container className='flex flex-col-reverse lg:flex lg:flex-row py-10 gap-10 mt-10  '>
        <div className='flex flex-col gap-x-2 sm:gap-x-7 w-full lg:w-3/12 p-5 lg:px-3'>
          <p className='text-gray-900 text-2xl font-bold pb-5'>Servicios</p>
          {serviciosLat.map((item, i) => (
            <div key={i} className='border-b-2 border-b-gray-200 py-5'>
              <p
                onClick={() => router.push(`/servicios/${item.split(' ').join('').toLowerCase()}`)}
                className='text-gray-700 text-lg font-semibold hover:text-primary-300 ease-in-out duration-300 cursor-pointer'
              >
                {item}
              </p>
            </div>
          ))}

          <p className='text-gray-900 text-2xl font-bold py-5'>
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
          {url?.content.map((obj, i) => <article className='' key={i}>
            <h2 className='text-primary-800 font-medium leading-none text-[42px] sm:text-5xl ' >
              {obj.tittle || ''}
            </h2>
            <div className='text-gray-700 text-lg font-light py-7'>
              {obj?.subcontent.map((obj2, j) => <p className='pb-4' key={j}>
                {obj2 || ''}
              </p>)}

            </div>
          </article>)}


          <div className='mt-3'>
            <h2 className='text-primary-800 font-medium leading-none text-[42px] sm:text-5xl '>
              Proyectos
            </h2>

            <div className=' grid grid-cols-1 sm:grid-cols-2  gap-5  justify-items-center mt-10 '>
              {servicios.map((item, index) => {
                if (index < 5) {
                  return (
                    // <div
                    //   key={index}
                    //   className='hover:cursor-pointer relative lg:shadow-sm'
                    //   onClick={() => router.push(`/proyectos/${item.img}`)}
                    // >
                    //   <div className='hidden lg:flex bg-white text-primary-300 absolute top-0 w-full h-full z-10  justify-center items-center opacity-0 hover:opacity-100 transition-all duration-500 ease-out pt-10 hover:pt-0 rounded-lg'>
                    //     <div className='text-center p-5'>
                    //       <p className='text-2xl font-bold'>{item.title}</p>
                    //       <p className='text-lg pt-5 font-semibold'>
                    //         {item.description}
                    //       </p>
                    //     </div>
                    //   </div>
                    //   <div className='image-h-full-hack image-block-hack'>
                    //     <Image
                    //       width={800}
                    //       height={614}
                    //       src={`/imgs/works/${item.img}`}
                    //       className='transition-all duration-500 ease-out rounded-lg'
                    //       alt={item.title}
                    //     />
                    //   </div>
                    //   <div className='lg:hidden p-1'>
                    //     <p className='text-primary-600 text-xl font-semibold'>
                    //       {item.title}
                    //     </p>
                    //     <p className='text-gray-600'>{item.description}</p>
                    //   </div>
                    // </div>
                    <ServicioItem key={index} data={item} />
                  )
                }
              })}
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
