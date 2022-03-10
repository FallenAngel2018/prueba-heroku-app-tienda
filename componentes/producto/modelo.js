const mongoose = require('mongoose')
const Schema = mongoose.Schema

const reqString = {
    type: String,
    required: true,
}

const reqNumber = {
    type: Number,
    required: true,
}

const proveedorSchema = new Schema({
    nombre: reqString,
    domicilio: reqString,
})

// PRODUCTO ( serie, nombre, stock, valor )
const productoSchema = new Schema({
    // codigo: reqString,
    // nombre: reqString,
    // valor: reqNumber,
    // ref_proveedor: [proveedorSchema],

    serie: reqString,
    nombre: reqString,
    stock: reqNumber,
    valor: reqNumber,
})

const model = mongoose.model('Producto', productoSchema)
module.exports = model