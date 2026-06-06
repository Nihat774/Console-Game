import { useNavigate } from "react-router-dom";
import Data from "../../components/MyDataHome";
import Button from "../../ui/Button";
import Button2 from "../../ui/Button2";
import Card from "../../ui/Card";
import MyAccordion from "../../ui/Accordion";
import { motion } from "framer-motion";
import { containerVariants } from "../../utils/variants";
import ScrollAnimation from "../../utils/ScrollAnimation";
import { useMode } from "../../Context";
import HomeSection1 from "../../components/HomeSection1";
import HomeSection2 from "../../components/HomeSection2";
import HomeSection3 from "../../components/HomeSection3";
import HomeSection5 from "../../components/HomeSection5";
import HomeSection4 from "../../components/HomeSection4";
import HomeSection6 from "../../components/HomeSection6";



function HomePage() {
  let pathname = useNavigate();
  const { darkMode } = useMode()
  return (
    <>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className={`w-full py-5 ${darkMode ? "bg-black text-white" : "bg-white text-black"}`}
      >
        <HomeSection1 />
        <ScrollAnimation>
          <HomeSection2 />
        </ScrollAnimation>

        <ScrollAnimation>
          <HomeSection3 />
        </ScrollAnimation>

        <ScrollAnimation>
          <HomeSection4 />
        </ScrollAnimation>


        <ScrollAnimation>
          <HomeSection5 />
        </ScrollAnimation>

        <ScrollAnimation>
          <HomeSection6 />
        </ScrollAnimation>
      </motion.div>
    </>
  );
}

export default HomePage;
