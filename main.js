//Variáveis

// Loops

// Arrays e Objects

let listaNumérica = [1, 2, 3, 4, 5];
console.log(listaNumérica);
console.log(typeof listaNumérica); // mostrará o tipo
//Imprimir o array completo na tela

// Criando objetos
let pessoa = {
  name: "Jeremias",
  sobreNome: "Verissimo",
  sexo: "Masculino",
  idade: 20,
};

// Adicionando uma chave ao nosso objeto "pessoa"
pessoa.altura = 1.68;

let pessoa2 = {
  name: "Amanda",
  sobreNome: "Silva",
  sexo: "Feminino",
  idade: 22,
};

// pondo em uma variável a união dos objetos.
let pessoas = Object.assign(pessoa, pessoa2);
console.log(pessoas);

// O object é um método que através dele conseguimos acessar outros métodos para fazer algo.
// Na linha 27 unimos dois objetos com o método Object.assign

//Abaixo há outros métodos. Faça o teste
console.log(Object.keys(pessoa));
console.log(Object.values(pessoa));

// Mutação 🧟

let listObject = [
  {
    name: "jeremias",
    lastName: "Verissimo",
    years: 20,
  },
  {
    name: "Maria",
    lastName: "Silva",
    years: 30,
  },
];

let copy = listObject;

delete listObject[0].years;

console.log(listObject);
