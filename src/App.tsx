import { FC } from "react";
import { Provider } from "react-redux";

import { ErrorBoundary } from "react-error-boundary";

import Header from "./components/Header";
import Router from "./routes/Router";

import { store } from "./redux/store";

import "./scss/app.scss";
import { Fallback } from "@components/ErrorBoundary/Fallback";

// --------------------------------
import { useNavigate } from "react-router-dom";
//---------------

const App: FC = () => {
  const navigate = useNavigate();
  return (
    <Provider store={store}>
      <ErrorBoundary
        FallbackComponent={Fallback}
        onReset={() => {
          alert("Погнали?");
          navigate("/", { replace: true });
        }}
      >
        <div className="wrapper">
          <Header />
          <Router />
        </div>
      </ErrorBoundary>
    </Provider>
  );
};

export default App;
