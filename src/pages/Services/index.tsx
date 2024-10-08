import { Link } from "react-router-dom";
import CountUp from "react-countup";


function ServicesPage() {
  return (
    <>
      <div className="contanier mx-auto bg-black">
        <section className="bg-black flex flex-col items-center md:h-[70vh] xs:h-fit justify-center gap-7">
          <div className="flex flex-col items-center gap-5 text-white">
            <p className="flex items-center gap-2">
              <Link to={"/"} className="text-[1.3rem]">
                Home{" "}
              </Link>
              <i className="fa-solid fa-chevron-right"></i>
              <p className="text-orange text-[1.3rem]">Services</p>
            </p>
            <p className="text-[1.5rem]">
              Lorem ipsum, dolor sit amet consectetur adipisicing.
            </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
          </div>

          <div className="flex md:flex-row xs:flex-col justify-around bg-gray items-center border rounded-[15px] md:h-[30vh] w-[70vw] xs:h-fit xs:gap-7 xs:py-5">
            <div className="flex h-full  gap-5 justify-center items-center">
              <p>
                <i className=" rounded-full p-5 fa-solid fa-user text-orange bg-white"></i>
              </p>
              <div className=" text-white">
                <CountUp
                  className="text-[1.3rem] font-bold"
                  end={20}
                  duration={2}
                />
                <span className="text-[1.3rem] font-bold">+</span>
                <p>Clients</p>
              </div>
            </div>

            <div className="md:h-[20vh] md:w-[2px] xs:h-[2px] xs:w-[20vh] bg-zinc-400"></div>

            <div className="flex h-full gap-3 items-center">
              <p>
                <i className="border rounded-full p-5 fa-solid fa-location-dot text-orange bg-white "></i>
              </p>
              <div className=" text-white">
                <CountUp
                  className="text-[1.3rem] font-bold"
                  end={15}
                  duration={2}
                />
                <span className="text-[1.3rem] font-bold">+</span>
                <p>Countries</p>
              </div>
            </div>

            {/* <div className="h-[20vh] w-[2px] bg-zinc-400"></div> */}
            <div className="md:h-[20vh] md:w-[2px] xs:h-[2px] xs:w-[20vh] bg-zinc-400"></div>
            <div className="flex  h-full  gap-3 items-center">
              <p>
                <i className="border rounded-full p-5 fa-solid fa-bars-progress text-orange bg-white"></i>
              </p>
              <div className=" text-white">
                <CountUp
                  className="text-[1.3rem] font-bold"
                  end={40}
                  duration={2}
                />
                <span className="text-[1.3rem] font-bold">+</span>
                <p>Projects</p>
              </div>
            </div>
          </div>
        </section>

        <section className="flex md:flex-row xs:flex-col xs:py-5 xs:gap-5 justify-around items-center md:h-[70vh] xs:h-fit bg-black">
          <div>
            <iframe
              src="https://www.youtube.com/embed/y6vWl-8_0QI?si=DtcBOX_0IjNZyrSZ"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              className="rounded-[20px] md:w-[40vw] md:h-[50vh] xs:h-fit"
            ></iframe>
          </div>


              <p className="flex gap-2 items-center">
                <i className="rounded-full bg-green fa-regular fa-circle-check h-fit  w-fit"></i>
                Lorem
                <span className="">ipsum dolor sit.</span>
              </p>

              <p className="flex gap-2 items-center">
                <i className="rounded-full bg-green fa-regular fa-circle-check h-fit  w-fit"></i>
                Lorem
                <span className="">ipsum dolor sit.</span>
              </p>


          </div>

          <div className="flex flex-col gap-5 md:w-[30vw] xs:w-full xs:p-3  text-white ">
            <p className="text-[1.4rem] font-semibold ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
              fugiat.
            </p>
            <p className="w-inherit">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. A cum
              quae incidunt rerum facere quos officia adipisci rem molestias
              alias? Quibusdam facere nihil porro facilis doloremque obcaecati
              adipisci maxime mollitia. Tempore non expedita porro sequi
              accusantium.
            </p>
            <p className="w-inherit">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
              minus earum ea!
            </p>
            <Button2 />
          </div>
        </section>

        <section>
          <Swipper />
        </section>
      </div>
    </>
  );
}

export default ServicesPage;
