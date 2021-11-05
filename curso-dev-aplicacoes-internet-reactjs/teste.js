

const soma = (...numbers) => {  // rest: ...nomeParametro
    let resultado= 0;
    
    numbers.forEach(n => {
        resultado+= n;
    });

    return resultado;
}

console.log(soma(10, 4, 3, 5, 6));