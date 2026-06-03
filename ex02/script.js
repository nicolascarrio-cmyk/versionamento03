let idades = [];
let posicoes = [];

// 1. Lê as 7 idades
for (let i = 0; i < 7; i++) {
    idades.push(parseInt(prompt(`Idade da pessoa ${i + 1}:`)));
}

// 2. Guarda as posições maiores que 25
for (let i = 0; i < 7; i++) {
    if (idades[i] > 25) {
        posicoes.push(i);
    }
}

// 3. Mostra o resultado
if (posicoes.length > 0) {
    alert("Posições com mais de 25 anos: " + posicoes.join(", "));
} else {
    alert("Ninguém tem mais de 25 anos.");
}