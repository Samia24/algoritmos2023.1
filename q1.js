/*Q1.lista2 - Leia 3 (três) números, verifique e escreva quantos números 
iguais existem entre os números.*/

import { question } from "readline-sync"

function main(){
    cabecalho()

    // Entrada
    const num1 = obter_numero('Informe o 1º número: ')
    const num2 = obter_numero('Informe o 2º número: ')
    const num3 = obter_numero('Informe o 3º número: ')
    
    // Processamento
    const cont = num_iguais(num1, num2, num3)

    // Saída
    print(`Seu IMC é ${imc.toFixed(2)}`)
    rodape()
}

function obter_numero(descricao){
    const numero = Number(question(descricao))
    return numero
}

function num_iguais(num1, num2, num3){
    if (num1 == num2 == num3){
        let contador = 3
    } else{
        let contador = 0
    }
    if (num1 == num2){
        let contador = 1
        if (num1 = num3){
            let contador = 2
        }
    } else if (num2 == num3){
        
    }
}

function cabecalho(){
    console.log('####### Q1.lista2 - Leia 3 (três) números, verifique e escreva quantos números \niguais existem entre os números. #######')
    console.log('-------------------')
}

function rodape(){
    console.log()
    console.log('>>>>>>>-------------------<<<<<<<')
    console.log('>>>>>>>-------------------<<<<<<<')
}

function print(conteudo){
    console.log(conteudo)
}

main()