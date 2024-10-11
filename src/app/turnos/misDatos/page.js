export default function Turnos() {
  const data = {
    nombre: "Iñaki",
    apellido: "Zarate",
    email: "inakizarate@gmail.com",
    nacimiento: "25/12/2001",
    sexo: "masculino",
    celular: "123456789",
  };
  return (
    <section className="flex flex-col gap-4 border-2 border-solid p-4">
      <h2 className="text-3xl border-b">Mis Datos</h2>

      <div className="grid grid-cols-2 gap-4">
        <p>
          <span className="font-bold text-xl">Nombre:</span> {data?.nombre}
        </p>
        <p>
          <span className="font-bold text-xl">Apellido:</span> {data?.apellido}
        </p>
        <p>
          <span className="font-bold text-xl">Email:</span> {data?.email}
        </p>
        <p>
          <span className="font-bold text-xl">Fecha de Nacimiento:</span>{" "}
          {data?.nacimiento}
        </p>
        <p>
          <span className="font-bold text-xl">Sexo:</span> {data?.sexo}
        </p>
        <p>
          <span className="font-bold text-xl">Celular:</span> {data?.celular}
        </p>
      </div>
      <button className="bg-green-500 text-slate-100 px-4 py-2 rounded-md">
        Modificar
      </button>
    </section>
  );
}
