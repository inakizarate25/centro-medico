import NavBar from "../ui/navBar";
import Footer from "../ui/footer";

export default function Layout({ children }) {
  return (
    <div className="flex h-full  flex-col">
      <div className="w-full h-[60px]">
        <NavBar />
      </div>
      <div className=" p-3 w-full">{children}</div>
      <Footer />
    </div>
  );
}
