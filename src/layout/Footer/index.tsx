import { Link } from "react-router-dom"
import Icon from "../../ui/SocialIcon"
import Copy from "../CopyRight"
import ShareButton from "../../ui/ShareButton"

function Footer() {
  return (
    <>
      <footer className=" bg-black text-white ">
        <div className="p-5">
          <div className="flex xs:flex-col md:flex-row justify-around gap-4 p-4">
            <div className=" flex flex-col gap-4">

              <Link to={'/'} >
                <img className="md:h-[13vh] md:w-[15vw] xs:w-[40vw] object-contain" src="../logo/console game-endlogo.png" alt="" />
              </Link>

              <p className="md:w-[20vw] xs:w-full text-[1.4rem]">Console Game komandası olaraq xidmətinizdəyik.</p>
              <Link to={'/'} className="text-orange text-[1.2rem]">consolegame.com</Link>
            </div>

            <div className="flex flex-col gap-4 xs:text-[1.5rem] ">
              <Link to={'/about'} className="hover:text-orange">Haqqımızda</Link>
              <Link to={'/contact'} className="hover:text-orange">Əməkdaşlıq</Link>
              <Link to={'/news'} className="hover:text-orange">Komandamız</Link>
              <Link to={'/games'} className="hover:text-orange">Oyunlar</Link>
            </div>
            <div className=" flex flex-col gap-4 ">
              <Link to={'/servis'} className="md:w-[20vw] xs:w-full xs:text-[1.4rem] hover:text-orange">Servis</Link>
              <p className="lg:w-[25vw] xs:w-full xs:text-[1.4rem]">Oyun dünyasında özünüzü itirin və ən yaxşı təcrübə üçün saytımıza qoşulun!</p>
              <Link to={'tel:+90889097890'} className="md:w-[20vw] xs:w-full xs:text-[1.4rem] hover:text-orange">+994 55 774 85 48</Link>
            </div>
            <div>
              <div className=" flex flex-col gap-3 py-3">
                <ShareButton to="https://play.google.com/store/apps/details?id=com.kiloo.subwaysurf&pcampaignid=web_share" icon='https://img.icons8.com/color/48/google-play.png' storeName="Play Store'dan" />
                <ShareButton to="https://www.apple.com/app-store/" storeName="App Store'dan" icon="https://img.icons8.com/color/48/mac-os--v1.png" />
              </div>
              <div className="flex gap-4 md:justify-end md:place-items-end xs:justify-evenly py-2 ">
                <Icon link="https://www.facebook.com/" ><i className="fa-brands fa-facebook-f  text-[1.4rem] border rounded-full py-2 px-3 text-black bg-white"></i></Icon>
                <Icon link="https://www.instagram.com/" ><i className="fa-brands fa-instagram text-[1.4rem] border rounded-full p-2 text-black bg-white"></i></Icon>
                <Icon link="https://twitter.com/?lang=tr" ><i className="fa-brands fa-twitter text-[1.4rem] border rounded-full p-2 text-black bg-white"></i></Icon>
                <Icon link="https://linkedin.com/"><i className="fa-brands fa-linkedin-in text-[1.4rem] border rounded-full p-2 text-black bg-white"></i></Icon>
              </div>
            </div>
          </div>
        </div>
        <Copy />
      </footer>
    </>
  )
}

export default Footer
