// Função para classificar o jogador com base nas vitórias
function classificarJogador(vitorias, derrotas) {
    // Calcula o saldo de vitórias menos derrotas
    let saldoVitorias = vitorias - derrotas;
    let nivel = "";

    // Estrutura de decisão para classificar o jogador com base nas vitórias
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else if (vitorias >= 101) {
        nivel = "Imortal";
    }

    // Retorna a mensagem com o saldo e o nível
    return `O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}.`;
}

// Função principal para coletar os dados e exibir o resultado
function calcularRank() {
    // Captura os valores de vitórias e derrotas do usuário
    let vitorias = prompt("Digite o número de vitórias:");
    let derrotas = prompt("Digite o número de derrotas:");

    // Converte os valores para números
    vitorias = Number(vitorias);
    derrotas = Number(derrotas);

    // Verifica se os valores são válidos
    if (isNaN(vitorias) || isNaN(derrotas) || vitorias < 0 || derrotas < 0) {
        console.log("Por favor, insira valores válidos de vitórias e derrotas.");
    } else {
        // Chama a função classificarJogador e exibe o resultado
        let resultado = classificarJogador(vitorias, derrotas);
        console.log(resultado);
    }
}

// Chama a função principal para executar o programa
calcularRank();
