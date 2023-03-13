/*"Calculadora de Água" 
Crie um programa que receba o peso e a atividade física diária de uma pessoa e calcule 
a quantidade de água que ela deve beber por dia. A quantidade de água recomendada é 
de 35 ml por quilo de peso para pessoas com atividade física moderada, e 45 ml por quilo 
de peso para pessoas com atividade física intensa. O resultado do cálculo deve ser exibido na tela. 
Nome do arquivo: calculadora_agua.js*/

import { question } from "readline-sync"

function main(){
    cabecalho()

    // Entrada
    const peso = obter_numero('Informe seu peso: ')
    const atv_fisica = tipo_atv('Informe a intensidade da atividade física que você pratica (moderada ou intensa): ')
    
    // Processamento
    const vol_agua = agua(peso, atv_fisica)

    //Saída
    console.log(`\n>>> A quantidade de água recomendada para quem pratica atividade física ${atv_fisica} é de ${vol_agua} mL por dia.`)
}

function obter_numero(descricao){
    const numero = Number(question(descricao))
    return numero
}

function tipo_atv(desc){
    const atv = question(desc)
    return atv
}

function agua(peso, atv_fisica){
    if (atv_fisica == 'moderada'){
        return (peso * 35)
    } else if (atv_fisica == 'intensa'){
        return (peso * 45)
    }
}


function cabecalho(){
    console.log('####### Crie um programa que receba o peso e a atividade física diária de uma pessoa e calcule a quantidade de água que ela deve beber por dia. A quantidade de água recomendada é de 35 ml por quilo de peso para pessoas com atividade física moderada, e 45 ml por quilo de peso para pessoas com atividade física intensa. O resultado do cálculo deve ser exibido na tela. Nome do arquivo: calculadora_agua.js #######')
    console.log('-------------------')
}

main()