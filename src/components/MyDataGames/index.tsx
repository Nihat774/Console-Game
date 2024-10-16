import  {  useState } from "react"
import { Link } from "react-router-dom"
import { IAllGames } from "../MyTypes"
export function AllGames() {
  const [games, setGames] = useState([])
  const url = "http://localhost:3000/allgames"
  fetch(url)
    .then((response) => response.json())
    .then((data) => setGames(data))
    return (
    <>
      {games.map(({id, name, img, oldPrice, price}:IAllGames) => { 
        return (
       
            <Link key={id} to={`${url}/${id}`}>
              <div>
                <img className="h-[40vh] w-[30vw] object-cover rounded-[10px]" src={img} alt="game-image" />
              </div>

              <div className="flex justify-between p-2">
                <div className="text-[1.5rem] font-bold">{name}</div>
                <div className="flex justify-end ">
                  <del className="text-[1.2rem] text-stone p-1">{oldPrice}</del>
                  <p className="text-[1.5rem] font-bold">{price}</p>
                </div>
              </div>
            </Link>
         
        )
})}
    </>
  )


}



