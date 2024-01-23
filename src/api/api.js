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
  sortData: async (categoryIndex, sortIndex, searchValue) => {
    const sortByMapping = {
      0: "rating",
      1: "ascPrice",
      2: "desPrice",
    };

    const sortProperty = sortByMapping[sortIndex];
    try {
      const pizzaResponse = await axios.get(`${BASE_URL}/sorted-data`, {
        params: {
          category: categoryIndex,
          sortBy: sortProperty,
          search: searchValue,
        },
      });
      return pizzaResponse.data;
    } catch (err) {
      console.log(err.message);
    }
  },
};

export { apiFunctions };
