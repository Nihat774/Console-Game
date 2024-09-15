import { AllNews } from "../../components/MyDataNews"

function NewsPage() {
  return (
    <>
      <div className=" flex justify-center py-5  bg-black">
        <p className="text-[1.7rem] font-semibold text-orange w-[80vw]">Komanda üzvlərimiz</p>
      </div>
      <AllNews />
    </>
  )
}

export default NewsPage