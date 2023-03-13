/* Dada a distância da prova (em metros) e a velocidade média do atleta (em km/h), 
calcule o tempo da prova em minutos. */

import { question } from "readline-sync"

function main(){
    cabecalho()

    // Entrada
    const distancia = obter_distancia('Informe a distância em metros: ')
    const velocidade = obter_velocidade('Informe sua velocidade média em quilômetros por hora: ')
    
    
    // Processamento
    const tempo_minutos = tempo(distancia, velocidade)

    //Saída
    console.log(`\n>>> O tempo da prova é de ${tempo_minutos} min.`)}

function obter_distancia(descricao){
    const numero = Number(question(descricao))
    return numero
}

function obter_velocidade(descricao){
    const num = Number(question(descricao))
    return num
}

function tempo(distancia, velocidade){
    let tempo_min = (distancia / (velocidade * 1000)) * 60
    return tempo_min
}

function cabecalho(){
    console.log('####### Cálculo de tempo de prova de corrida ou caminhada #######')
    console.log('-------------------')
}

main()