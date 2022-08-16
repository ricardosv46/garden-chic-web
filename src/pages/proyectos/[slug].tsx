import { Show } from '@components/show'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import IconBuilding from '../../../public/icons/IconBuilding'
import IconHouse from '../../../public/icons/IconHouse'
import BannerProyectos from '../../components/banner/bannerProyectos'
import Container from '../../components/container'
import { dataProyectos, dataProyects } from '../../data/dataProyectos'

const Detalle = () => {
  const router = useRouter()
  let slug = router.query.slug
  const proyecto = dataProyects.find((item) => item.pathname === slug)

  return (
    <>
      <Container>
        <div className='relative'>
          <div className='flex justify-center py-20'>
            <Image
              width={1260}
              height={850}
              src={`/imgs/proyects/${proyecto?.pathname!}/${proyecto?.img!}`}
              alt='imagen proyecto'
              className='rounded-lg'
            />
          </div>
          <div className='flex justify-center'>
            <div className='flex justify-center  w-[110px] h-[110px] absolute  bottom-6 z-10 mx-auto rounded-full bg-white cursor-pointer'>
              <Image
                width={70}
                height={70}
                src='/imgs/works/envato.svg'
                alt='imagen proyecto'
                className='rounded-lg'
              />
            </div>
          </div>
        </div>

        <div className='flex flex-col lg:flex-row gap-5 py-10 justify-center items-center '>
          <Image
            width={660}
            height={600}
            src={`/imgs/proyects/${proyecto?.pathname!}/${proyecto?.imgBefore!}`}
            alt='imagen proyecto'
            className='rounded-lg'
          />

          <div className='flex-1 py-10 lg:p-10 flex flex-col justify-center items-center'>
            <h2 className='text-center text-5xl text-primary-300 font-bold'>
              Antes
            </h2>
            <p className='text-justify  text-lg text-primary-300 font-semibold pt-10'>
              {proyecto?.proceso}
            </p>
          </div>
        </div>
      </Container>
      <BannerProyectos img={`/imgs/proyects/${proyecto?.pathname!}/${proyecto?.imgBefore!}`} />
      <Container>
        <div className='flex flex-col lg:flex-row gap-5 py-20'>
          <Show condition={typeof proyecto?.servicios !== 'undefined'}>
            <div className='flex-1'>
              <h3 className='lg:text-center text-2xl text-primary-300 font-bold'>
                Servicios
              </h3>
              <ul className='lg:text-left text-lg text-primary-300 font-semibold pt-5'>
                {proyecto?.servicios?.map((obj, i) => <li key={i}>{obj}</li>)}

              </ul>
              {/* <p className=''>
                {proyecto?.servicios || ''}
              </p> */}
            </div>
          </Show>
          <div className='flex-1'>
            <h3 className='lg:text-center text-2xl text-primary-300 font-bold'>
              Servicios
            </h3>
            <p className='lg:text-center text-lg text-primary-300 font-semibold pt-5'>
              We prepare planting plans outlining plant varieties, numbers,
              spacing and plant care, followed by the sourcing and selection of
              plants and finally the setting out and planting of plants. We work
              with a small selection of specialist trade plant nurseries to
              source the best possible plant specimens.
            </p>
          </div>
          <div className='flex-1 flex flex-col gap-5'>
            <h3 className='lg:text-center text-2xl text-primary-300 font-bold'>
              Services
            </h3>
            <div className='flex items-center  gap-14 lg:px-16'>
              <div className='bg-primary-100 h-20 w-20 rounded-full flex justify-center items-center hover:bg-primary-300 ease-in-out duration-300 hover:fill-white cursor-pointer'>
                <IconBuilding fill='#445378' width={30} height={30} />
              </div>
              <p className='text-lg text-primary-300 font-bold'>Urbano</p>
            </div>
            <div className='flex items-center  gap-14 lg:px-16'>
              <div className='bg-primary-100 h-20 w-20 rounded-full flex justify-center items-center hover:bg-primary-300 ease-in-out duration-300 hover:fill-white cursor-pointer'>
                <IconHouse fill='#445378' width={30} height={30} />
              </div>
              <p className='text-lg text-primary-300 font-bold'>
                Mantenimiento
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Detalle
