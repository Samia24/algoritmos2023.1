/*Q33.lista1 - Leia um número inteiro (3 dígitos), calcule e escreva a soma do número com seu inverso.
(Ex.: número = 532 ; inverso = 235 ; soma = 532 + 235 = 767).*/

import { question } from "readline-sync"

function main(){
    cabecalho()

    //Entrada
    const num = obter_numero('Informe um número inteiro de 3 dígitos: ')
    
    //Processamento
    const uni = unidade(num)
    const dez = dezena(num, uni)
    const cent = centena(num)
    const inv = inverso(uni, dez, cent)
    const soma_inverso = soma(num, inv)
    
    //Saída
    console.log(`\n>>> O inverso de ${num} é ${inv} e a soma desses números é ${soma_inverso}.`)
}

function obter_numero(descricao){
    const numero = Number(question(descricao))
    return numero
}

function unidade(num){
    const unidade = num % 10
    return unidade
}

function dezena(num, uni){
    const dezena = ((num % 100) - (uni % 10)) / 10
    return dezena
}

function centena(num){
    const centena = ((num % 1000) - (num % 100)) / 100
    return centena
}

function inverso(uni, dez, cent){
    const inverso = (uni * 100) + (dez * 10) + cent
    return inverso
}

function soma(num, inv){
    const soma = num + inv
    return soma
}

function cabecalho(){
    console.log('####### Leia um número inteiro (3 dígitos), calcule e escreva a soma do número com seu inverso. (Ex.: número = 532 ; inverso = 235 ; soma = 532 + 235 = 767). #######')
    console.log('-------------------')
}

main()