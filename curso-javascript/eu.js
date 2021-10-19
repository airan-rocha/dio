class oi {
    constructor(msg){
        this.mensagem = msg;
    }

    set mensagem(msg){
        this.mensagem = msg;
    }

    get mensagem(){
        return this.mensagem;
    }
}

var ee = new oi();

ee.mensagem("Airan Rocha");

console.log(ee.mensagem());