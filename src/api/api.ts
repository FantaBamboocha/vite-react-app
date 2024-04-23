import axios from "axios";
import { CategoryEnum } from "../redux/slices/search-params/slice";
import { SortPropertyEnum } from "../components/Sort";
import { IReqPizza } from "../redux/slices/req-thunk/slice";

const BASE_URL = "http://localhost:3000";

const apiFunctions = {
  requestData: async () => {
    try {
      const pizzaResponse = await axios.get(`${BASE_URL}/data`);
      return pizzaResponse.data;
    } catch (err: any) {
      console.error(err.message);
    }
  },
  sortData: async (
    category: CategoryEnum,
    sortProperty: SortPropertyEnum,
    searchValue: string
  ): Promise<IReqPizza[]> => {
    try {
      const pizzaResponse = await axios.get(
        `${BASE_URL}/category/${category}`,
        {
          params: {
            sort: sortProperty,
            search: searchValue,
          },
        }
      );
      return pizzaResponse.data;
    } catch (err: any) {
      console.log(err.message);
      return Promise.resolve([]);
    }
  },
};

export { apiFunctions };
