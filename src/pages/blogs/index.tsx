import Paginator from '@components/Paginator'
import { Show } from '@components/show'
import { useCategoriaBlogsSlug } from '@services/useCategoriaBlogsSlug'
import Image from 'next/image'
import React, { useState } from 'react'
import BannerBlogs from '../../components/banner/bannerBlogs'
import CarBlog from '../../components/cards/cardBlog'
import Container from '../../components/container'
import { dataBlogs } from '../../data/dataBlogs'
import { useBlogs } from '../../services/useBlogs'
import { useCategoriaBlogs } from '../../services/useCategoriaBlogs'

const blogs = ['All', 'Decorations', 'Design', 'Flowers', 'Gardening', 'Gardens', 'Landscaping', 'Plants']

const Blogs = () => {
  const [state, setState] = useState({
    pagina: 1,
    numeroPagina: 9
  })
  const [categoria, setCategoria] = useState('')
  const { db: blogs, loading: loadingBlogs, nTotal: nTotalBlogs } = useBlogs({ ...state, estado: 'Activado' })
  const { db: categorias } = useCategoriaBlogs()
  const {
    db: categoriasSlug,
    loading: loadingBlogsCategoria,
    nTotal: nTotalBlogsCategoria
  } = useCategoriaBlogsSlug({ ...state, estado: 'Activado', slug: categoria })

  return (
    <>
      <BannerBlogs />
      <Container>
        <Show
          condition={!loadingBlogs && !loadingBlogsCategoria}
          isDefault={
            <div className='flex justify-center py-10'>
              <svg className='w-8 h-8 animate-spin text-garden-option1' xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 24 24'>
                <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth={4}></circle>
                <path
                  className='opacity-75'
                  // fill='currentColor'
                  d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'></path>
              </svg>
            </div>
          }>
          <div className='flex flex-col items-center justify-center '>
            <ol className='flex-col hidden gap-3 mt-24 lg:flex-row lg:flex'>
              <li
                onClick={() => setCategoria('')}
                className='py-1 text-lg font-semibold duration-300 ease-in-out border-b-2 border-white text-garden-option3 hover:border-garden-option1 hover:cursor-pointer'>
                Todos
              </li>
              {categorias.map((item) => (
                <li
                  key={item?.slug}
                  onClick={() => {
                    setCategoria(item.slug!)
                    setState({
                      pagina: 1,
                      numeroPagina: 9
                    })
                  }}
                  className='py-1 text-lg font-semibold duration-300 ease-in-out border-b-2 border-white text-garden-option3 hover:border-garden-option1 hover:cursor-pointer'>
                  {item?.titulo}
                </li>
              ))}
            </ol>
            <div className='grid grid-cols-1 gap-5 mt-16 md:grid-cols-2 lg:grid-cols-3 justify-items-center '>
              {(categoria.length > 0 ? categoriasSlug : blogs)?.map((item, index) => (
                <CarBlog
                  CategoriaBlog={item?.CategoriaBlog!}
                  imagenPrincipal={item?.imagenPrincipal!}
                  descripcionCorta={item?.descripcionCorta}
                  slug={item?.slug}
                  titulo={item?.titulo}
                  key={index}
                />
              ))}
            </div>
            <div className='flex justify-center w-full pt-10'>
              <Paginator {...{ state, setState, nTotal: categoria.length > 0 ? nTotalBlogsCategoria : nTotalBlogs }} />
            </div>
            <div className='mt-10'></div>
          </div>
        </Show>
      </Container>
    </>
  )
}

export default Blogs
