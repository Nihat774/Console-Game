import { Link } from "react-router-dom"
import {ShareBtn} from "../../components/MyTypes"
function ShareButton({icon,to,storeName}: ShareBtn) {
    return (
        <>
            <Link to={to} className="flex justify-evenly border border-white py-2 px-2 gap-3 rounded-[10px] w-fit ">
                <div>
                    <img className="" src={icon} alt="" />
                </div>
                <div className="flex flex-col md:px-0 lg:px-2">
                    <p className="lg:text-[1.4rem] md:text-[1.2rem] md:font-medium">{storeName}</p>
                    <p>alın</p>
                </div>
            </Link>
        </>
    )
}

export default ShareButton
