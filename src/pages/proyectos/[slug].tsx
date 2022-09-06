import { RenderItems, RenderIcons, RenderItem } from '@components/proyects'
import { Show } from '@components/show'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
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
          <div className='flex justify-center py-14'>

            <Image
              width={1260}
              height={850}
              src={`/imgs/proyects/${proyecto?.pathname!}/${proyecto?.img!}`}
              alt='imagen proyecto'
              className='rounded-lg'
            />

          </div>
          <div className='flex justify-center'>
            <div className='flex justify-center w-[50px] h-[50px] md:w-[110px]  md:h-[110px] absolute bottom-6 z-10 mx-auto rounded-full bg-white cursor-pointer '>
              <Image
                layout='fill'
                src='/icons/png/iconProyect.png'
                alt='imagen proyecto'
                className='rounded-lg'
              />
            </div>
          </div>
        </div>

        <div className='flex flex-col lg:flex-row gap-5 pb-10  justify-center items-center '>
          {/* <div className='w-20 h-20 border-4 border-black  max-w-[660px] max-h-[600px]' style={{ backgroundImage: `url(/imgs/proyects/${proyecto?.pathname!}/${proyecto?.imgBefore!})` }} /> */}
          <div className='inline-flex  bg-gradiant-secondary rounded-lg'>
            <Image
              width={660}
              height={600}
              src={`/imgs/proyects/${proyecto?.pathname!}/${proyecto?.imgBefore!}`}
              alt='imagen proyecto'
              className='rounded-lg  -z-10'
              color='black'
            />
          </div>

          <div className='flex-1 py-10 lg:p-10 flex flex-col justify-center '>
            <h2 className='text-center text-2xl md:text-3xl lg:text-5xl text-primary-300 font-garden_bold'>
              Antes
            </h2>
            {proyecto?.antes!.map((obj, i) => (
              <p key={i} className='text-justify text-sm md:text-base text-primary-300 font-garden_regular pt-4'>
                {obj}
              </p>))}
          </div>
        </div>
      </Container>
      <Show condition={typeof proyecto?.pathname !== 'undefined' && typeof proyecto?.imgAfter !== 'undefined'}>
        <BannerProyectos img={`/imgs/proyects/${proyecto?.pathname!}/${proyecto?.imgAfter!}`} />
      </Show>
      <Container>
        <div className='flex flex-col lg:flex-row gap-5 py-20'>
          <Show condition={typeof proyecto?.desafios !== 'undefined'}>
            <RenderItem data={proyecto?.desafios!} tittle='Desafíos y Resultados' />
          </Show>
          <div className='flex-1 flex flex-col gap-5'>
            <Show condition={typeof proyecto?.servicios !== 'undefined'}>
              <RenderIcons data={proyecto?.serviciosIcon!} tittle='Servicios' />
            </Show>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Detalle
