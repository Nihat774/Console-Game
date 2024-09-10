import { useState } from "react";
import { INewsType } from "../MyTypes";
import CvButton from "../../ui/CvButton";


export function AllNews() {
    const [news, setNews] = useState([])
    const url = "http://localhost:3000/ourTeams"
    fetch(url)
        .then((response) => response.json())
        .then((data) => setNews(data))
    return (
        <>
            {news.map(({ id, name, img, specialty, about, cv }: INewsType) => {
                return (

                        <div key={id} className="bg-black flex justify-center ">

                            <div className="flex justify-evenly bg-qara border-1 m-2  p-3 h-[70vh] w-[80vw] ">

                                <div >
                                    <img className="h-[60vh] w-[35vw] object-cover rounded-[10px]" src={img} alt="game-image" />
                                </div>

                                <div className="flex flex-col  h-[60vh] justify-center gap-5 text-white ">
                                    <p className="text-[1.5rem] font-bold">{name}</p>
                                    <p className="text-[1.2rem]  p-1">{specialty}</p>
                                    <p className="text-[1.3rem]  w-[30vw]">{about}</p>
                                    <CvButton cv="Rezume" to={cv}/>
                                </div>
                            </div>
                        </div>
                )
            })}
        </>
    )


}