import { Link, NavLink, useNavigate } from "react-router-dom"
import Button from "../../ui/Button"
import { useState } from "react"
function Header() {
  let location = useNavigate()
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked)
  }
  return (
    <>
      {/* DESKOP NAVBAR  */}

        <header className="bg-black text-white  xs:hidden  lg:flex ">

          <div className="container mx-auto py-5 flex gap-3 items-center ">
            <div className="font-bold text-[1.8rem] w-fit lg:block xs:hidden">
              <Link to={'/'} className="">
                <img className="h-[13vh] lg:w-[35vw] object-contain" src="../logo/console game-endlogo.png" alt="" />
              </Link>
            </div>

            {/* <nav className="md:flex md:justify-between md:text-[1.4rem] gap-4 items-center xs:hidden w-[75%] text-white lg:text-[1.8rem] "> */}

            <nav className="lg:flex lg:justify-between lg:text-[1.6rem] lg:font-semibold gap-4 items-center xs:hidden w-[75%] text-white">

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
          </div>
        </header>
        {/* PHONE NAVBAR */}
        <header className="w-full bg-white  border h-fit xs:sticky xs:top-0 z-50 lg:hidden ">

          <div className="flex justify-between items-center  p-3">
            <div className="">
              <p className="text-[1.5rem] text-black font-bold">Console Game</p>
            </div>
            <i onClick={handleClick} className={clicked ? "fa-solid fa-xmark border w-fit h-fit font-bold text-[1.5rem] p-3 text-black border-black" : "fa-solid fa-bars border w-fit h-fit font-bold text-[1.5rem] p-3 text-black border-black"}></i>
          </div>
          <nav className={`flex flex-col gap-5  xs:py-3 xs:text-[1.5rem] xs:font-semibold text-black h-fit text-center ${clicked ? "flex" : "hidden"}`}>
            <NavLink to={'/'} >Əsas səhifə</NavLink>
            <NavLink className={({ isActive }) =>
              isActive ? "active" : ""
            } to={'/about'}>Haqqımızda</NavLink>
            <NavLink className={({ isActive }) =>
              isActive ? "active" : ""
            } to={'/games'}>Oyunlar</NavLink>
            <NavLink className={({ isActive }) =>
              isActive ? "active" : ""
            } to={'/news'}>Komandamız</NavLink>
            <NavLink className={({ isActive }) =>
              isActive ? "active" : ""
            } to={'/servis'}>Servis</NavLink>
            <div className="flex justify-center">
              <Button txt1="Əlaqə" txt2="" onClick={() => { location('/contact') }} still="rounded-[10px] p-3 w-fit" />
            </div>
          </nav>
        </header>
      </>

      )
}

      export default Header
