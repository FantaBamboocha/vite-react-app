import axios from "axios";

const BASE_URL = "http://localhost:3000";

const apiFunctions = {
  requestData: async () => {
    try {
      const pizzaResponse = await axios.get(`${BASE_URL}/data`);
      return pizzaResponse.data;
    } catch (err) {
      console.error(err.message);
    }
  },
  sortData: async (category, sortProperty, searchValue) => {
    try {
      const pizzaResponse = await axios.get(
        `${BASE_URL}/category/${category}`
        // {
        //   params: {
        //     category,
        //     // sortBy: sortProperty,
        //     // search: searchValue,
        //   },
        // }
      );
      return pizzaResponse.data;
    } catch (err) {
      console.log(err.message);
    }
  },
};

export { apiFunctions };
