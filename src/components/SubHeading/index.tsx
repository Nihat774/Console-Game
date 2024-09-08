
function SubHeading() {
    return (
        <>
            <div className="p-7 bg-black">
                <div className="contanier flex flex-col  items-center">
                    <div className="flex flex-col justify-center gap-7 h-[60vh]">
                        <div className="flex flex-col  gap-5 w-fit">
                            <p className="relative z-30 text-[2rem] font-poppins font-bold text-white  ">Bizimlə əlaqə</p>
                            <p className="relative z-30 font-semibold md:w-[35vw] lg:w-[27vw] xs:w-full text-[1.3rem] text-white ">Console Game komandasıyla birlikdə işləmək istəyirsiniz ? </p>
                        </div>

                        <article className="flex lg:flex-row md:flex-col xs:flex-col xs:gap-4  md:w-[80vw] h-fit xs:w-full xs:py-3 justify-between md:items-start lg:items-center rounded-[15px] bg-stone">
                            <div className=" flex flex-col gap-3 ml-[30px] font-poppins text-white">
                                <p className=" md:text-[2rem] font-semibold xs:text-[1.5rem]">Şərh göndərmək</p>
                                <p className=" font-medium w-[70%] xs:text-[1.4rem]">
                                Fikir və maraqlarınızı bizimlə bölüşün
                                </p>
                            </div>
                            <form
                                action="https://formspree.io/f/mqaznvlk"
                                method="POST" 
                                className=" flex xs:gap-5 items-center md:h-[10vh] w-fit px-7">
                                <input type="email" name="email" className="lg:w-[30vw] md:w-[50vw] xs:w-[40vw] xs:py-2 md:py-4 md:px-3 lg:px-2 border rounded-[10px] bg-white md:text-[1.6rem] lg:text-[1.4rem]" placeholder="mesaj" />
                                <button type="submit" className="bg-orange md:py-5 md:px-7 lg:py-3 lg:px-5 text-white rounded-[10px] md:absolute md:right-[14%] lg::right-[12.5%] xs:flex">Continue</button>
                            </form>
                        </article>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SubHeading
