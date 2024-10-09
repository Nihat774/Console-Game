import { AllNews } from "../../components/MyDataNews"
import {motion} from 'framer-motion'
import { containerVariants } from "../../utils/variants"
function NewsPage() {
  return (
    <>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
   className=" flex justify-center py-5  bg-black">
        <p className="text-[1.7rem] font-semibold text-orange w-[80vw]">Komanda üzvlərimiz</p>
      </motion.div>
      <AllNews />
    </>
  )
}

export default NewsPage