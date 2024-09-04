import React, { useState } from 'react'
import {  useParams } from 'react-router-dom'

function SingleGamePage() {
    const [games,setGames] = useState([])
    fetch("http://localhost:3000/allgames")
    .then((response)=>response.json())
    .then((data)=>setGames(data))
    const {id} = useParams()
    console.log(id);
    
  return (
    <>
      {games.map(({id,name})=>{
        <>
        <div>{name}</div>
        </>
      })}
    </>
  )
}

export default SingleGamePage
