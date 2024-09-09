import { useState } from "react";
import { Link, useParams } from "react-router-dom";
type INewsType = {
    id: number;
    name: string;
    img: string;
    specialty: string;
    about: string
}

export function AllNews() {
    const [news, setNews] = useState([])
    const { id } = useParams()
    console.log(id);
    const url = "http://localhost:3000/ourTeams"
    fetch(url)
        .then((response) => response.json())
        .then((data) => setNews(data))
    return (
        <>
            {news.map(({ id, name, img, specialty, about }: INewsType) => {
                return (
                
                    <Link key={id} to={`/games/${id}`} className=''>
                        <div className="bg-black flex justify-center ">        
                        
                        <div className="flex justify-evenly bg-qara border-1 m-2  p-3 h-[70vh] w-[80vw] ">

                        <div >
                               <img className="h-[50vh] w-[40vw] object-cover rounded-[10px]" src={img} alt="game-image" />
                        </div>

                        <div className="flex flex-col p-2 text-white">
                                <p className="text-[1.5rem] font-bold">{name}</p>                                
                                <p className="text-[1.2rem]  p-1">{specialty}</p>
                                <p className="text-[1.5rem] font-bold">{about}</p>

                        </div>
                    </div>
                    </div>
                        </Link>
                )
            })}
        </>
    ) 


}