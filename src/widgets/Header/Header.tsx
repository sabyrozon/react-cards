import ReactLogo from '../../shared/assets/icons/react-logo.svg'
import Button from "../../shared/ui/Button";

const Header = () => {
  return (
    <header className="w-full h-[70px] bg-[var(--main-bg-color)] px-[30px] flex justify-between items-center shadow-[0_2px_8px_0_rgba(0,0,0,0.2)]">
      <p className="uppercase flex justify-center items-center gap-[10px] cursor-pointer select-none">
        <img
          src={ReactLogo}
          alt="React Cards Logo"
          width="30"
          height="30"
          loading="lazy"
        />
        <span>React Cards</span>
      </p>

      <div className="flex justify-center items-center gap-[10px]">
        <Button>Add Card</Button>
        <Button>Login</Button>
      </div>
    </header>
  )
}

export default Header