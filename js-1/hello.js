//escribe la función hola acá
/*En un archivo llamado hello.js crear una función llamada hola que reciba un argumento (una cadena de texto) y retorne “Hola ” seguido del argumento y un signo de exclamación, debes ejecutar tu archivo usando node.js node hello.js
*/

function hola(str) {
    return `Hola ${str}!`;
}


console.log(hola("Pedro")) // "Hola Pedro!"
console.log(hola("Juan")) // "Hola Juan!"
console.log(hola("")) // "Hola !"