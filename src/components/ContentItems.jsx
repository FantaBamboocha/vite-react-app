import { useEffect, useState } from "react";

import PizzaBlock from "./PizzaBlock";

import { apiFunctions } from "../api/api.js";
import jsonData from "../assets/pizza.json";
const ContentItems = () => {
  const [pizzaList, setPizzaList] = useState([]);

  useEffect(() => {
    const pizzaListRequest = async () => {
      try {
        const pizzaListResponse = await apiFunctions.requestData();
        console.log(pizzaListResponse);
        pizzaListResponse && setPizzaList(pizzaListResponse);
      } catch (err) {
        console.error(err.message);
      }
    };
    pizzaListRequest();
    // setPizzaList(jsonData);
  }, []);

  return (
    <div className="content__items">
      {pizzaList.map((pizza, index) => (
        <PizzaBlock key={index} data={pizza} />
      ))}
    </div>
  );
};

export default ContentItems;
