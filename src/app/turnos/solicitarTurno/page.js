export default function Turnos() {
    return (
      <div>
        <nav className="bg-[#8DE2DD] shadow-md">
        </nav>
        <section className="container mx-auto p-4">
          <div className="flex items-center justify-center space-x-10">
            <h2 className="text-[#185A7B] font-semibold mb-4">1-Especialidad</h2>
            <h2 className="text-[#6C6363] font-medium mb-4">2-Profesional y horario</h2>
            <h2 className="text-[#6C6363] font-medium mb-4">3-Mis datos</h2>
            <h2 className="text-[#6C6363] font-medium mb-4">4-Pago y confirmacion</h2>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <label htmlFor="especialidad" className="block text-sm font-medium text-gray-700">Especialidad</label>
              <select id="especialidad" name="especialidad" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                <option>Seleccionar especialidad</option>
                {/* Opciones */}
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="practica" className="block text-sm font-medium text-gray-700">Practica médica</label>
              <select id="practica" name="practica" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                <option>Seleccionar práctica</option>
                {/* Opciones */}
              </select>
            </div>
            <div className="flex justify-end space-x-4">
              <button className="bg-white-500 text-black px-4 py-2 rounded-md border-solid border-2 border-black hover:text-gray-900">CANCELAR</button>
              <button className="bg-[#2E9D97] text-white px-4 py-2 rounded-md border-solid border-2 border-black hover:text-gray-900">CONTINUAR</button>
            </div>
          </div>
        </section>
      </div>
    );
  };

