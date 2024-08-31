import Data from "../../components/MyData"
import Button from "../../ui/Button"

function HomePage() {
  return (
    <>
      <section className=" bg-black text-white flex justify-around ">
        <div className="w-[30vw]  flex flex-col justify-around">
          <p className="text-orange font-bold">3D game Dev </p>
          <p className="text-[3rem] font-bold ">Work that we produce for our clients</p>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
          <Button txt='Get more details' still='rounded-[20px] w-[15vw]' />
        </div>
        <div className="">
          <img className="absolute top-[32%] right-[42%]" src="/home/cry 1.png" alt="" />
          <img className="absolute right-[22%] top-[35%]" src="/home/unreal 1.png" alt="" />
          <img className="absolute top-[60%] left-[40%]" src="/home/unity 1.png" alt="" />
          <div className="h-[85vh] w-[40vw] object-contain "><img className="w-[100%] h-[100%]" src="../public/home/joy_stick 1.png" alt="console page" /></div>
        </div>
      </section>

      <section>
        <div className="flex justify-between  place-items-end bg-black h-[30vh]">
          <p className="text-[1.8rem] font-bold text-white  ml-[5vw]">Currently Trending Games</p>
          <button className="border text-white bg-stone py-3 mr-[5vw] text-[1.3rem] font-rubik w-[8vw] rounded-[10px]">SEE ALL</button>
        </div>

        <div className="flex justify-evenly place-items-center bg-black h-[70vh]">
          <Data />
        </div>
      </section>

      <section className="bg-black flex flex-col gap-4 ">

        <div className="bg-black text-white flex justify-center ">
          <p className="text-[2rem] font-bold w-[50vw] py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, obcaecati!</p>
        </div>

        <div className="w-[50vw] h-[30vh] flex flex-col place-items-center justify-evenly">
          <p className="text-[1.3rem] font-bold  w-[35vw] text-white">Lorem ipsum</p>
          <p className="text-wstone w-[35vw]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas vel, praesentium fugit sed debitis corporis ipsa aliquam in nesciunt temporibus magni ad dicta optio facere.</p>
        </div>

        <div className="flex justify-center py-5 ">
          <img className="object-cover" src="../public/home/Rectangle 4.png" alt="image" />
        </div>
      </section>

      <section className="relative z-10 bg-[url('/home/bg-image.png')]  h-[100vh] text-white text-center">
      <div className="absolute bg-[rgba(0,0,0,0.7)] inset-0"></div>
       <div className="flex flex-col justify-center place-items-center gap-5 h-[40vh]">
       <h2 className="relative z-30 text-[1.8rem] font-poppins font-bold w-[50vw] bg-orange ">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h2>
        <p className="relative z-30 font-semibold w-[50vw] ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
  
        </div> 
      </section>
    </>
  )
}

export default HomePage
