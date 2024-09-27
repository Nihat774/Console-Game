
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';
import Button from '../../ui/Button';
import { Link } from 'react-router-dom';
import TeamCard from '../../ui/TeamCardAbout';
import CardInfo from '../../ui/CardAbout';

function AboutPage() {
  return (
    <>
      <div className="flex justify-evenly; bg-black text-white lg:flex-row xs:flex-col">

        <div className="px-10 lg:w-[50%] xs:w-[100%] flex flex-col items-center">

          <div className='lg:w-[30vw] lg:h-[70vh] md:h-[40vh] xs:w-[80vw] xs:h-fit py-7 flex flex-col justify-evenly'>
            <div className=''>
              <Link to={'/'} className='text-[1.5rem]'>Home</Link> <i className="fa-solid fa-arrow-right px-3"></i>
              <Link className="text-orange text-[1.5rem]" to={'/about'}>About us</Link>
            </div>
            <p className="font-bold  lg:text-4xl md:text-[1.6rem] xs:text-[1.5rem]">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            <p className="xs:text-[1.5rem]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis atque ab tenetur placeat culpa ullam deserunt minima
              omnis error, porro exercitationem molestiae?</p>

            <Button still="xs:w-[50vw] lg:w-[16vw] p-2 text-[1.4rem] rounded-[10px] " txt2={<i className="fa-solid fa-arrow-right"></i>} txt1="Get in touch" />

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
            <SwiperSlide><img className='w-[100%] object-cover h-[100%]' src="../about/carousel1.jpeg" alt="" /></SwiperSlide>
            <SwiperSlide><img className='w-[100%] object-cover h-[100%]' src="../about/carousel2.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img className='w-[100%] object-cover h-[100%]' src="../about/carousel3.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img className='w-[100%] object-cover h-[100%]' src="../about/carousel4.webp" alt="" /></SwiperSlide>
          </Swiper>

        </div>
      </div>
      <div className="bg-black text-white py-5 lg:h-[100vh] xs:h-fit">
        <h3 className="text-2xl flex items-center px-10 font-bold h-[20vh] ">Why work with us</h3>
        <div className="flex justify-around lg:flex-row xs:flex-col  xs:gap-5 xs:items-center	">
          <CardInfo classes="bg-purple" txt1="Peşəkarlıq və Təcrübə" txt2="Peşəkarlıq və Təcrübə" desc="Bizim komandamız illərdir bu sahədə təcrübəyə malik peşəkar mütəxəssislərdən ibarətdir. Probleminizi ən qısa müddətdə və yüksək keyfiyyətlə həll edəcəyik!" />
          <CardInfo classes="bg-red" txt1="Müştəri məmnuniyyəti" txt2="Müştəri məmnuniyyəti" desc="Sizin rahatlığınız bizim üçün önəmlidir! Müştəri məmnuniyyəti bizim üçün prioritetdir və biz hər zaman müştərilərimiz üçün ən yaxşısını etməyə çalışırıq." />
          <CardInfo classes="bg-orange" txt1="Güvən və Keyfiyyət" txt2="Güvən və Keyfiyyət" desc="Güvən və keyfiyyət bizim əsas dəyərlərimizdir. Bizə etibar edin, kompüteriniz bizim əlimizdə ən yaxşı xidmətə layiqdir!" />
        </div>
      </div>

      <div className="flex justify-evenly  bg-qara h-fit text-white xs:flex-col lg:flex-row xs:gap-5 ">
        <div className='flex flex-col justify-end '>

          <img className="lg:h-[60vh] lg:w-[30vw] rounded-t-[10px] xs:h-[50vh] xs:w-[100vh]	 " src="/about/photo2.webp" alt="" />
        </div>

        <div className=" md:h-[30vh] lg:w-[30%] lg:h-[60vh] flex flex-col justify-center  gap-7 xs:p-5">

          <p className='font-semibold'>Lorem, ipsum.</p>
          <h3 className="text-4xl font-semibold" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod.</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, rerum ab. Itaque illo rerum porro, vel facilis nobis eius
            voluptatum perspiciatis esse molestias repudiandae quod cupiditate. Iste ad ratione dolorum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit magnam praesentium nulla. Sequi, natus. Totam, tempore. Maxime, temporibus placeat!</p>
        </div>
      </div>

      <div className=" bg-black text-white lg:h-[70vh]  flex items-center justify-evenly lg:flex-row xs:flex-col xs:gap-5 xs:py-5 " >
        <TeamCard img="/about/1.png" name="William Johnson" text="COO" />
        <TeamCard img="/about/2.png" name="Olivia Brown" text="COO" />
        <TeamCard img="/about/3.png" name="James Anderson" text="COO" />
        <TeamCard img="/about/4.png" name="Emma Smith" text="COO" />
      </div>

    </>
  )
}
export default AboutPage

































