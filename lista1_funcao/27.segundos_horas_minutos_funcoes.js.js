/*Q27.lista1 - Leia um número inteiro de segundos, calcule e escreva quantas horas, quantos minutos e quantos
segundos ele corresponde.*/

import { question } from "readline-sync"

function main(){
    cabecalho()

    //Entrada
    const segundos = obter_numero('Informe a quantidade de segundos: ')
    
    //Processamento
    const h = horas(segundos)
    const min = minutos(segundos)
    const s = seg(segundos)
    
    //Saída
    console.log('\n>>> '+ segundos.toFixed(1) + ' segundo(s)', 'equivale a', h + 'h', min + 'min', s + 's.' )
}

function obter_numero(descricao){
    const numero = Number(question(descricao))
    return numero
}

function horas(segundos){
    const horas = Math.floor(segundos / 3600)
    return horas
}

function minutos(segundos){
    const resto = segundos % 3600
    const minutos = Math.floor(resto / 60)
    return minutos
}

function seg(resto){
    const seg = resto % 60
    return seg
}

function cabecalho(){
    console.log('####### Leia um número inteiro de segundos, calcule e escreva quantas horas, quantos minutos e quantos segundos ele corresponde. #######')
    console.log('-------------------')
}

main()