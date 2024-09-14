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

                        <div key={id} className="bg-black flex justify-center">

                            <div className="xs:flex-col  flex  lg:flex-row justify-evenly bg-qara border-1 p-3 h-fit w-[80vw] gap-5  ">

                                <div >
                                    <img className=" xs:h-[50vh] xs:w-full flex  lg:h-[60vh] lg:w-[35vw] object-cover rounded-[10px]" src={img} alt="game-image" />
                                </div>

                                <div className="flex flex-col  justify-center gap-5 text-white  ">
                                    <p className="xs:text-1.1rem lg:text-1.5rem font-bold">{name}</p>
                                    <p className="xs:text-1.4rem lg:text-1.2rem p-1">{specialty}</p>
                                    <p className="xs:text-0.9rem lg:text-1.3rem xs:w-fit  lg:w-[30vw]">{about}</p>
                                    <CvButton cv="Rezume" to={cv}/>
                                </div>
                            </div>
                        </div>
                )
            })}
        </>
    )


}