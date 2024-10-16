import { useNavigate } from "react-router-dom"
function Button2( ) {
    const pathname= useNavigate()
    return (
        <>
            <button onClick={()=>{pathname('/games')}} className="border text-white bg-stone py-3 mr-[5vw] text-[1.3rem] hover:bg-transparent h-fit md:w-[12vw] lg:w-[9vw] xs:px-3 xs:w-[fit] rounded-[10px] text-center  hover:text-orange duration-500 hover:border-orange hover:shadow-md">Hamısı</button>
        </>
    )
}

export default Button2
