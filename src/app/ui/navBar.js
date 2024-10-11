import NavLinks from "./navLinks";
import Link from "next/link";
export default function NavBar() {
  return (
    <div className="w-screen relative bg-cyan-400 flex flex-row justify-between ">
      <div className=" w-full flex flex-row justify-between">
        <NavLinks />
      </div>
    </div>
  );
}
