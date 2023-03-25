/*Q29.lista2 - Um número é um quadrado perfeito quando a raiz quadrada do número é igual à soma das dezenas
formadas pelos seus dois primeiros e dois últimos dígitos.
Exemplo: √9801 = 99 = 98 + 01. O número 9801 é um quadrado perfeito.
Escreva um algoritmo que leia um número de 4 dígitos e verifique se ele é um quadrado perfeito.*/

import { question } from "readline-sync"

function main(){
    cabecalho()

    // Entrada
    const num = obter_numero('Digite um número com 4 dígitos: ')
        
    // Processamento
    const result = quadrado_perfeito(num)
    

    // Saída
    console.log(`\n>>> ${result}`)
        
}

function obter_numero(descricao){
    const numero = Number(question(descricao))
    return numero
}

function quadrado_perfeito(num){
    let num_ini = Math.trunc(num / 100)
    let num_fin = num % 100
    let raiz = Math.sqrt(num)
    let soma = num_ini + num_fin

    if (raiz === soma){
        return `O número ${num} é um QUADRADO PERFEITO.`
    }else{
        return `O número ${num} NÃO é um QUADRADO PERFEITO.`
    }
}
        
function cabecalho(){
    console.log('####### Q29.lista2 - Um número é um quadrado perfeito quando a raiz quadrada do número é igual à soma das dezenas formadas pelos seus dois primeiros e dois últimos dígitos. Exemplo: √9801 = 99 = 98 + 01. O número 9801 é um quadrado perfeito. Escreva um algoritmo que leia um número de 4 dígitos e verifique se ele é um quadrado perfeito. #######')
    console.log('-------------------')
}

main()