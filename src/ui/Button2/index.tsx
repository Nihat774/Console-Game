import { useNavigate } from "react-router-dom"
import { Button } from "../../components/MyTypes"

function Button2(onClick:Button ) {
    const pathname= useNavigate()
    return (
        <>
            <button onClick={()=>{pathname('/games')}} className="border text-white bg-stone py-3 mr-[5vw] text-[1.3rem] font-rubik md:w-[12vw] lg:w-[9vw] xs:px-3 xs:w-[fit] rounded-[10px] text-center">Hamısı</button>
        </>
    )
}

export default Button2
