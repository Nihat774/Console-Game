// import { Link } from "react-router-dom"
import { CvButtonType } from "../../components/MyTypes"

function CvButton({cv,to}:CvButtonType) {
  return (
    <>

     {/* <a href={to} download={cv} className="border text-center text-[1rem] font-semibold py-3 xs:w-[40vw] lg:w-[15vw] rounded-[10px] bg-orange hover:shadow-lg hover:shadow-orange/100 hover:text-orange hover:bg-white hover:border-orange">DOWNLOAD CV</a> */}

     <a href={to} download={cv} className="border text-center text-[1rem] font-semibold p-3 xs:w-[45vw] lg:w-[15vw] rounded-[11px] bg-orange duration-500 hover:shadow-lg hover:shadow-orange/100 hover:text-orange hover:bg-white hover:border-orange">DOWNLOAD CV</a>

    </>
  )
}

export default CvButton
