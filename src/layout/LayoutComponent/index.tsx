import { IChildren } from "../../components/MyTypes"
import SubHeading from "../../components/SubHeading"
import Footer from "../Footer"
import Header from "../Header"

function LayoutComponent({children}:IChildren

) {
  return (
    <>
      <Header />
     <div className="px-4 md:px-8">
       {children}
     </div>
      <SubHeading />
      <Footer />
    </>
  )
}

export default LayoutComponent
