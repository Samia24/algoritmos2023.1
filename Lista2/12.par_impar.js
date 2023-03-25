/*Q12.lista2 - Leia 1 (um) número inteiro e escreva se este número é par ou impar.*/

import { question } from "readline-sync"

function main(){
    cabecalho()

    // Entrada
    const num = obter_numero('Digite um número: ')
    
    
    // Processamento
    const par_impar = num_par_impar(num)
    
    // Saída
    if (num){
        if (par_impar){
            console.log(`\n>>> O número ${num} é ${par_impar}.`)
        }
    }else{
       console.log('\n>>> Informe apenas números !')
    }
    
        
}

function obter_numero(descricao){
    const numero = Number(question(descricao))
    return numero
}

function num_par_impar(num){
    if (num % 2 === 0){
        return 'par'
    }else{
        return 'ímpar'
    }
}
    
function cabecalho(){
    console.log('####### Q12.lista2 - Leia 1 (um) número inteiro e escreva se este número é par ou impar. #######')
    console.log('-------------------')
}

main()