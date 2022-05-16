import type { NextPage } from 'next'
import Banner from '../components/banner'
import Header from '../components/header'
import Contactanos from '../sections/Home/contactanos'
import NuestrosClientes from '../sections/Home/nuestrosClientes'
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
			<NuestrosClientes />
			<Contactanos />
		</div>
	)
}

export default Home
