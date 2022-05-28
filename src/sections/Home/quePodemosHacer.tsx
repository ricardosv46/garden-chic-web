import Contador from "../../components/contador"

const QuePodemosHacer = () => {

  return (
    <div className="py-32 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 xl:px-32">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-center text-2xl text-primary-600 font-extralight md:text-4xl lg:text-6xl">¡Nosotros nos encargamos de todo por ti!</h2>
          <p className="text-gray-600 lg:w-8/12 lg:mx-auto">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates totam nam dolores cum optio neque qui asperiores explicabo</p>
        </div>
        <div className="grid gap-12 items-center md:grid-cols-3">
          <div className="space-y-4 text-center">
            <div>
              <h2 className="text-7xl text-primary-600">
                <Contador duration={1000} num={'10'} />
              </h2>
              <h3 className="text-xl font-bold text-primary-600">Años</h3>
              <h4 className="text-lg">Experiencia</h4>
              <span className="block text-sm text-gray-500">Lorem ipsum dolor sit amet</span>
            </div>
          </div>
          <div className="space-y-4 text-center">
            <div>
              <h2 className="text-7xl text-primary-600">
                <Contador duration={2000} num={'30'} />
              </h2>
              <h3 className="text-xl font-bold text-primary-600">Especialista</h3>
              <h4 className="text-lg">En diseño de paisajismo</h4>
              <span className="block text-sm text-gray-500">Lorem ipsum dolor sit amet</span>
            </div>
          </div>
          <div className="space-y-4 text-center">
            <div>
              <h2 className="text-7xl text-primary-600">15</h2>
              <h3 className="text-xl font-bold text-primary-600">Premios</h3>
              <h4 className="text-lg">Empresa ganadora</h4>
              <span className="block text-sm text-gray-500">Lorem ipsum dolor sit amet</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuePodemosHacer