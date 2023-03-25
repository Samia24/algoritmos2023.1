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
    const qtd_num = num_iguais(num1, num2, num3)

    // Saída
    console.log(`Dentre os 3 números informados, ${qtd_num} são iguais.`)

}

function obter_numero(descricao){
    const numero = Number(question(descricao))
    return numero
}

function num_iguais(num1, num2, num3){
    let cont = 0
    if (num1 === num2 && num1 === num3){
        cont =+ 3
    }else if (num1 === num2 && num1 !== num3){
        cont =+ 2
    }else if(num1 !== num2 && num1 === num3){
        cont =+ 2
    }else if(num2 === num3 && num2 !== num3){
        cont =+ 2
    }else{
        return cont
    }
    return cont
}

function cabecalho(){
    console.log('####### Q1.lista2 - Leia 3 (três) números, verifique e escreva quantos números \niguais existem entre os números. #######')
    console.log('-------------------')
}

main()