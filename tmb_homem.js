/* A taxa metabólica basal (TMB) é definida como a quantidade de energia necessária para manter 
as funções vitais do organismo, sendo aferida em condições de jejum, com indivíduo  
descansado em um ambiente tranquilo */

import { question } from "readline-sync"

function main(){
    cabecalho()

    // Entrada
    const idade = obter_idade('Informe sua idade: ')
    const peso = obter_peso('Informe seu peso: ')
    const altura = obter_altura('Informe sua altura: ')
    const genero = tipo_genero('Informe seu gênero (M - masculino ou F - feminino): ')
    
    // Processamento
    const taxa_homem = tmb_homem(peso, altura, idade)
    
    //Saída
    console.log(`\n>>> A taxa metabólica para o indivíduo com:\n \n Idade: ${idade} anos; \n Peso: ${peso} Kg; \n Altura: ${altura} cm; \n Gênero: ${genero}; \n \n ---> É de ${taxa_homem} para o gênero Masculino.`)
}

function obter_idade(descricao){
    const numero = Number(question(descricao))
    return numero
}

function obter_peso(descricao){
    const num = Number(question(descricao))
    return num
}

function obter_altura(descricao){
    const alt = Number(question(descricao))
    return alt
}

function tipo_genero(desc){
    const gen = question(desc)
    return gen
}

function tmb_homem(peso, altura, idade){
    let tmb_h = Math.floor(88.36 + (13.4 * peso) + (4.8 * altura) - (5.7 * idade))
    return tmb_h
}

function cabecalho(){
    console.log('####### Cálculo da taxa metabólica basal #######')
    console.log('-------------------')
}

main()