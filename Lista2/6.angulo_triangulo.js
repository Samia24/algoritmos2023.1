/*Q6.lista2 - Leia 3 (três) números (cada número corresponde a um ângulo interno do triângulo), verifique e escreva
se os 3 (três) números formam um triângulo (a soma dos ângulos internos é igual a 180º). Se formam,
verifique se formam um triângulo acutângulo (3 ângulos < 90º), retângulo (1 ângulo = 90º) ou
obtusângulo (1 ângulo > 90º). Não existe ângulo com tamanho 0º (zero grau).*/

import { question } from "readline-sync"

function main(){
    cabecalho()

    // Entrada
    const ang1 = obter_numero('Informe o primeiro ângulo interno de um triângulo: ')
    const ang2 = obter_numero('Informe o segundo ângulo interno de um triângulo: ')
    const ang3 = obter_numero('Informe o terceiro ângulo interno de um triângulo: ')
    
    // Processamento
    const angulo_tri = angulos(ang1, ang2, ang3)

    // Saída
    console.log(` > O triângulo é do tipo ${angulo_tri}. <`)
}

function obter_numero(descricao){
    const numero = Number(question(descricao))
    return numero
}

function angulos(ang1, ang2, ang3){
    let soma = ang1 + ang2 + ang3
    let triangulo = 'acutângulo'
    if(ang1 !== 0 && ang2 !== 0 && ang3 !== 0){
        if(soma === 180){
            console.log(`\n>>> Os ângulos informados se referem a um triângulo.`)
            if (ang1 < 90 && ang2 < 90 && ang3 < 90){
                return triangulo
            }else if(ang1 === 90 || ang2 === 90 || ang3 === 90){
                triangulo = 'retângulo'
                return triangulo
            }else if(ang1 > 90 || ang2 > 90 || ang3 > 90){
                triangulo = 'obtusângulo'
                return triangulo
            }
        }
        }else{
            console.log('\nInforme um ângulo válido!')
        }
    }

function cabecalho(){
    console.log('####### Q6.lista2 - Leia 3 (três) números (cada número corresponde a um ângulo interno do triângulo), verifique e escreva se os 3 (três) números formam um triângulo (a soma dos ângulos internos é igual a 180º). Se formam, verifique se formam um triângulo acutângulo (3 ângulos < 90º), retângulo (1 ângulo = 90º) ou obtusângulo (1 ângulo > 90º). Não existe ângulo com tamanho 0º (zero grau). #######')
    console.log('-------------------')
}

main()