/*Q9.lista2 - Leia 1 (um) número entre 0 e 100, verifique e escreva se o número é ou não primo.*/

import { question } from "readline-sync"

function main(){
    cabecalho()

    // Entrada
    const num = obter_numero('Digite um número entre 0 e 100: ')
    
    
    // Processamento
    const numero = numero_primo(num)
    

    // Saída
    console.log(`\n>>> ${numero}`)
        
}

function obter_numero(descricao){
    const numero = Number(question(descricao))
    return numero
}

function numero_primo(num){
    if (num > 1 && num <= 100){
        if (num === 2 || num === 3 || num === 5 || num === 7){
            return `O número ${num} é primo.`
        }else if (num % 1 === 0 && num % num === 0 && num % 2 !== 0 && num % 3 !== 0 && num % 5 !== 0 && num % 7 !== 0){
                return `O número ${num} é primo.`
        }else{
            return `O número ${num} não é primo.`
        }
    }else{
        return 'Informe um número entre 2 e 100.'
    }
}
    
function cabecalho(){
    console.log('####### Q9.lista2 - Leia 1 (um) número entre 0 e 100, verifique e escreva se o número é ou não primo. #######')
    console.log('-------------------')
}

main()