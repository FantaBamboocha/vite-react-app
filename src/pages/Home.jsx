import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import ContentItems from "../components/ContentItems";
import Search from "../components/Search/";
import { requestData } from "../redux/slices/reqPizzaSlice.js";

const Home = () => {
  const { items: pizzaList, isLoading } = useSelector((state) => state.pizza);
  const { category, sortProperty, searchValue } = useSelector(
    (state) => state.params
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const pizzaRequest = async () => {
    dispatch(requestData({ category, sortProperty, searchValue }));
  };

  useEffect(() => {
    const searchParam = searchValue ? `&search=${searchValue}` : "";
    navigate(`/category/${category}?sort=${sortProperty}${searchParam}`);
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
