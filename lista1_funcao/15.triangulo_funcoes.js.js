/*Q15.lista1 - Leia o valor da base e altura de um triângulo, 
calcule e escreva sua área. (área=(base * altura))/2*/

import { question } from "readline-sync"

function main(){
    cabecalho()

    //Entrada
    const base = obter_numero('Informe o valor da base de um triângulo: ')
    const altura = obter_numero('Informe o valor da altura de um triângulo: ')

    //Processamento
    const area = area_tri(base, altura)
    
    //Saída
    console.log('\n>>> A área do triângulo é', area + '.')
}

function obter_numero(descricao){
    const numero = Number(question(descricao))
    return numero
}

function area_tri(base, altura){
    const area = (base * altura) / 2
    return area
}


function cabecalho(){
    console.log('####### Leia o valor da base e altura de um triângulo, calcule e escreva sua área. (área=(base * altura))/2 #######')
    console.log('-------------------')
}

main()