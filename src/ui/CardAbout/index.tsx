import { ICardInfo } from "../../components/MyTypes"
function CardInfo({txt1,txt2,desc,classes}:ICardInfo) {
    return (
        <>
            <div className='lg:h-[60vh] lg:w-[30vw] md:h-[40vh] xs:h-[60vh] xs:w-[90vw] bg-qara  rounded-[15px]  font-poppins hover:shadow-lg hover:shadow-orange/100'>
                <div className='p-7 flex flex-col justify-evenly gap-5  h-[100%]  rounded-[15px] '>
                    <p className={`p-3  rounded-[10px] lg:w-[18vw] text-[1.3rem] font-medium xs:w-[50vw] ${classes}`}>{txt1}</p>
                    <p className='font-medium text-[1.4rem] xs:w-[100%]' >{txt2}</p>
                    <p className="text-[1.3rem] lg:w-[25vw] xs:w-[100%] ">{desc}</p>
                </div>
            </div>
        </>
    )
}

export default CardInfo
