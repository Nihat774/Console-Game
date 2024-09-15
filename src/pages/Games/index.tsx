import React, { useEffect, useState } from "react"
import { IAllGames } from "../../components/MyTypes"
import { Link, useNavigate } from "react-router-dom"

function GamesPage() {
    const url = "http://localhost:3000/allgames"
    const [games, setGames] = useState([])
    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => setGames(data))
    }, [])
    const [search, setSearch] = useState('');
    const filteredGames = games.filter(({ name }: IAllGames) =>
        name.toLowerCase().includes(search.toLowerCase())
    )
    const gameLocation = useNavigate()
    return (
        <>
            <div className="bg-orange px-3 items-center">

                {/* <div className="  flex md:flex-row lg:flex-row  lg:justify-between md:h-[12vh] lg:h-[15vh] xs:flex-col xs:p-4 xs:gap-7 xs:justify-around items-center  xs:h-fit ">
                    <div><Link to={'/'} className="md:text-[2rem] xs:text-[1.7rem]  text-black font-bold">consolegame.com</Link></div>
                    <div>
                        <input
                            type="text"
                            maxLength={10} value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className=" md:w-[30vw] xs:w-[45vw] xs:py-2 lg:h-[10vh] md:h-[7vh] md:px-3 rounded-[15px] px-2 text-[1.4rem]"
                            placeholder="Oyun Axtar" />
                    </div> */}

                <div className="  md:flex md:flex-row md:h-[12vh] lg:h-[15vh] xs:flex-col xs:p-4 xs:gap-7 justify-around items-center  xs:h-fit ">
                    <Link to={'/'} className="md:text-[2rem] xs:text-[1.7rem]  text-black font-bold">consolegame.com</Link>
                    <input
                        type="text"
                        maxLength={10} value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className=" md:w-[30vw] xs:w-[45vw] xs:py-2 lg:h-[10vh] md:h-[7vh] md:px-3 rounded-[15px] px-2 text-[1.4rem]"
                        placeholder="Oyun Axtar" />

                </div>
            </div>
            <div className="grid lg:grid-cols-4 md:gap-3 xs:grid-cols-1 xs:place-items-center xs:gap-3 md:grid-cols-2 py-5">
                {
                    filteredGames.map(({ name, img, oldPrice, price, id }: IAllGames) => {
                        return (
                            <React.Fragment key={id}>
                                <div className="border w-fit rounded-[10px]">

                                    <div onClick={() => gameLocation(`${id}`)}><img className="cursor-pointer md::w-[20vw] md:h-[60vh]  xs:w-[90vw] xs:h-[55vh] md:object-cover xs:object-fill  rounded-[10px]" src={img} alt="" /></div>

                                    {/* <div><img className="md:w-[50vw] md:h-[45vh]  xs:w-[90vw] xs:h-[55vh] md:object-cover xs:object-fill  rounded-[10px]" src={img} alt="" /></div> */}

                                    <div className="flex justify-between py-3 px-1">
                                        <p className="text-[1.4rem] font-bold ">{name}</p>
                                        <div className="flex gap-2 ">
                                            <del className="text-zinc-500 py-1 text-[.9rem]">{oldPrice}</del>
                                            <p className="text-[1.4rem] font-bold">{price}</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between py-2">
                                        <div className="rating ">
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange" />
                                            <input
                                                type="radio"
                                                name="rating-2"
                                                className="mask mask-star-2 bg-orange"
                                            />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange" />
                                        </div>

                                        <div className="flex gap-4 text-[1.4rem] px-2">
                                            <i className="fa-regular fa-thumbs-up hover:text-red" ></i>
                                            <i className="fa-regular fa-thumbs-down hover:text-red"></i>
                                        </div>
                                    </div>
                                </div>
                            </React.Fragment>
                        )
                    })
                }
            </div>
        </>
    )

}

export default GamesPage
