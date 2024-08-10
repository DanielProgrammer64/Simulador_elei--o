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

const candidato = {
  nome: "",
  votos: 0,
};

const candidatos = [];
let quantidade_de_candidatos;

function Main(C, V) {
  if (C < 2) {
    console.info("Quantidade de candidatos inválida");
    return;
  }

  quantidade_de_candidatos = C - 1;

  if (quantidade_de_candidatos > max) {
    console.info("O número Máximo de candidatos é", max);
    return;
  }

  for (let i = 0; i < quantidade_de_candidatos; i++) {
    candidatos[i].nome = V[i + 1];
    candidatos[i].votos = 0;
  }

  let numero_votos = prompt("Número de Votos: ");

  for (let i = 0; i < numero_votos; i++) {
    nome = prompt("Voto: ");
    if (!Votar(nome)) {
      console.info("Voto inválido");
    }
  }
  Imprimir_vendedor();
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

function Imprimir_vendedor() {
  let maximo_votos = 0;
  for (let i = 0; i < quantidade_de_candidatos; i++) {
    if (candidatos[i].votos > maximo_votos) {
      maximo_votos = candidatos[i].votos;
    }
  }

  for (let i = 0; i < quantidade_de_candidatos; i++) {
    if (candidatos[i].votos === maximo_votos) {
      console.info(candidatos[i].nome);
    }
  }
  return;
}
