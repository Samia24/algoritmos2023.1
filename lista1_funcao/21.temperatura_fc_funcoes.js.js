/*Q21.lista1 - Leia uma temperatura em °F, calcule e 
escreva a equivalente em °C. (t°C = (5 * t°F - 160) / 9).*/

import { question } from "readline-sync"

function main(){
    cabecalho()

    //Entrada
    const temp_f = obter_numero('Informe uma temperatura em graus Fahrenheit: ')
    
    //Processamento
    const temp_c = temperatura_c(temp_f)
    
    //Saída
    console.log('\n>>> A temperatura de', temp_f.toFixed(0) + 'ºF', 'equivale a', temp_c.toFixed(0) + 'ºC.')
}

function obter_numero(descricao){
    const numero = Number(question(descricao))
    return numero
}

function temperatura_c(temp_f){
    const temperatura_c = ((5 * temp_f - 160) / 9)
    return temperatura_c
}


function cabecalho(){
    console.log('####### Leia uma temperatura em °F, calcule e escreva a equivalente em °C. (t°C = (5 * t°F - 160) / 9). #######')
    console.log('-------------------')
}

main()