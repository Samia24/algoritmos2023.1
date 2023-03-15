/*Q12.lista1 - Leia o salário de um trabalhador e escreva seu novo salário 
 com um aumento de 25%.*/

import { question } from "readline-sync"

function main(){
    cabecalho()

    //Entrada
    const salario = obter_numero('Salário R$: ')
    const percentual = obter_numero('Aumento %: ')

    //Processamento
    const aumento = aumento_sal(salario, percentual)
    const novo_salario = nv_salario(salario, aumento)
  
    //Saída
    console.log('\n>> Novo salário R$', novo_salario.toFixed(2), '\n>>>> Aumento de R$', aumento.toFixed(2) + '.')
}

function obter_numero(descricao){
    const numero = Number(question(descricao))
    return numero
}

function aumento_sal(salario, percentual){
    const aumento = (salario/100) * percentual
    return aumento
}

function nv_salario(salario, aumento_sal){
    const novo_salario = salario + aumento_sal
    return novo_salario
}

function cabecalho(){
    console.log('####### Leia o salário de um trabalhador e escreva seu novo salário com um aumento de 25%. #######')
    console.log('-------------------')
}

main()