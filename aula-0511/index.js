const {Animal} = require('./Animal');
const {Cachorro} = require('./cachorro');

let a1 = new Animal('Victor', 12, "Marrom")
let c1 = new Cachorro('Bernado', 15, "Preto", "Pastor Alemão")

a1.emitirsom()
c1.emitirsom()

