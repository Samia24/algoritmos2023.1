/*Q30.lista1 - Leia um número inteiro de minutos, calcule e escreva quantos dias, quantas horas e quantos minutos ele
corresponde.*/

import { question } from "readline-sync"

function main(){
    cabecalho()

    //Entrada
    const minutos = obter_numero('Informe a quantidade de minutos: ')
    
    //Processamento
    const dias = d(minutos)
    const horas = h(minutos)
    const min = minut(minutos)
    
    //Saída
    console.log('\n>>> ', minutos, 'minuto(s)', 'equivale a', dias, 'dias,', horas, 'horas e', min, 'minutos.')
}

function obter_numero(descricao){
    const numero = Number(question(descricao))
    return numero
}

function d(minutos){
    const d = Math.floor(minutos / 1440)
    return d
}

function h(minutos){
    const resto = minutos % 1440
    const h = Math.floor(resto / 60)
    return h
}

function minut(minutos){
    const resto = minutos % 1440
    const minut = resto % 60
    return minut
}

function cabecalho(){
    console.log('####### Leia um número inteiro de minutos, calcule e escreva quantos dias, quantas horas e quantos minutos ele corresponde.#######')
    console.log('-------------------')
}

main()