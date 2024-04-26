import { useEffect, useState, FC } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Categories, Sort, ContentItems, Search } from "@components/index";

import {
  requestData,
  pizzaSelector,
  paramsSelector,
  useAppDispatch,
} from "@redux/index";

const Home: FC = () => {
  const { items: pizzaList, isLoading } = useSelector(pizzaSelector);
  const { category, sortProperty, searchValue } = useSelector(paramsSelector);

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
