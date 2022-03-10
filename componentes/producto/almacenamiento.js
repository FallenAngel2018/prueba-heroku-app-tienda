const model = require('./modelo')

function agregarProducto( producto ) {
    const objeto = new model( producto )

    console.log(objeto)

    objeto.save()
}

function obtenerProductos( filtroProducto ) {
    let filtro = {}
    if (filtroProducto) {
        filtro = { serie: filtroProducto }
    }
    const objeto = model.find( filtro )

    console.log(objeto)

    return objeto
}

async function actualizarProducto( producto ) {
    const objeto = await model.findOne( { serie: producto.serie } )
    objeto.nombre = producto.nombre
    objeto.stock = producto.stock
    objeto.valor = producto.valor

    console.log(objeto)
    console.log(producto)

    const resultado = await objeto.save()
    return resultado
}

async function eliminarProducto( serie ) {
    return await model.deleteOne({serie: serie})
}

module.exports = {
    agregar: agregarProducto,
    obtener: obtenerProductos,
    actualizar: actualizarProducto,
    eliminar: eliminarProducto,
}