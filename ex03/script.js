let idades = []; 

for (let i = 0; i < 7; i++) {
    let idade = parseInt(prompt("Digite a idade da pessoa " + (i + 1) + ":"));
    idades.push(idade);
}

let posicoes = [];
for (let i = 0; i < idades.length; i++) {
    if (idades[i] > 25) {
        posicoes.push(i);
    }
}

if (posicoes.length > 0) {
    alert("As posições das pessoas com mais de 25 anos são: " + posicoes.join(", "));
} else {
    alert("Não há pessoas com mais de 25 anos.");
}