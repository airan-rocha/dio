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