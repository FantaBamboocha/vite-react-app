import { Provider } from "react-redux";

import Header from "./components/Header";
import Router from "./routes/Router";

import { store } from "./redux/store";

import "./scss/app.scss";

function App() {
  return (
    <Provider store={store}>
      <div className="wrapper">
        <Header />
        <Router />
      </div>
    </Provider>
  );
}

export default App;
