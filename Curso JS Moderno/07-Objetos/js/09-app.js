const productos = {
    nombre:"Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

//NO SE PUEDE AGREGAR NI ELIMINAR, PERO SE PUEDE MODIFICAR
 Object.seal(productos)

//agrego propiedades o modifico....pero no modifica nada
productos.imagen = 'imagen.txt'
productos.disponible = false

console.log(productos)