import { IChildren } from "../../components/MyTypes"
import Footer from "../Footer"
import Header from "../Header"

function LayoutComponent({children}:IChildren

) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default LayoutComponent
