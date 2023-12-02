import { useEffect, useState } from "react";
import axios from "axios";

import PizzaBlock from "./PizzaBlock";

import { apiFunctions } from "../api/api.js";

const ContentItems = () => {
  const [pizzaList, setPizzaList] = useState([]);

  useEffect(() => {
    const pizzaListRequest = async () => {
      try {
        const pizzaListResponse = await apiFunctions.requestData();

        setPizzaList(pizzaListResponse);
      } catch (err) {
        console.error(err.message);
      }
    };

    pizzaListRequest();
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
