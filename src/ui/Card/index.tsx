import { Link } from "react-router-dom"
import { ICard } from "../../components/MyTypes"

function Card({ txt, children }: ICard) {
    return (
        <>
            <Link to={'/news'} className=" flex flex-col gap-4 items-center">
                <div>
                    {children}
                </div>
                <p className="text-[1.6rem]  md:w-[9vw]  xs:w-[40vw]">{txt}</p>
               <i className="fa-solid fa-arrow-right text-orange text-[1.4rem]"></i>
            </Link>
        </>
    )
}

export default Card
