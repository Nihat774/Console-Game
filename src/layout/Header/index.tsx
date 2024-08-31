import { Link, NavLink } from "react-router-dom"
import Button from "../../ui/Button"

function Header() {
  return (
    <>
      <header className="bg-black text-white  py-7 ">
        <div className="container mx-auto flex justify-between items-center">
          <div className="font-bold text-[1.8rem] w-[40%] "><Link to={'/'} >LOGO</Link></div>
          <div className="flex justify-evenly gap-4 w-[60%] text-[1.5rem] place-items-center">
            <NavLink to={'/'}>Home</NavLink>
            <NavLink className={({ isActive }) =>
              isActive ? "active" : ""
            } to={'/about'}>About us</NavLink>
            <NavLink className={({ isActive }) =>
              isActive ? "active" : ""
            } to={'/games'}>Games</NavLink>
            <NavLink className={({ isActive }) =>
              isActive ? "active" : ""
            } to={'/news'}>News</NavLink>
            <Button txt="Contact us" still="rounded-[10px] p-3" />
          </div>
        </div>
      </header>
    </>

  )
}

export default Header
