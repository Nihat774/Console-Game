import { IChildren } from "../../components/MyTypes"
import SubHeading from "../../components/SubHeading"
import Footer from "../Footer"
import Header from "../Header"

function LayoutComponent({children}:IChildren

) {
  return (
    <>
      <Header />
      {children}
      <SubHeading />
      <Footer />
    </>
  )
}

export default LayoutComponent
