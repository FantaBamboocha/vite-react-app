import axios from "axios";

const BASE_URL = "http://localhost:3000/data";

const apiFunctions = {
  requestData: async () => {
    try {
      const pizzaResponse = await axios.get(BASE_URL);
      return pizzaResponse.data;
    } catch (err) {
      console.error(err.message);
    }
  },
};

export { apiFunctions };
