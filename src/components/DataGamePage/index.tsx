import { useEffect, useState } from "react"
import React from 'react'
import { Link } from "react-router-dom";
import { IData } from "../MyTypes";
function GamePageData() {
    const [allgames, setGames] = useState([])
    useEffect(() => {
        fetch("http://localhost:3000/allgames")
            .then((response) => response.json())
            .then((data) => setGames(data))
    })
    return (
        <>

            {
                allgames.map(({ img, name, oldPrice, price, to }: IData) => {
                    return (
                        <>
                            <Link to={to} className="">
                                <div className="flex justify-center">
                                    <img className="w-[23vw] h-[55vh] object-fit rounded-[10px] border" src={img} alt="" />
                                </div>
                                
                                <div className="flex justify-between py-2">
                                <p className="text-[1.4rem] font-bold ">{name}</p>
                                <div className="flex">
                                    <del className="text-[1.1rem] pt-1">{oldPrice}</del>
                                    <p className="text-[1.4rem] font-bold px-2">{price}</p>
                                </div>
                                </div>
                            </Link>
                        </>
                    )
                })
            }
        </>
    )
}

export default GamePageData;
