class oi {
    constructor(msg){
        this.msg = msg;
    }

    set mensagem(msg){
        this.msg = msg;
    }

    get mensagem(){
        return this.msg;
    }
}

var ee = new oi();

ee.mensagem = "Airan Rocha";

console.log(ee.mensagem);

// *************************

class Retangulo {
    constructor(altura, largura) {
      this.altura = altura; this.largura = largura;
    }
  //Getter
    get area() {
        return this.calculaArea()
    }

    calculaArea() {
        return this.altura * this.largura;
    }
}

const quadrado = new Retangulo(10, 10);

console.log(quadrado.area);

// ###########################3

class Pessoa {
    constructor(cor){
        this.cor = cor;
    }
    cor(cor){
        this.cor = cor;
    }
    cor(){
        return this.cor
    }
}

var eu = new Pessoa();

eu.cor = "White";

console.log(`A cor é ${eu.cor}`);


function timmer(minutos) {
    let tempo = minutos * 60;

    var t = setInterval(() => {
        console.log(tempo);
        tempo <= 0 ? clearInterval(t) : tempo--;
    }, 1000);
}

timmer(0.5);