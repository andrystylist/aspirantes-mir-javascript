const persona = {
  nombre: "Andry",
  edad: 35,
  ciudad: "Bogotá",
  profesion: "Ingeniero Ambiental",
}
console.log(persona)

function presentacion(persona) {
  return `${persona.nombre} ${persona.edad} ${persona.ciudad}`
}

const mensaje = presentacion(persona)
console.log(mensaje)

persona.hobbies = ["Bailar", "Maquillar", "Escuchar Música"]
console.log(persona.hobbies)

for(let hobbie of persona.hobbies) {
  console.log(hobbie)
}