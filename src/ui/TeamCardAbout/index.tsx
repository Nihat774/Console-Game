
import { Link } from 'react-router-dom'
import { ITeamType } from '../../components/MyTypes'

function TeamCard({img,name,text}:ITeamType) {
    return (
        <>
            <Link to={'/news'} className="bg-qara lg:h-[35vh] lg:w-[20vw]  xs:h-[30vh] xs:w-[70vw] rounded-md p-5 flex flex-col justify-evenly  hover:shadow-orange/100 hover:shadow-md ">
                <div className='flex justify-center'><img className="w-28 h-28" src={img} alt="" /></div>
                <span className="text-center md:text-[1.3rem]">{name}</span>
                <p className="text-center">{text}</p>
            </Link>
        </>
    )
}

export default TeamCard
