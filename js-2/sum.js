/**
 * 
 * @param {Array} numeros 
 * @returns Number
 */
function sum(numeros) {
  const resultado = numeros.reduce((acum, item) => item + acum, 0)
  return resultado
}
console.log(sum([1, 2, 3])) // 6
console.log(sum([10, 8, 12, 5])) // 35
console.log(sum([])) // 0


/**
 * 
 * @param {Array} numeros 
 * @returns Number 
 */
function sumFor(numeros) {
  let resultado = 0
  for(let i = 0; i < numeros.length ; i++) {
    resultado = numeros[i] + resultado
  }
  return resultado
}

console.log(sumFor([1, 2, 3])) // 6
console.log(sumFor([10, 8, 12, 5])) // 35
console.log(sumFor([])) // 0
