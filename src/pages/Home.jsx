import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import qs from "qs";

import { apiFunctions } from "../api/api.js";

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import ContentItems from "../components/ContentItems";
import Search from "../components/Search/";
import { setFilters } from "../redux/slices/filter.js";
import { requestData } from "../redux/slices/reqPizzaSlice.js";

const Home = () => {
  const isSearchParams = useRef(false);
  const isMounted = useRef(false);
  const navigate = useNavigate();

  const { items: pizzaList, isLoading } = useSelector((state) => state.pizza);
  const { categoryIndex, sortProperty, searchValue } = useSelector(
    (state) => state.filter
  );
  const dispatch = useDispatch();

  const pizzaRequest = async () => {
    dispatch(requestData({ categoryIndex, sortProperty, searchValue }));
  };

  useEffect(() => {
    pizzaRequest();
  }, [categoryIndex, sortProperty, searchValue]);

  // Сохранение URL-параметров в Redux при первом рендере
  // useEffect(() => {
  //   if (window.location.search) {
  //     const params = qs.parse(window.location.search.substring(1));

  //     dispatch(setFilters(params));

  //     isSearchParams.current = true;
  //   }
  // }, []);

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  //   if (!isSearchParams.current) {
  //     pizzaRequest();
  //   }
  //   isSearchParams.current = false;
  // }, [categoryIndex, sortProperty, searchValue]);

  // useEffect(() => {
  //   if (isMounted.current) {
  //     const queryParams = {
  //       category: categoryIndex,
  //       sortBy: sortProperty,
  //     };

  //     if (searchValue) {
  //       queryParams.search = searchValue;
  //     }

  //     const stringParams = qs.stringify(queryParams);

  //     navigate(`?${stringParams}`);
  //   }

  //   isMounted.current = true;
  // }, [sortProperty, categoryIndex, searchValue]);

  return (
    <div className="content">
      <div className="container">
        <div className="content__top">
          <Categories activeCategoryIndex={categoryIndex} />
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
