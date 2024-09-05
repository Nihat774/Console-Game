import { Link } from "react-router-dom"
import { ICard } from "../../components/MyTypes"

function Card({ txt, children }: ICard) {
    return (
        <>
            <Link to={'/games'} className=" flex flex-col gap-4">
                <div>
                    {children}
                </div>
                <p className="text-[1.4rem]">{txt}</p>
               <i className="fa-solid fa-arrow-right text-orange text-[1.4rem]"></i>
            </Link>
        </>
    )
}

export default Card
