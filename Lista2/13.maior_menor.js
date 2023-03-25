/*Q13.lista2 - Leia 5 (cinco) números inteiros e escreva o maior e o menor deles. Considere que todos os 
valores são diferentes.*/

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
    const num_mai_men = maior_menor(num1, num2, num3, num4, num5)

    // Saída
    console.log(num_mai_men)
}

function obter_numero(descricao){
    const numero = Number(question(descricao))
    return numero
}

function maior_menor(num1, num2, num3, num4, num5){
    let maior = num1
    let menor = num1
    if (num1 !== num2 && num1 !== num3 && num1 !== num4 && num1 !== num5 && num2 !== num3 && num2 !== num4 && num2 !== num5 && num3 !== num4 && num3 !== num5 && num4 !== num5){
        if (num2 > maior){
            maior = num2
        }if (num3 > maior){
            maior = num3
        }if (num4 > maior){
            maior = num4
        }if (num5 > maior){
            maior = num5
        }if (num2 < menor){
            menor = num2
        }if (num3 < menor){
            menor = num3
        }if (num4 < menor){
            menor = num4
        }if (num4 < menor){
            menor = num5
        }
    return `\n>>> O maior número é: ${maior};\n>>> O menor número é: ${menor}.`
    }else{
        return '\n Informe números diferentes !'
    }
}

function cabecalho(){
    console.log('####### Q13.lista2 - Leia 5 (cinco) números inteiros e escreva o maior e o menor deles. Considere que todos os valores são diferentes. #######')
    console.log('-------------------')
}

main()