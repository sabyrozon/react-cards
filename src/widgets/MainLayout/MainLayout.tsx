import Header from "../Header";
import Footer from "../Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <main className="flex-1 px-[20px] overflow-y-auto">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout
