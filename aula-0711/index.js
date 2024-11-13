const { Ave } = require('./ave');
const { Mamifero } = require('./mamifero');
const {Animal} = require('./animal')

let q4 = new Animal("Lucas", 21)
let q1 = new Ave("Bat", 133, "Mole", "Ruim")
let q2 = new Mamifero("rob", 2, "Bege", "Selva")

console.log(q1.getInfo());
console.log(q1.emitirSom());

console.log(q2.getInfo());
console.log(q2.emitirSom());

console.log(q4.getInfo());
console.log(q4.emitirSom());
