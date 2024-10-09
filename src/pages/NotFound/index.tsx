import {motion} from 'framer-motion'
import { containerVariants } from '../../utils/variants'

function NotFoundPage() {
  return (
    <>
     <motion.div  variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
 className="bg-black text-white text-[1.5rem] px-5">404 not found</motion.div> 
    </>
  )
}

export default NotFoundPage
