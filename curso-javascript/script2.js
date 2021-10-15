var partes = ['ombro', 'joelhos'];
var musica = ['cabeça', ...partes, 'e', 'pés'];
var a = '2';

console.log(musica);

musica.forEach(music => {
    console.log(music);
})

console.log( typeof a);

console.log( 1 in partes);
console.log("length" in musica);

var meuCarro = {marca: "Honda", modelo: "Civic"};

console.log(meuCarro);

console.log("marca" in meuCarro);

var familia = new Array("Airan", "Valdirene", "Gabriele", "Julia");

console.log(familia);

//

var numeros = new Array();

var quantidade = 10;

for (let count = 0; count <= quantidade; count++) {
    numeros.push(count);
}

numeros.forEach(num => {
    if(num % 2 === 0){
        console.log(`O valor ${num} é par`);
    }else {
        console.log(`O valor ${num} é impar`);
    }
});