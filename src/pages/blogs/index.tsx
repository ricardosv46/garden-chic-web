import Image from 'next/image'
import React from 'react'
import BannerBlogs from '../../components/banner/bannerBlogs'
import CarBlog from '../../components/cards/cardBlog'
import Container from '../../components/container'

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

const dataBlogs = [
  {
    img: 'blog1.jpg',
    title: 'Gardening',
    subtitle: 'Modern house with minimalistic landscape',
    description:
      'Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically...'
  },
  {
    img: 'blog2.jpg',
    title: 'Design',
    subtitle: 'Growing dahlias – what you need to know',
    description:
      'Holistically pontificate installed base portals after maintainable products. Phosfluorescently engage worldwide methodologies with technology. TTaking...'
  },
  {
    img: 'blog3.jpg',
    title: 'Landscaping',
    subtitle: 'Modern house with minimalistic landscape',
    description:
      'Collaboratively administrate turnkey channels whereas virtual e-tailers. Objectively seize scalable metrics whereas proactive e-services. Collaboratively...'
  },
  {
    img: 'blog4.jpg',
    title: 'Plants',
    subtitle: 'The greatest gardening mistake you can make?',
    description:
      'Energistically scale future-proof core competencies vis-a-vis impactful experiences. Dramatically synthesize integrated schemas with networks. Takin...'
  },
  {
    img: 'blog5.jpg',
    title: 'Gardening',
    subtitle: '10 easy care evergreen pots for year round impact',
    description:
      'Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with clickthroughs. Holisticly predominate...'
  },
  {
    img: 'blog6.jpg',
    title: 'Gardening',
    subtitle: '10 small garden planting ideas that really work',
    description:
      'Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive. Dynamically...'
  },
  {
    img: 'blog7.jpg',
    title: 'Decorations',
    subtitle: 'Plants that spread – the key to easy gardening',
    description:
      'Quickly maximize timely deliverables for real-time schemas. Dramatically maintain clicks-and-mortar solutions without functional solutions. Objectively innovat...'
  },
  {
    img: 'blog8.jpg',
    title: 'Gardening',
    subtitle: 'Where is the best place for the vegetable garden?',
    description:
      'Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with clickthroughs. Objectively innovate...'
  },
  {
    img: 'blog9.jpg',
    title: 'Gardening',
    subtitle: 'Low-maintenance plants for beautiful gardens',
    description:
      'Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically...'
  },
  {
    img: 'blog10.jpg',
    title: 'Gardens',
    subtitle: 'John Doe on how to find garden design inspiration',
    description:
      'Professionally fashion wireless leadership rather than prospective experiences. Energistically myocardinate clicks-and-mortar testing procedures...'
  },
  {
    img: 'blog11.jpg',
    title: 'Flowers',
    subtitle: '6 inspiring city garden ideas from London',
    description:
      'Dynamically reinvent market-driven opportunities and ubiquitous interfaces. Energistically fabricate an array of niche markets through products. Credibly...'
  },
  {
    img: 'blog12.jpg',
    title: 'Landscaping',
    subtitle: 'What you need to know about growing cannas',
    description:
      'Quickly coordinate e-business applications through revolutionary catalysts for change. Seamlessly underwhelm optimal testing procedures...'
  }
]

const Blogs = () => {
  return (
    <>
      <BannerBlogs />
      <Container>
        <div className='flex flex-col items-center justify-center '>
          <ol className='hidden flex-col lg:flex-row gap-3 mt-24 lg:flex'>
            {blogs.map((item) => (
              <li
                key={item}
                className='text-gray-900 text-lg font-semibold border-b-2 ease-in-out duration-300 border-white hover:border-primary-300 hover:cursor-pointer'
              >
                {item}
              </li>
            ))}
          </ol>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  justify-items-center mt-16 '>
            {dataBlogs.map((item) => (
              <CarBlog {...item} />
            ))}
          </div>
          <div className='mt-10'></div>
        </div>
      </Container>
    </>
  )
}

export default Blogs
