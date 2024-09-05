
import { Link } from 'react-router-dom'
import { ITeamType } from '../../components/MyTypes'

function TeamCard({img,name,text}:ITeamType) {
    return (
        <>
            <Link to={'/news'} className="bg-qara h-[35vh] w-[20vw] rounded-md p-5 flex flex-col justify-evenly ">
                <div className='flex justify-center'><img className="w-28 h-28" src={img} alt="" /></div>
                <span className="text-center">{name}</span>
                <p className="text-center">{text}</p>
            </Link>
        </>
    )
}

export default TeamCard
