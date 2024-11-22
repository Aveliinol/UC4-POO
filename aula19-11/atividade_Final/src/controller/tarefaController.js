const {Tarefa} = require('../models/tarefa');
const {TarefaPessoais} = require('../models/tarefaPessoais');
const {TarefaProfissionais} = require('../models/tarefaProfissionais');
const {databaseTarefa} = require('../config/databaseTarefa');

class TarefaController{

    criarTarefa(tipo, descricao, status, prioridade, data){
        let tarefa 
        if(tipo.toLowerCase() === 'Tarefas'){
            tarefa = new Tarefa(descricao, status)
        } else if(tipo.toLowerCase() === 'TarefasPF'){
            tarefa = new TarefaProfissionais(descricao, status, prioridade, data)
        } else if(tipo.toLowerCase() === 'TarefasPV'){
            tarefa = new TarefaPessoais(descricao, status, prioridade, data)
        } else {
            console.lof('Tipo de tarefa invalida.')
            return;
        }
        databaseTarefa.push(tarefa);
        console.log('Tarefa cadastrada com sucesso!');
    }

    listarTarefas(tipo){
        if(databaseTarefa.length > 0 && tipo.toLowerCase === 'Tarefas'){
            databaseTarefa.forEach((tarefas, index) => {
                console.log(`${index + 1}`);
                tarefas.getInfo();
            })
        }else if(tipo.toLowerCase === 'TarefasPV'){
            databaseTarefa.forEach((tarefas, index) => {
                console.log(`${index + 1}`)
                tarefas.getInfo();
            })
        }else if(tipo.toLowerCase === 'TarefasPS'){
            databaseTarefa.forEach((tarefas, index) => {
                console.log(`${index + 1}`)
                tarefas.getInfo();
        })
    } else {
        console.log('Tarefas não registrada')
    }
}

}

module.exports = {TarefaController}