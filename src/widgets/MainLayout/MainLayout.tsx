import Header from "../Header";
import Footer from "../Footer";

const MainLayout = () => {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="h-full flex flex-col grow justify-between gap-5 overflow-y-hidden">
        <main className="px-[20px]">main</main>
        <Footer />
      </div>
    </div>
  )
}

export default MainLayout
