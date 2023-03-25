/*Q5.lista2 - Leia 3 (três) números e escreva-os em ordem crescente.*/

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
    console.log(`A ordem crescente dos números é ${num_mai}.`)
}

function obter_numero(descricao){
    const numero = Number(question(descricao))
    return numero
}

function maior(num1, num2, num3){
    if (num2 > num1 && num2 < num3){
        return `${num1}, ${num2}, ${num3}`
    } else if (num2 > num1 && num2 > num3 && num3 > num1){
        return `${num1}, ${num3}, ${num2}`
    }else if (num2 > num1 && num2 > num3 && num1 > num3){
        return `${num3}, ${num1}, ${num2}`
    }else if (num1 > num2 && num2 > num3 && num1 > num3){
        return `${num3}, ${num2}, ${num1}`
    }else if(num1 > num2 && num1 > num3 && num3 > num2){
        return `${num2}, ${num3}, ${num1}`
    }else if(num1 > num2 && num3 > num1 && num3 > num2){
        return `${num2}, ${num1}, ${num3}`
    }
}

function cabecalho(){
    console.log('####### Q5.lista2 - Leia 3 (três) números e escreva-os em ordem crescente. #######')
    console.log('-------------------')
}

main()