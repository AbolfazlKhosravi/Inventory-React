import { Provider } from "react-redux";
import Navbar from "./components/navbaeer";
import store from "./components/redux/root";

function App() {
  return (
    <Provider store={store}>
      <div className="h-screen  bg-gray-900">
       <Navbar/>
      </div>
    </Provider>
  );
}

export default App;
