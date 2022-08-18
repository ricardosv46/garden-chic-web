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
        <div
            className='hover:cursor-pointer relative lg:shadow-sm'
            onClick={() => router.push(`/proyectos/${data.pathname}`)}
        >
            <Show condition={typeof data.dataHover !== 'undefined'}>
                <div className='hidden lg:flex bg-white text-primary-300 absolute top-0 w-full h-full z-10  justify-center items-center opacity-0 hover:opacity-100 transition-all duration-500 ease-out pt-10 hover:pt-0 rounded-lg'>
                    <div className='text-center p-5'>
                        <p className='text-md pt-5 font-semibold'>
                            {data.dataHover || ''}
                        </p>
                    </div>
                </div>
            </Show>
            <div className='image-h-full-hack image-block-hack'>
                <Image
                    width={800}
                    height={614}
                    src={`/imgs/proyects/${data.pathname}/${data.img}`}
                    className='transition-all duration-500 ease-out rounded-lg'
                />
            </div>
            <div className='lg:hidden p-1'>
                {/* <p className='text-primary-600 text-xl font-semibold'>
            {item.title}
          </p> */}
                <p className='text-gray-600 text-center'>{data.dataHover || ''}</p>
            </div>
        </div>
    )
}
