const { Dado } = require("./Dado")
const { Jogador } = require("./Jogador")

class SistemaAzar {
    #dado
    #jogador

    constructor(dado, jogador){
      if(dado instanceof Dado && jogador instanceof Jogador){
      this.#dado = dado;
      this.#jogador = jogador;
      }else {
      console.error("Os dados fornecidos não são do Tipo Jogador ou Dado")        
      }
      Object.freeze(this);
    }

    // verificarGanhado(){
    //     if(this.#dado.getFace === this.#jogador.getAposta){
    //         console.log("Você Ganhou!");
    //         this.#jogador.apresentarDados();
    //         console.log(this.#dado.getFace);
    //     }else {
    //         console.log("Você Perdeu!");
    //         this.#jogador.apresentarDados();
    //         console.log(this.#dado.getFace);
    //     }
    // }
    
    get getDado(){
        return this.#dado
    }

    set setDado(dado){
        this.#dado = dado
    }

    get getJogador(){
        return this.#jogador
    }

    set setJogador(jogador){
        this.#jogador = jogador
    }

    verificarGanhado(){
        if(this.#dado.getFace === this.#jogador.getAposta){
            console.log("Você Ganhou!");
            this.#jogador.apresentarDados();
            console.log(this.#dado.getFace);
        }else {
            console.log("Você Perdeu!");
            this.#jogador.apresentarDados();
            console.log(this.#dado.getFace);
        }
    }
    
}

module.exports = { SistemaAzar }