let idades = [];
let soma = 0;
for (let i = 0; i < 8; i++) {
    let idade = parseInt(prompt("Digite a idade da pessoa " + (i + 1) + ":"));
    idades.push(idade);
    soma += idade;
}
let media = soma / idades.length;
alert("A média de idade das pessoas cadastradas é: " + media.toFixed(2));

