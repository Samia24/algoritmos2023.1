/*Q4.lista2 - Leia 1 (um) número de 2 (dois) dígitos, verifique e escreva se o algarismo da dezena é igual ou diferente
do algarismo da unidade.*/

import { question } from "readline-sync"

function main(){
    cabecalho()

    // Entrada
    const num = obter_numero('Informe um número com 2 dígitos: ')
    
    // Processamento
    const alg_dif = dez_uni(num)

    // Saída
    console.log(alg_dif)
}

function obter_numero(descricao){
    const numero = Number(question(descricao))
    return numero
}

function dez_uni(num){
    let dezena = Math.floor(num / 10)
    let unidade = num % 10
    let algarismos = 'a'

    if (dezena === unidade){
        algarismos = 'iguais'
    } else{
        algarismos = 'diferentes'
    }
    return `\n>>> Os algarismos da dezena (${dezena}) e unidade (${unidade}) são ${algarismos}.`
    
}

function cabecalho(){
    console.log('####### Q4.lista2 - Leia 1 (um) número de 2 (dois) dígitos, verifique e escreva se o algarismo da dezena é igual ou diferente do algarismo da unidade. #######')
    console.log('-------------------')
}

main()