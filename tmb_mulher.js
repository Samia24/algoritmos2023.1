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
    const taxa_mulher = tmb_mulher(peso, altura, idade)

    //Saída
    console.log(`\n>>> A taxa metabólica para o indivíduo com:\n \n Idade: ${idade} anos; \n Peso: ${peso} Kg; \n Altura: ${altura} cm; \n Gênero: ${genero};\n \n---> É de ${taxa_mulher} para o gênero Feminino.`)
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

function tmb_mulher(peso, altura, idade){
    let tmb_m = Math.floor(447.6 + (9.2 * peso) + (3.1 * altura) - (4.3 * idade))
    return tmb_m
}

function cabecalho(){
    console.log('####### Cálculo da taxa metabólica basal #######')
    console.log('-------------------')
}

main()