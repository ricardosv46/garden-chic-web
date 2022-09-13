import { RenderItems, RenderIcons, RenderItem } from '@components/proyects'
import { Show } from '@components/show'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import { FiChevronRight } from 'react-icons/fi'
import BannerProyectos from '../../components/banner/bannerProyectos'
import Container from '../../components/container'
import { dataProyects } from '../../data/dataProyectos'
const exem = ['1', '2', '3']
const Detalle = () => {
  const router = useRouter()
  let slug = router.query.slug
  const proyecto = dataProyects.find((item) => item.pathname === slug)

  const SiguienteProyecto = () => {
    const IndexProyecto = dataProyects.indexOf(proyecto!)
    if (IndexProyecto === dataProyects.length - 1) {
      router.push(`/proyectos/${dataProyects[0].pathname}`)
    } else {
      router.push(`/proyectos/${dataProyects[IndexProyecto + 1].pathname}`)
    }
  }
  return (
    <>
      <Container>
        <div className='flex flex-col items-center justify-center mt-10'>
          <h2 className='text-center text-2xl md:text-3xl lg:text-5xl  text-garden-option1 font-garden_bold'>{proyecto?.dataHover || ''}</h2>
        </div>
        <div className='relative '>
          <div className='flex justify-center py-10'>
            <Image
              width={1260}
              height={850}
              src={`/imgs/proyects/${proyecto?.pathname!}/${proyecto?.img!}`}
              alt='imagen proyecto'
              className='rounded-lg'
            />

          </div>
          <div className='flex justify-center '>
            <div
           onClick={() => router.push(`/servicios/${proyecto?.servicios?.url}`)}
              className='flex justify-center w-[70px] h-[70px] sm:w-[70px] sm:h-[70px] md:w-[150px]  md:h-[150px] border drop-shadow-xl absolute bottom-2 md:-bottom-6 z-10 mx-auto rounded-full bg-white cursor-pointer'
            >
              <Image
                layout='fill'
                src='/icons/png/iconProyect_circle.png'
                alt='imagen proyecto'
                className='rounded-lg'
              />
            </div>
          </div>
        </div>

        <div className='flex flex-col-reverse xl:flex-row gap-5 pb-10 pt-4 sm:pt-16 justify-center items-start '>
          <div
            className='bg-gradiant-secondary rounded-lg mx-auto xl:mx-0'
          >
            <Image
              width={660}
              height={600}
              src={`/imgs/proyects/${proyecto?.pathname!}/${proyecto?.imgBefore!}`}
              alt='imagen proyecto'
              className='rounded-lg -z-10'
            />
          </div>

          <div className='flex-1 py-10 lg:p-10 flex flex-col justify-center '>
            <h2 className='text-center text-2xl md:text-3xl lg:text-5xl text-garden-option1 font-garden_bold'>
              Antes
            </h2>
            {proyecto?.antes!.map((obj, i) => (
              <p key={i} className='text-justify text-sm xl:text-xl text-garden-option3 font-garden_regular pt-4'>
                {obj}
              </p>))}
          </div>
        </div>
      </Container>
      <Show condition={typeof proyecto?.pathname !== 'undefined' && typeof proyecto?.imgAfter !== 'undefined'}>
        <h2 className='text-center  text-2xl md:text-3xl lg:text-5xl text-garden-option1 font-garden_bold z-10 drop-shadow-2xl shadow-primary-800 pb-10'>Después</h2>
        <BannerProyectos img={`/imgs/proyects/${proyecto?.pathname!}/${proyecto?.imgAfter!}`} />
      </Show>
      <Container className='flex flex-col'>
        <div className='flex flex-col lg:flex-row gap-5 py-20'>
          <Show condition={typeof proyecto?.desafios !== 'undefined'}>
            <RenderItem data={proyecto?.desafios!} tittle='Desafíos y Resultados' />
          </Show>
          <div className='flex flex-col gap-5 w-full lg:w-1/3'>
            <Show condition={typeof proyecto?.servicios !== 'undefined'}>
              <RenderIcons data={proyecto?.serviciosIcon!} tittle='Servicios' />
            </Show>
          </div>
        </div>
        <div className='flex mt-4 flex-row w-full h-auto  justify-end mb-4 md:mb-8 xl:mb-20'>
          <div className='w-full flex flex-row justify-end lg:justify-start lg:w-1/3 lg:px-10 '>
            <div className='w-[40px] h-[40px] relative  lg:w-[64px] lg:h-[64px] '>
              <Image
                // width={40}
                // height={40}
                layout='fill'
                src='/icons/png/iconProyect.png'
                alt='imagen proyecto'
                className='absolute '
              // className='rounded-lg'
              />
            </div>
            <div
              className='flex flex-row text-sm md:text-base lg:text-xl text-garden-option1 font-garden_medium my-auto ml-2 cursor-pointer'
              onClick={() => SiguienteProyecto()}
            >
              <span>Ver más</span>
              <FiChevronRight className='my-auto ml-2' />
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Detalle
