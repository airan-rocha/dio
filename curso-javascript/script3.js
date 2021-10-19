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

console.log(bulldog);
// console.log(bulldog);

// console.log("qtdePatas" in cachorro);

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

console.log(pug);


class Pessoa {
    constructor(sexo){
        this.sexo= sexo;
        this.pernas = 2;
        this.cabeca = 'cabeca';
    }
    set cabeca(cabeca){
        this.cabeca = cabeca;
    }
    get cabeca(){
        return this.cabeca;
    }
}

class Homem extends Pessoa {
    constructor(fala){
        super('masculino');
        this.fala = fala;
    }
}

const jonas = new Homem('Olá mens');
jonas.cabeca(true);

console.log(jonas.cabeca());