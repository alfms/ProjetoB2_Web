function gerarAleatorios() {
    console.time("Tempo Gasto"); // Inicia a medição do tempo

    var vetor = [];
    var geracoes = [];

    while (vetor.length < 50) { // Altere o número desejado aqui
        var aleatorio = Math.floor(Math.random() * 60) + 1; // Número entre 1 e 60
        geracoes.push(aleatorio);
        if (vetor.includes(aleatorio)) {
            continue;
        }
        vetor.push(aleatorio);
    }

    
    console.log("Gerações:", geracoes);
    console.log("Finais:", vetor);
    console.timeEnd("Tempo Gasto"); // Finaliza a medição do tempo
}

gerarAleatorios(); // Chama a função para gerar os números aleatórios