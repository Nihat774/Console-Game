
import { Link } from 'react-router-dom'
import { ITeamType } from '../../components/MyTypes'
import { useMode } from '../../Context'

function TeamCard({img,name,text}:ITeamType) {
    const {darkMode} = useMode()
    return (
        <>
            <Link to={'/news'} className={`${darkMode?"bg-gray hover:shadow-orange/100":"bg-neutral-400 hover:shadow-black/100"} bg-gray lg:h-[35vh] lg:w-[20vw]  xs:h-[30vh] xs:w-[70vw] rounded-md p-5 flex flex-col justify-evenly duration-500   hover:shadow-lg `}>
                <div className='flex justify-center'><img className="w-[100px] h-[100px] rounded-full object-cover" src={img} alt="" /></div>
                <span className="text-center md:text-[1.3rem]">{name}</span>
                <p className="text-center">{text}</p>
            </Link>
        </>
    )
}

export default TeamCard
