import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import IconBuilding from '../../../public/icons/IconBuilding'
import IconHouse from '../../../public/icons/IconHouse'
import BannerProyectos from '../../components/banner/bannerProyectos'
import Container from '../../components/container'
import { dataProyectos } from '../../data/dataProyectos'

const Detalle = () => {
  const router = useRouter()
  let slug = router.query.slug
  const proyecto = dataProyectos.find((item) => item.img === slug)

  return (
    <>
      <Container className='py-10'>
        <h1 className='text-center text-5xl text-primary-300 font-bold'>
          {proyecto?.title}
        </h1>
        <div className='relative'>
          <div className='flex justify-center py-20'>
            <Image
              width={1260}
              height={850}
              src={`/imgs/works/${slug}`}
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
            src='/imgs/works/proyecto1.jpg'
            alt='imagen proyecto'
            className='rounded-lg'
          />

          <div className='flex-1 py-10 lg:p-10 flex flex-col justify-center items-center'>
            <h2 className='text-center text-5xl text-primary-300 font-bold'>
              Before
            </h2>
            <p className='text-justify  text-lg text-primary-300 font-semibold pt-10'>
              Gardeny have over 25 years of experience with garden design and
              landscaping. We work with you to transform your garden into an
              amazing space that you can enjoy for many years to come. For a
              little inspiration why not check out our before and after garden
              transformations below. Sometimes in the case of large established
              gardens, there is a simply a need to review what already exists,
              advice on the best way to improve it and tweak it. This may
              include designing new containers and window boxes, replanting or
              simply renewing furniture and sourcing cushions, garden lanterns
              or simply re-covering cushions and chair pads.
            </p>
          </div>
        </div>
      </Container>
      <BannerProyectos />
      <Container>
        <div className='flex flex-col lg:flex-row gap-5 py-20'>
          <div className='flex-1'>
            <h3 className='lg:text-center text-2xl text-primary-300 font-bold'>
              The Challenge
            </h3>
            <p className='lg:text-center text-lg text-primary-300 font-semibold pt-5'>
              At Gardeny, we take a cooperative approach, developing the design
              concept together with our clients, tailoring the service according
              to their taste, needs and budget. We can design everything from
              water features and pergolas and arbours to details such fencing,
              screens, trellis, benches, plant containers and window boxes.
            </p>
          </div>
          <div className='flex-1'>
            <h3 className='lg:text-center text-2xl text-primary-300 font-bold'>
              The Challenge
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
