import axios from "axios";

const BASE_URL =
  "https://file.notion.so/f/f/b3238354-86d5-4ba6-9ad7-eb01112a9acd/36ad4e93-800e-451b-9831-ae6abe1b28ef/pizzas.json?id=e934efcc-4042-481d-9d73-76f227f1696e&table=block&spaceId=b3238354-86d5-4ba6-9ad7-eb01112a9acd&expirationTimestamp=1701525600000&signature=KtsP0yGFQXT7cnngROO95LIpAoq_8N5M0C5w4rs9Rv0&downloadName=pizzas.json";

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
