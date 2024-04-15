import { useEffect, useState, FC } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import ContentItems from "../components/ContentItems";
import Search from "../components/Search";
import { requestData } from "../redux/slices/reqPizzaSlice";
import { RootState, useAppDispatch } from "../redux/store";

const Home: FC = () => {
  const { items: pizzaList, isLoading } = useSelector(
    (state: RootState) => state.pizza
  );
  const { category, sortProperty, searchValue } = useSelector(
    (state: RootState) => state.params
  );

  const [isMounted, setIsMounted] = useState(false);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const pizzaRequest = async () => {
    dispatch(requestData({ category, sortProperty, searchValue }));
  };

  useEffect(() => {
    const searchParam = searchValue ? `&search=${searchValue}` : "";
    isMounted &&
      navigate(`/category/${category}?sort=${sortProperty}${searchParam}`);
    pizzaRequest();

    setIsMounted(true);
  }, [category, sortProperty, searchValue]);

  return (
    <div className="content">
      <div className="container">
        <div className="content__top">
          <Categories />
          <Sort />
        </div>
        <div className="content__title">
          <h2>Наши пиццы</h2>
          <Search />
        </div>
        <ContentItems pizzaList={pizzaList} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default Home;
