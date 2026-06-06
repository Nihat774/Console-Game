import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

import Button from "../../ui/Button";
import Login from "../../ui/LoginRegister";
import Mode from "../../Mode";

import { useMode } from "../../Context";
import { navLinks } from "../../constant/Navbar";
import { navlinkType } from "../../components/MyTypes";

function Header() {
  const navigate = useNavigate();

  const { darkMode } = useMode();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* DESKTOP NAVBAR */}

      <header
        className={`pl-14 py-5 items-center sticky top-0 z-40 xs:hidden ${
          darkMode ? "bg-black text-white" : "bg-white text-black"
        } md:flex justify-between`}
      >
        <div className="flex justify-between items-center">
          <div className="font-bold text-[1.8rem] items-center lg:flex xs:hidden">
            <Link to="/">
              <img
                className="h-[12vh] object-cover w-[15vw]"
                src="/logo/faiconLogo.svg"
                alt="Game logo"
              />
            </Link>
          </div>

          <nav
            className={`${
              darkMode ? "text-white" : "text-black"
            } md:flex justify-between md:text-[1.2rem] 2xl:text-[1.8rem] px-5 lg:font-semibold gap-9 items-center xs:hidden`}
          >
            {navLinks.map(({ name, path }: navlinkType) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  isActive ? "text-orange underline" : ""
                }
              >
                {name}
              </NavLink>
            ))}

            <Button
              txt1="Əlaqə"
              txt2=""
              onClick={() => navigate("/contact")}
              still="hover:text-orange rounded-[10px] p-2 hover:bg-transparent"
            />
          </nav>

          <div className="flex items-center gap-5">
            <Mode />
            <Login />
          </div>
        </div>
      </header>

      {/* MOBILE NAVBAR */}

      <header
        className={`w-full shadow-lg ${
          darkMode ? "bg-black text-white" : "bg-white text-black"
        } h-fit xs:sticky xs:top-0 z-50 lg:hidden`}
      >
        <div className="flex justify-between items-center px-3 py-2">
          <NavLink
            to="/"
            className={`text-[1.5rem] ${
              darkMode ? "text-white" : "text-black"
            } font-bold`}
          >
            Console Game
          </NavLink>

          <div className="flex items-center gap-3">
            <Mode />

            <i
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className={`cursor-pointer ${
                isMenuOpen
                  ? `fa-solid fa-xmark text-[1.5rem] p-3 ${
                      darkMode ? "text-white" : "text-black"
                    }`
                  : `fa-solid fa-bars text-[1.5rem] p-3 ${
                      darkMode ? "text-white" : "text-black"
                    }`
              }`}
            />
          </div>
        </div>

        <nav
          className={`flex flex-col gap-5 xs:py-3 xs:text-[1.5rem] xs:font-semibold ${
            darkMode ? "text-white" : "text-black"
          } text-center ${isMenuOpen ? "flex" : "hidden"}`}
        >
          {navLinks.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                isActive ? "text-orange underline" : ""
              }
            >
              {item.name}
            </NavLink>
          ))}

          <div className="flex justify-center">
            <Button
              txt1="Əlaqə"
              txt2=""
              onClick={() => {
                navigate("/contact");
                setIsMenuOpen(false);
              }}
              still="rounded-[10px] w-fit text-white"
            />
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;