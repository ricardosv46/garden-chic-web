import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import CardBlogsRelacionados from '../../components/cards/cardBlog/cardBlogsRelacionados'
import Compartir from '../../components/compartir'
import Container from '../../components/container'
import InputSearch from '../../components/inputs/InputSearch'
import { dataBlogs } from '../../data/dataBlogs'
const categorias = [
  'Decoraciones',
  'Diseño',
  'Flores',
  'Jardineria',
  'Jardines',
  'Paisaje',
  'Plantas'
]

const DetalleBlog = () => {
  const router = useRouter()
  let slug = router.query.slug

  const blog = dataBlogs.find((item) => item.img === slug)

  return (
    <Container className='lg:flex py-10 gap-10'>
      <div className='w-full lg:w-9/12'>
        <h1 className='text-gray-900 text-md font-semibold hover:text-primary-300 ease-in-out duration-300 cursor-pointer'>
          {blog?.title}
        </h1>
        <div className='bg-primary-300 w-5 h-0.5 my-2'></div>
        <p className='text-gray-900 text-5xl font-black   py-5'>
          {blog?.subtitle}
        </p>
        <p className='text-gray-900 text-md font-semibold py-5 mb-5'>
          January 10, 2018
          <span className='text-primary-300'>by BoldThemes</span>
        </p>
        <Image
          loading='lazy'
          className='cursor-pointer'
          src={`/imgs/blogs/${slug}`}
          width={1110}
          height={690}
          alt='blogs'
        />
        <p className='text-gray-900 text-md font-medium leading-8  mt-16 lg:pr-20'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          facilisis nulla sit amet nunc congue, eu rhoncus enim pulvinar.
          Curabitur eleifend, quam vel imperdiet viverra, orci odio viverra ex,
          vel tempus erat nulla vitae lacus. Sed suscipit quam eu diam blandit
          faucibus. Phasellus consectetur diam ex, quis posuere nisl interdum
          lacinia. Nulla porttitor egestas fringilla. Nam bibendum metus sed
          fringilla gravida. Morbi pharetra a eros ut porttitor. Sed facilisis
          turpis at justo ultricies, et sagittis lectus facilisis. Aliquam
          volutpat vestibulum lobortis. Integer lacinia, dui a eleifend
          venenatis, ante sem dapibus sem, ac faucibus lorem leo ac arcu. In sed
          molestie ex. Sed gravida volutpat nisi, sit amet ultrices tortor
          sodales eget. Pellentesque at aliquam quam, at commodo risus. Proin
          nulla orci, dignissim sed elit ac, euismod tincidunt nulla. Curabitur
          scelerisque dui tincidunt metus bibendum volutpat. Sed sollicitudin
          risus vitae finibus sagittis. Suspendisse non mauris rhoncus, aliquet
          ipsum eu, cursus elit. Aliquam sit amet bibendum nibh, vel bibendum
          mauris. Suspendisse fringilla lorem id orci fermentum, vel molestie
          leo interdum. Ut gravida gravida enim ut blandit. Maecenas congue,
          ipsum molestie pharetra ultrices, neque libero ultricies nulla, sit
          amet consequat risus arcu non justo. In cursus quis tortor et commodo.
          Suspendisse malesuada rhoncus justo id egestas. Nunc pharetra massa
          sed metus cursus sodales. Interdum et malesuada fames ac ante ipsum
          primis in faucibus. Curabitur mattis est diam, at mollis ligula mollis
          sed. Morbi vitae metus ligula. Nulla rhoncus urna nec felis tempor
          convallis. Nam at faucibus massa, cursus aliquam quam. Proin at
          laoreet sapien, sit amet condimentum libero. Nullam vel lacus at
          sapien egestas vestibulum. Vestibulum venenatis laoreet magna ut
          tristique. Curabitur molestie purus purus, nec blandit metus congue
          nec. Donec vitae sapien at augue tincidunt semper. Quisque eu maximus
          justo, quis maximus ante. Sed sed sem sem. Cras eu facilisis erat.
          Nullam nisl libero, euismod non magna ac, varius tincidunt nulla.
          Fusce ut interdum justo. Sed nec porttitor elit. Vivamus eu nisl
          mauris. Vestibulum ante ipsum primis in faucibus orci luctus et
          ultrices posuere cubilia curae; Nam ultricies magna eros, ut fringilla
          massa feugiat nec. Etiam accumsan at dui in porttitor. Nam at lectus
          tellus. Praesent eu diam sed elit fringilla blandit. Aenean orci
          sapien, dignissim eu tempor vel, euismod ac lectus. Quisque efficitur
          imperdiet sem, nec congue mi commodo quis. In sollicitudin erat ipsum,
          in rhoncus ante sodales quis. Donec sed elementum arcu, at congue
          lacus. Maecenas pharetra diam non tristique bibendum. Praesent tempor
          est quis sapien ornare, a dictum ex egestas. Suspendisse accumsan
          dolor non risus sodales aliquam. Proin et laoreet velit, sed lacinia
          diam. Vivamus volutpat, lectus sit amet aliquet maximus, lorem elit
          maximus lorem, sed pharetra orci leo vel dui. Vestibulum fringilla
          turpis vitae convallis condimentum. Nunc scelerisque ligula nisi, sed
          iaculis nulla interdum lacinia. Sed tincidunt est in elit hendrerit,
          sit amet cursus eros elementum. Curabitur elementum sapien id
          fringilla consectetur. Duis congue bibendum risus, id auctor augue
          pretium nec.
        </p>
        <div className='mt-5 flex justify-end lg:pr-20 py-10 lg:py-0'>
          <Compartir />
        </div>
      </div>

      <div className='w-full lg:w-3/12 px-3'>
        <InputSearch placeholder='Buscar' />
        <p className='text-gray-900 text-2xl font-bold py-10'>
          Publicaciones Recientes
        </p>
        {dataBlogs.map((item, i) => {
          if (i < 5) {
            return <CardBlogsRelacionados key={i} {...item} />
          } else {
            return null
          }
        })}
        <p className='text-gray-900 text-2xl font-bold py-10'>Categorias</p>
        {categorias.map((item) => (
          <div key={item} className='border-b-2 border-b-gray-200 py-5'>
            <p className='text-gray-700 text-xl font-semibold hover:text-primary-300 ease-in-out duration-300 cursor-pointer'>
              {item}
            </p>
          </div>
        ))}
      </div>
    </Container>
  )
}

export default DetalleBlog
