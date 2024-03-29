const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

let data = [
  {
    id: 0,
    imageUrl:
      "https://dodopizza.azureedge.net/static/Img/Products/f035c7f46c0844069722f2bb3ee9f113_584x584.jpeg",
    title: "Пепперони Фреш с перцем",
    types: [0, 1],
    sizes: [26, 30, 40],
    price: 803,
    category: "spicy",
    rating: 4,
  },
  {
    id: 1,
    imageUrl:
      "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/2ffc31bb-132c-4c99-b894-53f7107a1441.jpg",
    title: "Сырная",
    types: [0],
    sizes: [26, 40],
    price: 245,
    category: "vegetarian",
    rating: 6,
  },
  {
    id: 2,
    imageUrl:
      "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/6652fec1-04df-49d8-8744-232f1032c44b.jpg",
    title: "Цыпленок барбекю",
    types: [0],
    sizes: [26, 40],
    price: 295,
    category: "grill",
    rating: 4,
  },
  {
    id: 3,
    imageUrl:
      "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/af553bf5-3887-4501-b88e-8f0f55229429.jpg",
    title: "Кисло-сладкий цыпленок",
    types: [1],
    sizes: [26, 30, 40],
    price: 275,
    category: "meat",
    rating: 2,
  },
  {
    id: 4,
    imageUrl:
      "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg",
    title: "Чизбургер-пицца",
    types: [0, 1],
    sizes: [26, 30, 40],
    price: 415,
    category: "gril",
    rating: 8,
  },
  {
    id: 5,
    imageUrl:
      "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/1e1a6e80-b3ba-4a44-b6b9-beae5b1fbf27.jpg",
    title: "Крэйзи пепперони",
    types: [0],
    sizes: [30, 40],
    price: 580,
    category: "spicy",
    rating: 2,
  },
  {
    id: 6,
    imageUrl:
      "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/d2e337e9-e07a-4199-9cc1-501cc44cb8f8.jpg",
    title: "Пепперони",
    types: [0, 1],
    sizes: [26, 30, 40],
    price: 675,
    category: "meat",
    rating: 9,
  },
  {
    id: 7,
    imageUrl:
      "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/d48003cd-902c-420d-9f28-92d9dc5f73b4.jpg",
    title: "Маргарита",
    types: [0, 1],
    sizes: [26, 30, 40],
    price: 450,
    category: "closed",
    rating: 10,
  },
  {
    id: 8,
    imageUrl:
      "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/ec29465e-606b-4a04-a03e-da3940d37e0e.jpg",
    title: "Четыре сезона",
    types: [0, 1],
    sizes: [26, 30, 40],
    price: 395,
    category: "closed",
    rating: 10,
  },
  {
    id: 9,
    imageUrl:
      "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/30367198-f3bd-44ed-9314-6f717960da07.jpg",
    title: "Овощи и грибы 🌱",
    types: [0, 1],
    sizes: [26, 30, 40],
    price: 285,
    category: "vegetarian",
    rating: 7,
  },
  {
    id: 10,
    imageUrl:
      "https://dodopizza-a.akamaihd.net/static/Img/Products/2f01bd53e7374171838e95f001bae829_760x760.webp",
    title: "Гавайская с альфредо",
    types: [0, 1],
    sizes: [26, 30, 40],
    price: 233,
    category: "closed",
    rating: 7,
  },
  {
    id: 11,
    imageUrl:
      "https://dodopizza-a.akamaihd.net/static/Img/Products/6d252652e5dc4a4a8cfb0a234c662c6b_760x760.webp",
    title: "Додо",
    types: [0, 1],
    sizes: [30, 40],
    price: 435,
    category: "spicy",
    rating: 9,
  },
];
// Получение всех данных
app.get("/data", (req, res) => {
  res.json(data);
});

// Получение данных по ID
app.get("/data/:id", (req, res) => {
  const id = req.params.id;
  const item = data.find((item) => item.id === parseInt(id));
  if (!item) {
    return res.status(404).send("Элемент не найден");
  }
  res.json(item);
});

// Создание нового элемента
app.post("/data", (req, res) => {
  const newItem = req.body;
  data.push(newItem);
  res.status(201).send("Элемент успешно создан");
});

// Обновление данных по ID
app.put("/data/:id", (req, res) => {
  const id = req.params.id;
  const updatedItem = req.body;
  for (let i = 0; i < data.length; i++) {
    if (data[i].id === parseInt(id)) {
      data[i] = updatedItem;
      return res.send("Элемент успешно обновлен");
    }
  }
  res.status(404).send("Элемент не найден");
});

// Удаление данных по ID
app.delete("/data/:id", (req, res) => {
  const id = req.params.id;
  data = data.filter((item) => item.id !== parseInt(id));
  res.send("Элемент успешно удален");
});

// Сортировка по категорям
app.get("/category/:category", (req, res) => {
  const { category } = req.params;
  const { sort: sortProperty, search } = req.query;

  let filteredData;
  const dataCopy = [...data];

  if (category !== "all") {
    filteredData = dataCopy.filter(
      ({ category: pizzaCategory }) => pizzaCategory === category
    );
  } else {
    filteredData = dataCopy;
  }

  if (sortProperty === "rating") {
    // Сортировка по популярности (rating)
    filteredData.sort((a, b) => b.rating - a.rating);
  } else if (sortProperty === "priceUp") {
    // Сортировка по возрастанию цены
    filteredData.sort((a, b) => a.price - b.price);
  } else if (sortProperty === "priceDown") {
    // Сортировка по убыванию цены
    filteredData.sort((a, b) => b.price - a.price);
  }

  if (search) {
    filteredData = filteredData.filter(({ title }) =>
      title.toLowerCase().includes(search.toLowerCase())
    );
  }

  res.json(filteredData);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
