const prompt = require('prompt-sync')();

const nome = prompt("Digite o nome completo: ");
const idade = prompt("Digite a idade: ");
const profissao = prompt("Digite a profissão: ");
const cidade = prompt("Digite a cidade onde mora: ");
const email = prompt("Digite o e-mail: ");

const pessoa = {
    nome: nome,
    idade: idade,
    profissao: profissao,
    cidade: cidade,
    email: email
};

console.log("\n--- Formulário de Cadastro ---");
console.log(`> Nome: ${pessoa.nome}`);
console.log(`> Idade: ${pessoa.idade} anos`);
console.log(`> Profissão: ${pessoa.profissao}`);
console.log(`> Cidade: ${pessoa.cidade}`);
console.log(`> E-mail: ${pessoa.email}`);
console.log("------------------------------");