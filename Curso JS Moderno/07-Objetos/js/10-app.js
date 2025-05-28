const productos = {
    nombre:"Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

const medidas = {
    peso: '10kg',
    medida: '15x12x60',
    color: 'Verde'
}


// CONCATENA LOS 2 OBJETOS
const resultado = Object.assign(medidas, productos)

console.log(resultado)