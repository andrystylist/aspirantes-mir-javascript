/**
 * Une un conjunto de Strings separados por espacios
 * @param {Array} arreglo 
 * @returns String
 */
function join(arreglo) {
  let resultado = ""
  for(let i = 0; i < arreglo.length; i++){
    resultado = resultado + " " + arreglo[i]
  }

  return resultado.trim()
}

console.log(join(["Hola", "Mundo"])) // "Hola Mundo"
console.log(join(["Make", "It", "Real"])) // "Make It Real"
console.log(join([])) // ""