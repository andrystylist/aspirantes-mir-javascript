const receta = {}
receta.nombre = "Sandwich"
receta.ingredientes = []

receta.ingredientes.push({
  nombre: "Pan",
  cantidad: 2,
})

receta.ingredientes.push({
  nombre: "Queso",
  cantidad: 1,
})

console.log(receta.ingredientes[0].nombre)

//const resultado = receta.ingredientes.reduce((acum, item) => item.cantidad + acum, 0)
//console.log(resultado)

let cantidadTotal = 0
for(let i = 0; i < receta.ingredientes.length; i++) {
  cantidadTotal = cantidadTotal + receta.ingredientes[i].cantidad
}
console.log(cantidadTotal)




