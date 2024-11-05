"use client";
import NavBar from "./ui/navBar";
import Image from "next/image";
import Input from "./ui/input";
import Link from "next/link";
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
    <section className="flex flex-col  justify-center items-center gap-4  w-screen h-screen  rounded-md p-4">
      <h2 className="text-3xl self-start">¡Bienvenido a SePrice!</h2>
      <form className="flex flex-col gap-4 bg-slate-500 w-1/2 rounded-md p-2">
        <Input label="Tipo de documento" type={"text"} />
        <Input label="Numero de documento" type={"number"} />
        <div>
          <Input label="Password" type={showPassword} id="password" />
          <button onClick={togglePassword}>Mostrar Contraseña</button>
        </div>

        <button className="bg-slate-400 p-2 rounded-md">Iniciar Sesion</button>

        <p>
          No tienes cuenta? <Link href="/registrarse">Registrate</Link>
        </p>
      </form>
    </section>
  );
}
