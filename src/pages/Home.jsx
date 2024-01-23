import { useState, useEffect } from "react";

import { apiFunctions } from "../api/api.js";

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import ContentItems from "../components/ContentItems";
import Search from "../components/Search/";
import { useSelector } from "react-redux";

const Home = () => {
  const [pizzaList, setPizzaList] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const { categoryIndex, sortIndex, searchValue } = useSelector(
    (state) => state.filter
  );

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
          categoryIndex,
          sortIndex,
          searchValue
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
  }, [categoryIndex, sortIndex, searchValue]);

  return (
    <div className="content">
      <div className="container">
        <div className="content__top">
          <Categories activeCategoryIndex={categoryIndex} />
          <Sort activeSortIndex={sortIndex} />
        </div>
        <div className="content__title">
          <h2>Наши пиццы</h2>
          <Search searchValue={searchValue}></Search>
        </div>
        <ContentItems pizzaList={pizzaList} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default Home;
