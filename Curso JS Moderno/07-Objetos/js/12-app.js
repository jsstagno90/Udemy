const Producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
    mostrarInfo: function () {
        console.log(`El producto ${this.nombre} Tiene un valor de ${this.precio}`)
    }
}


//OBJECT CONSTRUCTOR..... contruir un objeto en base a otro

function Productos(nombre, precio) {
    this.nombre = nombre,
        this.precio = precio,
        this.disponible = true
}

const Producto2 = new Productos('Monitor', 500);

console.log(Producto2)