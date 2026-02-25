const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

const products = [
    {
        id: 1,
        name: "Wireless Mouse",
        category: "electronics",
        price: 799,
        stock: 25,
        rating: 4.3
    },
    {
        id: 2,
        name: "Running Shoes",
        category: "footwear",
        price: 2499,
        stock: 40,
        rating: 4.5
    },
    {
        id: 3,
        name: "Laptop Stand",
        category: "accessories",
        price: 999,
        stock: 30,
        rating: 4.2
    },
    {
        id: 4,
        name: "Smart Watch",
        category: "electronics",
        price: 4999,
        stock: 12,
        rating: 4.4
    },
    {
        id: 5,
        name: "Backpack",
        category: "fashion",
        price: 1599,
        stock: 50,
        rating: 4.1
    }
];

app.get("/", (req, res) => {
    res.send("Assignment-02");
});

app.get("/products", (req, res) => {
    res.status(200).json(products);
});

app.get("/products/:id", (req, res) => {
    const productId = Number(req.params.id);
    const product = products.find(u => u.id === productId);
    console.log(product);

    if (!product) {
        return res.status(404).json({ message: "Product not Found" });
    }
    res.status(200).json(product);
});

app.get("/products/category/:categoryName", (req, res) => {
    const type = (req.params.categoryName);
    const typeCategory = products.filter(u => u.category.toLowerCase() === type.toLowerCase());
    console.log(typeCategory);

    if (typeCategory.length === 0) {
        return res.status(404).json({ message: "Category Not Found" });
    }

    res.status(200).json(typeCategory);
});

app.post("/products", (req, res) => {
    const newProduct = {
        id: products.length + 1,
        name: req.body.name,
        category: req.body.category,
        price: req.body.price,
        stock: req.body.stock,
        rating: req.body.rating
    };
    console.log(newProduct);

    products.push(newProduct);

    res.status(201).json({
        message: "Data Created"
    });
});

app.put("/products/:id", (req, res) => {
    const productId = Number(req.params.id);
    const product = products.findIndex(u => u.id === productId);

    if (product === -1) {
        return res.status(404).json({ message: "Product's id not found" });
    };

    products[product] = {
        name: req.body.name,
        category: req.body.category,
        price: req.body.price,
        stock: req.body.stock,
        rating: req.body.rating
    };

    res.status(200).json({
        message: "Updated products succesfully"
    });
});

app.put("/products/:id/stock", (req, res) => {
    const stockId = Number(req.params.id);
    const index = products.findIndex(u => u.id === stockId);

    if (index === -1) {
        return res.status(404).json({ message: "Index is not Found" });
    }

    products[index].stock = req.body.stock;

    res.status(200).json({
        message: "Stock updated succesfully",
        products: products[index]
    });
});

app.put("/products/:id/price", (req, res) => {
    const priceID = Number(req.params.id);
    const index = products.findIndex(u => u.id === priceID);

    if (index === -1) {
        return res.status(404).json({ message: "Index is not Found" });
    }

    products[index].price = req.body.price;

    res.status(200).json({
        message: "Stock updated succesfully",
        products: products[index]
    });
});

app.listen(5002, () => {
    console.log("Server is running on port 5002")
});