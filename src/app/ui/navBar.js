import NavLinks from "./navLinks";
import Link from "next/link";
export default function NavBar() {
  return (
    <nav className="bg-[#8DE2DD] shadow-md">
    <div className="container mx-auto p-4 flex justify-between items-center">
    <a href="/" className="text-lg font-bold">Clinica SePrice</a>
    <div className="flex items-center space-x-4">
      <a href="#" className="text-[#fff] bg-[#185A7B] px-4 py-1 rounded-md font-medium hover:text-gray-900">Solicitar turno</a>
      <a href="#" className="text-[#185A7B] font-medium hover:text-gray-900">Mis datos</a>
      <a href="#" className="text-[#185A7B] font-medium hover:text-gray-900">Mis turnos</a>
      <a href="#" className="text-[#185A7B] font-medium hover:text-gray-900">Recetas</a>
      <a href="#" className="text-[#185A7B] px-4 py-2 rounded-md">¡Hola Gomez Ana!</a>
    </div>
  </div>
  </nav>
  );
}