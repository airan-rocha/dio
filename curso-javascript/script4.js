// var log = (log) => {
//     console.log(log);
// };

log("testando");

var a = 15;
var b = 8;

var sum = (a, b) => a + b;
var sub = (a, b) => a - b;

log(`soma: ${a}+${b}=${sum(a, b)}`);
log(`subtração: ${a}-${b}=${sub(a, b)}`);

function log(log) {
    console.log(log);
};

var sum = (a, b = 0) => a + b;

console.log(sum(5, 4));

var obj = {
    sum: function sum (a, b= 0){
        return a + b;
    },
    sub(a, b = 0){
        return a - b;
    },
    mult(a, b= 1){
        return a * b;
    },
    pow(a, b = 2){
        return a ** b;
    }
}

console.log(obj.sum(2,3));
console.log(obj.sub(10, 6));
console.log(obj.mult(2,4));
console.log(obj.pow(3,3));



console.log('################\n');

var sum = (...values) => {
    var resultado = 0;
    values.forEach(value => resultado += value);
    return resultado;
}

console.log(sum(5,2,3));


var sum = (...ags) => {
    return ags.reduce((acumulador, valorAtual) => acumulador + valorAtual);
}

console.log(sum(3, 2, 1));

var mult = (...args) => args.reduce((acc, value) => acc * value, 1);

console.log(mult(3, 2, 3));

var str = (...arg) => {
    console.log(arg);
}

var texto = "DigitalInovationOne";
var msg = '- Eu curto';

str(...texto, ...msg);

console.log(texto, msg);
console.log(...texto);



console.log('################\n');

var frutas = ['prata', 'gala', 'grauda', ['papaia']];

var [banana, maca, laranja, [mamao]] = frutas;

console.log(banana, maca, laranja, mamao);

var pessoa = {cabelo: "grande", olho: "azul"};

var {cabelo, olho} = pessoa;

console.log(cabelo, olho);


var pessoa2 = {cabelo: "grande", olho: "azul", inferior: {perna: "grossa", pes: "grande"}};

var {cabelo, olho, inferior} = pessoa2;

var {perna, pes} = inferior;

console.log(cabelo, olho, perna, pes);

console.log('################\n');

//symbol é um identificador único. Ele aceita um identificador tipo "string", ele serve apenas para sabermos do que o symbol se trata.

const uniqueId = Symbol("hello");
const uniqueId2 = Symbol("hello");

console.log(uniqueId);

console.log(uniqueId == uniqueId2);  //irá retornar false mesmo tendo o mesmo identificador string, pois cada symbol é unico.

console.log('################\n');
//generator

function* gen() {
    yield 1; 
    yield 2; 
    yield 3;
};

var value = gen();

console.log(value.next())
console.log(value.next())
console.log(value.next())

function* hello() {
    console.log("hello");
    yield 1;

    console.log("from");
    const value = yield 2;

    console.log("function");
}

var it = hello();

console.log(it.next());
console.log(it.next());
console.log(it.next('Hello'));

function* naturalNumbers(){
    let number = 0;
    while(true){
        yield number;
        number++;
    }
}

const it2 = naturalNumbers();

console.log(it2.next());
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());
