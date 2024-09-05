
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
      <div className="flex justify-evenly; bg-black text-white ">

        <div className="px-10  w-[50%] flex flex-col items-center">

          <div className='w-[30vw] h-[70vh]  flex flex-col justify-evenly'>
            <div className=''>
              <Link to={'/'}>Home</Link> <i className="fa-solid fa-arrow-right px-3"></i>
              <Link className="text-orange " to={'/about'}>About us</Link>
            </div>

            <p className="font-bold text-4xl ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit?</p>
            <p className="">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis atque ab tenetur placeat culpa ullam deserunt minima
              omnis error, porro exercitationem molestiae?</p>

            <Button still=" w-[14vw] py-4 text-[1.4rem] rounded-[20px]" txt2={<i className="fa-solid fa-arrow-right px-3"></i>} txt1="Get in touch" />
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
            className="mySwiper h-[70vh] w-[50vw]"
          >
            <SwiperSlide><img className='w-[100%] object-cover h-[100%]' src="../about/carousel1.jpeg" alt="" /></SwiperSlide>
            <SwiperSlide><img className='w-[100%] object-cover h-[100%]' src="../about/carousel2.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img className='w-[100%] object-cover h-[100%]' src="../about/carousel3.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img className='w-[100%] object-cover h-[100%]' src="../about/carousel4.webp" alt="" /></SwiperSlide>
          </Swiper>

        </div>
      </div>
      <div className="bg-black text-white py-7">
        <h3 className="text-2xl flex items-center px-10 font-bold h-[20vh] ">Why work with us</h3>
        <div className="flex justify-around ">
          <CardInfo classes="bg-purple" txt1="Peşəkarlıq və Təcrübə" txt2="Peşəkarlıq və Təcrübə" desc="Bizim komandamız illərdir bu sahədə təcrübəyə malik peşəkar mütəxəssislərdən ibarətdir. Probleminizi ən qısa müddətdə və yüksək keyfiyyətlə həll edəcəyik!" />
          <CardInfo classes="bg-red" txt1="Müştəri məmnuniyyəti" txt2="Müştəri məmnuniyyəti" desc="Sizin rahatlığınız bizim üçün önəmlidir! Müştəri məmnuniyyəti bizim üçün prioritetdir və biz hər zaman müştərilərimiz üçün ən yaxşısını etməyə çalışırıq." />
          <CardInfo classes="bg-orange" txt1="Güvən və Keyfiyyət" txt2="Güvən və Keyfiyyət" desc="Güvən və keyfiyyət bizim əsas dəyərlərimizdir. Bizə etibar edin, kompüteriniz bizim əlimizdə ən yaxşı xidmətə layiqdir!" />
        </div>
      </div>

      <div className="flex justify-evenly  bg-black h-[70vh] text-white ">
        <div className='flex flex-col justify-end'>
          <img className="h-[60vh] w-[30vw] rounded-t-[10px]	 " src="/about/photo2.jpeg " alt="" />
        </div>

        <div className="w-[40%] h-[83%] flex flex-col justify-end gap-7">
          <p className='font-semibold'>Lorem, ipsum.</p>
          <h3 className="text-4xl font-semibold" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod.</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, rerum ab. Itaque illo rerum porro, vel facilis nobis eius
            voluptatum perspiciatis esse molestias repudiandae quod cupiditate. Iste ad ratione dolorum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit magnam praesentium nulla. Sequi, natus. Totam, tempore. Maxime, temporibus placeat!</p>
        </div>
      </div>

      <div className=" bg-black text-white h-[70vh]  flex items-center justify-evenly" >
        <TeamCard img="/about/1.png" name="William Johnson" text="COO" />
        <TeamCard img="/about/2.png" name="Olivia Brown" text="COO" />
        <TeamCard img="/about/3.png" name="James Anderson" text="COO" />
        <TeamCard img="/about/4.png" name="Emma Smith" text="COO" />
      </div>

    </>
  )
}
export default AboutPage

































