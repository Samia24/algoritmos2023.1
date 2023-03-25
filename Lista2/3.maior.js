/*Q3.lista2 - Leia 3 (três) números, verifique e escreva o maior entre os números lidos.*/

import { question } from "readline-sync"

function main(){
    cabecalho()

    // Entrada
    const num1 = obter_numero('Informe o 1º número: ')
    const num2 = obter_numero('Informe o 2º número: ')
    const num3 = obter_numero('Informe o 3º número: ')

    // Processamento
    const num_mai = maior(num1, num2, num3)

    // Saída
    console.log(num_mai)
}

function obter_numero(descricao){
    const numero = Number(question(descricao))
    return numero
}

function maior(num1, num2, num3){
    let maior = num1
    if (num2 > maior){
        maior = num2
    } else if (num3 > maior){
        maior = num3
    }
    return `\n>>> O maior número é: ${maior}.`
    
}

function cabecalho(){
    console.log('####### Q3.lista2 - Leia 3 (três) números, verifique e escreva o maior entre os números lidos. #######')
    console.log('-------------------')
}

main()