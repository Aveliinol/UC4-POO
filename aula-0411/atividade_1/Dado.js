class Dado {
    #face

    constructor() {
        this.#face = Math.floor(Math.random() * 6+1 );
        Object.freeze(this)
    }

     get getFace(){
        return this.#face
     }

    set setFace(face){
        return this.#face = face 
    } 

}

module.exports = { Dado }

