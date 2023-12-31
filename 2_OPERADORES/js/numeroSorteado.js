let chances = 3;
let tentativas = 0;

let randomNumber = Math.floor(Math.random() * 11);
alert("Bem-vindo ao 'Descubra o número'");
alert(
  "O jogo é simples, será sorteado um número de 0 a 10. Terá de descobrir qual é ele. Boa sorte!"
);

for (tentativas; tentativas < chances; tentativas++) {
  let numeroEscolhido = prompt("Escolha um número: ");
  if (numeroEscolhido > randomNumber) {
    alert("O número escolhido é maior que o número aleatório");
  } else if (numeroEscolhido < randomNumber) {
    alert("O número escolhido é menor que o número aleatório");
  } else {
    alert("Parabéns, você terminou o jogo!");
    break;
  }
}

document.write(`${numeroEscolhido} | ${randomNumber}`);
