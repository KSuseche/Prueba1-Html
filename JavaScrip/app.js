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
// let monto = parseFloat(prompt("Ingrese monto en pesos Colombinos"));

// // Mostrar menú de opciones para seleccionar la moneda
// let menu = `Seleccione la moneda a convertir:
// 1. Dolar
// 2. Euro
// 3. Libra Esterlina`;

// let opcion = parseInt(prompt(menu));

// let resultado;

// switch (opcion) {
//   case 1:
//     resultado = monto / 4,280; // Tasa de cambio de pesos a Dolares
//     console.log(`Dolar: ${resultado}`);
//     break;
//   case 2:
//     resultado = monto / 4,728; // Tasa de cambio de pesos a euros
//     console.log(`Euros: ${resultado}`);
//     break;
//   case 3:
//     resultado = monto / 5,601; // Tasa de cambio de pesos a libras esterlinas
//     console.log(`Libras Esterlinas: ${resultado}`);
//     break;
//   default:
//     console.log("Opción no válida.");
//     break;
// }

//Tabla con ciclo for 

//let tabla = 1;

// for (let i = 1; i <= 10; i++) {
  
//   console.log(`Tabla del ${i}`);

//   for (let j = 1; j <= 10; j++) {
//     console.log(`${i} x ${j} = ${i * j}`);
// }

//   console.log(``);
//   }
// let suma  = 0;
// let contador = 0;
//  for (let i = 1; contador < 100; i+=2){
//    suma += i;
//    contador++;
//  }
//  console.log(`La suma de los primeros numeros impares: ${suma}`);

// let numero = 1;
// while (numero <= 10){
//   console.log(numero);
//   numero++;
// }

// let n = 1;
// let sum = 0;

// while (n > 0) {
//   n = parseInt(prompt("Ingrese un número (negativo para terminar):"));
  
//   if (n > 0) {
//     sum += n;  // Solo suma si el número es positivo
//   }
  
//   console.log(sum);
// }

// console.log("La suma final es: " + sum);


// let opcion;

// let estado = true;

// let coseno, seno, raiz, numero;

// // opciones realizar un calculo matematic

// // 1. Raiz
// // 2. Seno
// // 3. Coseno

// while(estado){

// opcion = (parseInt(prompt(`SELECCIONE UN OPCION \n 1. Raiz \n 2. Seno de N1 \n 3. Coseno N1 \n 4. Salir`)));

// switch(opcion){

//   case 1: alert("Selecciono Raiz");

//   numero = (parseFloat(prompt(`INGRESE EL NUMERO PARA CALCULAR LA RAIZ`)));
   
//   raiz = Math.sqrt(numero);

//   alert(`LA RAIZ DE ${numero} ES: ${raiz}`);

//   break;
// case 2 : alert("Selecciono Seno N1");

//   numero = (parseFloat(prompt(`INGRESE EL NUMERO PARA CALCULAR EL SENO`)));
   
//   seno = Math.sin(numero);

//   alert(`EL SENO DE ${numero} ES: ${seno}`);

//   break;

//   case 3 : alert("Selecciono Coseno N1");

//   numero = (parseFloat(prompt(`INGRESE EL NUMERO PARA CALCULAR EL COSENO`)));
   
//   coseno = Math.sin(numero);

//   alert(`EL SENO DE ${numero} ES: ${coseno}`);

//   break;

//   case 4: alert("SALIENDO....")
//   estado = falso;
//   break;
// default:
//     alert("LA OPCION NO EXISTE");

 
// }
// }

// let aleatorio = Math.floor(Math.random() * 50) + 1;
// let numeroUsuario = 0;
// let intentos = 0; // Contador de intentos

// while (aleatorio !== numeroUsuario) {
//   numeroUsuario = parseInt(prompt("Adivina un número del 1 al 50"));
//   intentos++; // Incrementar el contador en cada intento

//   if (numeroUsuario < aleatorio) {
//     alert("No, el número generado es mayor.");
//   } else if (numeroUsuario > aleatorio) {
//     alert("No, el número generado es menor.");
//   } else {
//     alert(`Felicidades, adivinaste el número en ${intentos} intentos!`);
//   }
// }

  // FUNCION TRADICIONAL 

  // function multiplicar (a, b){
  //   return a * b;
  // }
//   // console.log(multiplicar(8, 5));

// for (let k = 1; k <= 5; k++){
//   for (let u =1; u <= 5; u++){
//     // console.log(`Multiplicacón`); 
//     console.log(`${k} * ${u} = ${k * u}`);
//   }
// }
// console.log(`Los numeros pares entre 1 y 20 son`);
// for (let i = 1; i <= 20 ; i++){
//   if(i % 2 === 0){
//     console.log(i);
//   } 
// }
// let sum = 0;
// for (let j = 1; j <= 100; j++){
//   sum += j;
//   }
//   console.log(`La suma de los numeros del 1 al 100 es: ${sum}`);

// for (let i = 1; i <= 30; i++){
//   if (i % 3 === 0){
//     console.log(i);
//   }
// }
// // FACTORIAL 
// let factorial = 1; 
// for (let i = 1; i<= 5; i++){
//   factorial *= i;
// }
// console.log(`El factorial de 5 es: ${factorial}`);

// let contador = 0;

// for (let i = 1; i <= 50; i++){
//   if (i % 5 === 0){
//     contador++;
//     console.log(i);
//   }
// }
// console.log(`Se puede dividir ${contador}`);
  
// let n = parseInt(prompt("Intruduce un número positivo"));
// let sum = 0;

// for (let i = 1; i <= n; i++) {
//   sum += i;
// }
// console.log(`La suma de los nuemeros hasta el 5${n} es: ${sum}`);
 
// let n = parseInt(prompt("Ingrese un numero positivo"));
// for (let i = 1; i <= n; i++) {
//   console.log(i);
// }

// let arreglo = [];
// for (let i = 1; i <= 10; i++) {
//   arreglo.push(i * i);
//   console.log(`al cuadrado de cadauno ${i}  es: ${arreglo}`);
// }

// console.log(arreglo);

//tabla
// for (let i = 1; i <= 10; i++) {
//   for (let j = 1; j <= 10; j++){
//     console.log(`${i} * ${j} = ${i * j}`);
//   } 
//   console.log(``);  // Separador para cada tabla
// }

// let tabla = parseInt(prompt("Ingrese que tabla quier"));

//   for (let k = 1; k <= 10; k++){
//     console.log(`${tabla} * ${k} = ${tabla * k}`);
// }

// let sum = 0; 
// let count = 0;

// for (let i = 1; count < 100; i+=2) {
//   sum += i;
//   count++;
//   console.log(i);
// }
// console.log(sum);

// let tamanio = parseInt(prompt("Ingrese la cantidad de estudiantes"));
// let calificaciones = new Array(tamanio);
// let count = 0;
// let sumar = 0;
// let notaMax = 0;

// for (let i = 0; i < tamanio; i++){

//  calificaciones[i] = parseFloat(prompt(`Ingrese la calificación del estudiante ${i+1}`));
 
 
// }


// for (let i = 0; i < tamanio; i++){
//   count++;
//   console.log(`Calificación numero ${count} : ${calificaciones[i]}`);
//   sumar += calificaciones[i];

//   if (calificaciones[i] > notaMax){
//     notaMax = calificaciones[i];  
//   }
// if (calificaciones[i] >=3){
//   console.log(`El estudiante ${i+1} tiene una nota mayor o igual a 3`);
// }else{
//   console.log(`El estudiante ${i+1} tiene una nota menor a 3`);
//   }
// }

// console.log(`La suma de las cal3ificaciones es: ${sumar}`);
// console.log(`El promedio de las calificaciones ${sumar/tamanio}`);
// console.log(`La nota maxima es: ${notaMax}`);

