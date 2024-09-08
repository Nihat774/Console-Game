import MyRoutes from "./components/MyRoutes"
import LayoutComponent from "./layout/LayoutComponent"
import ScrollTop from "./ui/TopScroll"
import ScrollIcon from "./ui/TopToScroll"

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
