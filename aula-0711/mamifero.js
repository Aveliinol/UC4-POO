const {Animal} = require('./animal')

class Mamifero extends Animal{
    #tipoPelo
    #habitat

    constructor(nome, idade, tipoPelo, habitat){
        super(nome, idade);
              this.#tipoPelo = tipoPelo
              this.#habitat = habitat
              Object.freeze(this)
    }

    get getTipoPelo(){
        return this.#tipoPelo
    }

    set setTipoPelo(tipoPelo){
        this.#tipoPelo = tipoPelo
    }

    get getHabitat(){
        return this.#habitat
    }

    set setHabitat(habitat){
        this.#habitat = habitat
    }

    emitirSom(){
        return("Mamifero rugiu!")
    }

    getInfo(){
        return(`Nome:${this.getNome}
Idade:${this.getIdade}
Tipo de Pelo:${this.getTipoPelo}
Habitat:${this.getHabitat}`)
    }
}


module.exports = {Mamifero}