// var pessoas = ["Airan", "Valdirene"];

// pessoas.men = "menino";

// console.log(pessoas);

// console.log("men" in pessoas);

// var carro = {marca: "Honda", modelo: "Civic"};

// console.log(carro);

// console.log("marca" in carro);

//

function Animal(qtdePatas) {
    this.qtdePatas = qtdePatas;
}

function Cachorro(dono){
    Animal.call(this, 4);
    this.late = "au au";
    this.dono = dono;
}


const bulldog = new Cachorro('eu');

console.log(`buldog - ${bulldog.qtdePatas}`);
console.log(bulldog);

console.log("qtdePatas" in bulldog);

console.log("###############\n");

class Animal2 {
    constructor(qtdePatas){
        this.qtdePatas = 4;
    }
}

class Cachorro2 extends Animal2 {
    constructor(morde){
        super(4);
        this.morde = 4;
        this.dono = morde;
    }
}

const pug = new Cachorro2("yes");

console.log(`pug = ${pug.qtdePatas}`);
console.log(pug);


console.log("###############\n");


class Pessoa {
    constructor(sexo){
        this.sexo= sexo;
        this.pernas = 2;
        this.cabeca1 = 'cabeca';
    }
    set cabeca(cabeca){
        this.cabeca1 = cabeca;
    }
    get cabeca(){
        return this.cabeca1;
    }
}

class Homem extends Pessoa {
    constructor(fala){
        super('masculino');
        this.fala = fala;
    }
}

const jonas = new Homem('Olá mens!!!');
jonas.cabeca = true;

console.log(`jonas tem cabeça: ${jonas.cabeca}. Ele fala: ${jonas.fala}`);

console.log("###############\n");


var fruta  = ["laranja", "melância", "maçã", "uva", "pêra"];

fruta.forEach(fruta => console.log(fruta));

console.log(`\nLista de Frutas:`);
fruta.forEach((fruta, index) => {
    console.log(`${index + 1} - ${fruta}`);
});

console.log(fruta.map((fruta, index) => `${index} ${fruta}`));

console.log("###############\n");

var numeros = [1,2,3,4,5];

console.log(numeros);

console.log(numeros.map(value => value * 2));  //irá multiplicar o valor dos arrays por 2

console.log("###############\n");

var numeros = [1,2,3,[4,5,[6,7]]];

console.log(numeros);

console.log(numeros.flat(2));  //plano: irá deixar os sub-arrays no mesmo nível dos arrays.

console.log(numeros.flatMap(value => [(2, value) * 2]));