/*Q30.lista2 - Existem números de 4 dígitos (entre 1000 e 9999) que obedecem à seguinte característica: se dividirmos
o número em dois números de dois dígitos, um composto pela dezena e pela unidade, e outro pelo
milhar e pela centena, se somarmos estes dois novos números gerando um terceiro, o quadrado deste
terceiro número é exatamente o número original de quatro dígitos. Por exemplo:
2025 -> dividindo: 20 e 25 -> somando temos 45 -> 452 = 2025.*/

import { question } from "readline-sync"

function main(){
    cabecalho()

    // Entrada
    const num = obter_numero('Digite um número com 4 dígitos: ')
        
    // Processamento
    const result = resultado(num)
    

    // Saída
    console.log(`\n>>> ${result}`)
        
}

function obter_numero(descricao){
    const numero = Number(question(descricao))
    return numero
}

function resultado(num){
    let num_ini = Math.trunc(num / 100)
    let num_fin = num % 100
    let soma = num_ini + num_fin
    let quadrado = soma ** 2

    if (num === quadrado){
        return `O número ${num} quando separado em: \nMilhar e centena -> ${num_ini};\nE dezena e unidade -> ${num_fin};\n Ao somar-se ${num_ini} + ${num_fin} (soma = ${soma}) e elevar essa soma ao quadrado,\n O resultado é >> ${quadrado}, que é o mesmo valor inicial.`
    }else{
        return `O número ${num} não satisfaz essa condição !`
    }
}
        
function cabecalho(){
    console.log('####### Q30.lista2 - Existem números de 4 dígitos (entre 1000 e 9999) que obedecem à seguinte característica: se dividirmos o número em dois números de dois dígitos, um composto pela dezena e pela unidade, e  outro pelo milhar e pela centena, se somarmos estes dois novos números gerando um terceiro, o quadrado deste terceiro número é exatamente o número original de quatro dígitos. Por exemplo: 2025 -> dividindo: 20 e 25 -> somando temos 45  -> 452 = 2025. #######')
    console.log('-------------------')
}

main()