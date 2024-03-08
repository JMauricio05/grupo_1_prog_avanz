let numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numeros);
numeros.push(11);
console.log(numeros);
numeros.unshift(12);
console.log(numeros);
let lista = numeros.concat([13, 14, 15]);
console.log(lista);
lista.splice(0, 5);
console.log(lista);
lista.shift();
console.log(lista);
// const posicion = lista.findIndex((item) => {
//     return item === 5;
// });
const posicion = lista.findIndex((item) => item === 5);
lista.splice(posicion, 1);
console.log(lista);
const par = lista.find((value) => (value % 2) === 0);
console.log(par);
const numersPares = lista.filter((value) => (value % 2) === 0);
console.log(numersPares);
const listaOrden = lista.sort((a, b) => {
    return b - a;
});
console.log(listaOrden);
const trasnPares = numersPares.map((value, index) => {
    return 'El número par ' + index + ' es: ' + value;
});
console.log(trasnPares);

function mostrarMsg() {
    // alert('Hola mundo!!!!');
    // document.getElementById('tituloH1').innerHTML = 'Hola <i>mundo</i>!!!!';
    const titulo = document.getElementById('tituloH1');
    titulo.style.color = '#00f2f8';
    titulo.innerHTML = 'Hola <i>mundo</i>!!!!';
}



