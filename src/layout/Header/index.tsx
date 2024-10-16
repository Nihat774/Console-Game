import { Link, NavLink, useNavigate } from "react-router-dom";
import Button from "../../ui/Button";
import { useState } from "react";
import Login from "../../ui/LoginRegister";
import Mode from "../../Mode";
import { useMode } from "../../Context";

function Header() {
  let location = useNavigate();
  const [clicked, setClicked] = useState(false);
  const {darkMode} = useMode();
  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <>
      {/* DESKOP NAVBAR  */}
      <header className={` items-center sticky top-0 z-40  xs:hidden bg-black text-white ${darkMode?"bg-black text-white":"bg-white text-black"} lg:flex bg- p-5 justify-between`}>
        <div className="container mx-auto flex  justify-between items-center">
          <div className="font-bold text-[1.8rem]  items-center lg:flex xs:hidden">
            <Link to={"/"} className="hover:text-orange duration-500">
              <img className=" h-[12vh] object-cover  w-[15vw]" src="/logo/faiconLogo.svg"  alt="Game logo" />
            </Link>
          </div>

          <nav className={`${darkMode?"text-white":"text-black"} lg:flex lg:text-[1.5rem] 2xl:text-[1.8rem] px-5 lg:font-semibold gap-9 items-center xs:hidden`}>
            <NavLink to={"/"}>Əsas səhifə</NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to={"/about"}
            >
              Haqqımızda
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to={"/games"}
            >
              Oyunlar
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to={"/news"}
            >
              Komandamız
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to={"/servis"}
            >
              Servis
            </NavLink>
            <Button
              txt1="Əlaqə"
              txt2=""
              onClick={() => location("/contact")}
              still="hover:text-orange rounded-[10px] p-2 hover:bg-transparent"
            />
          </nav>
          <div className=" flex items-center gap-5">
            <Mode />
            <Login />
          </div>
        </div>
      </header>
      {/* PHONE NAVBAR */}
      <header className={`w-full shadow-lg ${darkMode?"bg-black text-white":"bg-white text-black"}  h-fit xs:sticky xs:top-0 z-50 lg:hidden `}>
        <div className="flex justify-between items-center  px-3 py-2">
          <div className="">
            <p className={`text-[1.5rem] ${darkMode?"text-white":"text-black"} font-bold`}>Console Game</p>
          </div>
         <div className="flex items-center gap-3">
          <Mode />
         <i
            onClick={handleClick}
            className={
              clicked
                ? `fa-solid fa-xmark  w-fit h-fit font-bold text-[1.5rem] p-3 ${darkMode?"text-white":"text-black "}`
                : `fa-solid fa-bars  w-fit h-fit font-bold text-[1.5rem] p-3 ${darkMode?"text-white ":"text-black "}`
            }
          ></i>
         </div>
        </div>
        <nav
          className={`flex  flex-col gap-5  xs:py-3 xs:text-[1.5rem] xs:font-semibold ${darkMode?"text-white":"text-black"} h-fit text-center ${
            clicked ? "flex" : "hidden"
          }`}
        >
          <NavLink to={"/"}>Əsas səhifə</NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to={"/about"}
          >
            Haqqımızda
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to={"/games"}
          >
            Oyunlar
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to={"/news"}
          >
            Komandamız
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to={"/servis"}
          >
            Servis
          </NavLink>
          <div className="flex justify-center">
            <Button
              txt1="Əlaqə"
              txt2=""
              onClick={() => {
                location("/contact");
              }}
              still="rounded-[10px] p-3 w-fit text-white"
            />
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
