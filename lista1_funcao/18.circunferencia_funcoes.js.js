/*Q18.lista1 - Leia o valor do raio de uma circunferência, 
calcule e escreva seu comprimento.(c = 2 * p * r)*/

import { question } from "readline-sync"

function main(){
    cabecalho()

    //Entrada
    const raio = obter_numero('Informe o valor do raio de uma circunferência: ')
    
    //Processamento
    const circunf = raio_circ(raio)
    
    //Saída
    console.log('\n>>> O comprimento de uma circunferência é', circunf.toFixed(2) + ',', 'quando seu raio é', raio.toFixed(2) + '.')
}

function obter_numero(descricao){
    const numero = Number(question(descricao))
    return numero
}

function raio_circ(raio){
    const circ = 2 * Math.PI * raio
    return circ
}


function cabecalho(){
    console.log('####### Leia o valor do raio de uma circunferência, calcule e escreva seu comprimento.(c = 2 * p * r) #######')
    console.log('-------------------')
}

main()