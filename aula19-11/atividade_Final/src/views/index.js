const {prompt} = require('prompt-sync')();
const {TarefaController} = require('../controller/tarefaController');
const controller = new TarefaController();

let opcao;

function iniciarSistema(){

    do {

        console.log('====================================');
        console.log('1. Criar Tarefa');
        console.log('2. Editar Tarefa');
        console.log('3. Listar Tarefas');
        console.log('4. Listar Tarefas Pessoais');
        console.log('5. Listar Tarefas Profissionais');
        console.log('6. Excluir Tarefa');
        console.log('7. Excluir Tudo');
        console.log('8. Sair do Sistema');
        console.log('====================================');

        opcao = parseInt(prompt('Digite uma opção: '));
        

        switch (opcao) {
            case 1:
                adicionarTarefa();
                break;
            case 2:
                
                break;
            case 3:
                listarTarefa();
                break;
            case 4:
                listarTarefa();
                break;
            case 5:
                listarTarefa();
                 break;
            case 6:
                
                 break;
            case 7:
                
                break;
            case 8:
                console.log('Saindo do Sistema.....');
                break;
            default:
                console.log('Error404');
                break;

        

        }
    } while (opcao === 8);
}

function adicionarTarefa(){
    const tipo = prompt('Digite o tipo de tarefa:');
    const descricao = prompt('Digite uma descrição');
    const status = this.getStatus
    const prioridade = prompt('Digite a prioridade da tarefa');
    const data = prompt('Digite uma Data');

    controller.criarTarefa(tipo, descricao, status, prioridade, data)
}

function listarTarefa(){
    const tipo = prompt('Digite o tipo de tarefa que você que listar:');

    controller.listarTarefas(tipo)
}

iniciarSistema()