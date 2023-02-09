import { Provider } from "react-redux";
import AppInventory from "./components/AppInventory";
import Navbar from "./components/navbaeer";
import store from "./components/redux/root";

function App() {
  return (
    <Provider store={store}>
      <div className="h-screen bg-gray-900 flex flex-col items-center justify-start">
       <Navbar/>
       <AppInventory/>
      </div>
    </Provider>
  );
}

export default App;
