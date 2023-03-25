/*Q25.lista2 - Verifique a validade de uma senha fornecida pelo usuário. A senha é 1234. O algoritmo deve escrever
uma mensagem de permissão de acesso ou não.*/

import { question } from "readline-sync"

function main(){
    cabecalho()

    // Entrada
    const num1 = obter_numero('Informe a senha numérica de 4 dígitos. \nInforme o primeiro dígito: ')
    const num2 = obter_numero('Informe o segundo dígito: ')
    const num3 = obter_numero('Informe o terceiro dígito: ')
    const num4 = obter_numero('Informe o quarto dígito: ')
        
    // Processamento
    const result = senha(num1, num2, num3, num4)
    

    // Saída
    console.log(`\n>>> ${result}`)
        
}

function obter_numero(descricao){
    const numero = Number(question(descricao))
    return numero
}

function senha(num1, num2, num3, num4){
    if (num1 === 1 && num2 === 2 && num3 === 3 && num4 === 4){
        return `A senha informada foi ${num1}${num2}${num3}${num4}. \n ACESSO PERMITIDO !`
    }else{
        return `A senha informada ${num1}${num2}${num3}${num4} está incorreta. \n ACESSO NEGADO !`
    }
}
        
function cabecalho(){
    console.log('####### Q25.lista2 - Verifique a validade de uma senha fornecida pelo usuário. A senha é 1234. O algoritmo deve escrever uma mensagem de permissão de acesso ou não. #######')
    console.log('-------------------')
}

main()