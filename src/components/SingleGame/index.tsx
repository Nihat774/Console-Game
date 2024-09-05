import { useState } from 'react'
import { useParams } from 'react-router-dom'

function SingleGamePage() {
  const [games, setGames] = useState([])
  fetch("http://localhost:3000/allgames")
    .then((response) => response.json())
    .then((data) => setGames(data))
  const { id } = useParams()
  console.log(id);

  return (
    <>
      {games.map(({ name, img, about, price, oldPrice }) => {
        <>
        <h1 className='bg-red'>SINGLE PAGE</h1>
          <div>
            <div>
              <img src={img} alt="" />
            </div>

            <div>
              <p>{name}</p>
              <p>{about}</p>
              <span>{oldPrice}</span>
              <span>{price}</span>
            </div>
          </div>
        </>
      })}
    </>
  )
}

export default SingleGamePage
