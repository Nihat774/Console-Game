import Button2 from '../ui/Button2'
import Data from './MyDataHome'
import { useMode } from '../Context'

function HomeSection2() {
    const { darkMode } = useMode()
    return (
        <section>
            <div
                className={`flex justify-between items-center ${darkMode ? "bg-black text-white" : "bg-white text-black"
                    } lg:h-[20vh] xs:h-[15vh]`}
            >
                <p className="md:text-[1.8rem] xs:text-[1.4rem] font-bold ml-[5vw]">
                    Hazırda trend olan oyunlarımız
                </p>

                <Button2 />
            </div>

            <div
                className={`grid lg:grid-cols-3 gap-5 md:grid-cols-2 xs:grid-cols-1 place-items-center ${darkMode ? "bg-black" : "bg-white"
                    } xs:h-fit xs:py-5 md:h-fit`}
            >
                <Data />
            </div>
        </section>
    )
}

export default HomeSection2