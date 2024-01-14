import { useState, useEffect } from "react";

import { apiFunctions } from "../api/api.js";

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import ContentItems from "../components/ContentItems";
import axios from "axios";

const Home = () => {
  const [pizzaList, setPizzaList] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeIndexCategory, setActiveIndexCategory] = useState(0);

  useEffect(() => {
    const pizzaListRequest = async () => {
      try {
        const pizzaListResponse = await apiFunctions.requestData();

        if (pizzaListResponse) {
          setTimeout(() => {
            setPizzaList(pizzaListResponse);
            setIsLoading(false);
          }, 1000);
        }
      } catch (err) {
        console.error(err.message);
        setIsLoading(false);
      }
    };
    pizzaListRequest();
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const pizzaListResponse = await apiFunctions.sortData(
          activeIndexCategory
        );
        if (pizzaListResponse) {
          setTimeout(() => {
            setPizzaList(pizzaListResponse);
            setIsLoading(false);
          }, 500);
        }
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, [activeIndexCategory]);

  const toggleActiveCategory = (number) => {
    setActiveIndexCategory(number);
  };

  return (
    <div className="content">
      <div className="container">
        <div className="content__top">
          <Categories
            toggleActiveCategory={toggleActiveCategory}
            activeIndexCategory={activeIndexCategory}
          />
          <Sort />
        </div>
        <h2 className="content__title">Наши пиццы</h2>
        <ContentItems pizzaList={pizzaList} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default Home;
