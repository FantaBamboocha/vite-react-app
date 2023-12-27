import { useEffect, useState } from "react";

import PizzaBlock from "./PizzaBlock";
import PizzaBlockSkeleton from "./PizzaBlockSkeleton";

import { apiFunctions } from "../api/api.js";
const ContentItems = () => {
  const [pizzaList, setPizzaList] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const pizzaListRequest = async () => {
      try {
        const pizzaListResponse = await apiFunctions.requestData();
        if (pizzaListResponse) {
          setTimeout(() => {
            setPizzaList(pizzaListResponse);
            setIsLoading(false);
          }, 2000);
        }
      } catch (err) {
        console.error(err.message);
        setIsLoading(false);
      }
    };
    pizzaListRequest();
  }, []);

  const skeletonArray = new Array(10).fill(null);

  return (
    <div className="content__items">
      {isLoading
        ? skeletonArray.map((_, index) => <PizzaBlockSkeleton key={index} />)
        : pizzaList.map((pizza, index) => (
            <PizzaBlock key={index} data={pizza} />
          ))}
    </div>
  );
};

export default ContentItems;
