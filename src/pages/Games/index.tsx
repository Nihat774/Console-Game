import GamePageData from "../../components/DataGamePage"
import React, { useEffect, useState } from 'react'
function Games() {
  // function getUserGame(){
  //   const [allgames, setGames] = useState([])
  //   useEffect(() => {
  //       fetch("http://localhost:3000/allgames")
  //           .then((response) => response.json())
  //           .then((data) => setGames(data))
  //   })
  //   const myInput = document.querySelector(".userGame")
  //   console.log("salam");
    
  // }

  return (

    <>
      <div className="flex justify-between items-center px-4 h-[15vh] bg-orange">
        <p className="text-[2rem] font-bold">Games</p>

        <div>
          <input type="text" className="userGame border rounded-[10px] p-2 text-[1.4rem] w-[35vw] " placeholder="search game" maxLength={15} />
          <button><i className="fa-solid fa-magnifying-glass text-[1.6rem]  p-2 absolute right-[2%] top-[25%]"></i></button>
        </div>
      </div>

      <div className="grid grid-cols-4 border gap-4 p-3">
        <GamePageData />

      </div>

    </>
  )
}

export default Games
