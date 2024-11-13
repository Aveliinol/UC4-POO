const {dataBaseNotebook} = require('../config/dataBaseNotebook');
const {Notebook} = require('../models/Notebook');


class ControllerNotebook{
    criarNotebook(numeroDeSerie, marca, modelo, cor, valor){
        try {
            const novoNotebook = new Notebook(numeroDeSerie, marca,
                 modelo, cor, valor); 
                 dataBaseNotebook.push(novoNotebook);
                 console.log(`Notebook ${this.getNumeroDeSerie} foi adicionado com sucesso!`)
        } catch (error) { 
           console.error('Erro ao criar um novo Notebook', error.message)
        }
    }

    listarNotebook(){
        try {
            const listaNotebook = dataBaseNotebook.map( Notebook => {
                numeroDeSerie: Notebook.getNumeroDeSerie;
                marca: Notebook.marca;
                modelo: Notebook.modelo;
                cor: Notebook.cor;
                valor: Notebook.getValor;

            });
            console.table(listaNotebook)
        } catch (error) {
            console.error('Erro ao lista Notebooks', error.message);
        }
    }

    editarNotebook(numeroDeSerie, marca, modelo, cor, valor){
        try {
            const notebook = Notebook.find(notebook => Notebook.getNumeroDeSerie 
                === numeroDeSerie);
                if(notebook){
                    Notebook.marca = novaMarca || Notebook.marca
                    Notebook.modelo = novoModelo || Notebook.modelo
                    Notebook.cor = novaCor || Notebook.cor
                    Notebook.getValor = novoValor || Notebook.getValor
                }else {
                    console.log('Notebook não encontrado!')
                }

        } catch (error) {
            console.error('Erro ao tenta editar notebook', error.message);
        }
    }

    excluirNotebook(){
        try {
            
        } catch (error) {
            
        }
    }

    excluirTodosNotebook(){
        try {
            
        } catch (error) {
            
        }
    }
}