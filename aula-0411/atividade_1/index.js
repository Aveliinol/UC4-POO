const prompt = require("prompt-sync")();
const { Dado } = require("./Dado");
const { Jogador } = require("./Jogador");
const { SistemaAzar } = require("./SistemaAzar");

function executarTigrinho(){
    let novoTurno ='';
    console.log("Bem-vindo ao seu redimento extra")
do {
    const nome = prompt("Digite o nome do Jogador:");
    const aposta = parseInt(prompt("Digite um numero de 1 a 6:"));
    const lance = new Dado();
    const jogador01 = new Jogador(nome, aposta);
    const tigrinho = new SistemaAzar(lance, jogador01);
    tigrinho.verificarGanhado();
    novoTurno = prompt ("Digite 'S' para continua fazendo sua renda ou 'N' para sair:")
} while ( novoTurno !== 'N' && novoTurno !== 'n');
console.log("Até logo!")
}
executarTigrinho()
// const lance = new Dado();
// const jogador01 = new Jogador('Lucas', 4);
// const tigrinho = new SistemaAzar(lance, jogador01);

// tigrinho.verificarGanhado()