import type { NextPage } from 'next'
import Banner from '../components/banner'
import Header from '../components/header'
import QuePodemosHacer from '../sections/Home/quePodemosHacer'

const Home: NextPage = () => {
	return (
		<div>
			<Header />
			<Banner />
			<QuePodemosHacer />
		</div>
	)
}

export default Home
