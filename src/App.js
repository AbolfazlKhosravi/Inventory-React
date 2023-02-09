import { Provider } from "react-redux";
import store from "./components/redux/root";

function App() {
  return (
    <Provider store={store}>
      <div className="">
      </div>
    </Provider>
  );
}

export default App;
