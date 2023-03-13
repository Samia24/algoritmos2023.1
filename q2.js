/*Q2.lista2 - Leia 2 (dois) números, verifique e escreva o menor 
e o maior entre os números lidos.*/

import { question } from "readline-sync"

function main(){
    cabecalho()

    // Entrada
    const num1 = obter_numero('Informe o 1º número: ')
    const num2 = obter_numero('Informe o 2º número: ')

    // Processamento
    const num_maior = maior_menor(num1, num2)

    // Saída
    print(`>>> O maior número é: ${num_maior};\nO menor número é: ${num_maior}.`)
    rodape()
}

function obter_numero(descricao){
    const numero = Number(question(descricao))
    return numero
}

function maior_menor(num1, num2){
    let maior = num1
    let menor = num1
    if (num2 > maior){
        maior = num2
    } else if (num2 < menor){
        menor = num2
    }

}

function cabecalho(){
    console.log('####### Q2.lista2 - Leia 2 (dois) números, verifique e escreva o menor \ne o maior entre os números lidos. #######')
    console.log('-------------------')
}

function rodape(){
    console.log('\n>>>>>>>-------------------<<<<<<<')
    console.log('>>>>>>>-------------------<<<<<<<')
}

function print(conteudo){
    console.log(conteudo)
}

main()