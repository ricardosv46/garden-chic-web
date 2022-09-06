import Contador from "../../components/contador"
import { Show } from '@components/show'
import { useInView } from "react-intersection-observer";
import { IQuePodemosHacer } from 'src/data/dataGeneral'
interface IProps {
  data: IQuePodemosHacer
}

const QuePodemosHacer = ({ data }: IProps) => {
  const { ref, inView } = useInView();
  return (
    <div className="py-10 md:py-16 bg-gray-50 " >
      <div className="container mx-auto px-6 md:px-12 xl:px-32 ">
        <div className="mb-10 text-center">
          <h2 className="mb-4 text-center text-xl text-primary-600  md:text-3xl lg:text-6xl font-garden_bold">{data.tittle || ''}</h2>
          {data.subtittle.split('//').map((obj, k) => <p key={k} className="text-gray-600 lg:w-8/12 lg:mx-auto font-garden_regular text-xs md:text-xl ">{obj || ''}</p>)}
        </div>
        <div ref={ref} className="grid gap-12 items-center md:grid-cols-3">
          {data.items.map((obj, i) =>
            <div className="space-y-4 text-center" key={i}>
              <div className="flex flex-col gap-2">
                <h2 className="lg:text-7xl md:text-4xl text-2xl text-primary-600">
                  {inView ? <Contador className="font-garden_bold" duration={obj.duration || 1000} num={obj.count || '20'} /> : '0'}
                </h2>
                <h3 className="md:text-xl text-base font-garden_medium text-primary-600">{obj.type || ''}</h3>
                {/* <h4 className="text-lg">{obj.tittle || ''}</h4> */}
                <span className="block text-xs md:text-base text-gray-600 font-garden_regular">{obj.subtittle || ''}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div >
  )
}

export default QuePodemosHacer