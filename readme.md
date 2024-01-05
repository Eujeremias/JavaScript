# Tópicos de programação com JavaScript

Aqui será tratados alguns tópicos importantes da programação com JavaScript. Bem como funções assíncronas, objetos e arrays e outros.

## Object e Arrays

- Podemos dizer que array é um conjunto de lista, terá vários itens.
  <pre><code>
    let list =[1,2,3,4,5]
  </code></pre>
- Já o object é a descrição desses itens
  <pre><code>
        let list = {
        name:"Jeremias",
        lastName:"Verissimo",
        age:20
    }
  </code></pre>

* E podemos ter sim uma lista de objetos

  <pre>
    <code>
      let person =[
        {
          name:"jeremias",
          lastName:"Verissimo",
          age:19
        }
        {
          name:"Adriano",
          lastName:"Norman",
          age:22
        }
        {
          name:"Henrique",
          lastName:"Gomes",
          age:11
        }
      ]
      </code>
  </pre>

  ## Mutação - Conceito 🧟

  Trata-se quando criamos um objeto em referência a outro. E, portanto, ao alterar essa referência, também irá alterar o o objeto original. A manipulação da referência de objeto também afetará o objeto referenciado. Portanto, cuidado!

  <pre><code>
    let list = [1,2]
    let copyList = list
  
    delete copyList[1] //será deletado o número 2
    console.log(list)//imprimirá [1, undefined]
  </code></pre>

## Mais método de JavaScript

### Pop e Push

    1. Push adiciona um item ao final da lista
    2. Pop retira um item ao final da lista

<pre><code>
    let list = [1,2,3]
    list.push(4)//adicionar 4 no fim da lista
    list.pop //remove o item adicionado (4)
   </code></pre>

O legal é que podemos ver o úlitmo item removido pelo pop. Veja o exemplo:

<pre><code>console.log(list.pop())</code></pre>

## Shif e Unshift

1. Shift remove o primeiro item da lista
2. Unshift adiciona um item primeiro na lista.
   <pre><code>
    let letters = ["a", "b", "c"];
    letters.unshift("d");
    letters.shift(); // remove o primeiro da lista (d)
    console.log(letters);
   </code></pre>

## Slice

<pre><code>

let lista = ["Jeremias", "Henrique", "Leandro", "Luiza"];
// console.log(lista.slice(1)); //retorna os elementos a partir do indice 1 até o final
// console.log(lista.slice(-2)); // retorna dos últimos 2 itens
console.log(lista.slice(1, 2)); // primeiro valor será onde começará a contagem. Já o segundo o último.

</code></pre>

## padStart | padEnd | split

<pre><code>

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
</code></pre>

## Repeat

Retorna uma string n vezes. Sendo n dado em valor

<pre><code>
  let nome = "Jeremias"
  console.log(nome.repeat(4))
</code></pre>

## Infinitos parâmetros

```javascript
const somaInfinita = (...args)=>{
    total = 0
    for(let i = 0; i < args.length; i++>){
      total += args[i]
    }
    return total
  }
  console.log(somaInfinita(5,6,7,8,9))

  // ==========OU=========

const somaInfinita2 = (...args) => {
  total = 0;
  for (num of args) {
    total += num;
  }
  return total;
};
console.log(somaInfinita2(1010, 10, 2, 3, 4));

```

É interessante pegarmos os dados de um usuário e exibir na tela. Para isso precisamos atribuir este valor em uma variável e podemos fazer isso das seguintes formas:

```javascript
let detailsUser = {
  username: "jeremias",
  lastname: "verissimo",
  age: 20,
};

//Maneira convencional
let username = detailsUser.username;

//Usando o descontrutor
let { username, lasname, age } = detailsUser;
console.log(username);
```

Agora vamos desconstruir um array

```javascript
let list = ["Jeremias", "Henrique", "Matheus", "João"];
let nameUsers = [user1, user2, user3, user4];
console.log(user1); //será mostradado o primeiro nome
```
