/*Q3.lista1 - Leia um valor em minutos, calcule e escreva 
o equivalente em horas e minutos.*/

import { question } from "readline-sync"

function main(){
    cabecalho()

    //Entrada
    const minutos = obter_numero('Informe os minutos: ')

    //Processamento
    const h = horas(minutos)
    const min = resto_min(minutos)

    //Saída
    console.log('\n>>>', minutos + 'min', 'equivalem à', h + 'h' + min + 'min.\n')
}

function obter_numero(descricao){
    const minutos = Number(question(descricao))
    return minutos
}


//Processamento
function horas(minutos){
    const horas = Math.floor(minutos / 60)
    return horas
}

function resto_min(minutos){
    const resto = minutos % 60
    return resto
}

function cabecalho(){
    console.log('####### Leia um valor em minutos, calcule e escreva o equivalente em horas e minutos. #######')
    console.log('-------------------')
}

main()