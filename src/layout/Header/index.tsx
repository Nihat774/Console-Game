import { Link, NavLink } from "react-router-dom"
import Button from "../../ui/Button"
import React from "react"
function Header() {
  return (
    <>
      <header className="bg-black text-white  py-7 ">
        <div className="container mx-auto flex justify-between items-center">
          <div className="font-bold text-[1.8rem] w-[25%] ">
            {/* LOGO HISSESI*/}
            <Link to={'/'} >
            <img className="h-[13vh] w-[35vw] object-contain" src="../logo/console game-endlogo.png" alt="" />
            </Link>
            {/*  */}
          </div>
          <div className="flex justify-evenly gap-5 w-[70%] text-[1.5rem] place-items-center">
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
            <Button txt="Əlaqə" still="rounded-[10px] p-3" />
          </div>
        </div>
      </header>
    </>

  )
}

export default Header
