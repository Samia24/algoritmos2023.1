/*Q7.lista2 - Leia 3 (três) números (cada número corresponde a um lado do triângulo), verifique e escreva se os 3 (três) números formam um triângulo (a soma de dois lados não pode ser menor que o terceiro lado). Se formam, verifique se formam um triângulo equilátero (3 lados iguais), isósceles (2 lados iguais) ou escaleno (3 lados diferentes). Não existe lado com tamanho 0 (zero).*/

import { question } from "readline-sync"

function main(){
    cabecalho()

    // Entrada
    const lado1 = obter_numero('Informe o valor do primeiro lado de um triângulo: ')
    const lado2 = obter_numero('Informe o valor do segundo lado de um triângulo: ')
    const lado3 = obter_numero('Informe o valor do terceiro lado de um triângulo: ')
    
    // Processamento
    const lado_tri = lados(lado1, lado2, lado3)
    const soma_lado = soma(lado1, lado2, lado3)

    // Saída
    console.log(`\n>>> ${soma_lado}`)
    console.log(`>> O triângulo é do tipo ${lado_tri}.`)
    
    
}

function obter_numero(descricao){
    const numero = Number(question(descricao))
    return numero
}

function soma(lado1, lado2, lado3){
    let soma1 = lado1 + lado2
    if (soma1 > lado3){
        return `\nOs lados informados correspondem à um triângulo.`
    }else{
        return '\nOs lados informados não correspondem à um triângulo'
    }
}

function lados(lado1, lado2, lado3){
    let triangulo = 'equilátero'
    if (soma(lado1, lado2, lado3)){
        if (lado1 === lado2 && lado1 === lado3){
            return triangulo
        }else if (lado1 === lado2 && lado1 !== lado3 || lado1 === lado3 && lado1 !== lado2 || lado2 === lado3 && lado2 !== lado1){
            triangulo = 'isóceles'
            return triangulo
        }else{
            triangulo = 'escaleno'
            return triangulo
        }
    }else{
        return '<<<'
    }
    
}
    
function cabecalho(){
    console.log('####### Q7.lista2 - Leia 3 (três) números (cada número corresponde a um lado do triângulo), verifique e escreva se os 3 (três) números formam um triângulo (a soma de dois lados não pode ser menor que o terceiro lado). Se formam, verifique se formam um triângulo equilátero (3 lados iguais), isósceles (2 lados iguais) ou escaleno (3 lados diferentes). Não existe lado com tamanho 0 (zero). #######')
    console.log('-------------------')
}

main()