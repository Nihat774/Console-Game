import { Link } from "react-router-dom";
import CountUp from "react-countup";
import Button2 from "../../ui/Button2";
import Swipper from "../../ui/SwipperToServices";
import { motion } from "framer-motion";
import { containerVariants } from "../../utils/variants";
import ScrollAnimation from "../../utils/ScrollAnimation";
import { useMode } from "../../Context";

function ServicesPage() {
  const { darkMode } = useMode();

  return (
    <>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className={` ${
          darkMode ? "bg-black text-white" : "bg-white text-black"
        }`}
      >
        {/* Başlıq Bölməsi */}
        <ScrollAnimation>
          <section className="flex flex-col  container mx-auto items-center xs:h-fit  justify-around gap-7">
            <div
              className={`flex flex-col items-center gap-5 py-5 ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              <p className="flex items-center gap-2">
                <Link to="/" className="text-[1.5rem] px-1">
                  Əsas səhifə
                </Link>
                <i
                  className={`fa-solid fa-chevron-right ${
                    darkMode ? "text-white" : "text-black"
                  }`}
                ></i>
                <span className="text-orange text-[1.3rem]">Servis</span>
              </p>
              <p className="text-[1.5rem] px-7">
                Oyun Dünyasının Sərhədsiz Macəraları
              </p>
              <p>
                İstər yeni çıxan oyunlar, istərsə də klassik əsərlər - hamısı
                bir arada, hər kəsin zövqünə uyğun bir şey var.
              </p>
            </div>
          </section>
        </ScrollAnimation>

        {/* Statistik Bölmə */}
        <ScrollAnimation>
          <section className="flex flex-col items-center py-5 md:h-[50vh]">
            <div className={`${darkMode?"bg-gray":"bg-neutral-600"} flex md:flex-row xs:flex-col justify-evenly py-5  items-center border rounded-[15px] md:h-[30vh] w-[70vw]  xs:h-fit xs:gap-7 xs:py-5`}>
              <div className="flex h-full gap-5 items-center">
                <i className="rounded-full p-5 fa-solid fa-user text-orange bg-white"></i>
                <div className="text-white">
                  <CountUp
                    className="text-[1.7rem] font-bold"
                    end={30}
                    duration={2}
                  />
                  <span className="text-[1.7rem] font-bold">+</span>
                  <p className="md:text-[1.6rem] lg:text-[1.1rem]">Clients</p>
                </div>
              </div>

              <div className="md:h-[20vh] md:w-[2px] xs:h-[2px] xs:w-[40vw] bg-zinc-400"></div>

              <div className="flex h-full gap-3 items-center">
                <i className="border rounded-full p-5 fa-solid fa-location-dot text-orange bg-white"></i>
                <div className="text-white">
                  <CountUp
                    className="text-[1.7rem] font-bold"
                    end={25}
                    duration={2}
                  />
                  <span className="text-[1.7rem] font-bold">+</span>
                  <p className="md:text-[1.6rem] lg:text-[1.1rem]">Countries</p>
                </div>
              </div>

              <div className="md:h-[20vh] md:w-[2px] xs:h-[2px] xs:w-[40vw] bg-zinc-400"></div>

              <div className="flex h-full gap-3 items-center">
                <i className="border rounded-full p-5 fa-solid fa-bars-progress text-orange bg-white"></i>
                <div className="text-white">
                  <CountUp
                    className="text-[1.7rem] font-bold"
                    end={40}
                    duration={2}
                  />
                  <span className="text-[1.7rem] font-bold">+</span>
                  <p>Projects</p>
                </div>
              </div>
            </div>
          </section>
        </ScrollAnimation>

        {/* Video və Məlumat Bölməsi */}
        <ScrollAnimation>
          <section
            className={`flex md:flex-row xs:flex-col xs:py-5 xs:gap-5 justify-center lg:gap-7 items-center md:h-[70vh] xs:h-fit bg-black ${
              darkMode ? "bg-black text-white" : "bg-white text-black"
            }`}
          >
            <div>
              <iframe
                src="https://www.youtube.com/embed/y6vWl-8_0QI?si=DtcBOX_0IjNZyrSZ"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                className="rounded-[20px] md:w-[40vw] md:h-[70vh] xs:w-[80vw] xs:h-[40vh]"
              ></iframe>
            </div>

            <div className="flex flex-col xs:h-fit gap-5 p-5">
              <p
                className={`xs:text-[1.8rem] font-bold ${
                  darkMode ? "text-white" : "text-black"
                }`}
              >
                Platformamız əyləncə üçün yaradılıb.
              </p>
              <p
                className={`xs:text-[1.6rem] font-semibold ${
                  darkMode ? "text-white" : "text-black"
                }`}
              >
                Oyunçular dostluq qururlar.
              </p>

              <div>
                <p className="flex gap-2 items-center">
                  <i className="rounded-full bg-green fa-regular fa-circle-check"></i>
                  <span
                    className={`text-[1.4rem] ${
                      darkMode ? "text-white" : "text-black"
                    }`}
                  >
                    Daimi Texniki Dəstək Xidməti
                  </span>
                </p>

                <p className="flex gap-2 items-center">
                  <i className="rounded-full bg-green fa-regular fa-circle-check"></i>
                  <span
                    className={`text-[1.4rem] ${
                      darkMode ? "text-white" : "text-black"
                    }`}
                  >
                    Hər zaman operativ dəstək
                  </span>
                </p>

                <p className="flex gap-2 items-center">
                  <i className="rounded-full bg-green fa-regular fa-circle-check"></i>
                  <span
                    className={`text-[1.4rem] ${
                      darkMode ? "text-white" : "text-black"
                    }`}
                  >
                    Peşəkar və təcrübəli komanda
                  </span>
                </p>

                <p className="flex gap-2 items-center">
                  <i className="rounded-full bg-green fa-regular fa-circle-check"></i>
                  <span
                    className={`text-[1.4rem] ${
                      darkMode ? "text-white" : "text-black"
                    }`}
                  >
                    Texniki problemlərin sürətli həlli
                  </span>
                </p>

                <p className="flex gap-2 items-center">
                  <i className="rounded-full bg-green fa-regular fa-circle-check"></i>
                  <span
                    className={`text-[1.4rem] ${
                      darkMode ? "text-white" : "text-black"
                    }`}
                  >
                    Yeniliklər və təkmilləşdirmələr barədə məlumat
                  </span>
                </p>

                <p className="flex gap-2 items-center">
                  <i className="rounded-full bg-green fa-regular fa-circle-check"></i>
                  <span
                    className={`text-[1.4rem] ${
                      darkMode ? "text-white" : "text-black"
                    }`}
                  >
                    Yarışlar hər kəsi birləşdirir.
                  </span>
                </p>
              </div>
            </div>
          </section>
        </ScrollAnimation>

        {/* Son bölmə və şəkil */}
        <ScrollAnimation>
          <section
            className={`flex md:flex-row xs:flex-col justify-evenly items-center xs:py-5 md:h-[70vh] xs:h-fit bg-black ${
              darkMode ? "bg-black text-white" : "bg-white text-black"
            }`}
          >
            <div className="flex flex-col gap-5 md:w-[35vw] xs:w-full xs:p-5">
              <p className="text-[1.2rem]">
                Müasir texnologiyalarla təchiz olunmuş serverlərimiz, sürətli
                yüklənmə və fasiləsiz oyun axışı təmin edərək, oyunçulara
                optimal təcrübə təqdim edir.
              </p>
              <p>
                Oyunlarınızı problemsiz və sürətli şəkildə oynamaq üçün hər
                zaman yanınızdayıq. Mütəxəssis komandamız 24/7 sizə texniki
                dəstək və xidmət göstərir.
              </p>
              <p>
                Bundan əlavə, platformamızda oyunçular arasında əlaqə qurmaq
                üçün imkanlar mövcuddur. İstifadəçilər oyunlar haqqında
                fikirlərini paylaşa, dostları ilə rəqabət edə və yeni dostlar
                qazana bilərlər.
              </p>
              <Button2 />
            </div>
            <div className="items-center justify-center flex">
              <img
                className="object-cover md:w-[30vw] md:h-[50vh] xs:h-[40vh] xs:w-[90%]"
                src="/games/game4.webp"
                alt="game"
              />
            </div>
          </section>
        </ScrollAnimation>

        {/* Swipper */}
        <section>
          <Swipper />
        </section>
      </motion.div>
    </>
  );
}

export default ServicesPage;
