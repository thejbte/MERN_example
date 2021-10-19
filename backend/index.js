'use strict'   //para unas nuevas funciones de node 6 , let const


/*server */
const express =  require('express');
/* json parser */
const bodyParser  = require('body-parser');

const mongoose  = require('mongoose');

const app = express();

const port = process.env.PORT || 3001 ;

// en package en script start colocar nodemon start para corre con npm start

// despues de  connectar sigue esto

app.use(express.urlencoded({extended: false})) // agregamos metodos para parsera url
app.use(express.json()); // poder usar formatos json


//ultimooo 
const cors=require("cors");
app.use(cors({ origin: true, credentials: true })); // habilita auth




// conectarnos a la BD
mongoose.connect('mongodb://localhost:27017/ventas',(err, res)=>{
    if(err){
        return console.log(`Error to connect BD: ${err}`);
    }
    console.log('Connection to BD established...');

    //listen port for back
    app.listen( port, ()=>{
        console.log(`API rest running: http://localhost:${port}`);
    } );

}    );

const Ventas = require('./models/ventas'); //model BD ventas

app.get('/ventas' , (req, res)=>{
    Ventas.find({}, (err, ventas)=>{
        if(err) return res.status(500).send( {message: `Error al realizar la petición: ${err}`});
        if(!ventas) return res.status(404).send({message: `NO existen existe`});
        res.status(200).send({ventas: ventas });
    
    })
});

app.get('/ventas/:idVenta' , (req, res)=>{
    let idVenta = req.params.idVenta;

    Ventas.findById(idVenta , (err, ventas)=>{
        if(err) return res.status(500).send( {message: `Error al realizar la petición: ${err}`});
        if(!ventas) return res.status(404).send({message: `Venta no existe`});
        res.status(200).send({ventas: ventas });
    
    })
});


app.post('/ventas/agregar' , (req, res)=>{
    console.log('POST /api/product');
    console.log(req.body);

    let venta = new Ventas();
    venta.fecha    =   req.body.fecha;
    venta.vendedor = req.body.vendedor;
    venta.idVenta   = req.body.idVenta;
    venta.cantidad = req.body.cantidad;
    venta.precio= req.body.precio;
    venta.cliente= req.body.cliente;
    venta.total= req.body.total;

    venta.save((err, ventaGuardada)=>{
        if(err){
            res.status(500).send({ message: `Èrror al guardar en la BD ${err}`}); //envio un json con el mensaje
        }
        res.status(200).send({venta: ventaGuardada});
    });

});

app.put('/venta/editar/:idVenta',(req, res) =>{
    let idVenta = req.params.idVenta;
    let update =req.body;

    Ventas.findByIdAndUpdate(idVenta ,update, (err, ventaUpdated) =>{

        if(err) res.status(500).send({ message: `Error al actualizar el producto: ${err}`});
        res.status(200).send({ventaUpdated});
    })

});



//borrar el productId
app.delete('/venta/delete/:idVenta',(req, res) =>{
    let idVenta = req.params.idVenta;

    Ventas.findById(idVenta , (err, ventas) =>{
        if(err) res.status(500).send({ message: `Error al borrar la venta: ${err}`})
        
        ventas.remove( err =>{  //borro el producto on ID que entro que est en product
            if(err) res.status(500).send({ message: `Error al borrar la venta: ${err}`})
            res.status(200).send({message: 'La venta ha sido eliminado'})
        })
    })

});