const productos = {
    nombre:"Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

//congelar un objeto, no se puede modificar
 Object.freeze(productos)

//agrego propiedades o modifico....pero no modifica nada
productos.imagen = 'imagen.txt'
productos.disponible = false

console.log(productos)