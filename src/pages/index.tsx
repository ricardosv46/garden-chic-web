import type {NextPage} from 'next'
import Banner from '../components/banner'
import Header from '../components/header'

const Home: NextPage = () => {
	return (
		<div>
			<Header />
			<Banner />
		</div>
	)
}

export default Home
