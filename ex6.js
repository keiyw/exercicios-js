// Exercício 6: Verificação de idade
// Escreva um programa que solicita o ano de nascimento de uma pessoa e verifica se ela é maior de 18 anos. 
// Exiba uma mensagem indicando se a pessoa é maior de idade ou não.
// alert ("Seja bem-vindo")

// let anonascimento = prompt ("Em que ano você nasceu?")
// if (anodenascimento<=2006){
//     alert("Parece que você é maior de idade, parabéns")
// }

let anoNascimento = parseInt(prompt("Digite o ano de nascimento: "))
let anoTotal = new Date(). getFullYear ();

let idade = anoTotal - anoNascimento

if (idade >= 18){
    console.log("Você é maior de idade")
    console.log("Sua idade é " + idade)
}
else {
    console.log("Você é menor de idade")
    console.log("Sua idade é " + idade)
}