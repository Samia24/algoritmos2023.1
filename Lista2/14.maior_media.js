/*Q14.lista2 - Leia 5 (cinco) números inteiros, calcule a sua média e escreva os que são maiores que a média.*/

import { question } from "readline-sync"

function main(){
    cabecalho()

    // Entrada
    const num1 = obter_numero('Digite 5 números diferentes. \nInforme o 1º número: ')
    const num2 = obter_numero('Informe o 2º número: ')
    const num3 = obter_numero('Informe o 3º número: ')
    const num4 = obter_numero('Informe o 4º número: ')
    const num5 = obter_numero('Informe o 5º número: ')

    // Processamento
    const maior_med = maior_media(num1, num2, num3, num4, num5)

}

function obter_numero(descricao){
    const numero = Number(question(descricao))
    return numero
}

function maior_media(num1, num2, num3, num4, num5){
    const qtd_num = 5
    let media_num = (num1 + num2 + num3 + num4 + num5)/qtd_num
    console.log(`\n>>> A média dos números é ${media_num}.`)

    if (num1 > media_num){
        console.log(`O valor ${num1} é maior que a média.`)
    }if (num2 > media_num){
        console.log(`O valor ${num2} é maior que a média.`)
    }if (num3 > media_num){
        console.log(`O valor ${num3} é maior que a média.`)
    }if (num4 > media_num){
        console.log(`O valor ${num4} é maior que a média.`)
    }if (num5 > media_num){
        console.log(`O valor ${num5} é maior que a média.`)
    }
    
        
}

function cabecalho(){
    console.log('####### Q14.lista2 - Leia 5 (cinco) números inteiros, calcule a sua média e escreva os que são maiores que a média. #######')
    console.log('-------------------')
}

main()