const producto = {
    nombre:"Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
    
    //Objeto dentro de un objeto
    informacion: {
        peso: "1kg",
        medidas: "20x50x30",
        color: "Negro"
    },
}

//Agrega al objeto una propiedad
producto.imagen = "imagen.jpg";

//Saca el nombre de producto y crea la variable con el mismo nombre
const {nombre: nombreProducto} = producto;

const {informacion, informacion: {medidas: medidasProducto}} = producto
console.log(producto)
console.log(producto.informacion.peso)

console.log(nombreProducto)
console.log(medidasProducto)
console.log(producto.informacion)