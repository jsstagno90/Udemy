const meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "julio",
  "agosto",
  "septiembre",
  "octubre",
  "noviembre",
  "diciembre",
];


//ELIMINAR ULTIMO ELEMENTO
meses.pop();

//ELIMINA el indice (primer numero) y los siguientes indices (segundos numero)
meses.splice(1,2);

console.log(meses);
