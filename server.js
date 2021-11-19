//Server express con metodos

const express = require('express');
const Modelo = require ('./classes/Manager');
const app = express();
const PORT = process.env.PORT || 8080;
const server = app.listen(PORT, () => {
    console.log(`Escuchando puerto ${PORT}`);
});

const manager = new Modelo();
const prodRouter = require('./routes/productos');
const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '/public');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: storage });
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/imagenes',express.static(__dirname+'public'));
app.use(cors());
app.get('/api/productos',prodRouter);

app.post('uploadfile',upload.single(),(req,res)=>{
    const files = req.file;
    if (!files||files.length===0) {
        res.status(500).send({message:'No se subio el archivo'});
        return;}
    });



//3er entrega 

// app.get('/api/productos'), (req, res) => {
//     manager.getAll().then(result => {
//         res.send(result);
//     });
// };

// app.get('/api/productos/:uid'), (req, res) => {
//     let id = req.params.uid;
//     id = parseInt(id);
//     manager.getById(id).then((result) => {
//         res.send(result);
//     });
// }

// app.post('/api/productos'), (req, res) => {
//     let producto = req.body;
//     manager.createEvent(producto).then((result) => {
//         res.send(result);
//     });
// }

// app.put('/api/productos/:uid'), (req, res) => {
//     let id = req.params.uid;
//     id = parseInt(id);
//     let producto = req.body;
//     manager.updateEvent(id, producto).then((result) => {
//         res.send(result);
//     });
// }

// app.delete('/api/productos/:uid'), (req, res) => {
//     let id = req.params.uid;
//     id = parseInt(id);
//     manager.deleteEvent(id).then((result) => {
//         res.send(result);
//     });
// }


//primer commit

// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });

// app.get('/productos'), async (req, res) => {
//     console.log("productos");
//     let productos = await Modelo.getAll();
//     res.send(productos);
// };

// app.get('/productos/:id'), async (req, res) => {
//     let producto = await Modelo.getById(req.params.id)
//     res.send(producto);
// };

// app.get('/productosRandom'), async (req, res) => {
//     let productos = await Modelo.getRandom()
//     res.send(productos);
// };