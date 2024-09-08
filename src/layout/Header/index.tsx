import { Link, NavLink, useNavigate } from "react-router-dom"
import Button from "../../ui/Button"
function Header() {
  let location = useNavigate()
  return (
    <>
    {/* DESKOP NAVBAR */}
      <header className="bg-black text-white  sm:hidden  md:flex ">
        <div className="container mx-auto py-5 flex gap-3 items-center ">
          <div className="font-bold text-[1.8rem] w-fit md:block xs:hidden">
            <Link to={'/'} className="">
              <img className="h-[13vh] md:w-[35vw] object-contain" src="../logo/console game-endlogo.png" alt="" />
            </Link>
          </div>
          {/* flex  justify-evenly gap-5 w-[70%] text-[1.5rem] place-items-center */}
          <nav className="md:flex md:justify-between md:text-[1.4rem] gap-4 items-center xs:hidden w-[75%]">
              <NavLink to={'/'}>Əsas səhifə</NavLink>
              <NavLink className={({ isActive }) =>
                isActive ? "active" : ""
              } to={'/about'}>Haqqımızda</NavLink>
              <NavLink className={({ isActive }) =>
                isActive ? "active" : ""
              } to={'/games'}>Oyunlar</NavLink>
              <NavLink className={({ isActive }) =>
                isActive ? "active" : ""
              } to={'/news'}>Xəbərlər</NavLink>
              <NavLink className={({ isActive }) =>
                isActive ? "active" : ""
              } to={'/servis'}>Servis</NavLink>
              <Button txt1="Əlaqə" txt2="" onClick={() => location('/contact')} still="rounded-[10px] p-3" />
            </nav>
{/* PHONE NAVBAR */}
          {/* <header className="w-full bg-green h-fit sm:flex md:hidden ">

            <div className="flex justify-between items-center bg-red p-3">
              <div className="">
               <p className="text-[1.5rem] ">Console Game</p>
              </div>
              <i className="fa-solid fa-bars border w-fit h-fit font-bold text-[1.5rem] p-3"></i>
            </div>
            <nav className="flex flex-col gap-5 text-[1.4rem] text-center">
              <NavLink to={'/'}>Əsas səhifə</NavLink>
              <NavLink className={({ isActive }) =>
                isActive ? "active" : ""
              } to={'/about'}>Haqqımızda</NavLink>
              <NavLink className={({ isActive }) =>
                isActive ? "active" : ""
              } to={'/games'}>Oyunlar</NavLink>
              <NavLink className={({ isActive }) =>
                isActive ? "active" : ""
              } to={'/news'}>Xəbərlər</NavLink>
              <NavLink className={({ isActive }) =>
                isActive ? "active" : ""
              } to={'/servis'}>Servis</NavLink>
              <Button txt1="Əlaqə" txt2="" onClick={() => location('/contact')} still="rounded-[10px] p-3" />
            </nav>
          </header> */}

        </div>
      </header>
    </>

  )
}

export default Header
