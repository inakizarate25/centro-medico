"use client";
import Input from "../ui/input";
import { useState } from "react";

export default function Home() {
  const [showPassword, setShowPassword] = useState("password");

  const togglePassword = (e) => {
    e.preventDefault();
    if (showPassword === "password") {
      setShowPassword("text");
    } else {
      setShowPassword("password");
    }
  };

  return (
    <section className="flex flex-col  justify-center items-center gap-4  w-screen h-full  rounded-md p-4">
      <h2 className="text-3xl self-start">¡Bienvenido a SePrice!</h2>
      <form className="flex flex-col gap-4 bg-slate-500 w-1/2 rounded-md p-2">
        <h3 className="text-4xl text-slate-100">Registrarse</h3>
        <Input label="Nombre" type={"text"} />
        <Input label="Apellido" type={"text"} />
        <Input label="Email" type={"email"} />
        <Input label="Tipo de documento" type={"text"} />
        <Input label="Numero de documento" type={"number"} />
        <div>
          <Input label="Password" type={showPassword} id="password" />
          <button onClick={togglePassword}>Mostrar Contraseña</button>
        </div>

        <button className="bg-slate-400 p-2 rounded-md">Registrarse</button>
      </form>
    </section>
  );
}
