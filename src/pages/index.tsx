import type { NextPage } from 'next'
import Banner from '../components/banner'
import Header from '../components/header'
import QuePodemosHacer from '../sections/Home/quePodemosHacer'
import Servicios from '../sections/Home/servicios'
import Works from '../sections/works'

const Home: NextPage = () => {
	return (
		<div>
			<Header />
			<Banner />
			<QuePodemosHacer />
			<Servicios />
			<Works />
		</div>
	)
}

export default Home
