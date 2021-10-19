'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ventasSchema = Schema({
    fecha: Date,
    vendedor:String,
    idVenta:Number,
    cantidad:Number,
    precio:Number,
    cliente:String,
    total:Number
});


module.exports = mongoose.model('Ventas', ventasSchema);