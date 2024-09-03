import React from "react"
function AboutPage() {
  return (
    <>
      <div className="flex  justify-content: space-evenly; bg-black text-white ">

        <div className="px-10"><p className="py-5"><a href="Home">Home</a> <i className="fa-solid fa-arrow-right"></i>  <a className="text-orange" href="About us">About us</a></p><h1 className="font-bold text-4xl py-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit?</h1>
          <p className="py-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis atque ab tenetur placeat culpa ullam deserunt minima
            omnis error, porro exercitationem molestiae?</p>
            <button className="my-2 rounded-2xl bg-orange p-2" >Get in touch  <i className="fa-solid fa-arrow-right"></i> </button>  </div>
        <div><img  src="/about/photo1.jpeg" alt="" /></div>
      </div>
      <div className="bg-black text-white  p-10 ">
        <h3 className="text-2xl font bold ml-20	py-20">Why work with us</h3>
        <div className="flex justify-around  mh-5 mx-5">
          <div className="border-0 w-96 h-96  m-5 bg-qara rounded-md p-10"> <span className="bg-purple rounded-md text-xl py-3">Peşəkarlıq və Təcrübə</span>
            <h3 className="my-3 text-2xl py-3">Peşəkarlıq və Təcrübə</h3>
            <p className="text-lg py-3">Bizim komandamız illərdir bu sahədə təcrübəyə malik peşəkar mütəxəssislərdən ibarətdir.
              Probleminizi ən qısa müddətdə və yüksək keyfiyyətlə həll edəcəyik!</p>
          </div>
          <div className="border-0 w-96 h-96 m-5 bg-qara rounded-md  p-10 "><span className="bg-yellow rounded-md text-xl py-3">Müştəri Məmnuniyyəti</span>
            <h3 className="my-3 text-2xl py-3">Müştəri Məmnuniyyəti</h3>
            <p className="text-lg py-3">Sizin rahatlığınız bizim üçün önəmlidir!
              Müştəri məmnuniyyəti bizim üçün prioritetdir və biz hər zaman müştərilərimiz üçün
              ən yaxşısını etməyə çalışırıq</p></div>
          <div className="border-0 w-96 h-96 m-5 bg-qara rounded-md  p-10 "><span className="bg-green rounded-md text-xl py-3">Güvən və Keyfiyyət</span>
            <h3 className="my-3 text-2xl py-3">Güvən və Keyfiyyət</h3>
            <p className="text-lg py-3">Güvən və keyfiyyət bizim əsas dəyərlərimizdir.
              Bizə etibar edin, kompüteriniz bizim əlimizdə ən yaxşı xidmətə  layiqdir!</p></div>
        </div>
      </div>
      <div className="flex  justify-center bg-qara text-white items-end">
        <div><img className="w-96 h-80 pr-12 ph-5 rounded-xl	 " src="/about/photo2.jpeg " alt="" /></div>
        <div className="w-2/6 h-96 pt-10 pl-10 ">
          <span>Lorem, ipsum.</span>
          <h3 className="text-4xl font bold py-5" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod.</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, rerum ab. Itaque illo rerum porro, vel facilis nobis eius
            voluptatum perspiciatis esse molestias repudiandae quod cupiditate. Iste ad ratione dolorum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit magnam praesentium nulla. Sequi, natus. Totam, tempore. Maxime, temporibus placeat!</p>
        </div>
      </div>
      <div className=" bg-black text-white pt-40" >
        <span className="text-xl font bold ml-40">Our team</span>
        <div className="flex justify-center gap-20" >
          <div className="bg-qara w-56 rounded-md px-5 flex justify-center " ><a href="Home" ><img className="w-28 h-28" src="/about/2.png" alt="" />
            <span className="text-center">James Anderson
            </span>
            <p className="text-center">COO</p>
          </a>
          </div>
         <div  className="bg-qara w-56 rounded-md px-7 flex justify-center"> <a href="Home"><img className="w-28	h-28" src="/about/1.png" alt="" />
            <span className="text-center">Emma Smith</span>
            <p className="text-center">COO</p>
          </a></div>
        <div  className="bg-qara w-56 rounded-md px-7 flex justify-center"><a href="Home"><img className="w-28	h-28	" src="/about/3.png" alt="" />
            <span  className="text-center">William Johnson  </span>
            <p  className="text-center">COO</p>
          </a></div>
         <div  className="bg-qara w-56 rounded-md px-7 flex justify-center"> <a href="Home"><img className="w-28	h-28" src="/about/4.png" alt="" />
            <span className="text-center">Olivia Brown</span>
            <p className="text-center">COO</p>
          </a>
          </div>
        </div >
      </div >

    </>
  )}
export default AboutPage
