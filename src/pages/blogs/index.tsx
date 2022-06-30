import Image from 'next/image'
import React from 'react'
import BannerBlogs from '../../components/banner/bannerBlogs'
import CarBlog from '../../components/cards/cardBlog'
import Container from '../../components/container'
import { dataBlogs } from '../../data/dataBlogs'
import { useBlogs } from '../../services/useBlogs'
import { useCategoriaBlogs } from '../../services/useCategoriaBlogs'

const blogs = [
  'All',
  'Decorations',
  'Design',
  'Flowers',
  'Gardening',
  'Gardens',
  'Landscaping',
  'Plants'
]

const Blogs = () => {
  const { db: blogs, loading } = useBlogs()
  const { db: categorias } = useCategoriaBlogs()

  return (
    <>
      <BannerBlogs />
      <Container>
        {loading ? (
          <p>cargando</p>
        ) : (
          <div className='flex flex-col items-center justify-center '>
            <ol className='hidden flex-col lg:flex-row gap-3 mt-24 lg:flex'>
              {categorias.map((item) => (
                <li
                  key={item.slug}
                  className='text-gray-900 text-lg font-semibold border-b-2 ease-in-out duration-300 border-white hover:border-primary-300 hover:cursor-pointer py-1'
                >
                  {item.titulo}
                </li>
              ))}
            </ol>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  justify-items-center mt-16 '>
              {blogs.map((item, index) => (
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
            <div className='mt-10'></div>
          </div>
        )}
      </Container>
    </>
  )
}

export default Blogs
