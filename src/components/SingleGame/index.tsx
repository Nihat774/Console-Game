
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom'
import Modal from '../../ui/modalSlice';
function SingleGamePage() {
  // const param = useNavigate()
  const { id } = useParams<{ id: string }>()
  // console.log(id);
  const [games, setGames] = useState<any | (() => void)>([]);
  useEffect(() => {
    fetch(`http://localhost:3000/games/${id}`)
      .then((response) => response.json())
      .then((data) => setGames(data))
  }, [id])
  return (
    <>
      <div className='h-[12vh] flex flex-col items-center justify-center md:w-[17vw] xs:w-fit'>
        <Link className='border rounded-[15px]  flex items-center p-3 text-[1.4rem] w-fit bg-orange hover:bg-white hover:text-orange hover:border-orange' to={'/games'}>
          <i className="fa-solid fa-circle-chevron-right px-2"></i>
          <p>Geri</p>
        </Link>
      </div>
      <div className='flex justify-evenly md:flex-row md:h-[80vh] xs:flex-col xs:py-5 xs:gap-3 xs:h-fit'>

        <div className='flex justify-center items-center'>
          <img className='lg:w-[35vw] md:h-[70vh] md:w-[45vw] lg:h-[70vh] xs:w-[70vw] xs:h-[50vh] object-cover border rounded-[15px]' src={games.img} alt="image" />
        </div>

        <div className='flex flex-col justify-center gap-5'>
          <p className='text-[1.4rem] font-bold border p-4'>{games.name} Game</p>
          <p className='md:w-[45vw] xs:w-full p-4 text-[1.7rem]'>{games.about}</p>
          <div className='flex text-[1.5rem] p-2'>
            <p>Qiymət  :</p>
            <p className='font-bold'>{games.price}</p>
          </div>
          <div className='px-3'>
            <Modal text='BUY' style="md:w-[15vw] xs:w-fit p-2" />
          </div>
        </div>
      </div>
    </>)
}

export default SingleGamePage
