
import ScrollAnimation from '../utils/ScrollAnimation'
import { useNavigate } from 'react-router-dom';
import { useMode } from '../Context';
import Button from '../ui/Button';

function HomeSection1() {
    let pathname = useNavigate();
      const {darkMode} = useMode()
  return (
     <section className={`flex justify-around`}>
          <ScrollAnimation>
            <div className={`md:w-[30vw]  lg:w-full xs:w-full  flex flex-col gap-7`}>
              <p className="text-orange font-bold text-[1.4rem]">
                3D game Dev
              </p>
              <p className=" md:text-[2.7rem] xs:text-[1.3rem] font-bold lg:text-[3.4rem] lg:w-[40vw] md:w-[31vw] ">
                Müştərilərimiz üçün hansı işləri görürük ?
              </p>
              <p className="font-costum lg:w-[30vw] lg:text-[1.4rem] md:w-[40vw]">
                Yeni , maraqlı və yüksək keyfiyyətli PC , PS4 oyunlarının satışı
                və yeni oyunların hazırlanmasında bizim komandaya güvənə
                bilərsiniz.{" "}
              </p>
              <Button
                onClick={() => pathname("/about")}
                txt1="Ətraflı"
                txt2={<i className="fa-solid fa-caret-right"></i>}
                still="rounded-[10px] md:w-[15vw] hover:text-orange xs:w-[30vw] xs:py-1 md:py-3 text-[1.4rem] hover:bg-transparent"
              />
            </div>
          </ScrollAnimation>
          <ScrollAnimation>
            <div className="">
              <div className="lg:h-[85vh] md:w-[40vw]  md:h-[40vh] md:object-contain md:flex xs:hidden ">
                <img
                  className="w-[100%] h-[100%] xs:absolute xs:left-[0%] md:left-[10%] object-contain"
                  src={`${darkMode?"/home/bg-excample.png":"/home/bgImageforLight.png"}`}
                  alt="console page"
                />
              </div>
            </div>
          </ScrollAnimation>
        </section>
  )
}

export default HomeSection1