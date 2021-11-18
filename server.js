//Server express con metodos

const express = require('express');
const Modelo = require ('./classes/Manager');
const app = express();
const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/productos'), async (req, res) => {
    console.log("productos");
    let productos = await Modelo.getAll();
    res.send(productos);
};

app.get('/productos/:id'), async (req, res) => {
    let producto = await Modelo.getById(req.params.id)
    res.send(producto);
};

app.get('/productosRandom'), async (req, res) => {
    let productos = await Modelo.getRandom()
    res.send(productos);
};