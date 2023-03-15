/*Q42.lista1 - O custo ao consumidor de um carro novo é a soma do custo de fábrica com a percentagem do
distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que a percentagem do distribuidor
seja de 28% e os impostos de 45%, escreva um algoritmo que leia o custo de fábrica de um carro e
escreva o custo ao consumidor.*/

import { question } from "readline-sync"

function main(){
    cabecalho()

    //Entrada
    const ponto1_x1 = obter_numero('Informe o valor da coordenada x1: ')
    const ponto1_y1 = obter_numero('Informe o valor da coordenada y1: ')

    const ponto2_x2 = obter_numero('Informe o valor da coordenada x2: ')
    const ponto2_y2 = obter_numero('Informe o valor da coordenada y2: ')
    
    //Processamento
    const d = distancia(ponto1_x1, ponto1_y1, ponto2_x2, ponto2_y2)
    
    //Saída
    console.log(`\n>>> A distância entre os pontos um e dois é ${d.toFixed(1)}.`)

}

function obter_numero(descricao){
    const numero = Number(question(descricao))
    return numero
}

function distancia(ponto1_x1, ponto1_y1, ponto2_x2, ponto2_y2){
    const distancia = ((ponto2_x2 - ponto1_x1)**2) + ((ponto2_y2 - ponto1_y1)**2)
    const dist = Math.sqrt(distancia, 1/2)
    return dist
}

function cabecalho(){
    console.log('####### Leia três números inteiros e positivos (A, B, C) e calcule a seguinte expressão: D = R + S / 2, onde R = (A + B)**2 e S = (B + C)**2. #######')
    console.log('-------------------')
}

main()