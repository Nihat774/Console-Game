import { useEffect, useState } from 'react'
import { IGames } from '../MyTypes';
import { Link } from 'react-router-dom';
function Data() {
    const [allgames, setPages] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/games")
            .then((response) => response.json())
            .then((data) => setPages(data))
    }, [])
    return (
        <>
            {
                allgames.slice(0,4).map(({ followers, img, id }: IGames) => {
                    return (
                        <Link key={id} to={`/games/${id}`} className=''>
                            <div>
                                <img className='lg:w-[22vw] lg:h-[50vh] md:w-[40vw] md:h-[35vh] xs:w-[75vw] xs:h-[40vh] rounded-[15px] object-cover' src={img} alt="" />
                                <p className='flex gap-2 font-bold  p-4 justify-center text-white'>
                                    <img src="../public/home/fire 1.svg" className='bg-black' alt="" />
                                    {` ${followers} Followers`}</p>
                            </div>

                        </Link>

                    )

                })
            }
        </>

    )
}

export default Data
