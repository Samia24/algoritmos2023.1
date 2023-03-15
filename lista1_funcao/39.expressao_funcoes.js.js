/*Q39.lista1 - Leia três números inteiros e positivos (A, B, C) e calcule a 
seguinte expressão: D = R + S / 2, onde R = (A + B)**2 e S = (B + C)**2.*/

import { question } from "readline-sync"

function main(){
    cabecalho()

    //Entrada
    const num1 = obter_numero('Informe o primeiro número: ')
    const num2 = obter_numero('Informe o segundo número: ')
    const num3 = obter_numero('Informe o terceiro número: ')
    
    //Processamento
    const d = calc_d(num1, num2, num3)
    
    //Saída
    console.log(`\n>>> O resultado da expressão D = R + S / 2 é : ${d.toFixed(1)}.`)

}

function obter_numero(descricao){
    const numero = Number(question(descricao))
    return numero
}

function calc_d(num1, num2, num3){
    const r = (num1 + num2)**2
    const s = (num2 + num3)**2
    const calc_d = (r + s) / 2
    return calc_d
}

function cabecalho(){
    console.log('####### Leia três números inteiros e positivos (A, B, C) e calcule a seguinte expressão: D = R + S / 2, onde R = (A + B)**2 e S = (B + C)**2. #######')
    console.log('-------------------')
}

main()