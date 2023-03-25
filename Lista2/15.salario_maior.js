/*Q15.lista2 - Leia a quantidade de horas aula dadas por dois professores e o valor por hora recebido por cada um.
Escreva na tela qual dos professores tem salário total maior.*/

import { question } from "readline-sync"

function main(){
    cabecalho()

    // Entrada
    const horas1 = obter_numero('Informe a quantidade de horas/aula do primeiro professor: ')
    const valor1 = obter_numero('Informe o valor da hora/aula do primeiro professor: ')
    const horas2 = obter_numero('Informe a quantidade de horas/aula do segundo professor: ')
    const valor2 = obter_numero('Informe o valor da hora/aula do segundo professor: ')
    
    // Processamento
    const salario_maior = salario(horas1, valor1, horas2, valor2)

    //Saída
    console.log(`\n>>> ${salario_maior}`)
}

function obter_numero(descricao){
    const numero = Number(question(descricao))
    return numero
}

function salario(horas1, valor1, horas2, valor2){
    let salario1 = horas1 * valor1
    let salario2 = horas2 * valor2
    let salario_total_maior = salario1
    if (salario2 > salario_total_maior){
        salario_total_maior = salario2
        return `O professor 2 tem salário maior, de R$ ${salario_total_maior.toFixed(2)}.`
    }else{
        salario_total_maior = salario1
        return `O professor 1 tem salário maior, de R$ ${salario_total_maior.toFixed(2)}.`
    }
    
        
}

function cabecalho(){
    console.log('####### Q15.lista2 - Leia a quantidade de horas aula dadas por dois professores e o valor por hora recebido por cada um. Escreva na tela qual dos professores tem salário total maior. #######')
    console.log('-------------------')
}

main()