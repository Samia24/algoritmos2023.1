/*Q8.lista2 - Leia data atual (dia, mês e ano) e data de nascimento (dia, mês e ano) de uma pessoa, calcule e escreva
sua idade exata (em anos).*/

import { question } from "readline-sync"

function main(){
    cabecalho()

    // Entrada
    const dia_atual = obter_numero('Informe o dia atual: ')
    const mes_atual = obter_numero('Informe o mês atual: ')
    const ano_atual = obter_numero('Informe o ano atual: ')
    const dia_nasc = obter_numero('Informe o dia do seu nascimento: ')
    const mes_nasc = obter_numero('Informe o mês do seu nascimento: ')
    const ano_nasc = obter_numero('Informe o ano do seu nascimento: ')
    
    // Processamento
    const idade_anos = idade_atual(dia_atual, mes_atual, ano_atual, dia_nasc, mes_nasc, ano_nasc)
    

    // Saída
    console.log(`\n>>> A sua idade atual é de ${idade_anos} anos.`)
        
}

function obter_numero(descricao){
    const numero = Number(question(descricao))
    return numero
}

function idade_atual(dia_atual, mes_atual, ano_atual, dia_nasc, mes_nasc, ano_nasc){
    let idade = ano_atual - ano_nasc
    if (mes_atual <= mes_nasc && dia_atual <= dia_nasc){
        idade = idade - 1
        return idade
    }else if (mes_atual >= mes_nasc && dia_atual >= dia_nasc){
        return idade
    }else{
        return idade
    }
}
    
function cabecalho(){
    console.log('####### Q8.lista2 - Leia data atual (dia, mês e ano) e data de nascimento (dia, mês e ano) de uma pessoa, calcule e escreva sua idade exata (em anos). #######')
    console.log('-------------------')
}

main()