/*console.log("Hello world!");

const numeroPi = 3.1416;

let numero1 = 10;
let numero2 = 12;
let suma = numero1 + numero2;
let direccion = "calle 65g sur # 78b";
let mod = numero1 % numero2;
let estado = true;



console.log(numero1);
console.log(numero2);
console.log(suma);





//comilla ivertida alt 96
console.log(`Los numeros a sumar son: ${numero1}, ${numero2} y el total es: ${suma}`);
console.log(`Mi dirección es: ${direccion}`);
console.log(`La divicion modulo es: ${mod}`);

console.log(typeof numeroPi);
console.log(typeof numero1);
console.log(typeof estado);
console.log(typeof direccion);

// Ingreso de datos para el usuario

// let num1 = parseInt(prompt ("Ingrese el primer numero"));
// let num2 = parseInt(prompt("Ingrese el segundo valor"));
// let s = num1 + num2;

// console.log(`El primer numero es: ${num1} el segundo numero es: ${num2}`);
// console.log(`La suma es: ${s}`);

// Generacion de numeros de aleatorios

let ala =Math.floor(Math.random()*50)+ 1;

console.log(`Numero aleatorio: ${ala}`);

//  segunda forma 
let ala1 =Math.floor(Math.random()*100);
console.log(`Numero aleatorio: ${ala1} `);  
*/

//Estructura del if 1
/*
let edad = 17;
 if (edad >= 18){
    console.log("Eres mayor de edad");
 }else {
    console.log("Eres menor de edad");
 }
*/
 // ejercico 2
  /*let calificacion; 

  calificacion = parseFloat(prompt("Infrese calificación"));

  if (calificacion < 3.0){
    console.log("Reprobado");
  }else if (calificacion < 4.0){
    console.log("Aprobado");
  }else{
    console.log("Excelente");
  }
  */

// OPERDOR TERNARIO
  // let edad = 17;

  // let res = (edad >=18)? "Es mayor de edad puede farrear" : "Es menor de edad no puede salir"
  // console.log(res);

  // // Ejercicio 3

  // let anioNacimiento;
  //  anioNacimiento = parseInt(prompt("Ingrese año de nacimiento"));

  //  if (anioNacimiento <= 1900){
  //   console.log("Generacion perdida")
  //  }else if (anioNacimiento <= 1924){
  //   console.log("Generacion grandiosa")
  //  }else if (anioNacimiento <= 1945){
  //   console.log("Generacion silenciosa")
  //  }else if (anioNacimiento <=1964){
  //   console.log("Generacion Baby Boomers")
  //  }else if (anioNacimiento <= 1980){
  //   console.log("Generacion X")
  //  }else if (anioNacimiento <=1996){
  //   console.log("Generacion Y")
  //  }else if (anioNacimiento <= 2012){
  //   console.log("Generacion Z")
  //  }else if (anioNacimiento <= 2025){
  //   console.log("Generacion Alpha")
  //  }else{
  //   console.log("Generacion Nueva")
  //  }
  
   // Ejercicio 4   
  //  Cilo for incremento
  // console.log("Incremento \n");
  // for (let i = 1; i <= 10; i++){
  //   console.log(i);
  // }

  

  // // // Decremento
  // console.log("Decremento \n");
  // for (let j = 20; j >= 1; j-=2){
  //   console.log(j);
  // }
  

  // let tabla;
  // tabla = parseInt(prompt("Ingrese la tabla a multiplicar"));
  // for (let t = 1; t <= 10; t++){
  //   console.log(`${tabla} x ${t} = ${tabla * t}`);
  // }

  // Variables para la edad y si tiene boleto
// let edad;
// let tieneBoleto = false;
// edad = parseInt(prompt("Ingrese la edad"));


// // Verificar si la persona puede entrar
// if (edad >= 18 && tieneBoleto) {
//     console.log("Acceso permitido: Eres mayor de edad y tienes boleto.");
// } else if (edad >= 18 && !tieneBoleto) {
//     console.log("Acceso denegado: Necesitas un boleto para entrar.");
// } else if (edad < 18 && tieneBoleto) {
//     console.log("Acceso denegado: Eres menor de edad, aunque tienes boleto.");
// } else {
//     console.log("Acceso denegado: Eres menor de edad y no tienes boleto.");
// }

// Variables para la edad y si tiene boleto
// let edad = parseInt(prompt("Ingresa tu edad:"));
// let boletoInput = prompt("¿Tienes boleto? (sí o no)").toLowerCase();

// // Convertir la respuesta a un booleano
// let tieneBoleto = (boletoInput === "sí" || boletoInput === "si");

// // Verificar si la persona puede entrar 
// if (edad >= 18 && tieneBoleto) {
//     console.log("Acceso permitido: Eres mayor de edad y tienes boleto.");
// } else if (edad >= 18 && !tieneBoleto) {
//     console.log("Acceso denegado: Necesitas un boleto para entrar.");
// } else if (edad < 18 && tieneBoleto) {
//     console.log("Acceso denegado: Eres menor de edad, aunque tienes boleto.");
// } else {
//     console.log("Acceso denegado: Eres menor de edad y no tienes boleto.");
// }


  //  switch ejemplo
  
// let dia;
// dia = parseInt(prompt("Ingrese dia..."));

// switch(dia){
//   case 1:
//     console.log("Lunes");
//     break;
//   case 2:
//     console.log("Martes");
//     break;
//   case 3:
//     console.log("Miercoles");
//     break;
//   case 4:
//     console.log("Jueves");
//     break;
//   case 5:
//     console.log("Viernes");
//     break;
//   case 6:
//     console.log("Sabado");
//     break;
//   case 7:
//     console.log("Domingo");
//     break;
//   default:
//     console.log("Dia invalido");
// }

// Conversor dedinero
let monto = parseFloat(prompt("Ingrese monto en pesos Colombinos"));

// Mostrar menú de opciones para seleccionar la moneda
let menu = `Seleccione la moneda a convertir:
1. Dolar
2. Euro
3. Libra Esterlina`;

let opcion = parseInt(prompt(menu));

let resultado;

switch (opcion) {
  case 1:
    resultado = monto / 4,280; // Tasa de cambio de pesos a Dolares
    console.log(`Dolar: ${resultado}`);
    break;
  case 2:
    resultado = monto / 4,728; // Tasa de cambio de pesos a euros
    console.log(`Euros: ${resultado}`);
    break;
  case 3:
    resultado = monto / 5,601; // Tasa de cambio de pesos a libras esterlinas
    console.log(`Libras Esterlinas: ${resultado}`);
    break;
  default:
    console.log("Opción no válida.");
    break;
}
