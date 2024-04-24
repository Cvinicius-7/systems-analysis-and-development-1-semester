//cadastramento de jogadores
//informar quantos jogadores serão cadastrados
//goleiro,lateral,meia,atacante : previamente preenchido num vetor
//exibir nome e posiçaõ do jogador
//um vetor para os nomes e outro para as posições

function escolhaPosicao() {
  let dominio = ["goleiro", "zagueiro", "meia", "atacante"];

  let posicao;

  do {
    posicao = parseInt(prompt("Digite a posição do jogador: \n 1-Goleiro \n 2-Zagueiro \n 3-Meia \n 4-Atacante"));
  } while (posicao < 1 || posicao > dominio.length);

  return dominio[posicao - 1];
}

function impressao(osJogadores) {
  osJogadores.forEach((func, index) => {

    let salarioLiquido = calculoSalarial(func.salario, func.anoNascimento);  

    alert((index + 1) + "Nome: " + func.nome + " - posição: " + func.posicao + " - salário: " + func.salario + " - salário Líquido: " + salarioLiquido);
  });
}
function calcularBonusPorIdade(aIdade){

    if(aIdade <=20){

    }else if(aIdade >40){

    }else

  return 1;
}
function calcularBonusPorPosicao(){

  return 1;
}
function calcularIdade(oAno){

  const anoAtual = newDate().getFullYear();

  return anoAtual - oAno;
}
function calculoSalarial(oSalario, oAnoNascimento){

  let valorBonusPorPosicao = calcularBonusPorPosicao();

  let idade = calcularIdade(oAnoNascimento);
  let valorBonusPorIdade = calcularBonusPorIdade(idade);


  return oSalario +valorBonusPorIdade + valorBonusPorPosicao
}

const qdeJogador = 3;
let jogadores = [];

for (let i = 0; i < qdeJogador; i++) {

  let nome = prompt("Digite o nome do jogador " + (i + 1) + ":");
  let posicao = escolhaPosicao();
  let camisa = parseInt(prompt("Digite a camisa do jogador " + nome + ":"));
  let anoNascimento = parseInt(prompt("Digite o ano de nascimento do jogador " + nome + ":"));
  let salario = parseFloat(prompt("Digite o salário do jogador " + nome + ":"));

  jogadores.push(
    {
      nome: nome,
      posicao: posicao,
      camisa: camisa,
      anoNascimento: anoNascimento,
      salario: salario
    }
  );
}
impressao(jogadores);