var msg = "Minha mensagem";

try {
    console.log(msg);
} catch (e) {
    console.error(`Erro ao retornar mensagem: ${e.message}`);
    if(e.message === "msga is not defined"){
        console.log("Excudado por causa do erro");
    }
}


console.warn("ola"); //alerta
console.trace("oi")  //exibe aonde está sendo executado o código
console.time(1);
console.assert(1 == 0, "oi");
