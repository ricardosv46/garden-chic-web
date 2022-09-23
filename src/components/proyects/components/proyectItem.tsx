/* eslint-disable jsx-a11y/alt-text */
import { useRouter } from 'next/router'
import { EntitydataProyects } from 'src/data/dataProyectos'
import Image from 'next/image'
import { Show } from '@components/show'
interface Iprops {
	data: EntitydataProyects
}
export const ProyectItem = ({ data }: Iprops) => {
	const router = useRouter()

	return (
		<div className='relative hover:cursor-pointer lg:shadow-sm' onClick={() => router.push(`/proyectos/${data.pathname}`)}>
			<Show condition={typeof data.dataHover !== 'undefined'}>
				<div className='absolute top-0 z-10 items-center justify-center hidden w-full h-full pt-10 transition-all duration-500 ease-out bg-white rounded-lg opacity-0 lg:flex text-garden-option1 hover:opacity-100 hover:pt-0'>
					<div className='p-5 text-center'>
						<p className='pt-5 text-3xl font-garden_medium'>{data.dataHover || ''}</p>
					</div>
				</div>
			</Show>
			<div className='image-h-full-hack image-block-hack'>
				<Image
					width={800}
					height={614}
					src={`/imgs/proyects/${data.pathname}/${data.imgCarrusel}`}
					className='transition-all duration-500 ease-out rounded-lg'
				/>
			</div>
			<div className='p-1 lg:hidden'>
				{/* <p className='text-xl font-semibold text-garden-option1'>
            {item.title}
          </p> */}
				<p className='text-xl text-center text-garden-option1 font-garden_medium'>{data.dataHover || ''}</p>
			</div>
		</div>
	)
}
