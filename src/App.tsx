import MyRoutes from "./components/MyRoutes";
import { ModeProvider } from "./Context";
import LayoutComponent from "./layout/LayoutComponent";

import { store } from "./state/store";
import ScrollTop from "./ui/TopScroll";
import ScrollIcon from "./ui/TopToScroll";
import { Provider } from "react-redux";

function App() {
  return (
    <ModeProvider>
      <Provider store={store}>
        <LayoutComponent>
          <ScrollTop />
          <MyRoutes />
          <ScrollIcon />
        </LayoutComponent>
      </Provider>
    </ModeProvider>
  );
}

export default App;
