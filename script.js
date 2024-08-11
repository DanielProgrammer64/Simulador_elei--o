/* 

*Objetivos: 
• Criar um sistema para simular uma eleição utilizando método de pluralidade
• Como primeira entrada deve ser digitado os nomes dos candidatos separados por espaço
• Como segunda entrada deve ser digitado o número de eleitores
• Logo após isso deve ser verificado qual foi o nome mais votado de acordo com o número de eleitores
• E no final o programa deve printar o ganhador da eleição

*/

// primeiro devem-se ser definido as constantes e estruturas

const max = 12; // essa constante serve para limitar o número de candidatos

// definindo o array pra armazenamento de candidatos
let candidatos = [];

// variável que vai estocar a quantidade de candidatos
let quantidade_de_candidatos;

function Main() { // função principal
  let nome_candidatos = prompt("Digite os nomes dos candidatos da eleição separados por espaço: ").split(" "); // variável que recebe cada nome separado por espaço

  quantidade_de_candidatos = nome_candidatos.length; // atribuído à variável quantidade_de_candidatos um índice para cada nome

  if (quantidade_de_candidatos < 2) { // se a quantidade de candidatos for menor que 2
    console.info("Quantidade de candidatos inválida"); // a quantidade se torna inválida
    return;
  }

  if (quantidade_de_candidatos > max) { // se a quantidade de candidatos exceder o limite
    console.info("O número Máximo de candidatos é", max); // a quantidade máxima é mostrada 
    return;
  }

  for (let i = 0; i < quantidade_de_candidatos; i++) { 
    candidatos.push({ nome: nome_candidatos[i], votos: 0 });
  }

  let numero_votos = parseInt(prompt("Número de Votos: "), 10);

  for (let i = 0; i < numero_votos; i++) {
    let nome = prompt("Voto: ");
    if (!Votar(nome)) {
      console.info("Voto inválido");
    }
  }

  Imprimir_vencedor();
}

function Votar(nome) {
  for (let i = 0; i < quantidade_de_candidatos; i++) {
    if (candidatos[i].nome === nome) {
      candidatos[i].votos++;
      return true;
    }
  }
  return false;
}

function Imprimir_vencedor() {
  let maximo_votos = 0;
  let vencedores = [];

  for (let i = 0; i < quantidade_de_candidatos; i++) {
    if (candidatos[i].votos > maximo_votos) {
      maximo_votos = candidatos[i].votos;
    }
  }

  for (let i = 0; i < quantidade_de_candidatos; i++) {
    if (candidatos[i].votos === maximo_votos) {
      vencedores.push(candidatos[i].nome);
    }
  }
  console.info("O(s) vencedor(es) é(são): ", vencedores.join("; "));
  console.info("Candidatos e votos: ");
  for (let i = 0; i < quantidade_de_candidatos; i++) {
    console.info(`${candidatos[i].nome}: ${candidatos[i].votos}`);
  }
}

Main();
