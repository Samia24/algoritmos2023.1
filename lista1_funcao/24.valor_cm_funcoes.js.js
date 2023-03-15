/*Q24.lista1 - Leia um valor em m, calcule e escreva o equivalente em cm.*/

import { question } from "readline-sync"

function main(){
    cabecalho()

    //Entrada
    const m = obter_numero('Informe um valor em metros: ')
    
    //Processamento
    const cm = centimetros(m)
    
    //Saída
    console.log('\n>>> '+ m.toFixed(0) + ' metro(s)', 'equivale a', cm.toFixed(0) + ' centímetros.')
}

function obter_numero(descricao){
    const numero = Number(question(descricao))
    return numero
}

function centimetros(m){
    const cent = m * 100
    return cent
}


function cabecalho(){
    console.log('####### Leia um valor em m, calcule e escreva o equivalente em cm. #######')
    console.log('-------------------')
}

main()