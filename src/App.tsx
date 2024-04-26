import { FC } from "react";
import { Provider } from "react-redux";

import { ErrorBoundary } from "react-error-boundary";

import Header from "./components/Header";
import Router from "./routes/Router";

import { store } from "./redux/store";

import "./scss/app.scss";
import { Fallback } from "@components/ErrorBoundary/Fallback";

const App: FC = () => {
  return (
    <Provider store={store}>
      <ErrorBoundary
        FallbackComponent={Fallback}
        onReset={() => alert("Погнали?")}
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
