const express = require('express');
const router = express.Router();
const Modelo = require ('../classes/Manager');
const manager = new Modelo();

router.get('/', (req, res) => {
    manager.getAll().then(result => {
        res.send(result);
    });
});

router.get('/:id', (req, res) => {
    manager.getById(req.params.id).then(result => {
        res.send(result);
    });
});

router.post('/', (req, res) => {
    let producto = req.body;
    manager.createEvent(producto).then(result => {
        res.send(result);
    });
});

router.put('/:id', (req, res) => {
    let producto = req.body;
    manager.updateEvent(req.params.id, producto).then(result => {
        res.send(result);
    });
});

router.delete('/:id', (req, res) => {
    manager.deleteById(req.params.id).then(result => {
        res.send(result);
    });
});

module.exports = router;