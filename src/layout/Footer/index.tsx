import { Link } from "react-router-dom"
import Icon from "../../ui/SocialIcon"
import Copy from "../CopyRight"
import ShareButton from "../../ui/ShareButton"
import { useMode } from "../../Context"
import Free from "../../pages/Palastine"

function Footer() {
  const { darkMode } = useMode()

  const navLinks = [
    { to: "/about", label: "Haqqımızda" },
    { to: "/contact", label: "Əməkdaşlıq" },
    { to: "/news", label: "Komandamız" },
    { to: "/games", label: "Oyunlar" },
  ]

  const socialLinks = [
    { link: "https://www.facebook.com/", icon: "fa-facebook-f" },
    { link: "https://www.instagram.com/", icon: "fa-instagram" },
    { link: "https://twitter.com/?lang=tr", icon: "fa-twitter" },
    { link: "https://linkedin.com/", icon: "fa-linkedin-in" },
  ]

  const stores = [
    {
      to: "https://play.google.com/store/apps/details?id=com.kiloo.subwaysurf&pcampaignid=web_share",
      icon: "https://img.icons8.com/color/48/google-play.png",
      name: "Play Store'dan",
    },
    {
      to: "https://www.apple.com/app-store/",
      icon: "https://img.icons8.com/color/48/mac-os--v1.png",
      name: "App Store'dan",
    },
  ]

  return (
    <footer className={`px-4 md:px-14 ${darkMode ? "bg-black text-white" : "bg-white text-black"}`}>

      <div className="flex flex-wrap justify-between gap-8 p-6">

        {/* Left info */}
        <div className="md:w-[20vw] xs:w-full">
          <p className="text-[1.4rem]">
            Console Game komandası olaraq xidmətinizdəyik.
          </p>

          <Link to="/" className="text-orange text-[1.2rem]">
            consolegame.com
          </Link>
        </div>

        {/* Navigation */}
        <div className="flex flex-col gap-4 xs:text-[1.5rem]">
          {navLinks.map((item, i) => (
            <Link key={i} to={item.to} className="hover:text-orange">
              {item.label}
            </Link>
          ))}
        </div>

        {/* Info + contact */}
        <div className="flex flex-col gap-4">
          <Link to="/servis" className="hover:text-orange">
            Servis
          </Link>

          <p className="xs:text-[1.4rem] md:w-[20vw]">
            Oyun dünyasında özünüzü itirin və ən yaxşı təcrübə üçün saytımıza qoşulun!
          </p>

          <Link to="tel:+994557748548" className="hover:text-orange">
            +994 55 774 85 48
          </Link>
        </div>

        {/* Stores + social */}
        <div className="flex flex-col gap-4">

          {/* Stores */}
          <div className="flex flex-col gap-3">
            {stores.map((item, i) => (
              <ShareButton
                key={i}
                to={item.to}
                icon={item.icon}
                storeName={item.name}
              />
            ))}
          </div>

          {/* Social */}
          <div className="flex gap-4 xs:justify-evenly md:justify-end py-2">
            {socialLinks.map((s, i) => (
              <Icon key={i} link={s.link}>
                <i className={`fa-brands ${s.icon} text-[1.4rem] border rounded-full p-2 bg-white text-black hover:bg-blue-500 hover:text-white`} />
              </Icon>
            ))}
          </div>

        </div>
      </div>

      <Copy />
      <Free />
    </footer>
  )
}

export default Footer