
import { AllNews } from "../../components/MyDataNews"
import {motion} from 'framer-motion'
import { containerVariants } from "../../utils/variants"
import { useMode } from "../../Context"
function NewsPage() {
  const {darkMode} = useMode()
  return (
    <>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
   className={`flex justify-center py-5 ${darkMode?"bg-black text-white":"bg-white text-black"}`}>
        <p className="text-[1.7rem] font-semibold text-orange w-[80vw]">Komanda üzvlərimiz</p>
      </motion.div>
      <AllNews />
    </>
  )
}

export default NewsPage
