import Header from "./components/Header";
import Router from "./routes/Router";
import BurgerMenu from "./components/BurgerMenu/BurgerMenu";

import "./scss/app.scss";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Router />
    </div>
  );
}

export default App;
