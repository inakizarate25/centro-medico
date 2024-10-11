"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: "Home", href: "/turnos" },
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

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={`
              text-slate-950 font-bold px-5 py3 transition-all 
              ${pathname === link.href ? "bg-teal-600" : ""}
              `}
          >
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
