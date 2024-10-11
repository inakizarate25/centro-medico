"use client";

import Link from "next/link";

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  {
    name: "Mis turnos",
    href: "/turnos/misTurnos",
  },
  { name: "Mis datos", href: "/turnos/misDatos" },
  {
    name: "Solicitar turno",
    href: "/turnos/solicitarTurno",
  },
];

export default function CardLink() {
  return (
    <>
      {links.map((link) => {
        return (
          <div
            key={link.name}
            className="w-[300px] h-[190px] bg-cyan-500 flex justify-center items-center rounded-md"
          >
            <Link href={link.href} className=" px-5 py-3 text-center">
              <p className="block text-black font-bold">{link.name}</p>
            </Link>
          </div>
        );
      })}
    </>
  );
}
