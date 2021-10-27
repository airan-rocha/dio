var msg = "Minha mensagem";

try {
    console.log(msga);
} catch (e) {
    console.error(`Erro ao retornar mensagem: ${e.message}`);
    if(e.message === "msga is not defined"){
        console.log("Excudado por causa do erro");
    }
}

