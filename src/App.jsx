import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import ContentItems from "./components/ContentItems";

import "./scss/app.scss";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <ContentItems />
        </div>
      </div>
    </div>
  );
}

export default App;
