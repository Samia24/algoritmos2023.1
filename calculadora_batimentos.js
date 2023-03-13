/*"Calculadora de Batimentos Cardíacos" 
Crie um programa que receba a idade de uma pessoa e calcule a sua frequência cardíaca máxima, 
que é dada pela fórmula 220 menos a idade. O programa deve então calcular a faixa de batimentos 
cardíacos ideais para atividades físicas moderadas e intensas, que correspondem a 50-70% e 70-85% 
da frequência cardíaca máxima, respectivamente. Os resultados devem ser exibidos na tela. 
Nome do arquivo: calculadora_batimentos.js*/

import { question } from "readline-sync"

function main(){
    cabecalho()

    // Entrada
    const idade = obter_numero('Informe sua idade: ')
    const atv_fisica = tipo_atv('Informe a intensidade da atividade física que você pratica (moderada ou intensa): ')
    
    // Processamento
    const freq_card_mod_min = freq_mod_min(idade)
    const freq_card_mod_max = freq_mod_max(idade)
    const freq_card_int_min = freq_int_min(idade)
    const freq_card_int_max = freq_int_max(idade)

    //Saída
    console.log(`\n>>> A faixa de batimentos cardíacos ideal, de acordo com sua idade de ${idade} anos: \n--> Para quem pratica atividade física moderada é de 50 - 70%, ou seja, de ${freq_card_mod_min} - ${freq_card_mod_max} bpm; \n--> Pra quem pratica atividade física intensa é de 70-85%, ou seja, de ${freq_card_int_min} - ${freq_card_int_max}bpm.\n`)
}

function obter_numero(descricao){
    const numero = Number(question(descricao))
    return numero
}

function tipo_atv(desc){
    const atv = question(desc)
    return atv
}

function freq_mod_min(idade){
    let freq_mod_minima = 220 - idade
    let perc_mod_min = Math.floor((freq_mod_minima * 50) / 100)
    return perc_mod_min
}

function freq_mod_max(idade){
    let freq_mod_maxima = 220 - idade
    let perc_mod_max = Math.floor(freq_mod_maxima * (70 / 100))
    return perc_mod_max
}

function freq_int_min(idade){
    let freq_int_minima = 220 - idade
    let perc_int_min = Math.floor(freq_int_minima * (70 / 100))
    return perc_int_min
}

function freq_int_max(idade){
    let freq_int_maxima = 220 - idade
    let perc_int_max = Math.floor(freq_int_maxima * (85 / 100))
    return perc_int_max
}

function cabecalho(){
    console.log('####### "Calculadora de Batimentos Cardíacos" Crie um programa que receba a idade de uma pessoa e calcule a sua frequência cardíaca máxima, que é dada pela fórmula 220 menos a idade. O programa deve então calcular a faixa de batimentos cardíacos ideais para atividades físicas moderadas e intensas, que correspondem a 50-70% e 70-85% da frequência cardíaca máxima, respectivamente. Os resultados devem ser exibidos na tela. Nome do arquivo: calculadora_batimentos.js #######')
    console.log('-------------------')
}

main()