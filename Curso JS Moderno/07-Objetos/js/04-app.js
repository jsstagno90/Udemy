const productos = {
    nombre:"Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

productos.imagen = "imagen.jpg";

//Saca el nombre de productos y crea la variable con el mismo nombre
const {nombre} = productos;

console.log(nombre)