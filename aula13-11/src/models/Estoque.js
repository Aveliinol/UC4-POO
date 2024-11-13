const {Notebook} = require('./Notebook')

class Estoque{

    constructor(produtos, quantidade){
        this.produtos = produtos;
        this.quantidade = quantidade;
    }
}

module.exports = {Estoque}