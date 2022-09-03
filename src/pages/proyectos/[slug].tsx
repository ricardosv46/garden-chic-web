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
            <div className='flex justify-center w-[110px] h-[110px] absolute bottom-6 z-10 mx-auto rounded-full bg-white cursor-pointer'>
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

        <div className='flex flex-col lg:flex-row gap-5 pb-10  justify-center items-center '>
          <Image
            width={660}
            height={600}
            src={`/imgs/proyects/${proyecto?.pathname!}/${proyecto?.imgBefore!}`}
            alt='imagen proyecto'
            className='rounded-lg'
          />

          <div className='flex-1 py-10 lg:p-10 flex flex-col justify-center '>
            <h2 className='text-center text-2xl md:text-3xl lg:text-5xl text-primary-300 font-bold'>
              Antes
            </h2>
            {proyecto?.antes!.map((obj, i) => (
              <p key={i} className='text-justify text-sm md:text-base text-primary-300 font-semibold pt-4'>
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
              <RenderIcons data={proyecto?.servicios!} tittle='Servicios' />
            </Show>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Detalle
