import Contador from "../../components/contador"
import { useInView } from "react-intersection-observer";

const QuePodemosHacer = () => {
  const { ref, inView } = useInView();

  return (
    <div className="py-32 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 xl:px-32">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-center text-2xl text-primary-600 font-extralight md:text-4xl lg:text-6xl">Cuidar, conservar y mantener saludable tus áreas verdes es nuestra pasión.</h2>
          <p className="text-gray-600 lg:w-8/12 lg:mx-auto">Nos especializamos en el diseño e implementación de áreas verdes,
            creamos hermosos y únicos jardines. Podemos ayudarte a hacer realidad el jardín
            de tus sueños.
          </p>
        </div>
        <div ref={ref} className="grid gap-12 items-center md:grid-cols-3">
          <div className="space-y-4 text-center">
            <div>
              <h2 className="text-7xl text-primary-600">
                {inView ? <Contador duration={2000} num={'10'} /> : '10'}

              </h2>
              <h3 className="text-xl font-bold text-primary-600">Años</h3>
              <h4 className="text-lg">Proyectos Realizados</h4>
              <span className="block text-sm text-gray-500">Más de 150 proyectos realizados. En estos 6 años en el mercado nacional.</span>
            </div>
          </div>
          <div className="space-y-4 text-center">
            <div>
              <h2 className="text-7xl text-primary-600">
                {inView ? <Contador duration={1000} num={'30'} /> : '30'}
              </h2>
              <h3 className="text-xl font-bold text-primary-600">Especialista</h3>
              <h4 className="text-lg">Jardines Verticales</h4>
              <span className="block text-sm text-gray-500">Más de 800 m2 de implementación de jardines verticales.</span>
            </div>
          </div>
          <div className="space-y-4 text-center">
            <div>
              <h2 className="text-7xl text-primary-600">
                {inView ? <Contador duration={1500} num={'15'} /> : '15'}
              </h2>
              <h3 className="text-xl font-bold text-primary-600">Premios</h3>
              <h4 className="text-lg">Clientes Satisfechos</h4>
              <span className="block text-sm text-gray-500">Más de 50 clientes confían en nuestros servicios.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuePodemosHacer