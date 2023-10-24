const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
	res.send("Hello World!");
});

// crear bd de productos
let products = [
	{
		id: 1,
		nombre: "Producto 1",
		precio: 1000,
	},
	{
		id: 2,
		nombre: "Producto 2",
		precio: 2000,
	},
	{
		id: 3,
		nombre: "Producto 3",
		precio: 3000,
	},
];

//obtener una lista de productos
app.get("/api/products", (req, res) => {
	res.status(200).json({
		message: "Lista de productos",
		data: products,
	});
});

//obtener un producto por id => /api/products/:id
app.get("/api/products/:id", (req, res) => {
    //obtener el id de la url
    const id = req.params.id;
    //buscar el producto por id
    const product = products.find((product) => product.id == id);

    //si no se encuentra el producto
    if (!product) {
        return res.status(404).json({
            message: "Producto no encontrado",
            data: null,
        });
        return;
    }
    //responder con el producto encontrado
    res.status(200).json({
        message: "Producto encontrado",
        data: product,
    });
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});

