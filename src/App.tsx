import MyRoutes from "./components/MyRoutes"
import LayoutComponent from "./layout/LayoutComponent"
import ScrollTop from "./ui/TopScroll"
import ScrollIcon from "./ui/TopToScroll"
import 'font-awesome/css/font-awesome.min.css'
function App() {
  
  return (
    <>
      <LayoutComponent>
        <ScrollTop />
        <MyRoutes />
        <ScrollIcon />
      </LayoutComponent>
    </>
  )
}

export default App
