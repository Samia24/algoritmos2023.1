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
    const vol_agua_moderada = agua_mod(peso)
    const vol_agua_intensa = agua_int(peso)

    //Saída
    console.log(`\n>>> A quantidade de água recomendada para quem pratica atividade física moderada é de ${vol_agua_moderada} mL por dia.`)
    console.log(`\n>>> A quantidade de água recomendada para quem pratica atividade física intensa é de ${vol_agua_intensa} mL por dia.\n`)
}

function obter_numero(descricao){
    const numero = Number(question(descricao))
    return numero
}

function tipo_atv(desc){
    const atv = question(desc)
    return atv
}

function agua_mod(peso){
    let vol_agua_mod = peso * 35
    return vol_agua_mod
}

function agua_int(peso){
    let vol_agua_int = peso * 45
    return vol_agua_int
}

function cabecalho(){
    console.log('####### Crie um programa que receba o peso e a atividade física diária de uma pessoa e calcule a quantidade de água que ela deve beber por dia. A quantidade de água recomendada é de 35 ml por quilo de peso para pessoas com atividade física moderada, e 45 ml por quilo de peso para pessoas com atividade física intensa. O resultado do cálculo deve ser exibido na tela. Nome do arquivo: calculadora_agua.js #######')
    console.log('-------------------')
}

main()