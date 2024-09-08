import { useEffect, useState } from "react"
import { IAllGames } from "../../components/MyTypes"
import { Link } from "react-router-dom"

function GamesPage() {
    const url = "http://localhost:3000/allgames"
    const [games, setGames] = useState([])
    fetch(url)
        .then((response) => response.json())
        .then((data) => setGames(data))
    return (
        <>
            <div className="bg-red flex md:flex-row xs:flex-col xs:p-4 xs:gap-3 justify-around items-center md:h-[20vh] xs:h-fit">
                <Link to={'/'} className="text-[1.7rem] text-black font-bold">consolegame.com</Link>
                <input type="text" maxLength={7} className="md:w-[30vw] xs:w-[45vw] h-[10vh] rounded-[15px] p-2 text-[1.4rem]" placeholder="Oyun Axtar" />
            </div>
            <div className="grid lg:grid-cols-4 md:gap-3 xs:grid-cols-1 xs:place-items-center xs:gap-3 md:grid-cols-2">
                {
                    games.map(({ name, img, oldPrice, price }: IAllGames) => {
                        return (
                            <>
                                {/* <Link to={'/'}> */}
                                <div className="border w-fit rounded-[10px]">
                                    <div><img className="md::w-[20vw] md:h-[60vh]  xs:w-[90vw] xs:h-[55vh] md:object-cover xs:object-fill  rounded-[10px]" src={img} alt="" /></div>
                                    <div className="flex justify-between py-3 px-1">
                                        <p className="text-[1.4rem] font-bold ">{name}</p>
                                        <div className="flex gap-2 ">
                                            <del className="text-stone py-1 text-[.9rem]">{oldPrice}</del>
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
                                        <i className="fa-regular fa-thumbs-up hover:text-red"></i>
                                        <i className="fa-regular fa-thumbs-down hover:text-red"></i>
                                        </div>
                                    </div>
                                </div>
                                {/* </Link> */}
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}

export default GamesPage
