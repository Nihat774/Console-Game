import { useMode } from "../Context"
import MyAccordion from "../ui/Accordion"


function HomeSection5() {
    const { darkMode } = useMode()
    return (
        <section className={`${darkMode ? "bg-black text-white" : "bg-white text-black"}`}>
            <p className="text-[1.5rem] font-bold py-3 text-center">
                Ən çox verilən suallar
            </p>

            <MyAccordion />
        </section>
    )
}

export default HomeSection5