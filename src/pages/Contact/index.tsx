import { Link } from "react-router-dom";
import Icon from "../../ui/SocialIcon";
import Phone from "../../ui/Phone";
import { motion } from "framer-motion";
import { containerVariants } from "../../utils/variants";
import { useMode } from "../../Context";

function ContactPage() {
  const { darkMode } = useMode();
  return (
    <>
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className={`py-8 ${
          darkMode ? "bg-black text-white" : "bg-white text-black"
        }`}
      >
        <div
          className={`text-center   ${
            darkMode ? "bg-black text-white" : "bg-white text-black"
          }`}
        >
          <ul className={`flex justify-center gap-4 `}>
            <li>
              <Link to="/" className="hover:text-orange">
                Əsas səhifə
              </Link>
            </li>
            <li>&gt;</li>
            <li className="text-orange">Əlaqə</li>
          </ul>
          <h2 className="md:text-3xl xs:text-[1rem] font-semibold p-3">
            Oyunlar hər gün yenilənərək daha maraqlı olur.
          </h2>
          <p className="p-3">
            Platformamız, oyunsevərlərə geniş oyun kataloqu ilə fərqli janrlarda
            keyfiyyətli təcrübələr yaşamağa imkan tanıyır.
          </p>
        </div>

        {/* Xəritə */}
        <div className="flex justify-center py-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.7483178803554!2d49.812870875480556!3d40.37010465847661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307dc397d94dc3%3A0x617bc46b47244c00!2sAzerbaijan%20Technical%20University!5e0!3m2!1str!2saz!4v1726765730028!5m2!1str!2saz"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-[90%] h-[70vh] max-w-5xl"
          ></iframe>
        </div>

        {/* Əlaqə məlumatları */}
        <div className="flex justify-center py-20 gap-16 xs:flex-col md:flex-row">
          <div className="flex flex-col gap-4 items-center ">
            <span className="font-medium xs:text-[1.4rem] md:text-[1rem]">
              Follow us
            </span>
            <div className="flex gap-4 md:justify-end md:place-items-end xs:justify-evenly py-2 ">
              <Icon link="https://www.facebook.com/">
                <i className="hover:bg-blue-500 hover:text-white fa-brands fa-facebook-f  text-[1.4rem] border rounded-full py-2 px-3 text-black bg-white"></i>
              </Icon>
              <Icon link="https://www.instagram.com/">
                <i className="hover:bg-blue-500 hover:text-white fa-brands fa-instagram text-[1.4rem] border rounded-full p-2 text-black bg-white"></i>
              </Icon>
              <Icon link="https://twitter.com/?lang=tr">
                <i className="hover:bg-blue-500 hover:text-white fa-brands fa-twitter text-[1.4rem] border rounded-full p-2 text-black bg-white"></i>
              </Icon>
              <Icon link="https://linkedin.com/">
                <i className="hover:bg-blue-500 hover:text-white fa-brands fa-linkedin-in text-[1.4rem] border rounded-full p-2 text-black bg-white"></i>
              </Icon>
            </div>
          </div>
          <div className=" flex md:flex-row xs:flex-col items-center gap-4">
            <p className="md:w-[5px] md:h-[20vh] xs:w-[25vw] xs:h-[5px]"></p>
            <i className="fa-solid fa-phone-volume text-2xl"></i>
            <Link to="tel:+994557748548" className="text-lg hover:text-orange">
              +994 55 774 85 48
            </Link>
          </div>

          <div className="flex xs:flex-col md:flex-row items-center gap-4">
            <i className="fa-solid fa-location-dot text-2xl"></i>
            <span className="text-lg w-56">
              Oyun platforması hər yaşa uyğun təcrübə təklif edir.
            </span>
          </div>
        </div>

        {/* Əlaqə formu */}
        <div
          className={`bg-[#1c140f] py-12 text-center relative flex flex-col items-center  ${
            darkMode ? "bg-black text-white" : "bg-white text-black"
          }`}
        >
          <h4 className="md:text-3xl xs:text-[1.4rem] mb-4">
            Ətraflı mlumat üçün bizə yazın
          </h4>
          <p className="mb-8">Oyunların qiymətləri və təsvirləri göstərilir.</p>
          <div className=" w-[80vw] flex xs:flex-col md:flex-row xs:gap-7 items-center">
            <form className="w-full max-w-lg mx-auto flex flex-col gap-4">
              <p className="text-[1.6rem] font-semibold">Əlaqə formu</p>
              <div className="flex gap-4 ">
                <input
                  required
                  type="text"
                  placeholder="First Name"
                  className="w-full px-4 py-3 rounded-lg text-black border"
                />
                <input
                  required
                  type="text"
                  id="last-name"
                  name="last-name"
                  placeholder="Last Name"
                  className="w-full px-4 py-3 rounded-lg text-black bg-gray-800 border"
                />
              </div>
              <input
                required
                type="email"
                id="email"
                name="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 rounded-lg text-black bg-gray-800 border "
              />
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                className="w-full px-4 py-3 rounded-lg text-black border bg-gray-800 resize-none h-32"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-orange-600 py-3 border bg-orange hover:bg-transparent hover:border-orange hover:text-orange duration-500 rounded-lg text-white font-semibold hover:bg-orange-500"
              >
                Göndər
              </button>
            </form>
            <Phone />
          </div>
        </div>
      </motion.section>
    </>
  );
}

export default ContactPage;
