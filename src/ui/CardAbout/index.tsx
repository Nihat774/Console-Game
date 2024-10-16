import { ICardInfo } from "../../components/MyTypes"
import { useMode } from "../../Context"

function CardInfo({ txt1, txt2, desc, classes }: ICardInfo) {
    const {darkMode} = useMode()
    return (
        <>
            <div className={`lg:h-[63vh] md:h-fit ${darkMode?"bg-gray hover:shadow-orange/100":"bg-neutral-500 hover:shadow-black"} lg:w-[30vw] md:h-[40vh] xs:h-fit xs:w-[90vw]  rounded-[15px] hover:shadow-lg   duration-500`}>
                <div className='p-7 flex flex-col justify-evenly gap-5  h-[100%]  rounded-[15px] '>
                    <p className={`p-3  rounded-[10px] lg:w-[18vw] text-[1.3rem] xs:text-[1.5rem] font-medium xs:w-[50vw] text-white ${classes}`}>{txt1}</p>
                    <p className='font-medium text-[1.4rem] xs:text-[1.5rem] xs:w-[100%]' >{txt2}</p>
                    <p className="lg:text-[1.3rem] lg:w-[25vw] xs:text-[1.5rem] xs:w-[90%] ">{desc}</p>
                </div>
            </div>
        </>
    )
}

export default CardInfo
