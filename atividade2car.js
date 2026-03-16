const prompt = require('prompt-sync')();

const marca = prompt("Digite a marca do carro: ");
const modelo = prompt("Digite o modelo do carro: ");
const motor = prompt("Digite o motor: ");
const cor = prompt("Digite a cor: ");
const ano = prompt("Digite o ano: ");

const carro = {
    marca: marca,
    modelo: modelo,
    motor: motor,
    cor: cor,
    ano: ano
};

console.log("\n--- Dados do Veículo ---");
console.log(`* Marca: ${carro.marca}`);
console.log(`* Modelo: ${carro.modelo}`);
console.log(`* Motor: ${carro.motor}`);
console.log(`* Cor: ${carro.cor}`);
console.log(`* Ano: ${carro.ano}`);
console.log("------------------------");
