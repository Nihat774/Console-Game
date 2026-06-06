import Card from "../ui/Card"

function HomeSection4() {
    return (
        <section className="-mx-8 relative bg-[url('/home/bg-image.png')] bg-no-repeat bg-cover md:h-[100vh] xs:h-fit text-white text-center">
  <div className="absolute bg-[rgba(0,0,0,0.7)] inset-0"></div>

  <article className="flex flex-col place-items-center relative z-30">
    <div className="flex flex-col justify-center place-items-center gap-7 h-[60vh] md:w-[50vw] xs:w-[70vw]">
      <h2 className="md:text-[1.8rem] font-poppins font-bold xs:text-[1.4rem]">
        Siz də zövqünüzə uyğun oyunları bizimlə dizayn edə bilərsiniz.
      </h2>

      <p className="font-semibold text-[1.4rem]">
        Bu günə qədər 100+ müştəriyə xidmət göstərmiş, bir çox yeni oyunların dizaynında iştirak etmişik.
      </p>
    </div>

    <div className="grid md:grid-cols-4 md:py-3 xs:grid-cols-1 xs:gap-7 xs:py-5 md:w-[60vw] xs:w-[80vw]">
      
      <Card txt="Mobile Game Development">
        <i className="fa-solid fa-mobile-screen rounded-full p-5 text-orange-500 bg-white text-[2rem]"></i>
      </Card>

      <Card txt="PC Game Development">
        <i className="fa-solid fa-laptop rounded-full p-5 text-orange-500 bg-white text-[2rem]"></i>
      </Card>

      <Card txt="PS4 Game Development">
        <i className="fa-brands fa-playstation rounded-full p-5 text-orange-500 bg-white text-[2rem]"></i>
      </Card>

      <Card txt="3D Graphic Design">
        <i className="fa-solid fa-palette rounded-full p-5 text-orange-500 bg-white text-[2rem]"></i>
      </Card>

    </div>
  </article>
</section>
    )
}

export default HomeSection4