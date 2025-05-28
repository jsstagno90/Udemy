const productos = {
    nombre:"Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
    mostrarInfo: function() {
        console.log(`El producto ${this.nombre} Tiene un valor de ${this.precio}`)
    }
}

productos.mostrarInfo()