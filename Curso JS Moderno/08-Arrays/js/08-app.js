const producto = {
    nombre: 'Monitor',
    precio: 250,
    disponible: true
}


const {nombre} = producto;

console.log(nombre)

const numeros = [10,20,30,50,100];


// ASIGNA UNA VARIABLE A LA POSICION DEL ARRAY ejemplo: 'segundo' va a ser 30
const [ , ,segundo] = numeros;

console.log(segundo)