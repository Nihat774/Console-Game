
import Button from "../../ui/Button"
function AboutPage() {
  return (
    <>
      <div className="flex  justify-content: space-evenly; bg-black text-white py-5">

        <div><p className="py-5"><a href="Home">Home</a> <i className="fa-solid fa-arrow-right"></i>  <a className="text-orange" href="About us">About us</a></p><h1 className="font-bold text-4xl py-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit?</h1>
          <p py-5>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis atque ab tenetur placeat culpa ullam deserunt minima
            omnis error, porro exercitationem molestiae?</p>
          <Button txt='Get in touch' still={""} />  <i className="fa-solid fa-arrow-right"></i>  </div>
        <div><img src="/about/photo1.jpeg" alt="" /></div>
      </div>
      <div className="bg-black text-white">
        <h3 className="text-2xl font bold ml-20	 ">Why work with us</h3>
        <div className="flex justify-around  mh-5 mx-5">
          <div className="border-0 w-96 h-80  m-5 bg-qara rounded-md py-5  px-3"> <span className="bg-purple rounded-md text-xl">Peşəkarlıq və Təcrübə</span>
            <h3 className="my-3 text-2xl">Peşəkarlıq və Təcrübə</h3>
            <p className="text-lg">Bizim komandamız illərdir bu sahədə təcrübəyə malik peşəkar mütəxəssislərdən ibarətdir.
              Probleminizi ən qısa müddətdə və yüksək keyfiyyətlə həll edəcəyik!</p>
          </div>
          <div className="border-0 w-96 h-80 m-5 bg-qara rounded-md py-5 px-3 "><span className="bg-yellow rounded-md text-xl">Müştəri Məmnuniyyəti</span>
            <h3 className="my-3 text-2xl">Müştəri Məmnuniyyəti</h3>
            <p className="text-lg">Sizin rahatlığınız bizim üçün önəmlidir!
              Müştəri məmnuniyyəti bizim üçün prioritetdir və biz hər zaman müştərilərimiz üçün
              ən yaxşısını etməyə çalışırıq</p></div>
          <div className="border-0 w-96 h-80 m-5 bg-qara rounded-md py-5 px-3 "><span className="bg-green rounded-md text-xl">Güvən və Keyfiyyət</span>
            <h3 className="my-3 text-2xl">Güvən və Keyfiyyət</h3>
            <p className="text-lg">Güvən və keyfiyyət bizim əsas dəyərlərimizdir.
              Bizə etibar edin, kompüteriniz bizim əlimizdə ən yaxşı xidmətə  layiqdir!</p></div>
        </div>
      </div>
      <div className="flex flex justify-center bg-qara text-white  flex items-end">
        <div><img className="w-96 h-80 pr-12 ph-5 " src="/about/photo2.jpeg " alt="" /></div>
        <div className="w-2/6 h-96 ph-5 pt-10">
          <span>Lorem, ipsum.</span>
          <h3 className="text-4xl font bold" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod.</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, rerum ab. Itaque illo rerum porro, vel facilis nobis eius
            voluptatum perspiciatis esse molestias repudiandae quod cupiditate. Iste ad ratione dolorum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit magnam praesentium nulla. Sequi, natus. Totam, tempore. Maxime, temporibus placeat!</p>
        </div>
      </div>
      <div className=" bg-black text-white" >
        <span className="text-xl font bold ml-40">Our team</span>
        <div className="flex justify-center gap-20" >
          <a href="Home" className="bg-qara w-56 rounded-md px-5 " ><img className="w-28 h-28" src="/about/2.png" alt="" />
            <span>James Anderson
            </span>
            <p>COO</p>
          </a>
          <a href="Home"  className="bg-qara w-56 rounded-md px-5"><img className="w-28	h-28" src="/about/1.png" alt="" />
            <span>Emma Smith</span>
            <p>COO</p>
          </a>
          <a href="Home"  className="bg-qara w-56 rounded-md px-5"><img className="w-28	h-28	" src="/about/3.png" alt="" />
          <span>William Johnson  </span>
          <p>COO</p>
        </a>
        <a href="Home"  className="bg-qara w-56 rounded-md px-5"><img className="w-28	h-28" src="/about/4.png" alt="" />
        <span>Olivia Brown</span>
        <p>COO</p>
      </a>
    </div >
      </div >
   
    </>)}



export default AboutPage
