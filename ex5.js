// Exercício 5: Verificação de números em ordem crescente
// Escreva um programa que solicita três números ao usuário e verifica se eles estão em ordem crescente. 
// Exibindo uma mensagem indicando se os números estão em ordem crescente ou não.

alert ("Seja bem vindo ao calculador de ordem crescente e decrescente")

let numero1 = parseFloat(prompt("Digite um número: "))
let numero2 = parseFloat(prompt("Digite um número: "))
let numero3 = parseFloat(prompt("Digite um número: "))

if  (numero1>=numero2 & numero3){
    alert("Seus números estão em ordem decrescente")
} else {
    alert("Seus números estão em ordem crescente")
}