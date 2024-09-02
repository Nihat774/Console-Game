import { useEffect, useState } from 'react'
import { IGames } from '../MyTypes';
import { Link } from 'react-router-dom';
import React from 'react';
function Data() {
    const [games, setPages] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/games")
            .then((response) => response.json())
            .then((data) => setPages(data))
    }, [])
    return (
        <>
            {
                games.map(({ followers, img }: IGames) => {
                    return (
                        <>
                            <Link to={'/games'} className=''>
                                <div><img src={img} alt="" />
                                <p className='flex gap-2 font-bold  p-4 justify-center text-white'>
                                    <img src="../public/home/fire 1.svg" className='bg-black' alt="" />
                                {` ${followers} Followers`}</p>
                                </div>
                                
                            </Link>
                        </>
                    )

                })
            }
        </>

        // <div>
        //     {
        //         games.filter(({ followers , img }:IGames) => {
        //             return (
        //                 <>
        //                     <div className='border border-white text-white'>
        //                         <img src={img} alt="" />
        //                         <div >{followers}</div>
        //                         </div>
        //                 </>
        //             )
        //         }
        //         )
        //     }
        // </div>
    )
}

export default Data
