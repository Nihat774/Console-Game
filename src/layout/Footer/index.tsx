import { Link } from "react-router-dom"
import Icon from "../../ui/SocialIcon"
import Copy from "../CopyRight"

function Footer() {
  return (
    <>
      <footer className=" bg-black text-white  flex flex-col justify-between">
        <div className="p-5">
          <div className="flex justify-around gap-4 p-4">
            <div className=" flex flex-col gap-4">

            <Link to={'/'} >
            <img className="h-[13vh] w-[15vw] object-contain" src="../logo/console game-endlogo.png" alt="" />
            </Link>

              <p className="w-[20vw]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro, aliquid sapiente. </p>
              <p>@logo</p>
            </div>

            <div className="flex flex-col gap-4 ">
              <Link to={'/about'}>About us</Link>
              <Link to={'/zeux'}>Zeux</Link>
              <Link to={'/portfolio'}>Portfolio</Link>
              <Link to={'/career'}>Careers</Link>
              <Link to={'/contact'}>Contact us</Link>
            </div>

            <div className=" flex flex-col gap-4">
              <p>Contact us</p>
              <p className="w-[20vw]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum maiores aliquid nam alias eos, culpa fuga.</p>
              <Link to={'tel:+90889097890'}>+908 89097 890</Link>
            </div>
            <div className="flex gap-4 place-items-end  py-2">
              <Icon link="https://www.facebook.com/" ><i className="fa-brands fa-facebook-f  text-[1.4rem] border rounded-full py-2 px-3 text-black bg-white"></i></Icon>
              <Icon link="https://www.instagram.com/" ><i className="fa-brands fa-instagram text-[1.4rem] border rounded-full p-2 text-black bg-white"></i></Icon>
              <Icon link="https://twitter.com/?lang=tr" ><i className="fa-brands fa-twitter text-[1.4rem] border rounded-full p-2 text-black bg-white"></i></Icon>
              <Icon link="https://linkedin.com/"><i className="fa-brands fa-linkedin-in text-[1.4rem] border rounded-full p-2 text-black bg-white"></i></Icon>
            </div>
          </div>
        </div>
        <Copy />
      </footer>
    </>
  )
}

export default Footer
