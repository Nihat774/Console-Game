import { useEffect, useState } from 'react'
import { IGames } from '../MyTypes';
import { Link } from 'react-router-dom';
import React from 'react';
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
                allgames.map(({followers, img }: IGames) => {
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

    )
}

export default Data
