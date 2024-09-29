import MyRoutes from "./components/MyRoutes"
import LayoutComponent from "./layout/LayoutComponent"
import { store } from "./state/store"
import ScrollTop from "./ui/TopScroll"
import ScrollIcon from "./ui/TopToScroll"
import 'font-awesome/css/font-awesome.min.css'
import { Provider } from "react-redux" 
function App() {
  
  return (
    <>
    <Provider store={store}>
      <LayoutComponent>
        <ScrollTop />
        <MyRoutes />
        <ScrollIcon />
      </LayoutComponent>
    </Provider>
    </>
  )
}

export default App
