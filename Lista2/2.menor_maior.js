/*Q2.lista2 - Leia 2 (dois) números, verifique e escreva o menor 
e o maior entre os números lidos.*/

import { question } from "readline-sync"

function main(){
    cabecalho()

    // Entrada
    const num1 = obter_numero('Informe o 1º número: ')
    const num2 = obter_numero('Informe o 2º número: ')

    // Processamento
    const num_mai_men = maior_menor(num1, num2)

    // Saída
    console.log(num_mai_men)
}

function obter_numero(descricao){
    const numero = Number(question(descricao))
    return numero
}

function maior_menor(num1, num2){
    let maior = num1
    let menor = num1
    if (num2 > maior){
        let maior = num2
        return `\n>>> O maior número é: ${maior};\nO menor número é: ${menor}.`
    } else{
        let menor = num2
        return `>>> O maior número é: ${maior};\nO menor número é: ${menor}.`
    }
    
}

function cabecalho(){
    console.log('####### Q2.lista2 - Leia 2 (dois) números, verifique e escreva o menor \ne o maior entre os números lidos. #######')
    console.log('-------------------')
}

main()