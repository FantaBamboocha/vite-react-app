import React from "react";
import { Provider } from "react-redux";

import Header from "./components/Header";
import Router from "./routes/Router";

import { store } from "./redux/store";

import "./scss/app.scss";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="wrapper">
        <Header />
        <Router />
      </div>
    </Provider>
  );
};

export default App;
