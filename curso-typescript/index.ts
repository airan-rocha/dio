console.log("Hello TypeSript");

interface IAnimal {
    nome: string;
    tipo: 'terrestre' | 'aquático';
    executarRugido(alturaEmDecibeis: number): void
}

interface IFelino extends IAnimal {
    visaoNoturna: boolean;
}

const animal: IAnimal = {
    nome: 'Elefante',
    tipo: 'terrestre',
    executarRugido: (alturaEmDecibeis) => (`${alturaEmDecibeis}db`)
}

animal.executarRugido(10);

const felino: IFelino = {
    nome: 'leão',
    tipo: "terrestre",
    visaoNoturna: true,
    executarRugido: (alturaEmDecibeis) => (`${alturaEmDecibeis}db`)
}

console.log(`
    Nome: ${felino.nome}
    Tipo: ${felino.tipo}
    Tem visão noturna: ${felino.visaoNoturna ? "Sim": "Não"}
    Altura do Rugido: ${felino.executarRugido(80)}
`);

function mensagem (msg) {
    return console.log(`Saída: ${msg}`);
}

mensagem("Hello TypeScript");

const input = document.getElementById('input') as HTMLInputElement;

input.addEventListener('input', (event) => {
    // console.log(`digitei: ${input.value}`);
    const i = event.currentTarget as HTMLInputElement;
    console.log(`digitei: ${i.value}`);
})


//generic types

/**
 * 
 * @param array informe um array com números
 * @param valor informe um valor numérico
 * @returns retornará a soma dos valores do array mais o valor do 2º parametro
 */
// function adicionarApendiceALista<NaoSei>(array: NaoSei[], valor: NaoSei) {
//     return array.map(() => valor);
// }
function adicionarApendiceALista(array, valor) {
    return array.map(item => item + valor);
}

var r = adicionarApendiceALista([1,2,3], 2);

console.log(r);


interface IUsuario {
    id: string;
    email: string;
}

interface IAdmin {
    cargo: "Gerente" | "Coordenador" | "Supervisor";
}

function redirecionar(usuario: IUsuario | IAdmin){
    if('cargo' in usuario){
        // redirecionar para a área de adinistração
        console.log('É admin');
    }else{
        // redirecionar para a área do usuário
        console.log('É Usuário');
    }
}

const pedro: IAdmin = {
    cargo: 'Supervisor'
}

redirecionar(pedro);

//***************************
interface IUsuario2 {
    id: string;
    email: string;
    cargo?: "Gerente" | "Coordenador" | "Supervisor" | "Funcionário";  //quando eu coloco a interrogação o item fica como opcional, ou seja, eu não sou obrigado a preenchelo
}

function redirecionar2(usuario: IUsuario2) {
    if(usuario.cargo == "Gerente"){
         // redirecionar para a área de adinistração
         console.log('É admin');
    }else if (usuario.cargo == "Coordenador") {
        // redirecionar para a área do coordenador
        console.log('É Coordenador');
    }else{
        // redirecionar para a área do usuário
        console.log('É Usuário');
    }
}

const manuel: IUsuario2 = {
    email: "@@@",
    id: '1',
    cargo: 'Coordenador'
}

redirecionar2(manuel);


// *******************************

interface ICachorro {
    nome: string;
    idade: number;
    parqueFavorito?: string;
}

class MeuCachorro implements ICachorro {
    idade;
    nome;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
}

const cao = new MeuCachorro('Apolo', 14);

console.log(`Nome do cachorro: ${cao.nome}\nIdade do cachorro: ${cao.idade}`);