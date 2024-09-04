import React from "react"
import {AllGames} from "../../components/MyDataGames"
import { Link, useLocation } from "react-router-dom"
function Games() {

  return (
    <>
      <div className="flex justify-between items-center px-4 h-[15vh] bg-orange">
        <p className="text-[2rem] font-bold">Games</p>
        <Link to={'/'} className="text-[1.8rem] font-bold text-gradient">consolegame.com</Link>
        <form >
          <input type="text" className="userGame border rounded-[10px] p-2 text-[1.4rem] w-[35vw] " placeholder="search game" maxLength={15} />
          <button><i className="fa-solid fa-magnifying-glass text-[1.6rem]  p-2 absolute right-[2%] top-[26.5%]"></i></button>
        </form>
      </div>

      <div className="grid grid-cols-4 border gap-4 p-3">
        <AllGames />
      </div>

    </>
    
  )

}
export default Games
