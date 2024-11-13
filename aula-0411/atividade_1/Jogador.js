class Jogador {
  #nome
  #aposta

    constructor(nome, aposta) {
        this.#nome = nome
        this.#aposta = aposta
        Object.freeze(this)
    }

   get getNome(){
    return this.#nome 
   }

   set setNome(nome){
    this.#nome = nome
   }

   get getAposta(){
    return this.#aposta
   }

   set setAposta(aposta){
    this.#aposta = aposta
   }

   apresentarDados(){
    console.log(`Nome do jogador: ${this.#nome}  
Aposta: ${this.#aposta}`)
   }
}

module.exports = { Jogador }
