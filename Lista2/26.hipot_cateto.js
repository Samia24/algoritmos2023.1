/*Q26.lista2 - Leia os 3 (três) lados de um triângulo e identifique sua hipotenusa e seus catetos.*/

import { question } from "readline-sync"

function main(){
    cabecalho()

    // Entrada
    const lado1 = obter_numero('Informe o valor do primeiro lado do triângulo retângulo: ')
    const lado2 = obter_numero('Informe o valor do segundo lado do triângulo retângulo: ')
    const lado3 = obter_numero('Informe o valor do terceiro lado do triângulo retângulo: ')
        
    // Processamento
    const result = lados(lado1, lado2, lado3)
    

    // Saída
    console.log(`\n>>> ${result}`)
        
}

function obter_numero(descricao){
    const numero = Number(question(descricao))
    return numero
}

function lados(lado1, lado2, lado3){
    if (lado1 === Math.sqrt((lado2 ** 2) + (lado3 ** 2))){
        return `O lado 1 que é ${lado1}cm, é a HIPOTENUSA.\n E os lados 2 e 3, ${lado2}cm e ${lado3}cm respectivamente, são os catetos.`
    }else if (lado2 === Math.sqrt((lado1 ** 2) + (lado3 ** 2))){
        return `O lado 2 que é ${lado2}cm, é a HIPOTENUSA.\n E os lados 1 e 3, ${lado1}cm e ${lado3}cm respectivamente, são os catetos.`
    }else if (lado3 === Math.sqrt((lado1 ** 2) + (lado2 ** 2))){
        return `O lado 3 que é ${lado3}cm, é a HIPOTENUSA.\n E os lados 1 e 2, ${lado1}cm e ${lado2}cm respectivamente, são os catetos.`
    }
}
        
function cabecalho(){
    console.log('####### Q26.lista2 - Leia os 3 (três) lados de um triângulo e identifique sua hipotenusa e seus catetos. #######')
    console.log('-------------------')
}

main()