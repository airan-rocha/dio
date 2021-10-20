class Pessoa {
    constructor(cor){
        this.cor = cor;
    }
    cor(cor){
        this.cor = cor;
    }
    cor(){
        return this.cor;
    }
}

var eu = new Pessoa();

eu.cor = "branco";
eu.cor = "pardo";

console.log(eu.cor);

class Cachorro {
    constructor(morde){
        this.patas = 4;
        this.morde = morde;
    }
    set mordida(morde){
        this.morde = morde;
    }
    get mordida() {
        return this.morde;
    }
}

var pull = new Cachorro("forte");
pull.mordida = "medio";
pull.mordida = "fraca";

console.log(pull);

var pessoas = Array("Airan", "Valdirene");

console.log(`Array pessoas ${pessoas}`);

pessoas.push("Gabriele");
pessoas.unshift("Julia");

// pessoas.splice(2, 1);

console.log(`Array pessoas ${pessoas}`);

pessoas.splice(2, 1, "eu");

console.log(`Array pessoas ${pessoas}`);

var arr = [1,2,3,4,5];

console.log(arr.slice(2, 3))