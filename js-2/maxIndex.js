/**
 * retorna el indice del numero mayor del Array
 * @param {Array} numeros 
 * @returns Number
 */
function maxIndex(numeros) {
 let resultado = numeros.reduce((acum, item, index) => {
   if (acum.index === -1 || acum.max < item) {
     return {
       max: item,
       index,
     };
   }

   return acum
 }, {max: undefined, index: -1})

 return resultado.index
}

console.log(maxIndex([1, 3, 2])) // 1
console.log(maxIndex([10, 9, 8, 7, 6, 5, 4])) // 0
console.log(maxIndex([])) // -1


/**
 * retorna el indice del numero mayor del Array
 * @param {Array} numeros 
 * @returns Number
 */
function maxIndexFor(numeros) {
  let resultado = -1; // esto va contener el indice del num mayor del array
  let numMayor = undefined 
  for(let index = 0; index < numeros.length; index++) {
    if(resultado === -1 || numeros[index] > numMayor) {
      resultado = index
      numMayor = numeros[index]
    }
  }
  
  return resultado;
}

console.log(maxIndexFor([1, 3, 2])) // 1
console.log(maxIndexFor([10, 9, 8, 7, 6, 5, 4])) // 0
console.log(maxIndexFor([])) // -1