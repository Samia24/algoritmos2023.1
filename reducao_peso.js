/* Dada a distância da prova (em metros) e a velocidade média do atleta (em km/h), 
calcule o tempo da prova em minutos. */

import { question } from "readline-sync"

function main(){
    cabecalho()

    // Entrada
    const peso_atual = obter_peso('Informe seu peso atual: ')
    const perc_reducao = obter_perc('Informe o percentual de peso desejado a ser reduzido: ')
    const semanas = obter_sem('Informe em quantas semanas pretende reduzir seu peso: ')
    const calorias = obter_cal('Informe quantas kcal dispõe-se a reduzir diariamente: ')

    // Processamento
    const valor_red = peso_red(peso_atual, perc_reducao)
    const quant_dias = qtd_dias(semanas)
    const kcalorias = kcal(valor_red, quant_dias)
    const kcalorias_diarias = kcal_desejada(calorias, kcalorias)

    //Saída
    console.log(`\n>>> Com base nos seus dados de:\n \n Peso: ${peso_atual} kg \n Percentual total que deseja perder: ${perc_reducao} \n Quantidade de semanas para atingir a meta ${semanas} \n Quantidade de calorias que deseja reduzir diariamente: ${calorias}\n \n >> O déficit calórico diário é de ${kcalorias.toFixed(2)} kcal \n >> O gasto diário em atividades deverá ser de ${kcalorias_diarias.toFixed(2)} kcal.\n`)}

function obter_peso(descricao){
    const numero = Number(question(descricao))
    return numero
}

function obter_perc(descricao){
    const num = Number(question(descricao))
    return num
}

function obter_sem(descricao){
    const num = Number(question(descricao))
    return num
}

function obter_cal(descricao){
    const num = Number(question(descricao))
    return num
}

function peso_red(peso_atual, perc_reducao){
    let qtd_red = (peso_atual * perc_reducao) / 100
    return qtd_red
}

function qtd_dias(semanas){
    let dias = semanas * 7
    return dias
}

function kcal(peso_red, qtd_dias){
    let kcal_t = peso_red * 7700
    let kcal_d = kcal_t / qtd_dias
    return kcal_d
}

function kcal_desejada(calorias, kcal){
    let kcal_desej = kcal + calorias
    return kcal_desej
}

function cabecalho(){
    console.log('####### Cálculo do déficit calórico médio diário para alcançar meta de perda de peso #######')
    console.log('-------------------')
}

main()