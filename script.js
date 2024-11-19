const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function gerarAleatorios(num) {
    if (!num || isNaN(num) || num <= 0) {
        throw Error("Por favor, insira um número válido.");
    }

    const numeros = new Set();

    while (numeros.size < num) {
        let numero = Math.floor(Math.random() * 99) + 1;
        numeros.add(numero);
    }

    console.log(`Números Sorteados: ${[...numeros].join(", ")}`);
}

// Perguntar ao usuário o número pelo terminal
rl.question('Quantos números você quer sortear? ', (input) => {
    try {
        const num = parseInt(input, 10); // Converte a entrada para número
        gerarAleatorios(num); // Chama a função com o número fornecido
    } catch (error) {
        console.error(error.message);
    } finally {
        rl.close(); // Fecha a interface readline
    }
});
