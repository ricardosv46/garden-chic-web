import type { NextPage } from 'next'
import Banner from '../components/banner'
import Header from '../components/header'
import QuePodemosHacer from '../sections/Home/quePodemosHacer'
import Works from '../sections/works'

const Home: NextPage = () => {
  return (
    <div>
      <Banner />
      <QuePodemosHacer />

      <Works />
    </div>
  )
}

export default Home
