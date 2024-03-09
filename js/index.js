let numero = '2';
if (numero === 2) {
    console.log('Si');
} else if (numero === '2') {
    console.log('Si string');
} else {
    console.log('No');
}

/**
 * && and
 * || or
 * ! negación
 * == igual valor
 * === igual valor y tipo
 * > mayor que
 * < menor que
 * >= mayor o igual
 * <= menor o igual
 * !== diferente
 */

let categoria = 'a';
switch (categoria) {
    case 'a':
        console.log('Categoria a');
        break;
    case 'b':
        console.log('Categoria b');
        break;
    case 'c':
        console.log('Categoria c');
        break;
    default:
        console.log('Categoria default');
        break;
}

function saludar(nombre) {
    console.log('Hola ' + nombre);
}
saludar('Johan');

function saludo(nombre) {
    return 'Hola ' + nombre;
}
console.log(saludo('Johan'));

let saludarDos = function (nombre) {
    console.log('Hola ' + nombre);
}
saludarDos('Juan');
let saludoDos = (...arg) => {
    return 'Hola ' + arg[0] + ' ' + arg[4];
}
let saludoMsg = saludoDos('Juan', 1, true, false, 6);
console.log(saludoMsg);

class Persona {
    nombre = '';
    edad;
    email;
    categoria;

    constructor(nombre, edad, email, categoria) {
        this.nombre = nombre;
        this.edad = edad;
        this.email = email;
        this.categoria = categoria;
    }

    descuento() {
        if (this.categoria == 'a' || this.categoria == 'b') {
            return 10;
        } else if (this.categoria == 'c' || this.categoria == 'd') {
            return 5;
        } else {
            return 0;
        }
    }
}

let persona = new Persona('Johan', 32, 'tests@test.com', 'd');
persona.categoria = 'b';
console.log('Descuento', persona.descuento());

class Estudiante extends Persona {
    constructor(nombre, categoria) {
        super(nombre, 0, '', categoria);
    }
    descuentoEstudiante() {
        return this.descuento();
    }
}

let estudiante = new Estudiante('John', 'b');
console.log('Descuento', estudiante.descuentoEstudiante());

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
console.log(numeros);
numeros.push(13);
numeros.push(14);
console.log(numeros);
numeros.shift();
console.log(numeros);
numeros.splice(1, 3);
console.log(numeros);
console.log(numeros.join('|'));
numeros.unshift(15);
console.log(numeros);
numeros.pop();
console.log(numeros);
console.log(numeros.indexOf(7));
let par = numeros.find((num) => {
    return (num % 2) === 0;
});
console.log(par);
let impares = numeros.filter((num) => {
    return (num % 2) === 0 && num>30;
}).map((num, index)=>{
    return "Posición: "+index;
});
console.log(impares);
// let posiciones = numeros.map((num, index) => {
//     return "Posición: "+index;
// });
// console.log(posiciones);
let numerosDos = [];
for(let i=0;i<=100;i++){
    numerosDos.push(i);
}







