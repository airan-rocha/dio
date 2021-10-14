var msg = () => alert("msg");

const maiorIdade = (idade) => (18 - idade)<= 0 ? true : false;

var clique = () => {
    var idade = document.getElementById("idade").value;
    if (idade)
        if(parseInt(idade) >= 0)
            console.log(maiorIdade(parseInt(idade)) ? "Você é maior de idade" : `Você é menor de idade ${idade}`);
        else
            console.log("a idade não pode ser negativa.")
    else
        console.log("Informe a sua idade");
}