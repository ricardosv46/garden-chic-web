import Contador from "../../components/contador"
import { useInView } from "react-intersection-observer";
import { IQuePodemosHacer } from 'src/data/dataGeneral'
interface IProps {
  data: IQuePodemosHacer
}

const QuePodemosHacer = ({ data }: IProps) => {
  const { ref, inView } = useInView();
  return (
    <div className="py-32 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 xl:px-32">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-center text-2xl text-primary-600 font-extralight md:text-4xl lg:text-6xl">{data.tittle || ''}</h2>
          <p className="text-gray-600 lg:w-8/12 lg:mx-auto">{data.subtittle || ''}          </p>
        </div>
        <div ref={ref} className="grid gap-12 items-center md:grid-cols-3">
          {data.items.map((obj, i) =>
            <div className="space-y-4 text-center" key={i}>
              <div>
                <h2 className="text-7xl text-primary-600">
                  {inView ? <Contador duration={obj.duration || 1000} num={obj.count || '20'} /> : '0'}

                </h2>
                <h3 className="text-xl font-bold text-primary-600">{obj.type || ''}</h3>
                <h4 className="text-lg">{obj.tittle || ''}</h4>
                <span className="block text-sm text-gray-500">{obj.subtittle || ''}</span>
              </div>
            </div>
          )}
          {/* <div className="space-y-4 text-center">
            <div>
              <h2 className="text-7xl text-primary-600">
                {inView ? <Contador duration={1000} num={'30'} /> : '0'}
              </h2>
              <h3 className="text-xl font-bold text-primary-600">Especialista</h3>
              <h4 className="text-lg">Jardines Verticales</h4>
              <span className="block text-sm text-gray-500"></span>
            </div>
          </div>
          <div className="space-y-4 text-center">
            <div>
              <h2 className="text-7xl text-primary-600">
                {inView ? <Contador duration={1500} num={'15'} /> : '0'}
              </h2>
              <h3 className="text-xl font-bold text-primary-600"></h3>
              <h4 className="text-lg"></h4>
              <span className="block text-sm text-gray-500"></span>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default QuePodemosHacer