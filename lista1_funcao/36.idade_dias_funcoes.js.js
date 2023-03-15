/*Q36.lista1 - Leia a idade de uma pessoa expressa em anos, 
meses e dias e escreva-a expressa apenas em dias.*/

import { question } from "readline-sync"

function main(){
    cabecalho()

    //Entrada
    const anos = obter_numero('Informe a idade em anos: ')
    const meses = obter_numero('Informe a idade em meses: ')
    const dias = obter_numero('Informe a idade em dias: ')
    
    //Processamento
    const id_anos = idade_anos(anos)
    const id_meses = idade_meses(meses)
    const soma = soma_idade(id_anos, id_meses, dias)
    
    //Saída
    console.log(`\n>>> A idade de ${anos} anos, ${meses} meses e ${dias} dias convertida, corresponde à ${soma} dias.`)

}

function obter_numero(descricao){
    const numero = Number(question(descricao))
    return numero
}

function idade_anos(anos){
    const idade_anos = anos * 365
    return idade_anos
}

function idade_meses(meses){
    const idade_meses = meses * 30
    return idade_meses
}

function soma_idade(idade_anos, idade_meses, dias){
    const soma_idade = idade_anos + idade_meses + dias
    return soma_idade
}

function cabecalho(){
    console.log('####### Leia a idade de uma pessoa expressa em anos, meses e dias e escreva-a expressa apenas em dias. #######')
    console.log('-------------------')
}

main()