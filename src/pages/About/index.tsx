import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper/modules";
import Button from "../../ui/Button";
import { Link, useNavigate } from "react-router-dom";
import TeamCard from "../../ui/TeamCardAbout";
import CardInfo from "../../ui/CardAbout";
import { containerVariants } from "../../utils/variants";
import ScrollAnimation from "../../utils/ScrollAnimation";

function AboutPage() {
  const location = useNavigate();
  return (
    <>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="flex justify-evenly; bg-black text-white lg:flex-row xs:flex-col"
      >
        <div className="px-10 lg:w-[50%] xs:w-[100%] flex flex-col items-center">
          <div className="lg:w-[30vw] lg:h-[70vh] md:h-[40vh] xs:w-[80vw] xs:h-fit xs:gap-3 py-7 flex flex-col justify-evenly">
            <div className="">
              <Link to={"/"} className="text-[1.5rem]">
                Əsas səhifə
              </Link>{" "}
              <i className="fa-solid fa-arrow-right px-3"></i>
              <Link className="text-orange text-[1.5rem]" to={"/about"}>
                Haqqımızda
              </Link>
            </div>
            <p className="font-bold  lg:text-4xl md:text-[1.6rem] xs:text-[1.5rem]">
              Saytda müxtəlif oyunlar mövcuddur.
            </p>
            <p className="xs:text-[1.5rem]">
              Layihəmiz, oyun aləmini daha əlçatan etmək üçün hazırlanmışdır və
              hər yaş qrupuna uyğun oyunlar təqdim edir.
            </p>

            <Button
              onClick={() => location("/games")}
              still="xs:w-[50vw] lg:w-[16vw] p-2 text-[1.4rem] rounded-[10px] hover:bg-transparent"
              txt2={<i className="fa-solid fa-arrow-right"></i>}
              txt1="Oyunlar"
            />
          </div>
        </div>

        <div>
          <Swiper
            cssMode={true}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            loop={true}
            autoplay={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
            className="mySwiper lg:h-[70vh] lg:w-[50vw] md:h-[60vh] xs:w-full xs:h-[40vh]"
          >
            <SwiperSlide>
              <img
                className="w-[100%] object-cover h-[100%]"
                src="../about/carousel1.jpeg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-[100%] object-cover h-[100%]"
                src="../about/carousel2.jpg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-[100%] object-cover h-[100%]"
                src="../about/carousel3.jpg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-[100%] object-cover h-[100%]"
                src="../about/carousel4.webp"
                alt=""
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </motion.div>

      <ScrollAnimation>
        <div className="bg-black text-white py-5 lg:h-[100vh] xs:h-fit">
          <h3 className="text-2xl flex items-center px-10 font-bold h-[20vh] ">
            Nə üçün bizi seçməlisiniz ?
          </h3>
          <div className="flex justify-around lg:flex-row xs:flex-col  xs:gap-5 xs:items-center	">
            <CardInfo
              classes="bg-purple"
              txt1="Peşəkarlıq və Təcrübə"
              txt2="Peşəkarlıq və Təcrübə"
              desc="Bizim komandamız illərdir bu sahədə təcrübəyə malik peşəkar mütəxəssislərdən ibarətdir. Probleminizi ən qısa müddətdə və yüksək keyfiyyətlə həll edəcəyik!"
            />
            <CardInfo
              classes="bg-red"
              txt1="Müştəri məmnuniyyəti"
              txt2="Müştəri məmnuniyyəti"
              desc="Sizin rahatlığınız bizim üçün önəmlidir! Müştəri məmnuniyyəti bizim üçün prioritetdir və biz hər zaman müştərilərimiz üçün ən yaxşısını etməyə çalışırıq."
            />
            <CardInfo
              classes="bg-orange"
              txt1="Güvən və Keyfiyyət"
              txt2="Güvən və Keyfiyyət"
              desc="Güvən və keyfiyyət bizim əsas dəyərlərimizdir. Bizə etibar edin, kompüteriniz bizim əlimizdə ən yaxşı xidmətə layiqdir!"
            />
          </div>
        </div>
      </ScrollAnimation>

      <ScrollAnimation>
        <div className="flex justify-evenly  bg-gray h-fit text-white xs:flex-col lg:flex-row xs:gap-5 ">
          <div className="flex flex-col justify-end ">
            <img
              className="lg:h-[60vh] lg:w-[30vw] rounded-t-[10px] xs:h-[50vh] xs:w-[100vh] object-cover"
              src="/about/photo2.webp"
              alt=""
            />
          </div>

          <div className=" md:h-[30vh] lg:w-[30%] lg:h-fit flex flex-col justify-center  gap-7 xs:p-5">
            <p className="font-semibold text-[1.4rem]">
              Möhtəşəm qrafik dizayn
            </p>
            <h3 className="text-4xl font-semibold">
              Hər zaman müştərilərimizə ən yaxşı oyunları təmin etməyə sadiqik.
            </h3>
            <p>
              Komandamız, istifadəçilər üçün ən yaxşı təcrübəni təmin etmək
              məqsədilə daim çalışır və oyun kataloqunu mütəmadi olaraq
              yeniləyir.Saytımızın istifadəçi dostu interfeysi ilə oyunları
              rahatlıqla tapa və səbətə əlavə edə bilərsiniz.
            </p>
          </div>
        </div>
      </ScrollAnimation>

      <ScrollAnimation>
        <div className=" bg-black text-white lg:h-[70vh]  flex items-center justify-evenly lg:flex-row xs:flex-col xs:gap-5 xs:py-5 ">
          <TeamCard
            img="/my fotonew.jpg"
            name="Nihat Məmmədov"
            text="Game dev"
          />
          <TeamCard img="/about/2.png" name="Fərid Abbaslı" text="3D design " />
          <TeamCard
            img="/about/3.webp"
            name="Murad Babayev"
            text="Mobile dev"
          />
        </div>
      </ScrollAnimation>
    </>
  );
}
export default AboutPage;
