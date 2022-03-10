const express = require('express')
const respuesta = require('../../red/respuestas')
const controlador = require('./controlador')

const ruta = express.Router()

ruta.get('/', function(req, res) {
    const filtroProducto = req.body.serie || null
    console.log("filtroProducto: " + filtroProducto)
    controlador.obtenerProductos( filtroProducto )
        .then((data) => {
            respuesta.exito(req, res, data, 200)
        })
        .catch((error) => {
            respuesta.error(req, res, error, 500)
        })
})

ruta.post('/', function(req, res) {
    controlador.agregarProducto( req.body )
        .then((data) => {
            respuesta.exito(req, res, data, 200)
        })
        .catch((error) => {
            respuesta.error(req, res, error, 500)
        })
})

ruta.patch('/', function(req, res) {
    // controlador.actualizarProducto(req.body.codigo, req.body.nombre, req.body.valor, req.body.proveedores)
    // controlador.actualizarProducto(req.body.serie, req.body.nombre
    //                                 , req.body.stock, req.body.valor)
    controlador.actualizarProducto(req.body)
        .then((data) => {
            respuesta.exito(req, res, data, 200)
        })
        .catch((error) => {
            respuesta.error(req, res, error, 500)
        })
})

ruta.delete('/', function(req, res) {
    controlador.eliminarProducto(req.body.serie)
        .then((data) => {
            respuesta.exito(req, res, data, 200)
        })
        .catch((error) => {
            respuesta.error(req, res, error, 500)
        })
})

module.exports = ruta