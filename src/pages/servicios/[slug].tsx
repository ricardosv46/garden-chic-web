import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import BannerContactos from '../../components/banner/bannerContatcos'
import CardProductosRelacionados from '../../components/cards/cardProducto/cardProductosRelacionados'
import Container from '../../components/container'
import { dataProductos } from '../../data/dataProductos'
import { dataProyectos } from '../../data/dataProyectos'
import { servicios } from '../../data/dataServicios'
const DetalleServicios = () => {
  const router = useRouter()
  let slug = router.query.slug

  console.log(slug)

  const res = servicios.filter(item => item.url === slug)

  const serviciosLat = [
    'Jardines',
    'Urbano',
    'Mantenimiento',
    'Eventos'
  ]

  return (
    <>
      <BannerContactos titulo={slug} rutaImg={`servicios/${res[0].img}`} />
      <Container className='flex flex-col-reverse lg:flex lg:flex-row py-10 gap-10  '>
        <div className='flex flex-col gap-x-2 sm:gap-x-7 w-full lg:w-3/12 p-5 lg:px-3'>
          <p className='text-gray-900 text-2xl font-bold pb-5'>Servicios</p>
          {serviciosLat.map((item) => (
            <div key={item} className='border-b-2 border-b-gray-200 py-5'>
              <p
                onClick={() => router.push(`/servicios/${item.toLowerCase()}`)}
                className='text-gray-700 text-lg font-semibold hover:text-primary-300 ease-in-out duration-300 cursor-pointer'>
                {item}
              </p>
            </div>
          ))}

          <p className='text-gray-900 text-2xl font-bold py-5'>
            Productos similares
          </p>
          {dataProductos.map((item, i) => {
            if (i < 5) {
              return <CardProductosRelacionados key={i} {...item} />
            } else {
              return null
            }
          })}
        </div>
        <div className='w-full lg:w-9/12'>
          <article className="">
            <h2 className='text-primary-800 font-medium leading-none text-[42px] sm:text-5xl '>
              ¿Cómo podemos ayudar?
            </h2>
            <div className='text-gray-700 text-lg font-light py-7'>
              <p className='pb-4'>Desde el trabajo en el sitio hasta la mampostería de ladrillo y piedra personalizada, Gardeny
                puede instalar su proyecto con sus propios artesanos talentosos y equipos de paisajismo de
                calidad. Utilizando nuestro amplio conocimiento de suelos, plantas, materiales de jardinería y
                técnicas de construcción, estamos bien calificados para proyectos de cualquier tamaño. Empleamos
                todos nuestros recursos para lograr los mejores resultados posibles, sin importar la escala.
              </p>
              <p className='pb-4'>
                Nuestras distintivas características de agua introducirán sonido y movimiento en su experiencia
                de paisaje. El elemento agua liberará su estrés y le presentará la esencia de la naturaleza
                misma. No hay dos jardines acuáticos iguales, pero la mayoría son similares. Construidas con
                componentes de calidad y materiales naturales, nuestras fuentes de agua complementan cualquier
                entorno.
              </p>
              <p className='pb-4'>
                Las plantas y los árboles de Gardeny se cultivan en nuestro propio vivero certificado de Carolina
                del Norte en Durham. Nuestro profesional de plantas certificado de Carolina del Norte y el
                horticultor del personal han colaborado para crear uno de los mejores recursos de viveros en el
                Triángulo. Ofrecemos plantas y árboles de inversión en jardines que generarán dividendos en
                crecimiento, belleza y valor a lo largo de la vida de su jardín.
              </p>
            </div>
          </article>

          <div className="mt-3">
            <h2 className='text-primary-800 font-medium leading-none text-[42px] sm:text-5xl '>
              Trabajos
            </h2>

            <div className=' grid grid-cols-1 sm:grid-cols-2  gap-5  justify-items-center mt-10 '>
              {dataProyectos.map((item, index) => {
                if (index < 5) {
                  return (
                    <div
                      key={item.title}
                      className='hover:cursor-pointer relative lg:shadow-sm'
                      onClick={() => router.push(`/proyectos/${item.img}`)}
                    >
                      <div className='hidden lg:flex bg-white text-primary-300 absolute top-0 w-full h-full z-10  justify-center items-center opacity-0 hover:opacity-100 transition-all duration-500 ease-out pt-10 hover:pt-0 rounded-lg'>
                        <div className='text-center p-5'>
                          <p className='text-2xl font-bold'>{item.title}</p>
                          <p className='text-lg pt-5 font-semibold'>
                            {item.description}
                          </p>
                        </div>
                      </div>
                      <div className='image-h-full-hack image-block-hack'>
                        <Image
                          width={800}
                          height={614}
                          src={`/imgs/works/${item.img}`}
                          className='transition-all duration-500 ease-out rounded-lg'
                          alt={item.title}
                        />
                      </div>
                      <div className='lg:hidden p-1'>
                        <p className='text-primary-600 text-xl font-semibold'>
                          {item.title}
                        </p>
                        <p className='text-gray-600'>{item.description}</p>
                      </div>
                    </div>
                  )
                }
              })}
            </div>
          </div>
        </div>


      </Container>
    </>
  )
}

export default DetalleServicios