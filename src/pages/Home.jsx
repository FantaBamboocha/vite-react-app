import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import qs from "qs";

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import ContentItems from "../components/ContentItems";
import Search from "../components/Search/";
import { setFilters } from "../redux/slices/filter.js";
import { requestData } from "../redux/slices/reqPizzaSlice.js";

const Home = () => {
  const { items: pizzaList, isLoading } = useSelector((state) => state.pizza);
  const { category, sortProperty, searchValue } = useSelector(
    (state) => state.filter
  );

  const dispatch = useDispatch();

  const pizzaRequest = async () => {
    dispatch(requestData({ category, sortProperty, searchValue }));
  };

  useEffect(() => {
    pizzaRequest();
  }, [category, sortProperty, searchValue]);

  return (
    <div className="content">
      <div className="container">
        <div className="content__top">
          <Categories activeCategoryIndex={category} />
          <Sort />
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
