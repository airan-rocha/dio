console.log("Hello TypeSript");
var animal = {
    nome: 'Elefante',
    tipo: 'terrestre',
    executarRugido: function (alturaEmDecibeis) { return (alturaEmDecibeis + "db"); }
};
animal.executarRugido(10);
var felino = {
    nome: 'leão',
    tipo: "terrestre",
    visaoNoturna: true,
    executarRugido: function (alturaEmDecibeis) { return (alturaEmDecibeis + "db"); }
};
console.log("\n    Nome: " + felino.nome + "\n    Tipo: " + felino.tipo + "\n    Tem vis\u00E3o noturna: " + (felino.visaoNoturna ? "Sim" : "Não") + "\n    Altura do Rugido: " + felino.executarRugido(80) + "\n");
function mensagem(msg) {
    return console.log("Sa\u00EDda: " + msg);
}
mensagem("Hello TypeScript");
var input = document.getElementById('input');
input.addEventListener('input', function (event) {
    // console.log(`digitei: ${input.value}`);
    var i = event.currentTarget;
    console.log("digitei: " + i.value);
});
//generic types
/**
 *
 * @param array informe um array com números
 * @param valor informe um valor numérico
 * @returns retornará a soma dos valores do array mais o valor do 2º parametro
 */
// function adicionarApendiceALista<NaoSei>(array: NaoSei[], valor: NaoSei) {
//     return array.map(() => valor);
// }
function adicionarApendiceALista(array, valor) {
    return array.map(function (item) { return item + valor; });
}
var r = adicionarApendiceALista([1, 2, 3], 2);
console.log(r);
function redirecionar(usuario) {
    if ('cargo' in usuario) {
        // redirecionar para a área de adinistração
        console.log('É admin');
    }
    else {
        // redirecionar para a área do usuário
        console.log('É Usuário');
    }
}
var pedro = {
    cargo: 'Supervisor'
};
redirecionar(pedro);
function redirecionar2(usuario) {
    if (usuario.cargo == "Gerente") {
        // redirecionar para a área de adinistração
        console.log('É admin');
    }
    else if (usuario.cargo == "Coordenador") {
        // redirecionar para a área do coordenador
        console.log('É Coordenador');
    }
    else {
        // redirecionar para a área do usuário
        console.log('É Usuário');
    }
}
var manuel = {
    email: "@@@",
    id: '1',
    cargo: 'Coordenador'
};
redirecionar2(manuel);
var MeuCachorro = /** @class */ (function () {
    function MeuCachorro(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    return MeuCachorro;
}());
var cao = new MeuCachorro('Apolo', 14);
console.log("Nome do cachorro: " + cao.nome + "\nIdade do cachorro: " + cao.idade);
// import {num, textos} from './arquivo';
// console.log(`var num = ${num}\nvar texto = ${textos}`);
