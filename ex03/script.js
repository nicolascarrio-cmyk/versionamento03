let vetor = [];

for (let i = 0; i < 15; i++) {
    let num = parseInt(prompt(`Digite o ${i + 1}º número:`));
    vetor.push(num); 
}


let resultado = `--- Resultado ---\n\nVetor completo: [ ${vetor.join(", ")} ]\n\n`;
resultado += "Posições com múltiplos de 10:\n";

let encontrouMultiplo = false;

for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] % 10 === 0) {
        resultado += `• Posição [${i}] -> Valor: ${vetor[i]}\n`;
        encontrouMultiplo = true;
    }
}

if (!encontrouMultiplo) {
    resultado += "Nenhum múltiplo de 10 foi digitado.";
}

alert(resultado);