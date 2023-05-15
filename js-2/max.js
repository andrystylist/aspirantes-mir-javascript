/**
 * Retorna el numero más alto
 * @param {Array} numeros 
 * @returns Number
 */
function max(numeros) {
  const resultado =  numeros.reduce((acum, item) => {
    if (acum === undefined || item > acum) {
      console.log("Retorno el ITEM: ", item)
      return item
    }

    console.log("Retorno el ACUM: ", acum)
    return acum
  } , undefined)
  return resultado
}

console.log(max([1, 3, 2])) // 3
console.log(max([10, 9, 8, 7, 6, 5, 4])) // 10
console.log(max([])) // undefined


/**
 * Retorna el numero más alto
 * @param {Array} numeros 
 * @returns Number
 */
function maxFor(numeros) {
  let resultado;
  for(let i = 0; i < numeros.length; i++) {
    if(resultado === undefined || numeros[i] > resultado){
      resultado = numeros[i];
    }
  }
  return resultado
}
console.log(maxFor([1, 3, 2])) // 3
console.log(maxFor([10, 9, 8, 7, 6, 5, 4])) // 10
console.log(maxFor([])) // undefined