// console.log("oi");

// var maiorIdade = (idade) => (18 - idade) <= 0 ? true : false;

// console.log(maiorIdade(22));

var pessoa = ['airan', 'valdirene', 'gabi'];

// pessoa.forEach(nome => {
//     console.log(nome);
// });

var pessoas = [
    {nome: "Airan", sexo: "masculino", idade: 33},
    {nome: "Romario", sexo: "masculino", idade: 25},
    {nome: "Luiz", sexo: "masculino", idade: 32},
    {nome: "Miguel", sexo: "masculino", idade: 39},
    {nome: "Valdirene", sexo: "feminino", idade: 40},
    {nome: "Joana", sexo: "feminino", idade: 61},
    {nome: "Gabriele", sexo: "feminino", idade: 7},
    {nome: "Julia", sexo: "feminino", idade: 3},
];


// console.log(pessoas[1].nome);

// var masculino = pessoas.filter(p => p.sexo == "masculino");

// masculino.forEach(element => {
//     console.log(element.nome);
// });

var pessoasfil = pessoas.filter(p => p.idade % 2 == 1); // retorna idades impares (resto da divisão)

var contador = pessoasfil.length;

pessoasfil.forEach(pessoa => {
    console.log(`${contador} - Nome: ${pessoa.nome}, Idade: ${pessoa.idade}`);
    contador--;
})

console.log(2**3); //exponenciação

console.log(2 == 2); //true
console.log(2 == '2'); //true
console.log(2 === 2); //true
console.log(2 === '2'); //false
console.log(2 != 2); //false
console.log(2 != 3); //true
console.log(2 !== 2); //false
console.log(2 !== '2'); //true