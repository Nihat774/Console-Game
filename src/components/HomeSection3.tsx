import { useMode } from '../Context'

function HomeSection3() {
    const { darkMode } = useMode()
    return (
        <section className={`"bg-black flex flex-col gap-4 `}>
            <div className={`${darkMode ? "text-white" : "text-black"} flex justify-center`}>
                <p className="md:text-[2rem] font-bold md:w-[38vw] text-center py-3 xs:full xs:text-[1.5rem]">
                    Köhnə oyunlardan yoruldunuz? Elə isə doğru məkandasınız.
                </p>
            </div>

            <div className="md:w-full xs:w-full flex flex-col md:items-center xs:items-center justify-evenly">
                <p className="lg:text-[1.3rem] md:text-[1.5rem] xs:text-[1.6rem] font-bold md:w-[48vw] xs:w-full xs:py-3">
                    Console Game
                </p>

                <p
                    className="text-stone-600 md:w-[50vw] xs:w-full md:text-[1.6rem] lg:text-[1.4rem] xs:text-[1.2rem] xs:p-3"
                >
                    Yeni, effektiv oyunlarımızı sizin istifadənizə verdiyimiz üçün şadıq.
                </p>
            </div>

            <div className="flex justify-center md:h-[80vh] items-center md:w-full xs:h-fit p-5">
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/v-vqi0UaUdE?si=DjvQtmxCwwYgNefd"
                    title="YouTube video player"
                    className="rounded-[20px] md:w-[60vw] md:h-[60vh] xs:w-full xs:h-[40vh]"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
            </div>
        </section>
    )
}

export default HomeSection3