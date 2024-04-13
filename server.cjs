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
      "https://media.dodostatic.net/image/r:584x584/11EEF45FDF8D3091A8826B43F4026BAB.avif",
    title: "Баварская",
    types: [0, 1],
    sizes: [26, 30, 40],
    price: 803,
    category: "spicy",
    rating: 4,
  },
  {
    id: 1,
    imageUrl:
      "https://media.dodostatic.net/image/r:584x584/11EE961045E96CA6A0CE4F904FB33876.avif",
    title: "Мясной микс с баварскими колбасками",
    types: [0],
    sizes: [26, 40],
    price: 245,
    category: "meat",
    rating: 6,
  },
  {
    id: 2,
    imageUrl:
      "https://media.dodostatic.net/image/r:584x584/11EEAAF750E6DC4682FC61C90C5F774F.avif",
    title: "Креветки со сладким чили",
    types: [0],
    sizes: [26, 40],
    price: 295,
    category: "spicy",
    rating: 4,
  },
  {
    id: 3,
    imageUrl:
      "https://media.dodostatic.net/image/r:584x584/11EE7D5EC72C18AD947C4FCBCD336C28.avif",
    title: "Сырная 🌱👶",
    types: [1],
    sizes: [26, 30, 40],
    price: 275,
    category: "vegetarian",
    rating: 2,
  },
  {
    id: 4,
    imageUrl:
      "https://media.dodostatic.net/image/r:584x584/11EEAB0F56776EB287BCE155BA45160A.avif",
    title: "Чикен бомбони",
    types: [0, 1],
    sizes: [26, 30, 40],
    price: 415,
    category: "closed",
    rating: 8,
  },
  {
    id: 5,
    imageUrl:
      "https://media.dodostatic.net/image/r:584x584/11EEAAF6BCA45D9FAD523E13EE74F1C0.avif",
    title: "Кантри-пицца",
    types: [0],
    sizes: [30, 40],
    price: 580,
    category: "grill",
    rating: 2,
  },
  {
    id: 6,
    imageUrl:
      "https://media.dodostatic.net/image/r:584x584/11EE7D5ED4C9050D84B1932A18396C2E.avif",
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
      "https://media.dodostatic.net/image/r:584x584/11EE7D5EF5CC13A490103B92A7737459.avif",
    title: "Двойной цыпленок",
    types: [0, 1],
    sizes: [26, 30, 40],
    price: 450,
    category: "closed",
    rating: 10,
  },
  {
    id: 8,
    imageUrl:
      "https://media.dodostatic.net/image/r:584x584/11EEA58E169BBB7189B38C04883BB1BA.avif",
    title: "Карбонара",
    types: [0, 1],
    sizes: [26, 30, 40],
    price: 395,
    category: "meat",
    rating: 10,
  },
  {
    id: 9,
    imageUrl:
      "https://media.dodostatic.net/image/r:584x584/11EE7D5EC8FF89FDB4EB4C2FA1A066FE.avif",
    title: "Цыпленок барбекю",
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
