const express = require("express");
const app = express();
app.use(express.json());

const products = [
    {
        "id": 1,
        "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        "price": 109.95,
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
        "rating": {
            "rate": 3.9,
            "count": 120
        }
    },
    {
        "id": 2,
        "title": "Mens Casual Premium Slim Fit T-Shirts ",
        "price": 22.3,
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png",
        "rating": {
            "rate": 4.1,
            "count": 259
        }
    },
    {
        "id": 3,
        "title": "Cotton Jacket",
        "price": 55.99,
        "category": "women's clothing",
        "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png",
        "rating": {
            "rate": 4.7,
            "count": 500
        }
    }
]

app.get("/", (req, res) => {
    res.send("The Server can run");
});

app.get("/all", (req, res) => {
    res.status(200).json(products);
})

app.get("/products/:id", (req, res) => {
    const userId = Number(req.params.id);
    const user = products.find(u => u.id === userId);

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
});

app.get("/category/:type", (req, res) => {
    // console.log(category);
    const userId = String(req.params.type);
    const user = products.filter(u => u.category === userId);

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
});

app.post("/products/:id", (req, res) => {
    console.log(req.body);
    for (let i = 0; i < req.body.length; i++) {
        const newUser = {
            id: products.length + 1,
            title: req.body[i].title,
            price: req.body[i].price,
            category: req.body[i].category,
            rating: {
                rate: req.body[i].rating.rate,
                count: req.body[i].rating.count
            }
        }
        products.push(newUser);
    };


    res.status(201).json({
        message: "value added",
    });
});

app.put("/products/:id", (req, res) => {
  const userId = Number(req.params.id);
  const index = products.findIndex(u => u.id === userId);

  if (index === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  products[index] = {
    id: userId,
    title: req.body.title,
    price : req.body.price,
    category: req.body.category,
    
  };

  console.log(req.body);

  res.status(200).json({
    message: "User replaced",
  });
});

app.listen(3000, () => {
    console.log("Server started on port 3000");
});