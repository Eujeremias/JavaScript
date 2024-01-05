function Animal(name, raca) {
  this.name = name;
  this.raca = raca;
}
const animal01 = new Animal("Pretinha", "vira-lata");
console.log(animal01);

Animal.prototype.uivar = function () {
  console.log("Auuuuu!");
};
console.log(animal01.uivar());

console.log((Animal.prototype.idade = 5));

class Pessoa {
  constructor(nome, idade, altura) {
    this.name = nome;
    this.idade = idade;
    this.altura = altura;
  }
  correr(distancia) {
    console.log(`Percorreu ${distancia}Km`);
  }
  falar(palavra) {
    console.log(`Você falou ${palavra}`);
  }
}

class Aviao {
  constructor(marca, turbina) {
    this.marca = marca;
    this.turbina = turbina;
  }
}
// Symbol -> colocar valores definido no prototype
//
const asas = Symbol();
const piloto = Symbol();

Aviao.prototype[asas] = 2;
Aviao.prototype[piloto] = 4;

console.log((Aviao.prototype[asas] = 2));
console.log((Aviao.prototype[piloto] = 4));

const boeing = new Aviao("Boeing", 10);
console.log(boeing[asas]);

// function Pessoa(nome, idade) {
//   this.nome = nome;
//   this.idade = idade;
//   this.mostrarNome = function () {
//     console.log(this.nome);
//   };
// }
// const pessoa01 = new Pessoa("João", 25);
// pessoa01.mostrarNome();
// const pessoa02 = new Pessoa("Jeremias", 20)

class Post {
  constructor(titulo, descricao, tags) {
    this.titulo = titulo;
    this.descricao = descricao;
    this.tags = tags;
  }

  get mostrarTitulo() {
    return `Título: ${this.titulo}`;
  }

  set adicionarTags(tags) {
    const tagsArray = tags.split(", "); // As tags serão recebidas como string. O método split converte string para array.
    return (this.tags = tagsArray);
  }
}

const post1 = new Post("Carro do ano", "Carro inova com sua otimização de ");
console.log(post1.mostrarTitulo);
post1.adicionarTags = "programação, javascript, iniciante, codar";
console.log(post1);

//Herança

class Mamifero {
  constructor(patas, nome) {
    this.patas = patas;
    this.nome = nome;
  }
}

class Cachorro extends Mamifero {
  constructor(patas, nome) {
    super(patas, nome);
  }
}

const bob = new Cachorro(4, "Bob");
console.log(bob);

console.log(bob instanceof Post);

//Tratanto erros

// throw error -> indica, de fato, que há um erro no código e impede a impede a continuação do código
// let x = 10;
// if (x != 11) {
//   throw new Error("O valor de x é diferente de 11");
// }

function checkNumber(num) {
  if (isNaN(num) == false) {
    console.log(`Aqui está os número passados: ${num}`);
  } else {
    throw new Error("O valor passado precisa ser um número");
  }
}

checkNumber("2");

//setTimout
