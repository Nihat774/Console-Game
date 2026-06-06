import Button2 from '../ui/Button2'
import { useMode } from '../Context'

function HomeSection6() {
    const { darkMode } = useMode();
    const images = [
        "/home/Rectangle 15.png",
        "/home/Rectangle 16.png",
        "/home/Rectangle 17.png",
        "/home/Rectangle 18.png",
        "/home/Rectangle 19.png",
        "/home/Rectangle 20.png",
    ]
    return (
        <section className={`${darkMode ? "bg-black" : "text-black"} flex flex-col place-items-center justify-evenly xs:py-4 xs:gap-5 md:h-[90vh] lg:h-[110vh] xs:h-fit`}>
            <div className="flex flex-col gap-5 xs:p-3">
                <p className="md:text-[2rem] xs:text-[1.7rem] font-bold ">
                    Hazırladığımız oyunlar
                </p>
                <p className="text-[1.4rem]">
                    Oyunlarımız yüksək funksiyonallıqla daha əlçatandır.
                </p>
            </div>

            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 w-[80vw]">
                {images.map((img, i) => (
                    <img
                        key={i}
                        src={img}
                        className="w-full h-[30vh] rounded-[15px] object-cover"
                        alt={`image-${i}`}
                    />
                ))}
            </div>

            <Button2 />
        </section>
    )
}

export default HomeSection6