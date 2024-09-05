


function CardInfo(props) {
    return (
        <>
            <div className='h-[60vh] w-[30vw] bg-qara  rounded-[15px]  font-poppins'>
                <div className='p-7 flex flex-col justify-evenly  h-[100%]  rounded-[15px]'>
                    <p className={`p-3  rounded-[10px] w-[18vw] text-[1.3rem] font-medium ${props.classes}`}>{props.txt1}</p>
                    <p className='font-medium text-[1.4rem]' >{props.txt2}</p>
                    <p className="text-[1.3rem] w-[25vw] ">{props.desc}</p>
                </div>
            </div>
        </>
    )
}

export default CardInfo
