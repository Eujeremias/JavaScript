// //Variáveis

// // Loops

// // Arrays e Objects

// let listaNumérica = [1, 2, 3, 4, 5];
// console.log(listaNumérica);
// console.log(typeof listaNumérica); // mostrará o tipo
// //Imprimir o array completo na tela

// // Criando objetos
// let pessoa = {
//   name: "Jeremias",
//   sobreNome: "Verissimo",
//   sexo: "Masculino",
//   idade: 20,
// };

// // Adicionando uma chave ao nosso objeto "pessoa"
// pessoa.altura = 1.68;

// let pessoa2 = {
//   name: "Amanda",
//   sobreNome: "Silva",
//   sexo: "Feminino",
//   idade: 22,
// };

// // pondo em uma variável a união dos objetos.
// let pessoas = Object.assign(pessoa, pessoa2);
// console.log(pessoas);

// // O object é um método que através dele conseguimos acessar outros métodos para fazer algo.
// // Na linha 27 unimos dois objetos com o método Object.assign

// //Abaixo há outros métodos. Faça o teste
// console.log(Object.keys(pessoa));
// console.log(Object.values(pessoa));

// // Mutação 🧟

// let listObject = [
//   {
//     name: "jeremias",
//     lastName: "Verissimo",
//     years: 20,
//   },
//   {
//     name: "Maria",
//     lastName: "Silva",
//     years: 30,
//   },
// ];

// let copy = listObject;

// delete listObject[0].years;

// console.log(listObject);

// // Alguns métodos do JavaScript
// // ======POP | PUSH============
// let list = [1, 2, 3];
// list.push(4); //adicionar 4 no fim da lista
// list.pop(); //remove o útimo item (4)

// let removidos = list.pop();
// console.log(removidos);

// console.log(list);

// //SHIFT | UNSHIFT

// let letters = ["a", "b", "c"];
// letters.unshift("d");
// letters.shift(); // remove o primeiro da lista (d)
// console.log(letters);

// Slice -
let testeSlice = ["a", "b", "c", "d", "e", "f"];
const subArray = testeSlice.slice(0, 7);
console.log(subArray);

// padStart | padEnd | split

//split transoforma uma string em array, tendo como parâmetro o que as separa como frase
const frase = "Fui a casa do meu amigo e comi batata frita";
console.log(frase.split(" ")); //string de espaçamento que indica espaço entre as palavras

// padStart e padEnd acrescenta caracteres antes e no fim de uma string

const name = "jeremias";
const name1 = name.padStart(10, "@");

console.log(name1.padEnd(11, "@"));

//Split faz o contrário do split, transforma um array em string
// const names = ["Jeremy", "John", "Jackson", "James"];
const itens = ["Mouse", "Keyboard", "Monitor", "Desktop"];
console.log(`Itens a serem comprados: ${itens.join(", ")}`);
