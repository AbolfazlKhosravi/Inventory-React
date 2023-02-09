import { Provider } from "react-redux";
import AppInventory from "./components/AppInventory";
import Navbar from "./components/navbaeer";
import store from "./components/redux/store";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Provider store={store}>
      <ToastContainer />
      <div className="h-screen bg-gray-900 flex flex-col items-center justify-start">
       <Navbar/>
       <AppInventory/>
      </div>
    </Provider>
  );
}

export default App;
